# Vastu Vistar LLP — Website

Marketing site for Vastu Vistar LLP, a civil construction firm: turnkey projects, PEB
buildings, RCC construction, CC roads and land development, residential and commercial
buildings, and fabrication.

Static single-page app — no backend. Enquiries open the visitor's email or WhatsApp client.

## Stack

- React 19 + React Router 7
- Create React App via [CRACO](https://craco.js.org/) (`@` aliases `frontend/src`)
- Tailwind CSS 3 + Radix UI primitives
- Framer Motion + Lenis for motion and smooth scrolling

## Project layout

```
.
├── netlify.toml          # Netlify build, redirects and cache headers
├── design_guidelines.json
└── frontend/
    ├── public/           # index.html, media (hero.mp4, /assets), _redirects
    └── src/
        ├── App.jsx       # routes
        ├── components/
        ├── data/content.js
        └── pages/        # Home, About, Portfolio, Contact
```

## Local development

```bash
cd frontend
npm install
npm start          # http://localhost:3000
```

Production build:

```bash
cd frontend
npm run build      # outputs frontend/build
npx serve -s build # preview the build locally
```

## Deploying to Netlify

`netlify.toml` at the repo root holds the whole configuration, so no manual settings are
needed in the Netlify UI.

| Setting | Value |
| --- | --- |
| Base directory | `frontend` |
| Build command | `npm run build` |
| Publish directory | `frontend/build` |
| Node version | 20 (also pinned in `frontend/.nvmrc`) |

**Continuous deployment (recommended)**

1. In Netlify: *Add new site → Import an existing project → GitHub*.
2. Pick the `VastuVistar` repository. Netlify reads `netlify.toml` and fills in the build
   settings — leave them as detected.
3. Deploy. Every push to `main` triggers a new deploy; pull requests get deploy previews.

**Manual deploy from the CLI**

```bash
npm install -g netlify-cli
cd frontend && npm run build
netlify deploy --prod --dir=build
```

### Notes on the configuration

- `CI = "false"` — CRA promotes build warnings to errors on CI, which would fail the build.
- The `/*  →  /index.html  200` redirect (in `netlify.toml` and `frontend/public/_redirects`)
  lets React Router serve `/about`, `/portfolio` and `/contact` on a hard refresh.
- Hashed files under `/static/*` are cached immutably for a year; media under `/assets/*`
  for a week.

## Enquiry email (Resend)

The contact form POSTs to `/api/enquiry`, a Netlify Function
(`netlify/functions/enquiry.js`) that sends the enquiry on with
[Resend](https://resend.com). The API key lives only in Netlify's environment —
it is never in the frontend bundle, where anyone could read it.

### One-time setup

1. Sign up to Resend **with the company address** (`vastuvistarinfra@gmail.com`).
   Until a company domain is verified, Resend only permits sending *from*
   `onboarding@resend.dev` and *to* the account's own address — which is exactly
   what this form does.
2. Create an API key in the Resend dashboard.
3. In Netlify: *Site configuration → Environment variables* → add
   `RESEND_API_KEY`. Redeploy.

| Variable | Required | Default |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | — |
| `ENQUIRY_TO` | no | `vastuvistarinfra@gmail.com` |
| `ENQUIRY_FROM` | no | `Vastu Vistar Website <onboarding@resend.dev>` |

### When a company domain is verified

Verify the domain in Resend, then set `ENQUIRY_FROM` to an address on it
(e.g. `Vastu Vistar <enquiries@vastuvistar.com>`). No code change. That also
lifts the single-recipient limit, so `ENQUIRY_TO` can hold several addresses.

### Behaviour

- `reply_to` is the enquirer's address, so replying answers the customer directly
- Required fields, email format, a hidden honeypot field and a per-IP rate limit
  are all enforced server-side
- If the send fails the form falls back to opening the visitor's mail client, so
  an enquiry is never simply lost
- The WhatsApp button is unchanged and needs no configuration

### Running the function locally

`npm start` serves the React app only — `/api/enquiry` will 404. To exercise the
function, run `netlify dev` from the repo root with `RESEND_API_KEY` set.

## Environment

`frontend/.env` only holds CRA dev-server settings — no secrets. See
`.env.example`. Secrets belong in Netlify's environment variables, never in the
repository.
