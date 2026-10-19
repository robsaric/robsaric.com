# AGENTS.md (robsaric.com)

Rules for any agent working in this repo (Claude Code, Codex, or a person). `CLAUDE.md` is a symlink to this file.

## What this is

Rob Saric's personal site and writing, rebuilt on Astro from the 2009 to 2019 WordPress site. Current product authority: `PRODUCT.md`. Current visual authority: `DESIGN.md` and `src/styles/tokens.css`, following the user-approved 2026-10-18 direction in `docs/personal-site-direction.md`. The old artboards and `docs/DESIGN-SPEC.md` remain historical references, not the current layout contract. Current personal-site copy lives in `src/data/editorial.ts`; `docs/COPY.md` retains the copy law and verified historical facts. Legacy URLs and redirects: `docs/MIGRATION.md`.

Roles on this project: **Claude (Fable) orchestrates and reviews; Codex builds.** The usual read-only handoff uses complete `===FILE=== <path>` … `===END===` blocks for Claude to apply. For the 2026-10-18 redesign, Rob explicitly authorized Codex to build and validate in an isolated checkout; that authorization does not permit publishing. Nobody pushes to a remote or deploys without Rob's explicit approval.

Codex also reviews copy. Every field note goes through it before shipping (`rs-note` step 8, prompt in `.claude/skills/rs-note/codex-review.md`), read-only, latest model, fast tier:

```
(Get-Content .claude/skills/rs-note/codex-review.md -Raw) -replace '<SLUG>', '<the-note-slug>' |
  codex exec --sandbox read-only -m gpt-5.6-sol -c model_reasoning_effort="medium" -c service_tier="priority" -
```

It checks the note against copy law, the identified-is-not-collected boundary, the post gate, and git history, which is how it catches claims about this site that the author remembers wrong. Take its corrections; ignore any rewrite in its own voice.

## Stack

- Astro 7 (static output, Vercel adapter, `trailingSlash: 'always'`), TypeScript strict, pnpm, Node 22.
- Content collections (`src/content.config.ts`): `notes` (field notes) and `archive` (legacy posts). Section data in `src/data/*.ts`. Site config in `src/data/site.ts`.
- Plain CSS with custom properties (`src/styles/tokens.css`, `src/styles/global.css`) and Astro scoped styles. No Tailwind, UI library, icon library, or client framework. Inline SVG and small vanilla scripts handle the menu, working sketch, and optional newsletter validation; legacy components remain for retained routes.
- Fonts through Astro's Fonts API (self-hosted at build): Inter (`--font-inter`) and Manrope (`--font-manrope`). The display token is `--font-display`; the old serif token is a compatibility alias. Mono is the system stack.
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
pnpm generate:og    # render 1200x630 OG cards for published notes (needs a build first; commit the PNGs)
pnpm import:legacy  # pull the 38 WordPress posts into src/content/archive
```

Never run `pnpm build | tail`; piping hides the exit code. Run the command bare.

## Hard rules

1. **Copy law is a gate.** `docs/COPY.md` "Copy law" applies to every string in components, pages, data, content, and meta. No em dashes. No chatbot tone. No hype adjectives or empty verbs. `pnpm lint:copy` must exit 0. Copy lives in `docs/COPY.md`, `src/data/*.ts` (`.mjs` when a Node script must import it, like `og-card.mjs`), or a content entry, never inline in a component or a script (structural strings like "Skip to content" go in `src/data/site.ts` or a `ui.ts`).
2. **The credential is locked.** Short form `50+ clinics, firsthand`. Never "advised", "audited", "by hand", "ex-DSO", "the books". Long forms in `docs/COPY.md` item 7.
3. **Do not invent facts.** Now items, notes, numbers, biography lines marked `[VERIFY]` or `[DRAFT]` stay flagged. Drafts carry `draft: true` and are hidden in ordinary production. Development shows drafts. Explicit `editorial-review` mode includes only the two proposed October 18 essays, carries a preview notice and noindex, and writes to a separate output directory (see README). RSS excludes drafts in every mode. SkillNav remains in development; Togetheren is its intended home. Do not invent outcomes or affiliations, or expose the children's private experiences.
4. **Layout follows the current design system.** Read `DESIGN.md` and the direction contract. Desktop, intermediate widths, and mobile are first-class. Preserve readable writing selections on mobile and the same perspective-before-projects sequence. Use the current tokens; do not restore the superseded green/lime artboard or clinic-only framing. Yellow is an accent or background, never low-contrast text on paper.
5. **Accessibility is not optional.** One `<h1>` per page. Focus visible everywhere. 44px minimum targets on mobile. Buttons for actions, links for navigation, `aria-pressed`/`aria-expanded` where the spec says. `prefers-reduced-motion` respected. Everything works without JS in a degraded but usable state.
6. **Legacy URLs are permanent.** `src/data/legacy-redirects.mjs` is append-only. Archive posts are kept as written (their content is exempt from the copy lint by path).
7. **No secrets, no third-party runtime requests** beyond the newsletter endpoint (env `PUBLIC_NEWSLETTER_ENDPOINT`). No analytics until Rob chooses one.
8. **Simplicity gate.** Before adding a dependency or abstraction: is there a real use today? Can it be added later? If the plain version handles the known cases, ship the plain version.

## File map

```
src/
  assets/images/        rob-portrait.jpg (hero) rob-hiking.jpg; legacy assets retained
  components/           Nav, Footer, Arrow, ReadingList, WorkingSketch, Connect; legacy components retained
  layouts/              BaseLayout.astro (head, skip link, nav, footer), ArticleLayout.astro
  pages/                index, field-notes/{index,[slug]}, principles, about, how-i-counted, archive/{index,[slug]}, contact, 404, rss.xml.ts
  content/notes/        field notes (md/mdx)
  content/archive/      imported legacy posts
  data/                 editorial.ts ui.ts site.ts evidence-steps.ts stages.ts principles.ts filters.ts now.ts legacy-redirects.mjs og-card.mjs
  styles/               tokens.css global.css prose.css
scripts/                lint-copy.mjs import-legacy.mjs check-redirects.mjs check-notes.mjs check-layout.mjs generate-og.mjs og-card-template.mjs lib/{chrome,frontmatter}.mjs
docs/                   personal-site-direction.md AUDIENCE-AND-PUBLISHING.md REDESIGN-HANDOFF.md COPY.md MIGRATION.md; historical design references
```

## Review checklist (before any commit)

- `pnpm gate` exits 0.
- Inspect screenshots at 1440 and 390 against the current direction contract: hierarchy, backgrounds, spacing, readable titles, and complete writing selections.
- Inspect 900 too. Earlier work checked only the outer widths, and 768 to 1150 shipped broken. `pnpm check:layout` fails on overflow but cannot judge intermediate composition.
- Keyboard pass: tab through the whole homepage; every control reachable and visibly focused; Escape closes the mobile menu.
- No horizontal scroll at any width (`pnpm check:layout` covers 320, 390, 768, 900, 1024, 1280, 1440).
- `pnpm lint:copy` exits 0; then read the copy as a small-business owner or builder encountering Rob for the first time. Preserve the exact qualifications when an article discusses clinic results.
