# Khushi Krishnamurthy — Portfolio

A personal site for a first-year Business Analytics student — built to represent
her **accurately**: real skills, one real internship, real education, and an
honest "in progress" story, presented with the same craft as a much bigger site.

Every fact on this site is pulled from one file: `lib/resume-data.ts`. Update
that file and the whole site — including the AI assistant's knowledge — stays
in sync automatically.

---

## Why this isn't the "10-page elite portfolio" originally scoped

The original brief called for 10 pages including a Project Showcase, Live
Dashboard Gallery, and Certifications, each with business-impact metrics and
case studies. There's no real project, dashboard, or certification on file yet
— building those pages would have meant inventing achievements that don't
exist. Instead:

- **Built for real:** Hero, About/Education, Skills, Experience, Achievements,
  AI Assistant, Contact — one flowing page, because the content doesn't (yet)
  support ten separate destinations.
- **Wired up, empty on purpose:** `projects`, `certifications`, and
  `blogPosts` arrays in `lib/resume-data.ts` are ready to go. Add a real entry
  to any of them and the corresponding UI renders automatically (see
  `components/sections/experience.tsx` for the "Coming Soon" state this
  replaces).
- **Not built:** a full MDX blog engine, 3D scenes, and dashboard gallery —
  no content to put in them yet. See **Roadmap** below for exactly what to
  add and when.

This isn't a smaller version of the vision — it's the same craft applied
honestly to where things stand today, with the seams for growth already built.

---

## Design System

**Concept: "Working Ledger."** Not a generic SaaS gradient page — the visual
language borrows directly from Khushi's actual tools (Excel, spreadsheets,
formula bars) rather than a stock "data professional" look.

| Token | Value | Use |
|---|---|---|
| `paper` | `#FAFAF7` | Light background |
| `ink` | `#0B1120` | Dark background / light-mode text |
| `signal` | `#1F6F5C` | Primary accent — growth, progress, links |
| `amber` | `#C98A2C` | Secondary accent — achievements |
| `slate` | `#475569` | Body text (muted) |
| `gridline` | `#E2E8F0` / `#1E293B` | Hairlines, the background grid texture |

- **Display type:** Fraunces (serif, italic accents) — warmth and a point of
  view, used sparingly for headings only.
- **Body type:** Inter — neutral, highly legible at small sizes.
- **Mono type:** IBM Plex Mono — used for anything that reads as "data":
  dates, labels, the formula-bar hero, cell-reference nav (`A1`, `B1`...).

**Signature element:** the hero headline sits inside an animated Excel
formula bar (`=GROWTH(curiosity, effort, time)`) instead of a generic
"Hi, I'm X" banner — on-brand, honest about her stage, and memorable.
The site nav uses spreadsheet cell references (`A1`–`F1`) instead of plain
labels, extending the same idea structurally rather than decoratively.

**Signals of honesty over inflation:** the Skills section shows real
proficiency levels (`Learning` / `Familiar` / `Proficient`) rather than
maxed-out bars — a first-year analytics student who's precise about her own
skill level reads as *more* credible to a hiring manager than one who claims
expertise she doesn't have yet.

---

## Folder Structure

```
app/
  layout.tsx          Root layout, fonts, theme provider, SEO metadata
  page.tsx             Composes all sections into the single-page site
  globals.css          Design tokens, base styles, reduced-motion support
  error.tsx            Error boundary (App Router convention)
  not-found.tsx         404 page ("#REF!" — Excel error, in theme)
  sitemap.ts / robots.ts   SEO
  api/
    chat/route.ts        AI assistant — Vercel AI SDK, streaming, edge runtime
    contact/route.ts      Contact form — Resend

components/
  layout/               Header (nav + theme toggle), Footer
  sections/             Hero, About, Skills, Experience, Achievements, Contact
  chat/                 ChatWidget (AI assistant UI)
  ui/                   ThemeToggle, SectionHeading — small reusable pieces

lib/
  resume-data.ts        SINGLE SOURCE OF TRUTH for every fact on the site
```

Everything reads from `lib/resume-data.ts` — no component hardcodes a fact
about Khushi. This is what makes the AI assistant safe: its system prompt is
generated from the same file (`buildResumeContext()`), so it's structurally
unable to know something the page doesn't also say.

---

## Placeholder Assets Needed

| Asset | Path | Notes |
|---|---|---|
| Open Graph image | `public/og-image.png` | 1200×630, used for social share previews |
| Favicon | `app/icon.png` | 512×512, Next.js auto-serves this |
| Profile photo (optional) | `public/images/profile.jpg` | Not currently used in any component — add to Hero/About if desired |

No stock photos, no fake dashboard screenshots — nothing here should look
like proof of work that doesn't exist.

---

## Setup

```bash
npm install
cp .env.example .env.local   # add your OPENAI_API_KEY and RESEND_API_KEY
npm run dev
```

Open http://localhost:3000.

The AI Assistant section will show an error until `OPENAI_API_KEY` is set —
get one at platform.openai.com. To use Claude or another provider instead,
swap the import in `app/api/chat/route.ts` (the Vercel AI SDK supports
`@ai-sdk/anthropic` the same way).

The Contact form needs a Resend key (resend.com) and a `CONTACT_TO_EMAIL`.
Until then it will show a friendly error — the direct `mailto:` / `tel:`
links above the form always work regardless.

---

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: Next.js (auto-detected) — no config needed.
4. Add environment variables in the Vercel dashboard (Project → Settings →
   Environment Variables): `OPENAI_API_KEY`, `RESEND_API_KEY`,
   `CONTACT_TO_EMAIL`.
5. Deploy. Vercel builds and serves it automatically on every push to `main`.
6. Once you have a real domain, update the `siteUrl` in `app/layout.tsx` and
   the URLs in `app/sitemap.ts` / `app/robots.ts`.

---

## Performance & Accessibility

- Fonts loaded via `next/font` (self-hosted, zero layout shift, no external
  request to Google Fonts at runtime).
- `prefers-reduced-motion` respected globally in `globals.css`.
- Visible focus rings on every interactive element (`:focus-visible`).
- Skip-to-content link for keyboard/screen-reader users.
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav aria-label>`).
- Chat log uses `role="log"` + `aria-live="polite"` for screen readers.
- No client-side data fetching on initial load — everything above the fold
  renders from static data immediately.

Run `npm run build` and check the Lighthouse score in Chrome DevTools before
deploying; this structure is built to clear 90+ but real-world image assets
you add later can affect it — keep them optimized (WebP/AVIF, `next/image`).

---

## Roadmap — add these the moment they're real

1. **First project** → add an entry to `projects` in `lib/resume-data.ts`.
   The moment it's non-empty, build a `ProjectCard` component (business
   problem, stack, real screenshots, GitHub link — skip fields you don't
   have rather than padding them) and the "Coming Soon" slot in
   `components/sections/experience.tsx` is where it plugs in.
2. **Certifications** → same pattern, `certifications` array.
3. **Blog** → once there's a first real post, this is where MDX + Shiki
   (syntax highlighting) earns its place — install `@next/mdx` and
   `shiki`, add an `app/blog/[slug]/page.tsx`. Not worth the complexity
   for zero posts.
4. **Dashboard gallery** → once Power BI/Tableau dashboards exist, embed
   them (published-to-web iframes or static exports) rather than building
   fake interactive demos.
5. **Command palette (⌘K)** → genuinely useful once there are 3+ real
   destinations (blog posts, projects) to jump between; low value over a
   single-page site with 6 anchors.
6. **3D / R3F, tsParticles, Lenis** → nice-to-have polish, best added once
   the content underneath is real — they dress up a story, they shouldn't
   replace one.
