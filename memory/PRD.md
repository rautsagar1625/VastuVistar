# PRD — Vastu Vistar LLP Website

## Scope
Static marketing website for **Vastu Vistar LLP**, a civil construction firm (brief supplied as a
company profile PDF). **Four pages, frontend only — no backend.**

- Theme: blue and white, taken from the client's deck
- Tagline: "Experience Your Growth With Vastu Vistar" · "All under one roof."

Built by re-theming and re-authoring an existing React marketing site (previously Iron Mill
Architectural Products), then stripping it back to four pages and removing every server call.

## Pages
| Route | Page | Contains |
|---|---|---|
| `/` | Home | Hero (video) · stats bar · "about us" intro · marquee · **six services in an Embla carousel** · development process (blue panel, rising circles) · featured project · sectors · three commitments · portfolio preview · testimonials · enquiry form |
| `/about` | About Us | Split hero · story · six-vertical grid · vision & mission · turnkey model + four-stage detail · core values · commitment panel |
| `/portfolio` | Portfolio | Filterable project grid · **case studies open in a modal** (challenge / solution / outcome / gallery) · capabilities · regional reach |
| `/contact` | Contact Us | Enquiry form · WhatsApp & phone CTAs · map embed · full contact details |

`*` redirects to `/`. There are no Services, Turnkey, Careers or project-detail routes any more —
that content was folded into Home, About and the Portfolio modal.

## No backend
- `src/lib/api.js` deleted; nothing calls `fetch`.
- The enquiry form **composes the message and hands it off**: "Send by Email" opens a prefilled
  `mailto:` to Vastuvistarllp@gmail.com; "Send on WhatsApp" opens wa.me with the same text.
  File upload was dropped (mailto can't attach) — the form asks users to attach drawings to the email.
- `.env` no longer holds a backend URL.
- `public/_redirects` (Netlify) and `vercel.json` provide the SPA fallback so deep links resolve.

## Architecture
React 19 + CRA/craco + Tailwind + framer-motion + lenis + lucide + sonner. All content is static in
`frontend/src/data/content.js`. Deploy = `npm run build`, serve `build/` as static files.

## Brand System
Palette rebuilt around the client's logo (amber + charcoal) on 2026-08-25, with the originally
requested blue and white kept as a full part of the system.

- **Amber `#F5A623`** (hover `#D98910`) — primary accent: buttons, large numerals, icon plates,
  rules, highlights on dark panels. **Buttons on amber use ink `#141A24` text** — amber with white
  text fails contrast.
- **Charcoal `#1C2431`** — heading colour and dark surface, matching the logo's lettering
- **Steel blue** — replaced the electric `#0A4DE0` on 2026-08-25 (client: "looking so bad").
  Scale: `brand #1B4A7A` (links, small text on white), `brand-dark #123356`, `brand-deep #0F2742`,
  `brand-light #2E6BA8`. Used as a **gradient**, not a flat fill: `.panel-brand` runs
  `#0F2742 → #1B4A7A → #2E6BA8` under the blueprint grid.
- Neutrals: white, cloud `#F2F5FA`, mist `#D6DDE8`, slate `#48546A`, ink `#141A24`
- Type: Archivo (display 600–900, via `.display-heavy`) + Inter (body). No serif.
- Surfaces: `.panel-navy` (charcoal + grid), `.panel-brand` (steel-blue gradient + grid),
  `.panel-amber`, `.blueprint-light`, `.nav-gradient` / `.nav-gradient-solid` (header pill)
- Radius: cards and panels stay 2–4px; **buttons and the header are fully rounded (pill)**

## Services carousel
`src/components/ServicesCarousel.jsx` — Embla (`embla-carousel-react`, already a dependency; no
autoplay plugin added). 3 cards on desktop / 2 on tablet / 1 on mobile, looped, `duration: 32` for a
slow glide. **Auto-advances every 4.2s**, pausing on hover, focus, drag and when the tab is hidden,
and disabled entirely under `prefers-reduced-motion`. Arrows + dots below.

Cards carry `short` (one line) rather than `description` (a paragraph) plus three features — that is
what keeps all six cards the same height and the section inside one screen. The long descriptions
still live in `content.js`.

The component owns its own section heading. Layout is heading + intro on the left, slide counter and
prev/next arrows on the right — the right column holds controls rather than a floating paragraph,
which is what fixed the dead gap the client flagged. Dots and the "and more besides" line sit below
the track.

## Footer
Compact: `py-14`, four columns (`1.4fr 1fr 1.2fr 1.3fr`), 48px logo, amber column headings, one line
of positioning rather than three paragraphs. Height ~380px.

**Keep the section above it light.** The About page's "Why Clients Stay" block used to be
`panel-navy` directly above the dark footer — same colour, same blueprint grid — so the two merged
into one enormous dark slab. It is now `blueprint-light` with white cards. Any new section placed
last on a page should follow the same rule.

The back-to-top button stacks above the WhatsApp bubble (`bottom-[86px] right-6`); it used to sit
bottom-left, on top of the copyright line. The bottom bar carries `sm:pr-24` to clear both.

## Header
Floating gradient pill — `fixed`, inset from the viewport edges, `rounded-full`, steel-blue gradient
with `backdrop-blur`. Translucent at rest, solid + deeper shadow once scrolled past 40px, and it
shrinks 70px → 62px. Logo (knockout variant) left, links centred with a pill highlight on the active
route, phone + amber pill CTA right. Below `lg` it collapses to a round burger and a full-screen
gradient overlay.

Because the header floats, pages offset content by `pt-[104px]` and the Portfolio filter bar sticks
at `top-[98px]`. If the header height changes, update those two numbers.

## Logo
Real artwork supplied by the client (`V.V.I Logo. Sample PNG.PNG`, 825x506, opaque white
background). Processed into `public/assets/`:

| File | What it is |
|---|---|
| `vv-lockup.png` / `@2x` | **Header/footer logo** — strapline cropped off, transparent background |
| `vv-lockup-light.png` / `@2x` | **Knockout** — charcoal ink flipped to white, amber kept, for dark surfaces |
| `vastu-vistar-logo.png` / `@2x` | Full logo including strapline, transparent |
| `vastu-vistar-logo-original.png` | The untouched file as supplied |
| `apple-touch-icon.png` | Full logo on a white square, 180x180 |

Notes on the processing:
- Transparency came from flood-filling the white surround **from the image borders**, so white
  *inside* the artwork (V outline, building highlights) survives.
- The strapline is illegible below ~120px tall, so it is cropped from the lockup and set as **live
  text** in the footer from `COMPANY.strapline` instead.
- The knockout variant removes the need for a white plate behind the logo on dark panels.
- `favicon.svg` is a drawn V in the brand colours (amber on charcoal) — a crop of the artwork is
  unreadable at 16-32px.

`src/components/Logo.jsx` picks the variant via the `light` prop and serves 1x/2x with `srcSet`.
Rendered at 54px in the header, 50px in the mobile menu, 64px in the footer.

## Placeholders — client must supply before launch
- **P0 — All 9 portfolio projects, the 3 testimonials, the stats bar and the regional counts are
  illustrative placeholders.** They read as real case studies. Replace with actual work.
- **P0 — Office address** is "Pune, Maharashtra, India" (inferred from the phone numbers); the map
  embed points at Pune.
- P1 — A **white/knockout logo variant** for dark surfaces, so the footer and transparent header
  don't need the white plate behind the logo.
### Leadership
Two founder portraits supplied by the client, on the About page (`LEADERSHIP` in `content.js`):
`founder-ramdas-darekar.jpg` (1006x1361 full-length) and `founder-chaitanya-darekar.jpg`
(1254x1254 seated). Originals were named `Mr.Ramdas darekar.jpeg` / `Mr.chaitanya Darekar.jpeg` —
renamed to URL-safe slugs.

They were shot differently, so each entry carries `focus` (CSS `object-position`) and `zoom`
(a CSS `transform: scale`) to land both faces in the same 4:5 frame — no re-encoding. Adjust those
two numbers rather than editing the files.

- **P0 — Confirm the founders' actual designations.** "Founder" / "Co-Founder" and the one-line
  descriptions under each name are my drafts, not supplied by the client.

### Media inventory (all Pexels, free for commercial use, no attribution required)
| File | Source | Used on |
|---|---|---|
| `hero.mp4` (17 MB) | Pexels video 855253 | Home hero — aerial construction site |
| `assets/support-team.mp4` (3.7 MB) | Pexels video 8865777 | Contact hero — support team on headsets |
| `assets/engineers-blueprint.mp4` (2.3 MB) | Pexels video 8964792 | About story — engineers reading drawings |
| `assets/aerial-site.jpg` | Pexels 4170184 | Turnkey card, hero poster, Nashik project |
| `assets/concrete-pour.jpg` | Pexels 6082416 | RCC card + RCC projects |
| `assets/site-team.jpg` | Pexels 8961260 | CC Road card, Talegaon project |
| `assets/highrise.jpg` | Pexels 18162494 | Commercial projects |
| `assets/multistorey.jpg` | Pexels 12843084 | Residential card + project |
| `assets/steel-structure.jpg` | Pexels 14213937 | Fabrication card |

Video posters are real frames captured from each clip (`*-poster.jpg`), so nothing renders blank
while loading. Contact/About videos use `preload="metadata"` / `"none"` to protect first paint.
`public/` totals ~28 MB, almost all of it `hero.mp4`.

- P1 — Photography is stock (Unsplash/Pexels). The inherited `pre-engineered.jpg` was an **elevator
  lobby from the previous client** being used for "PEB Buildings" and as the hero poster — deleted
  2026-08-25. PEB now uses an Unsplash industrial interior; Fabrication uses
  `/assets/steel-structure.jpg` (Pexels #14213937, free for commercial use).
- P1 — **Hero video** is Pexels #855253 (aerial construction site, by Pixabay, CC0 / free for
  commercial use), 1920x1080, 32s, 17 MB. Replaced the inherited `hero.mp4` on 2026-08-25.
  Swap for real Vastu Vistar site footage when available — it is a filename swap
  (`frontend/public/hero.mp4`), no code change. **Worth compressing to ~5 MB** (needs ffmpeg,
  not installed).
  Rejected alternative: a YouTube clip the client picked at random turned out to belong to
  The Robo Collective — not licensed for this use, so it was not downloaded.
- P1 — The Contact hero video shows a **three-person Western call centre**, which implies more scale
  than an LLP of this size has. Swap for footage of the actual team on the phone when available.
- P1 — Unused files from the previous client still sit in `public/` and should be deleted before
  deploying: `assets/logo.png`, `assets/logo-white.png`, `assets/favicon.png`, `assets/elevator-*.jpg`,
  `assets/wall-panels.jpg`, `aluminium.jpg`, `glass.jpg`, `wood.jpg`, `stainlessstell.jpg`, `icons.svg`.
  The stale `build/` output is regenerated on each build.

## Backlog
- P2: Per-page SEO meta/OG tags, gallery lightbox, Marathi/Hindi option
- P2: If real form delivery is wanted later without a server, wire a hosted form service
  (Formspree / Netlify Forms / Web3Forms) into `EnquiryForm.jsx`
