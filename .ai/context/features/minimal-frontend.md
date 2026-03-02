# Minimal Frontend — Single-Page Portfolio

## Summary

Redesign the Rajan Chavada personal website into a minimal, single-page layout inspired by [kyswtn.com](https://kyswtn.com/). Apply the **Forest Canopy** theme (earth tones, FreeSerif/FreeSans typography) for a natural, grounded aesthetic. All content lives on one page: experience first, projects with screenshots, blog posts, "Learn more about me," and social links (GitHub, LinkedIn, Medium).

## Frontend Tasks

- [ ] **app/globals.css** — Add Forest Canopy CSS variables (Forest Green `#2d4a2b`, Sage `#7d8471`, Olive `#a4ac86`, Ivory `#faf9f6`); configure FreeSerif/FreeSans via `@font-face` or Google Fonts fallback
- [ ] **app/layout.tsx** — Swap Geist fonts for FreeSerif (headers) / FreeSans (body); ensure Forest Canopy theme is applied
- [ ] **app/page.tsx** — Replace multi-section layout with single minimal page: Hero (name + tagline + "Perhaps you want to learn more about me?"), Experience, Projects (with screenshots), Blog Posts, Learn More, Social Links (GitHub, LinkedIn, Medium)
- [ ] **components/minimal-hero.tsx** — Create minimal hero: name, role, single CTA/quote; no heavy animations
- [ ] **components/minimal-experience.tsx** — Simplify experience to list format (company, role, period); remove timeline/cards
- [ ] **components/minimal-projects.tsx** — Simple list with project name, description, screenshot thumbnail, GitHub link
- [ ] **components/minimal-blog-posts.tsx** — Simple list: title, date, link to `/blog/[slug]`
- [ ] **components/minimal-about.tsx** — "Learn more about me" section with short bio and link to full about/resume
- [ ] **components/minimal-social.tsx** — Inline links: GitHub, LinkedIn, Medium (no floating bar)
- [ ] **components/navigation.tsx** — Simplify or remove; kyswtn-style uses minimal/no nav
- [ ] **components/footer.tsx** — Minimal footer: "Handcrafted by Rajan Chavada" + social links

## Backend Tasks

*Frontend-only feature — no backend changes.*

## Files to Touch

| File | Change |
|------|--------|
| `app/globals.css` | Add Forest Canopy theme variables |
| `app/layout.tsx` | Update fonts to FreeSerif/FreeSans |
| `app/page.tsx` | Replace with minimal single-page layout |
| `components/minimal-hero.tsx` | **Create** — minimal hero |
| `components/minimal-experience.tsx` | **Create** — simplified experience list |
| `components/minimal-projects.tsx` | **Create** — projects with screenshots |
| `components/minimal-blog-posts.tsx` | **Create** — blog post list (reads from content/blog) |
| `components/minimal-about.tsx` | **Create** — learn more section |
| `components/minimal-social.tsx` | **Create** — GitHub, LinkedIn, Medium links |
| `components/minimal-footer.tsx` | **Create** — minimal footer |

## Do NOT Touch

- `app/blog/page.tsx` — Blog index remains
- `app/blog/[slug]/page.tsx` — Individual blog posts remain
- `content/blog/*.mdx` — Blog content unchanged
- `lib/utils.ts` — Utility functions unchanged

## Acceptance Criteria

- [ ] Single page displays: Hero → Experience → Projects → Blog Posts → Learn More → Social Links
- [ ] Forest Canopy theme applied: Forest Green, Sage, Olive, Ivory; FreeSerif/FreeSans typography
- [ ] Projects show screenshots (thumbnails) and GitHub links
- [ ] Blog posts link to `/blog/[slug]`
- [ ] Social links: GitHub, LinkedIn, Medium (visible, not floating)
- [ ] Layout resembles kyswtn.com: minimal, easy to read, no heavy animations
- [ ] Blog section at `/blog` still works

---

## Agent Prompt

```
Implement the minimal frontend feature per `.ai/context/features/minimal-frontend.md`.
Use Forest Canopy theme from `.cursor/skills/theme_factory/themes/forest-canopy.md`.
Layout reference: https://kyswtn.com/
Content source: `.cursor/skills/content_store/CONTENT.md`
```
