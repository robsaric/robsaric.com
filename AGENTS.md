# AGENTS.md (robsaric.com)

Rules for any agent working in this repo (Claude Code, Codex, or a person). `CLAUDE.md` is a symlink to this file.

## What this is

Rob Saric's personal site and field-notes blog, rebuilt on Astro from the 2009 to 2019 WordPress site. Design source: `docs/design-reference/site-directions-turn8.dc.html` (desktop 8a at 1440, mobile 8b at 390). Structural transcription: `docs/DESIGN-SPEC.md`. Every word: `docs/COPY.md`. Legacy URLs and redirects: `docs/MIGRATION.md`.

Roles on this project: **Claude (Fable) orchestrates and reviews; Codex builds.** Codex runs read-only on this machine and emits complete files as `===FILE=== <path>` … `===END===` blocks; Claude applies them, runs the gates, and resumes the Codex thread with results. Nobody pushes to a remote without Rob.

## Stack

- Astro 7 (static output, Vercel adapter, `trailingSlash: 'always'`), TypeScript strict, pnpm, Node 22.
- Content collections (`src/content.config.ts`): `notes` (field notes) and `archive` (legacy posts). Section data in `src/data/*.ts`. Site config in `src/data/site.ts`.
- Plain CSS with custom properties (`src/styles/tokens.css`, `src/styles/global.css`) and Astro scoped styles. No Tailwind, no UI library, no icon library (inline SVG), no client framework. Vanilla `<script>` for the four interactive bits (nav toggle, evidence stepper, stage disclosure, note filters, newsletter validation).
- Fonts through Astro's Fonts API (self-hosted at build): `--font-inter`, `--font-serif`. Mono is the system stack.
- Images through `astro:assets` `<Image>` from `src/assets/images/`.

## Commands

```
pnpm dev            # astro dev (use `astro dev --background` from an agent)
pnpm build          # astro build (also downloads fonts on first run)
pnpm check          # astro check (types + a11y hints)
pnpm lint:copy      # copy law gate: em dashes, banned words, chatbot tone, credential
pnpm check:notes    # note frontmatter + every Now strip href resolves in dist (run after build)
pnpm check:layout   # no horizontal overflow, 7 widths, headless Chrome (run after build)
pnpm gate           # check + lint:copy + build + check-redirects + check-notes + check-layout
pnpm import:legacy  # pull the 38 WordPress posts into src/content/archive
```

Never run `pnpm build | tail`; piping hides the exit code. Run the command bare.

## Hard rules

1. **Copy law is a gate.** `docs/COPY.md` "Copy law" applies to every string in components, pages, data, content, and meta. No em dashes. No chatbot tone. No hype adjectives or empty verbs. `pnpm lint:copy` must exit 0. Copy lives in `docs/COPY.md`, `src/data/*.ts`, or a content entry, never inline in a component (structural strings like "Skip to content" go in `src/data/site.ts` or a `ui.ts`).
2. **The credential is locked.** Short form `50+ clinics, firsthand`. Never "advised", "audited", "by hand", "ex-DSO", "the books". Long forms in `docs/COPY.md` item 7.
3. **Do not invent facts.** Now items, notes, numbers, biography lines marked `[VERIFY]` or `[DRAFT]` stay flagged. Drafts carry `draft: true` and are hidden in production (`SHOW_DRAFTS` in `src/data/now.ts`; collections filter `data.draft` unless `import.meta.env.DEV`).
4. **Layout follows the artboard.** Desktop 8a and mobile 8b are both first-class; mobile is "edited, not stacked" (some elements are dropped or shortened on mobile, per `docs/DESIGN-SPEC.md`). Between them, 768 to 1150 runs the desktop layout with its two-column blocks stacked and its page chrome reduced; it drops nothing. There is no artboard for that range and it does not get its own design. Tokens only; no new colours, radii, or fonts. Lime is never text on a light background.
5. **Accessibility is not optional.** One `<h1>` per page. Focus visible everywhere. 44px minimum targets on mobile. Buttons for actions, links for navigation, `aria-pressed`/`aria-expanded` where the spec says. `prefers-reduced-motion` respected. Everything works without JS in a degraded but usable state.
6. **Legacy URLs are permanent.** `src/data/legacy-redirects.mjs` is append-only. Archive posts are kept as written (their content is exempt from the copy lint by path).
7. **No secrets, no third-party runtime requests** beyond the newsletter endpoint (env `PUBLIC_NEWSLETTER_ENDPOINT`). No analytics until Rob chooses one.
8. **Simplicity gate.** Before adding a dependency or abstraction: is there a real use today? Can it be added later? If the plain version handles the known cases, ship the plain version.

## File map

```
src/
  assets/images/        rob-portrait.jpg rob-family.png rob-sketch.png rob-signature.png
  components/           Nav, Hero, NowStrip, Evidence, Stages, Principles, FieldNotes, NoteCard, About, WriteToMe, Footer, Button, Eyebrow, SectionLabel, Seo
  layouts/              BaseLayout.astro (head, skip link, nav, footer), ArticleLayout.astro
  pages/                index, field-notes/{index,[slug]}, principles, about, archive/{index,[slug]}, contact, 404, rss.xml.ts
  content/notes/        field notes (md/mdx)
  content/archive/      imported legacy posts
  data/                 site.ts evidence-steps.ts stages.ts principles.ts filters.ts now.ts legacy-redirects.mjs
  styles/               tokens.css global.css
scripts/                lint-copy.mjs import-legacy.mjs check-redirects.mjs check-notes.mjs check-layout.mjs
docs/                   DESIGN-SPEC.md COPY.md MIGRATION.md design-reference/
```

## Review checklist (before any commit)

- `pnpm gate` exits 0.
- Screenshots at 1440 and 390 match the artboard section by section (order, backgrounds, spacing rhythm, type sizes, what is dropped on mobile).
- Look at 900 too. 1440 and 390 are the artboards, and for a while they were also the only two widths anything was checked at, which is exactly why 768 to 1150 shipped broken. `pnpm check:layout` now fails on overflow, but it cannot tell you the mid range looks right.
- Keyboard pass: tab through the whole homepage; every control reachable and visibly focused; Escape closes the mobile menu.
- No horizontal scroll at any width (`pnpm check:layout` covers 320, 390, 768, 900, 1024, 1280, 1440).
- `pnpm lint:copy` clean; then read the copy once more as a clinic owner would.
