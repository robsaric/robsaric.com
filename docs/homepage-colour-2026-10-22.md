# Homepage colour and personality

**Superseded study.** Rob rejected this palette because illustrations competed with actions. The current local preview follows [the Dia-inspired editorial direction](homepage-editorial-preview-2026-10-22.md). The decisions and verification below describe the earlier version, not the current build.

Rob approved the three design recommendations on October 22: stronger colour contrast in selected regions, one real working artifact near Building, and more of his own candour in the homepage writing.

## Local preview

- Keep warm paper, charcoal headings, blue actions and the existing portrait.
- Give the homepage email invitation a charcoal surface, warm white text, a yellow action and light underlined links. Include appropriate focus and error colours.
- Emphasise the decision step in the homepage review-loop illustration with yellow and charcoal text. The surrounding essay stays on paper.
- Preserve the current headline and introduction while the writing interview continues. No signup behaviour, article, social export or other route changes.

The existing assets do not include a suitable real working sketch. The Building artifact remains pending: choose a real, shareable example and Rob's account of the problem, change and observation. Do not invent a sketch or customer result.

Rob's interview answer identifies choosing where to spend effort, recognising personal biases, healthy routines and support, execution and audience, and "analog nights, digital days" as themes. These are source material, not approved replacement homepage copy.

Publishing requires a separate instruction after the local review.

## Verification

- Full pnpm gate passed: 25 newsletter fixtures, Astro check, copy lint, build, 112 redirect checks, three notes, 49 share cards and 84 route/width checks. Existing Astro hints and copy warnings remain.
- Inspected 1440, 900 and 390px screenshots: one H1 and no horizontal overflow at each width.
- Verified invalid email feedback and keyboard focus on the email field, button and sample link. No valid form was submitted and no email was sent.
- Computed contrast: warm white on charcoal 11.99:1; secondary text 9.67:1; charcoal on yellow 8.26:1; error text on charcoal 7.51:1.
- Screenshots and measured layout evidence are in the ignored .impeccable/review/homepage-colour directory.
- The initial sandboxed package-manager call could not reach its registry. The full validation completed outside the sandbox. No package or lockfile changes.

The local preview is http://127.0.0.1:4328/#start-here on codex/homepage-colour. This pass is uncommitted and unpublished; the working example and revised headline remain pending interview material.
# Superseded local colour study

Rob rejected the saturated blue illustration and yellow signup treatment during review. The active preview direction is in `homepage-editorial-preview-2026-10-22.md`. This file records the earlier study only; do not restore it as the design contract.
