# Implementation map and sequence

## Scope and constraints

Astro 7 / TypeScript strict / pnpm / existing CSS tokens / Vercel. Keep installed versions and lockfile. No new runtime dependencies. The existing website has dynamic subscription routes, so retain its Vercel adapter. This is different from the new static Clinic Operations site.

## Files

| Change | Files | Guidance |
|---|---|---|
| Canonical wording | `docs/COPY.md`, `src/data/copy.ts`, relevant rows of `docs/AUTHORITY-CLAIMS.md` | Mark superseded opening/composition with v2 date; preserve claim approvals. Do not globally replace clinic terms or locked facts. |
| Hero | `src/components/Hero.astro`, `src/data/copy.ts` | Existing primary link is product-oriented; change actual href as well as label. Keep responsive portrait, readable width and mobile secondary link. |
| Project area | new `src/components/CurrentWork.astro`, small data object in `src/data/copy.ts` or `src/data/work.ts` | Use Section/Button and existing tokens. Static two-entry rendering, no client script or generic project CMS. Stable `id="work"`. |
| Composition | `src/pages/index.astro` | Hero, CurrentWork, FieldNotes (limit 3), About, WriteToMe. Remove redundant NowStrip from homepage so it does not repeat notes/work. Preserve components and helpers used elsewhere. |
| Personal sections | `About.astro`, `WriteToMe.astro` | Reuse structural layout, update both desktop/mobile strings. Do not alter POST handling while changing text. |
| About | `src/pages/about.astro`, `COPY.aboutPage` | Existing About page is a separate composition. Do not replace it with the homepage About component. Add present-day intro and two project paragraphs. |
| Notes | `src/pages/field-notes/index.astro`, FieldNotes, COPY | Add intro; optionally support a simple prop to hide filters on homepage only. Keep no-JS visibility and full notes-page filters. |
| Contact | `COPY.pages.contact` | Existing template should need only data changes. |
| Methods and summaries | `COPY.pages.howICounted`, two identified note files | Apply bounded corrections in 01/02; original dates and slugs stay. Do not silently rewrite archive prose. |
| Shared | `src/data/site.ts`, UI, Nav, Footer, `src/data/og-card.mjs`, `public/llms.txt` | Keep navigation small. Rewrite anchor destinations only after identifying their consumers. |

## Execution order

1. Clean branch, baseline checks and route inventory. Capture baseline screenshots if runtime available.
2. Canonical copy plus hero/project area and homepage composition.
3. About, contact and notes intro. Review desktop/mobile parity.
4. Methods and note-summary reconciliation. Retain evidence history, not contradictory present-tense homepage references.
5. Shared metadata, OG generation and llms.
6. Full gates, targeted visual/keyboard pass, summary of remaining questions.

Use separate commits by concern when practical, but deliver one coherent implementation PR. Avoid removing unused files solely for tidiness. Existing artboards remain typography/layout references; their older homepage section order is superseded by this authorized v2 brief. Document the new composition in docs/DESIGN-SPEC.md during implementation.

## Claim handling

Aspirations may be stated as what Rob is building. Features, outcomes, counts and integrations need evidence. Do not promote six artboard drafts. Do not copy the customer testimonial onto Clinic Operations as publication/community proof. A methods statement is Rob's standard, not evidence that every Caretrics workflow already behaves that way.

## Regression risks

- Hero href changes must accompany its label; /#work must exist.
- Removed numbered sections require coherent remaining labels, not 01 then 04 then 05.
- Removing homepage Stages does not mean removing STAGES: note metadata still uses it.
- Removing Evidence does not mean deleting EVIDENCE_STEPS: /how-i-counted/ imports it.
- Footer/header links may point to homepage anchors. Inventory all hash links and preserve or remap them.
- Both desktop/mobile strings must change; meta, OG and llms can otherwise retain the old message.
- Existing `draft` filtering, note OG paths and legacy slash redirects must remain intact.
- Do not add Clinic Operations content to the personal Resend segment or reuse its credentials on a second site.

## Rollback

Keep the implementation reversible as one PR or a small ordered commit series. Revert the implementation commits if needed; no content migration, database operation or redirect deletion is required. The docs package remains the review record.
