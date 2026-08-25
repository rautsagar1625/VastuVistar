import { useState } from "react";
import { toast } from "sonner";
import { Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/data/content";

const SERVICES_HOME = ["Turnkey Project", "PEB / Industrial", "Civil Works", "Not sure yet"];
const SERVICES_FULL = [
  "Turnkey Projects",
  "PEB Buildings",
  "RCC Construction",
  "CC Road & Land Development",
  "Residential & Commercial Buildings",
  "Fabrication Services",
  "Multiple / Not sure yet",
];
const PROJECT_TYPES = ["Industrial", "Commercial", "Residential", "Infrastructure", "Other"];

const inputCls =
  "w-full bg-transparent border-0 border-b border-mist focus:border-amber focus:ring-0 outline-none py-3 text-[15px] text-ink placeholder:text-slate/40 transition-colors duration-200";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="eyebrow text-slate/60 block mb-1">{label}</span>
      {children}
    </label>
  );
}

/** Turns the form fields into a readable enquiry body for email or WhatsApp. */
function composeMessage(data) {
  const lines = [
    ["Name", data.name],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Project type", data.region],
    ["Service interest", data.service],
    ["Location", data.location],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`);
  if (data.message) lines.push("", "Details:", data.message);
  return lines.join("\n");
}

export default function EnquiryForm({ variant = "home" }) {
  const full = variant === "full";
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const readForm = (form) => Object.fromEntries(new FormData(form).entries());

  /** Last resort if the server send fails: hand the enquiry to the visitor's
   *  own mail client, as the form used to do for everyone. */
  const openMailClient = (data) => {
    const subject = `Project enquiry — ${data.service || "Vastu Vistar"}${data.name ? ` — ${data.name}` : ""}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeMessage(data))}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = readForm(form);
    setSending(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      /* Insist on the function's own JSON acknowledgement. A misrouted POST
         can still answer 200 with an HTML page, which must not read as sent. */
      const body = await res.json().catch(() => ({}));
      if (!res.ok || body.ok !== true) throw new Error(body.error || "Send failed");
      setSent(true);
      form.reset();
      toast.success("Enquiry sent. We'll come back to you within 24 hours.");
    } catch (err) {
      toast.error(
        err.message && err.message !== "Send failed"
          ? err.message
          : "We could not send that. Opening your email app instead.",
      );
      openMailClient(data);
    } finally {
      setSending(false);
    }
  };

  const onWhatsApp = (e) => {
    const form = e.currentTarget.closest("form");
    const data = readForm(form);
    if (!data.name || !data.phone) {
      toast.error("Add your name and phone number first.");
      return;
    }
    const text = `Hello Vastu Vistar, I'd like to discuss a project.\n\n${composeMessage(data)}`;
    window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <form data-testid="enquiry-form" onSubmit={onSubmit} className="space-y-7">
      {/* Bot trap — off-screen and skipped by keyboard and screen readers. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Do not fill this in
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
        <Field label="Full Name *">
          <input required name="name" data-testid="enquiry-name" className={inputCls} placeholder="Your name" />
        </Field>
        <Field label="Company Name">
          <input name="company" data-testid="enquiry-company" className={inputCls} placeholder="Company" />
        </Field>
        <Field label="Email *">
          <input required type="email" name="email" data-testid="enquiry-email" className={inputCls} placeholder="you@company.com" />
        </Field>
        <Field label="Phone *">
          <input required name="phone" data-testid="enquiry-phone" className={inputCls} placeholder="+91 ..." />
        </Field>
        {full && (
          <Field label="Project Type">
            <select name="region" data-testid="enquiry-region" className={inputCls} defaultValue="">
              <option value="">Select…</option>
              {PROJECT_TYPES.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </Field>
        )}
        <Field label="Service Interest">
          <select name="service" data-testid="enquiry-service" className={inputCls} defaultValue="">
            <option value="">Select…</option>
            {(full ? SERVICES_FULL : SERVICES_HOME).map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        {full && (
          <Field label="Site Location">
            <input name="location" data-testid="enquiry-location" className={inputCls} placeholder="City / area" />
          </Field>
        )}
      </div>

      <Field label={full ? "Message / Project Brief" : "Message"}>
        <textarea
          name="message"
          rows={4}
          data-testid="enquiry-message"
          className={`${inputCls} resize-none`}
          placeholder="Built-up area, timeline, scope — anything that helps us answer properly."
        />
      </Field>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={sending}
          data-testid="enquiry-submit"
          className="flex-1 h-[52px] rounded-full bg-amber text-ink font-sans text-sm font-semibold tracking-wide transition-[background-color,transform] duration-200 hover:bg-amber-dark hover:-translate-y-px disabled:opacity-60 flex items-center justify-center gap-2"
        >
          <Mail size={16} strokeWidth={2} />
          {sending ? "Sending…" : sent ? "Sent" : "Send Enquiry"}
        </button>
        <button
          type="button"
          onClick={onWhatsApp}
          data-testid="enquiry-whatsapp"
          className="flex-1 h-[52px] rounded-full border-2 border-[#25D366] text-[#128C4A] font-sans text-sm font-semibold tracking-wide transition-colors duration-200 hover:bg-[#25D366]/10 flex items-center justify-center gap-2"
        >
          <MessageCircle size={17} strokeWidth={2} />
          Send on WhatsApp
        </button>
      </div>
      <p className="text-xs text-slate/60 leading-relaxed">
        Send the enquiry and it reaches our inbox directly — we reply within 24 hours. Prefer
        WhatsApp? That button opens a chat with your details already written out. Have drawings
        or a BOQ? Reply to our email with them attached.
      </p>
    </form>
  );
}
