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

## Environment

`frontend/.env` only holds CRA dev-server settings — no secrets. See `.env.example`.
