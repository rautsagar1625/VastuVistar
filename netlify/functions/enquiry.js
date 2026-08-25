/**
 * Enquiry handler.
 *
 * Receives the contact form, sends it on with Resend, and answers the browser
 * with a real success or failure. The API key never leaves this function —
 * it is read from the RESEND_API_KEY environment variable set in Netlify.
 *
 * Until a company domain is verified with Resend, the account may only send
 * FROM onboarding@resend.dev and TO the address the Resend account is
 * registered under. Both are configurable so nothing has to change here when
 * that domain arrives — set ENQUIRY_FROM and ENQUIRY_TO instead.
 */

const FROM = process.env.ENQUIRY_FROM || "Vastu Vistar Website <onboarding@resend.dev>";
const TO = process.env.ENQUIRY_TO || "Vastuvistarinfra@gmail.com";

/* Best-effort throttle. Serverless instances come and go, so this stops a
   burst from one address rather than a determined attacker; the honeypot and
   Resend's own quota are the other two layers. */
const RATE = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

const FIELDS = [
  ["name", "Name"],
  ["company", "Company"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["region", "Project type"],
  ["service", "Service interest"],
  ["location", "Location"],
];

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

const json = (statusCode, body) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

function throttled(ip) {
  const now = Date.now();
  const hits = (RATE.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  RATE.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Malformed request." });
  }

  /* Hidden field: a human never fills it, most bots do. Answer 200 so the bot
     believes it succeeded and does not retry. */
  if (data.website) return json(200, { ok: true });

  const missing = ["name", "email", "phone"].filter((f) => !String(data[f] || "").trim());
  if (missing.length) {
    return json(400, { error: `Please fill in: ${missing.join(", ")}.` });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
    return json(400, { error: "That email address does not look right." });
  }

  const ip = event.headers["x-nf-client-connection-ip"] || event.headers["client-ip"] || "unknown";
  if (throttled(ip)) {
    return json(429, { error: "Too many enquiries just now. Please try again in a minute." });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return json(500, { error: "Email is not configured yet. Please call or use WhatsApp." });
  }

  const rows = FIELDS.filter(([k]) => String(data[k] || "").trim()).map(([k, label]) => [
    label,
    String(data[k]).trim(),
  ]);
  const message = String(data.message || "").trim();

  const text =
    rows.map(([l, v]) => `${l}: ${v}`).join("\n") +
    (message ? `\n\nDetails:\n${message}` : "");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#111c2e;line-height:1.6">
      <h2 style="margin:0 0 4px">New enquiry from the website</h2>
      <p style="margin:0 0 18px;color:#3e4a5c;font-size:14px">Reply to this email to answer ${esc(data.name)} directly.</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:15px">
        ${rows
          .map(
            ([l, v]) =>
              `<tr><td style="padding:6px 18px 6px 0;color:#5a6980;white-space:nowrap">${esc(l)}</td><td style="padding:6px 0"><strong>${esc(v)}</strong></td></tr>`
          )
          .join("")}
      </table>
      ${
        message
          ? `<p style="margin:20px 0 6px;color:#5a6980;font-size:13px;text-transform:uppercase;letter-spacing:.08em">Details</p>
             <p style="margin:0;white-space:pre-wrap">${esc(message)}</p>`
          : ""
      }
    </div>`;

  const subject = `Project enquiry — ${data.service || "Vastu Vistar"} — ${data.name}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: data.email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend rejected the send:", res.status, detail);
      return json(502, { error: "We could not send that just now. Please call or use WhatsApp." });
    }

    return json(200, { ok: true });
  } catch (err) {
    console.error("Resend request failed:", err);
    return json(502, { error: "We could not send that just now. Please call or use WhatsApp." });
  }
};
