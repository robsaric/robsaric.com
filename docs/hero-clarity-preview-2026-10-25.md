# Homepage clarity preview

Local review only. Rob requested a clearer bridge from his LinkedIn banner to his current work, removal of the ambiguous stayed-too-long opening, and a larger stage for the editorial character.

- Preserve the headline: Work is hard enough. More effort isn't always the answer.
- Identify and link Caretrics in the identity line. Lead with the current clinic product, then connect the writing to business, repetitive work and personal life.
- Remove the circular avatar from the introduction. Retain the existing personal section below.
- Use Read my writing for the existing #start-here destination, with What I'm building as a secondary link to /building/.
- Move the existing character out of the button row and into a separate right-hand stage. Stack below the copy at narrower widths. Preserve the existing sprite artwork, fall/dust-off/return sequence, pause control, offscreen suspension and reduced-motion still.
- Night mode uses the existing seated reader in the same stage. Remove the tiny start marker within this hero only.

Implementation: src/data/editorial.ts and src/pages/index.astro. No newsletter, article, footer or public release changes.

Validation: pnpm gate passed, including 210 route/width/appearance checks. Separate visual checks at 1440, 900 and 390; night appearance; reduced motion; mobile menu Escape; runner pause/resume. Evidence lives in the sibling profile-next-2026-10-25 folder. Local preview runs on port 4334 after restarting Astro to clear stale CSS.

Release approval: Rob approved publishing this reviewed homepage update on October 25, 2026. Newsletter and other content drafts remain unpublished.
