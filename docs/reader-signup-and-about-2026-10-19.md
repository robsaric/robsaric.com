# Reader signup and personal photographs

Rob confirmed Grill Q18–20 on October 19, 2026. Decisions are recorded in CAR-1171 under “Decisions — 2026-10-19 signup and personal photographs.”

1. Use “Build a business that leaves room for a life.” as the signup promise. Explain the writing's relevance to owners and builders and use “Send me the next essay” for the action. Cadence stays occasional.
2. Family photographs appear on About only. The homepage keeps its solo hiking photograph. On About, show the existing family park portrait, outdoor parent-and-child photograph and solo hiking photograph, with plain captions and no new private details.
3. Email is the primary invitation after an essay; LinkedIn is secondary. The homepage form includes a sample-essay link.

This supersedes the earlier exclusion of family photos and LinkedIn-led article ending. The approved hero, reading-first homepage order, building page, article bodies, public URLs and share images are retained.

## Presentation and behavior

Reuse the warm paper, Manrope/Inter typography, blue actions, flat sections and existing focus/motion treatment. The shared Newsletter component keeps the same form fields, honeypot, endpoint and progressive validation. Each placement has unique accessible IDs. Without a configured endpoint, the homepage signup is absent and article endings retain their LinkedIn invitation. No provider, API, analytics or sending behavior changes; no subscriber is created during validation.

About uses an open three-photo sequence with natural image proportions. The family park portrait leads; mobile puts it above the two smaller photographs. Images are optimized through Astro, lazy loaded and carry descriptive alt text. No generated or altered people, carousel, concealed content or new biography claims.

## Asset provenance

- `src/assets/images/rob-family-together.jpg`: existing repository photograph, documented in `docs/COPY.md` as published at Rob's direction on August 29. Caption: Family day at the park.
- `src/assets/images/rob-family.png`: existing repository photograph previously used in the homepage About band, documented in `docs/AUTHORITY-CLAIMS.md`. Keep the 500-pixel source at a modest display size.
- `src/assets/images/rob-hiking.jpg`: existing approved solo outdoor photograph, retained without editing.

The user's latest instruction limits family photography to About. No names, ages, schools or new family stories are added. DESIGN.md remains the retained system reference; this direction note records the scoped composition update. MCP compatibility: not applicable.

## Validation and finish review

The full `pnpm gate` passed with the existing signup route configured: Astro checks, copy lint, production build, 112 redirects, nine notes, 49 share cards and 84 layout checks. Existing deprecation and copy-taste hints remain non-blocking. The first pass caught a missing initialization marker after the shared-form extraction; the marker was restored and the full gate then passed.

Browser review covered the homepage signup, About photographs and dashboard article ending at desktop, 900px and 390px widths. An empty email stayed on the form, displayed an actionable error and returned focus to the field; entering a valid example cleared the error, and keyboard focus on the action remained visible. The sample link opened the intended essay. No email address was submitted. Existing provider registration and email delivery were not retested.

Screenshots are saved in `.impeccable/review/reader-signup/`. Independent source-and-screenshot finish review returned `ship` with no material corrections. The deterministic Impeccable detector remains unavailable in this vendored skill; manual visual and repository checks were used. No dependencies or lockfiles changed.
