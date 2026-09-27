# CLAUDE.md — BFLC Website

Public marketing site for the **Budapest Financial Literacy Club (BFLC / FLC)**, a student-run financial-literacy club for high schoolers. It was founded in May 2024 at Eötvös József Gimnázium (1053 Budapest, Reáltanoda utca 7.) and meets every Thursday, 15:45–16:45, in room 10.

- Production URL: `https://bflc.hu` (set once in [lib/site.ts](lib/site.ts))
- Hosting: Vercel (auto-deploys `main`). Vercel Analytics is mounted in the root layout.
- Repo: `github.com/martonbartok67/BFLC-website`. It is private and proprietary ("All rights reserved"; see README).
- **All user-facing copy is Hungarian** (`<html lang="hu">`, OG locale `hu_HU`). Keep new UI text in Hungarian and match the existing informal "te" register ("Csatlakozz!", "Kövess minket").

---

## Commands

```bash
npm install --legacy-peer-deps   # peer-dep conflicts (React 19 vs older Radix/vaul) need this flag
npm run dev                      # next dev (Turbopack), http://localhost:3000
npm run build                    # next build (Turbopack). All routes are statically prerendered.
npx tsc --noEmit                 # the ONLY real type check (the build skips it, see below)
```

- `npm run lint` is **broken**: ESLint is not installed and there is no eslint config. (The `eslint` config key that used to silence this at build time was removed in Next 16 anyway — see Housekeeping.)
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so **a green build does not mean the code type-checks.** Run `npx tsc --noEmit` after any TS change. As of 2026-09-27 it passes cleanly.
- There are **no tests** of any kind.
- Two lockfiles are committed (`package-lock.json` and `pnpm-lock.yaml`). The README says to use npm, so treat `package-lock.json` as authoritative.
- On first `next dev` after installing, Next.js may print `Generated CLAUDE.md for AI agents` and append a `<!-- BEGIN:nextjs-agent-rules --> ... <!-- END:nextjs-agent-rules -->` block to the bottom of this very file, pointing agents at the version-matched docs bundled in `node_modules/next/dist/docs/`. That's expected (see "AI agent tooling" below) — commit it rather than reverting it.

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js **16.3.6** (Turbopack by default), App Router, React **19.3.0** |
| Styling | Tailwind CSS **v4** (CSS-first config in `app/globals.css`, no `tailwind.config`), `tw-animate-css` |
| UI primitives | A handful of shadcn/ui ("new-york") components in `components/ui/` |
| Animation | `framer-motion` for almost everything; `gsap` only in the mobile `StaggeredMenu` |
| Icons | `lucide-react` |
| Font | Geist Sans, self-hosted via the `geist` package (the CSP relies on no external font CDN) |
| Analytics | `@vercel/analytics` (cookieless) |

`package.json` still carries **~38 unused dependencies** from the original v0.dev/shadcn scaffold: most `@radix-ui/*`, `recharts`, `zod`, `react-hook-form`, `cmdk`, `vaul`, `embla-carousel-react`, `date-fns`, `sonner`, `input-otp`, `react-day-picker`, `next-themes`, and others. Don't assume a dependency is in use just because it's installed. Grep for it first. `vaul@0.9.9` in particular prints a peer-dependency warning against React 19 on install — it's dead weight, not a real compatibility issue, and goes away once it's removed.

### AI agent tooling (Next.js 16.2+)

Since the upgrade to Next.js 16.3.6, the framework itself ships tooling for AI coding agents:
- Version-matched docs are bundled at `node_modules/next/dist/docs/`. Prefer these over training data or a web search for anything Next.js-API-specific — they match the exact installed version.
- The managed block at the bottom of this file (see the Commands section above) is written by `next dev`, not by a person. Don't hand-edit inside `<!-- BEGIN:nextjs-agent-rules -->` / `<!-- END:nextjs-agent-rules -->`; anything outside those markers is preserved across regenerations.
- A dev-server MCP server is available at `/_next/mcp` while `next dev` is running (see `node_modules/next/dist/docs/01-app/02-guides/mcp.mdx` for the current API), exposing routes, server logs, and compilation issues without needing a full build.
- Disable all of this with `agentRules: false` in `next.config.mjs` if it's ever unwanted.

## Directory map

```
app/
  layout.tsx          Root layout: global metadata/OG/icons, skip link, AmbientBackground,
                      CookieConsent, <Analytics/>, JSON-LD <StructuredData/>
  template.tsx        Client page-transition wrapper (fade/slide in on every navigation)
  loading.tsx         -> components/page-skeleton.tsx
  not-found.tsx       Branded 404 page
  page.tsx            Home: Hero, Events, About, Gallery, SocialMedia, Contact sections
  robots.ts, sitemap.ts   Generated /robots.txt and /sitemap.xml. Add new routes to sitemap.ts by hand.
  <route>/layout.tsx  Each route has a tiny layout that ONLY sets alternates.canonical
  <route>/page.tsx    about, schedule, articles, competitions, collaboration, contact,
                      privacy, impresszum
  favicon.ico, icon.png, apple-icon.png   File-convention icons
  globals.css         THE active stylesheet: design tokens, @theme, custom keyframes/utilities
components/
  header.tsx          Fixed header. Desktop nav has a spring-animated sliding underline.
                      Below lg it renders StaggeredMenu.
  staggered-menu.tsx (+ .module.css)   GSAP full-screen mobile menu
  footer.tsx          Dark navy footer with CTA, nav, socials, and legal links
  *-section.tsx       Homepage sections (contact-section and social-media-section are reused on /contact)
  lightbox.tsx        Gallery lightbox: keyboard nav, focus trap, scroll lock
  cookie-consent.tsx  Consent banner and helpers: getCookieConsent(), COOKIE_CONSENT_EVENT
  structured-data.tsx JSON-LD EducationalOrganization + WebSite
  section-label.tsx   Small "── LABEL ──" eyebrow used above almost every heading
  skeleton-image.tsx, page-skeleton.tsx   Loading placeholders
  motion/reveal.tsx       <Reveal>: scroll-triggered fade-up (whileInView). The standard wrapper.
  motion/text-reveal.tsx  Word-by-word headline reveal (mount or scroll)
  motion/tilt-card.tsx    UNUSED
  theme-provider.tsx      UNUSED (no dark mode is wired up)
  ui/                 shadcn: badge, button, card, input, label, textarea, toast, toaster
hooks/use-toast.ts    shadcn toast store (used by the contact form)
lib/
  site.ts             siteUrl + googleMapsUrl constants
  schedule-data.ts    2025/26 weekly session data (typed) + unused getUpcomingEvents()
  utils.ts            cn()
styles/globals.css    DEAD: an older duplicate stylesheet that nothing imports
public/               Images, icons, manifest.json, plus source-text docs (see "Content sources")
```

## Architecture and conventions

**Static site, no backend.** There are no API routes, no database, no env vars, and no middleware. Every page is prerendered at build time.

**The contact form is `mailto:`-based.** `ContactSection.handleSubmit` builds a `mailto:bflc@bflc.hu?...` URL and tries `window.open`. If that fails it copies the link to the clipboard, and as a last resort it sets `location.href`. Nothing is sent server-side. The privacy policy depends on this, so if a real form backend is ever added, you **must** update the CSP (`connect-src`, `form-action`) and the privacy page.

**Page anatomy.** Every page renders its own `<Header />` and `<Footer />`. There is no shared route-group layout for them. Each page also has `<main id="main-content">`, which the skip link in the root layout targets. Pages with a fixed header add `pt-16` to `<main>`.

**Server vs client.** Pages are server components unless they need state or motion hooks. `about` and `schedule` are `"use client"`, as are the header, footer, hero, gallery, contact section, and cookie banner. Because `metadata` can't be exported from a client page, each route's metadata lives in its sibling `layout.tsx`. Follow that pattern.

**Animation conventions.**
- Wrap content blocks in `<Reveal delay={i * 0.08}>` for staggered scroll reveals. Don't use the legacy `animate-fade-in-*` CSS classes. `Reveal` replaced them because they fired on mount even below the fold.
- Every motion component checks `useReducedMotion()` and snaps to its final state when it's set. `globals.css` also has a `prefers-reduced-motion` guardrail. Keep both when you add motion.
- Spring constants are deliberate: header logo 320/28, nav indicator 400/32, cookie banner 260/28.

**Design language.**
- Brand navy: `--primary: oklch(0.19 0.12 264)`, about `#102664`. Deep navy `#0a1a47` is hardcoded for gradients. Lavender accent `#C5B0E1` is hardcoded.
- The signature dark section is `bg-gradient-to-b from-primary to-[#0a1a47] text-primary-foreground` with blurred `bg-white/[0.04]` orbs marked `aria-hidden`. It's used on the gallery, footer, cookie banner, the about editorial block, and the schedule, competitions, and collaboration heroes.
- Inner-page heroes were intentionally made different from each other (commit `ba8a301`). Some are light and some are dark, and some are split while others are left-aligned. Don't collapse them into one template.
- Headings: `text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight` for page h1s. Most headings get `text-balance`.
- Editorial list pattern (competitions, homepage "Mit nyújtunk?"): `border-t border-primary/15` container with `article`s that have `border-b` and `hover:bg-primary/[0.025]`. Prefer this over card grids for new list content.
- Decorative elements get `aria-hidden="true"`. Content images currently use `alt=""` (see issues).

**Security headers** are defined in [next.config.mjs](next.config.mjs) and applied to `/(.*)`. They include a CSP with `frame-src https://calendar.google.com` only, `connect-src 'self'`, `form-action 'self'`, and `font-src 'self'`, plus HSTS in production only. **Any new third-party embed, script, font, or fetch target needs a CSP update**, or the browser will block it silently.

**GDPR and cookies.** The only third-party embed is the Google Calendar iframe on `/schedule`. It renders only when `localStorage["bflc-cookie-consent"] === "accepted"`. The banner writes that key and dispatches the `bflc-cookie-consent-change` window event, and the schedule page listens for both that event and `storage`.

**SEO.** Root metadata includes `metadataBase`, OG, Twitter, and the manifest. Each route sets a canonical. JSON-LD is in `structured-data.tsx`. `sitemap.ts` is a hand-maintained list, so add new routes there.

## Where content lives (how to update the site each term)

Content is hardcoded in components. There is no CMS. The school-year rollover touches **all** of these:

| Content | Location |
|---|---|
| Homepage "Közelgő események" cards | `upcomingEvents` array in [components/events-section.tsx](components/events-section.tsx) |
| Schedule page "Közelgő események" cards | **Separate duplicate** `upcomingEvents` array in [app/schedule/page.tsx](app/schedule/page.tsx) |
| Weekly sessions for 2025/26 (modules → sessions) | [lib/schedule-data.ts](lib/schedule-data.ts). A module with `sessions: []` renders as a break ("Szünet"). |
| 2026/27 section ("Évkezdés / Hamarosan!") | Hardcoded JSX block in [app/schedule/page.tsx](app/schedule/page.tsx), not in the data file |
| Competitions list | Inline `competitions` array in [app/competitions/page.tsx](app/competitions/page.tsx). `events` there is an empty array. |
| Articles | Hand-written JSX in [app/articles/page.tsx](app/articles/page.tsx) (one internal article and one external MCC link) |
| Gallery images | `images` array in [components/gallery-section.tsx](components/gallery-section.tsx) → `public/images/gallery/` |
| Contact details (email `bflc@bflc.hu`, Messenger `https://m.me/cm/AbaU8rQOgYlXAugE/`, Instagram `@budapestflc`, LinkedIn) | **Duplicated** across header.tsx, footer.tsx, hero-section.tsx, social-media-section.tsx, contact-section.tsx, collaboration/page.tsx, about/page.tsx, and structured-data.tsx. Grep before changing any of them. |
| Meeting time/place ("csütörtök 15:45–16:45", "10-es terem") | Duplicated in the schedule page, footer, and contact section |
| Google Calendar ID (`ejgfinance@gmail.com`) | Embed and `.ics` URLs in [app/schedule/page.tsx](app/schedule/page.tsx). This email is intentional (a revert in `6d60a10` restored it), so don't "fix" it. |
| Nav items | Duplicated in header.tsx (`navItems`) and footer.tsx (`navLinks`) |

**Content sources:** `public/FLC-Bemutatkozas-OnePager.txt`, `public/adatvedelmi-tajekoztato.md`, and `public/impresszum.md` are the original source texts. Note that they are **publicly served** from `bflc.hu/<filename>`.

## Git and branches

- Work happens directly on `main`, which auto-deploys through Vercel. As of 2026-09-27 local `main` is in sync with `origin/main` (`a0fc785`).
- Commit style is a short imperative summary, sometimes prefixed (`SEO:`, `GDPR:`, `Security:`, `feat(legal):`, `About:`).
- Remote branches, all stale:
  - `origin/agent/add-bflc-favicon`: 2 unmerged commits that add `public/favicon.svg` and edit icon metadata. **Superseded** by `f1ec1f3` (real FLC-logo favicons) and 5 commits behind main. Safe to delete. Don't merge it.
  - `origin/v0/marcibartok07-2185-*` (two branches): early v0.dev history, fully merged, 35–39 commits behind. Safe to delete.
- Much of the early history came from v0.dev (bot commits), which explains the leftover template dependencies and `styles/globals.css`.

---

## Known issues and TODOs

Verified against the code on 2026-09-27. They're ordered roughly by impact.

### Bugs

1. **Cookie banner reappears on every page load.** [components/cookie-consent.tsx](components/cookie-consent.tsx) sets `visible = true` after 800 ms unconditionally and never checks `getCookieConsent()`. Returning visitors get re-prompted every time.
2. **Visitors can't withdraw or change consent.** GDPR requires withdrawing to be as easy as giving consent. Add a "Süti beállítások" link (footer or privacy page) that clears the key and reopens the banner.
3. **The privacy policy doesn't mention Vercel Analytics.** `/privacy` says the site uses no analytics, but `layout.tsx` mounts `<Analytics />`. It's cookieless, but it still processes visit data. Either disclose it or remove it. Server logs at Vercel, the hosting provider, are also undisclosed.
4. **`prose` classes do nothing.** `@tailwindcss/typography` isn't installed, so `/privacy` and `/impresszum` h2s and paragraphs fall back to Tailwind preflight (unstyled, same-size headings). The same applies to the `prose` wrapper on `/articles`, though that page styles its elements explicitly. Fix by installing the plugin (`@plugin "@tailwindcss/typography";` in globals.css) or by styling the elements directly.
5. **`getUpcomingEvents()` in `lib/schedule-data.ts` can't parse Hungarian months.** `/(\w+)/` has no `u` flag, so `\w` doesn't match accented letters: "Október" → "ber", "Április" → "prilis". Only November and December ever parse. It also assumes every date falls in `currentYear`, which breaks across a school year. It's **currently unused**, so fix it or delete it before relying on it.
6. **The mobile menu does full page reloads.** `StaggeredMenu` uses plain `<a href>` instead of `next/link`, so mobile navigation skips client-side routing. The panel is `role="dialog" aria-modal` but has no focus trap and no body scroll lock.
7. **The `/contact` hero sits under the fixed header.** Its `<main>` lacks the `pt-16` that the other pages use. `/privacy` and `/impresszum` use `py-20`, so they're fine.
8. **The social section's padding looks wrong on desktop.** `social-media-section.tsx` uses `py-20 sm:py-24 lg:py-4`, which collapses to 1rem at lg. It's probably a typo for `lg:py-20`.
9. **Empty badges render.** Event cards on the homepage and schedule page render `<Badge>{event.type}</Badge>` even when `type` is `""`, which leaves an empty pill.
10. **The OG image is mis-declared.** Metadata says `/images/flc-logo-no-text.png` is 1200×630, but it's actually 500×500 with an empty `alt`. Create a proper 1200×630 OG image, or use `app/opengraph-image.tsx`.
11. **`TiltCard` breaks the rules of hooks.** It calls `useTransform` inside JSX, conditionally on `shouldReduceMotion`. This is harmless only because the component is unused.

### Stale content (it's now the 2026/27 school year)

- The homepage and `/schedule` still show **"Vakáció! Találkozunk jövőre!"** as the only upcoming event.
- `/schedule` shows 2026/2027 as "Hamarosan!" and lists last year's 2025/26 sessions in full.
- `/competitions` says "Frissítés a 2026/27-es tanévre hamarosan", and every deadline has passed. The "Események" section renders a heading with an empty list.
- The `/articles` masthead says "Vol. 01 · 2024–25".
- `/about` hero line reads "Alapítva: 2024. május". This is fine, just check that it's still intended.

### SEO and accessibility

- **There are no per-page titles or descriptions.** Every route shows the default "Budapest Financial Literacy Club | BFLC". Add `title` and `description` to each route's `layout.tsx` metadata. The `%s | BFLC` template is already set up.
- **Heading hierarchy on `/schedule`:** the h1 and an h2 both say "Heti alkalmak", and module h3s are nested under a year h3.
- **Gallery and team photos all use `alt=""`** even though they're content, not decoration. Add descriptive Hungarian alt text. The lightbox shows these images with no text alternative at all.
- The footer copyright uses `new Date().getFullYear()` in a client component, so it can hydrate-mismatch around New Year. Minor.

### Housekeeping

- Remove the ~38 unused dependencies, `styles/globals.css`, `components/theme-provider.tsx`, and `components/motion/tilt-card.tsx`. Also remove the unused `.dark` token block and `--sidebar-*`/`--chart-*` tokens if dark mode isn't planned.
- Remove unused `public/` assets: `placeholder*`, the 5 stock-photo JPGs in the `public/` root, `images/schedule-reference.png`, `icon-dark/light-32x32.png`, `icon.svg`, and `icon-512.png`, which duplicates `logo-512x512.png`. Check with grep first.
- `public/adatvedelmi-tajekoztato.md` is publicly served and still contains the template placeholder `[Weboldal neve/szervezet neve]`. Move the source docs out of `public/`.
- Gallery originals are 1–3.4 MB each and the hero and team photos are ~1.4 MB. `next/image` optimizes delivery, but compressing the source files would slim the repo.
- Either install and configure ESLint, or drop the `lint` script. Consider turning off `ignoreBuildErrors` now that `tsc` passes.
- Delete one of the two lockfiles.
- Deduplicate contact and nav constants into `lib/site.ts` (email, Messenger URL, socials, nav items, meeting time). Right now a single change touches 6–8 files.
- Move `upcomingEvents` and `competitions` into `lib/` data files like `schedule-data.ts`, so the homepage and schedule stop duplicating event data.
- Delete the stale remote branches listed above.
- `next build`/`next dev` print a Turbopack workspace-root warning about an unrelated `package-lock.json` above the repo. That's a stray file in whoever's home directory is running the build, not a repo problem — if it gets noisy, pin it with `turbopack: { root: __dirname }` in `next.config.mjs`.

### Next.js 16 upgrade (done 2026-09-27)

Upgraded from 15.2.8 → 16.3.6 via `npx @next/codemod@canary upgrade latest`. Verified: `tsc --noEmit` clean, `next build` (Turbopack) succeeds, all 9 routes serve 200 (404 page serves 404) under `next dev`. Nothing else in the codebase needed changes — no middleware, no dynamic route segments, no `params`/`searchParams` usage, no custom webpack config, no PPR/cache APIs in use. Two things worth knowing:
- The codemod also inserted `export const instant = false` (with a Cache Components migration comment) into every route file. That's a preemptive opt-out for a *future* Cache Components adoption (`cacheComponents: true`, not enabled here) — it was removed from this upgrade since this project isn't adopting Cache Components right now. Re-run the codemod's `cache-components-instant-false` transform, or see `/docs/app/guides/migrating-to-cache-components`, if that adoption happens later.
- `package.json` now pins `react`/`react-dom`/`@types/react`/`@types/react-dom` to exact `19.3.0` (was `^19`) and adds a matching `overrides` block, both added automatically by the codemod to keep the App Router's bundled React canary in sync. Don't loosen these back to `^19` without checking Next's supported React version first.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
