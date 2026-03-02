# Minimal UX Enhancements — Typography, Navigation, Dark Mode, About Page, Experience Modal

## Summary

Enhance the minimal frontend with larger typography, visible navigation tabs, full dark mode (inverted colors), a dedicated About page (kyswtn.com-style with "On This Page" nav), reformatted Experience and Blog sections matching the reference screenshots, and clickable experience entries that open modals with deep-dive content from CONTENT.md.

## Frontend Tasks

### Typography
- [ ] **app/globals.css** — Increase base font sizes: body `text-base` (16px) → `text-lg` (18px); section headings `text-xl` → `text-2xl`; hero name `text-3xl/4xl` → `text-4xl/5xl`; ensure comfortable reading across all sections
- [ ] **components/minimal/*.tsx** — Apply larger text classes (`text-base`, `text-lg`) to body copy; `text-2xl` to section headings

### Navigation
- [ ] **components/minimal/minimal-nav.tsx** — **Create** — Minimal top nav with tabs: Home, Experience, Projects, Posts, About; anchor links for Home sections; `Link` to `/about` for About; subtle underline/indicator for active section
- [ ] **app/page.tsx** — Add `MinimalNav` above content; ensure section IDs (`#experience`, `#projects`, `#posts`, `#about`) exist for anchor scrolling
- [ ] **app/about/page.tsx** — Add `MinimalNav` with "← Home" link; ensure nav is visible on About page

### Dark Mode
- [ ] **app/globals.css** — Add `.dark` theme: `--background: #1a1a1a` (or similar dark); `--foreground: #faf9f6` (white/ivory text); `--forest-green` → lighter green for dark bg; `--sage`, `--olive` → lighter accents; `--ivory` → dark equivalent for cards
- [ ] **components/theme-provider.tsx** — Ensure `enableSystem` and `defaultTheme` support dark; persist preference
- [ ] **components/minimal/minimal-nav.tsx** — Add theme toggle (sun/moon icon) to switch light/dark
- [ ] **components/minimal/*.tsx** — Use semantic classes (`text-foreground`, `bg-background`, `text-muted-foreground`) so dark mode applies automatically; replace hardcoded `text-forest-green` with `text-foreground` where appropriate, keep accents theme-aware

### About Page
- [ ] **app/about/page.tsx** — **Create** — About page at `/about`; structure: "← Home" link, "On This Page" sidebar/list (1. About, 2. Works, 3. Uses, 4. Connect, 5. Colophon), main content sections
- [ ] **components/minimal/minimal-about-page.tsx** — **Create** — About blurb from CONTENT.md; Works (projects collage/summary); Uses (setup: computer, editor, etc. — add to CONTENT.md or use placeholder); Connect (email, LinkedIn, GitHub, location Toronto UTC-5); Colophon (tech: Next.js, Tailwind, fonts, etc.)
- [ ] **components/minimal/on-this-page-nav.tsx** — **Create** — Sticky "On This Page" component with anchor links to `#about`, `#works`, `#uses`, `#connect`, `#colophon`

### Experience Section (Screenshot Format)
- [ ] **components/minimal/minimal-experience.tsx** — Reformat: each entry as `Role Title — Company (Date)` on one line; larger font for role; secondary color for company/date; vertical spacing between entries; make each entry clickable (button/link) to open `ExperienceModal`
- [ ] **components/minimal/experience-modal.tsx** — **Create** — Radix Dialog; receives `experienceId` (e.g. `experience-borealis`); renders deep-dive content from CONTENT.md (bullets, skills); map IDs: `experience-borealis`, `experience-intact`, `experience-rbc-amplify`, `experience-rbc-client-services`, `experience-rbc-global-equities`

### Blog Section (Screenshot Format)
- [ ] **components/minimal/minimal-blog-posts.tsx** — Reformat: each entry as `Title` + optional tag (e.g. *study notes*) + dashed separator (` - - - - - `) + `Date` right-aligned; single line or wrapped; link to `/blog/[slug]`; match kyswtn.com Posts layout
- [ ] **app/blog/page.tsx** — Apply same format: title, dashed line, date; optional "See /micro for more" or similar footer

### Content / Data
- [ ] **lib/experience-data.ts** — **Create** — Export `experiences` array with `id`, `title`, `company`, `period`, `bullets`, `skills` from CONTENT.md; used by `MinimalExperience` and `ExperienceModal`
- [ ] **.cursor/skills/content_store/CONTENT.md** — Add "Uses" section (optional): Computer, Editor, etc. for About page

## Backend Tasks

*Frontend-only feature — no backend changes.*

## Files to Touch

| File | Change |
|------|--------|
| `app/globals.css` | Dark mode variables; larger base font sizes |
| `app/page.tsx` | Add MinimalNav; section IDs |
| `app/about/page.tsx` | **Create** — About page with On This Page nav |
| `components/minimal/minimal-nav.tsx` | **Create** — Nav tabs + theme toggle |
| `components/minimal/minimal-experience.tsx` | Reformat; wire to ExperienceModal |
| `components/minimal/experience-modal.tsx` | **Create** — Modal with deep-dive content |
| `components/minimal/minimal-blog-posts.tsx` | Reformat: title — dashed — date |
| `components/minimal/minimal-about.tsx` | Link "Learn more" to `/about` |
| `components/minimal/minimal-about-page.tsx` | **Create** — About page content |
| `components/minimal/on-this-page-nav.tsx` | **Create** — On This Page anchor nav |
| `lib/experience-data.ts` | **Create** — Experience data from CONTENT.md |
| `components/theme-provider.tsx` | Ensure dark mode enabled |

## Do NOT Touch

- `app/blog/[slug]/page.tsx` — Blog post rendering
- `content/blog/*.mdx` — Blog content
- `lib/get-blog-posts.ts` — Blog fetching logic

## Acceptance Criteria

- [ ] Text is larger and easier to read (body ≥ 16px, headings ≥ 24px)
- [ ] Navigation tabs visible: Home, Experience, Projects, Posts, About
- [ ] Dark mode: white/light text on dark background; accents inverted; toggle works
- [ ] About page at `/about` with "On This Page" (About, Works, Uses, Connect, Colophon)
- [ ] Experience section: clean list format (Role — Company (Date)); click opens modal
- [ ] Experience modal shows deep-dive bullets and skills from CONTENT.md
- [ ] Blog/Posts section: title, dashed separator, date (right-aligned)
- [ ] "Learn more about me" links to `/about`

---

## Agent Prompt

```
Implement the minimal UX enhancements per `.ai/context/features/minimal-ux-enhancements.md`.
Reference screenshots: kyswtn.com layout (Experience list, Posts with dashed separator, About page with On This Page).
Content source: `.cursor/skills/content_store/CONTENT.md` (experience modal deep-dives, About blurb, Uses).
Dark mode: invert Forest Canopy — dark bg, light text, adjusted accents.
```
