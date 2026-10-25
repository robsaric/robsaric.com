# Homepage judgment and Building evidence

Approved by Rob in Grill Q49–51 on October 23, 2026. Local preview; publishing is separate. Replaces the mission-first order in `building-direction.md`.

## Surface contract

Mode: Persuade. Help a reader understand the founder's judgment through a lived lesson and the work it informs. The homepage keeps its current composition, portrait, Start here action and day/night character. Its opening is “Work is hard enough. More effort isn’t always the answer.” The approved paragraph connects persistence, choosing what to build, AI and room for life. The Building invitation names Caretrics as the main focus and Togetheren as the studio, with SkillNav an experiment inside it.

Building opens with a short introduction and Caretrics. An actual demo capture supports a concrete follow-up example; it does not claim a financial outcome. Togetheren follows, with SkillNav visibly nested and labelled in development. A shorter personal why comes after the work. Inherit Newsreader, Inter, warm paper, warm charcoal, quiet rules and existing actions. Logos identify the work; they do not become another hero or CTA. No new motion or dependencies.

## Asset provenance and claim boundaries

- Caretrics day/night logos copied from `caretricsplatform/public/assets/images/Caretrics-final.svg` and `caretrics_logo-light.svg` without redrawing.
- Caretrics desktop/mobile images copied from `caretricsplatform/public/assets/images/action-plan/product-hero-followups.webp` and `billing-claim-followup-mobile.webp`. The public-site capture register records Riverside Physiotherapy (Demo), org 5, synthetic claim DEMO-CLM-1002. Captured October 1–2, 2026. Preserve the image content and label it demo data. No recovered-payment claim.
- Togetheren path extracted from `togetheren/apps/web/components/brand/togetheren-logo-static.tsx`; geometry unchanged, current text colour.
- SkillNav mark and wordmark taken from `skillnav/apps/web/components/app-logo.tsx`, using the site's already self-hosted Manrope. No public-launch or adoption claim. An experiment within Togetheren. October 24 factual correction: its current PRODUCT.md supersedes handoffs as the first job with customer understanding and offer testing; the local copy now follows that direction without naming pilot participants or implying implementation or results.
- Personal background comes from approved About copy and the already-public `enjoy-the-little-things` essay. No new family stories or private details.

## Verification

- `corepack pnpm@10.27.0 build`, then `generate:og / /building/`, then the full `gate` passed. Corepack's default lookup was unavailable in the sandbox; the existing pnpm version ran successfully with approved access. No dependency or lockfile changes.
- Gate: 29 tests, Astro check (0 errors, 25 existing hints), copy lint (0 errors, 12 reviewed existing warnings), production build, 112 redirect cases, 3 notes, 51 unique share cards, and 210 layout cases across 15 routes, 7 widths and both appearances.
- Browser captures at 1440, 900 and 390 pixels cover both appearances. The Caretrics image uses an existing tighter mobile crop; its content remains unmodified. Studio and experiment identification, the shorter personal section, and the homepage invitation were inspected.
- Keyboard traversal reached all homepage controls with visible focus. Escape closes the mobile menu and returns focus to its summary. Existing appearance controls, animations, newsletter flow, URLs and redirects were preserved; no form was submitted.
- Restarted the old local development server after its stale Sharp image processor failed on the newly imported image. The rebuilt assets and restarted preview both load successfully at `http://localhost:4328/`.
- The Impeccable launcher/detector is unavailable. Existing product/design files, source checks, the site gate and browser inspection supply the evidence. Full-page browser screenshots are unsupported here, so review uses viewport and section-anchor captures in `.impeccable/review/home-building-2026-10-23/`.
- A fresh independent finish reviewer returned `ship` for local review, with all five contract sections and no material fixes. It checked all 19 required captures, the additional homepage invitation capture, source, product authority and this brief. The named Impeccable specialist is unavailable, so the fresh reviewer used its documented role as a substitute.
- The independent documentation comparison is complete: no material documentation is missing. The surface brief and PRODUCT appendix record the intentional Q49–51 differences. Existing tokens, DESIGN.md and its sidecar are preserved; unrelated historical drift was left untouched. The substitute documenter recorded its evidence in `.impeccable/review/home-building-2026-10-23/documentation.md`.
- Both local preview tabs are open for review. Publication is not authorized by this local-preview approval.

## Changed files

- Copy and metadata: `src/data/editorial.ts`, `src/data/site.ts`, `src/data/og-card.mjs`.
- Page presentation: `src/pages/index.astro`, `src/pages/building.astro`, `src/components/CompanyMark.astro`.
- Assets: `src/assets/brands/`, `src/assets/images/caretrics-followup-demo.webp`, `src/assets/images/caretrics-followup-demo-mobile.webp`, `public/og-default.png`, `public/og/pages/building.png`.
- Direction record: `PRODUCT.md`, `docs/building-direction.md`, this document. Q49–51 were also appended to CAR-1171 through the invoked Grill workflow.
