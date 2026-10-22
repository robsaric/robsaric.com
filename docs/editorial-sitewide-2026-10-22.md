# Shared editorial design and simpler homepage

Status: local review build. Rob approved Q38; publication requires a separate instruction.

## Confirmed direction

1. Extend the reviewed Dia-inspired homepage treatment to Writing, articles, About and Building. Warm paper, Newsreader 400 headings, Inter body copy, charcoal buttons, neutral diagrams and the quiet paper footer become the shared system. Ancillary pages inherit the shell so following a link does not change the visual identity.
2. Keep the current homepage headline and introduction. Make the headline full width and larger, capped at 96px. Replace Read my writing and the secondary Building hero link with a single Start here button linking to #start-here.
3. Replace the large right-side portrait with a small circular avatar to the left of the introduction. Keep the unbranded source photo and the existing hiking image further down. Family photographs remain on About.
4. Q39 supersedes Q38's runner placement: place it immediately to the right of the hero's Start here button, including on phones. Keep pause, quiet interval, offscreen suspension and reduced-motion behavior. Start here still leads to writing. An introduction video is a future possibility; Rob chose to keep the writing destination until an actual clip is ready. No placeholder player or autoplay. Building remains available in navigation and the existing homepage mission section.
5. Preserve article prose, permanent URLs, original dates, newsletter behavior and current factual qualifications. Match the share-card typography to the shared design. No new dependencies, tracking or external runtime services.
6. Verify desktop, intermediate, phone and actual browser widths; keyboard navigation and form error states; the full site gate. Open the homepage, Writing, an article, About and Building for local review.

The mode is Read for Writing and articles; the personal introduction and About explain the person, while Building explains his ambition. This is an extension of the chosen design, not a new visual direction. The supplied Dia specification remains a reference for hierarchy rather than a template to clone.

Q38 supersedes the large-portrait/two-link hero and the homepage-only scope in docs/homepage-editorial-preview-2026-10-22.md. Decisions are recorded in CAR-1171 under the October 22 shared editorial design heading, via the explicitly invoked Grill skill. MCP compatibility: not applicable to static personal-site presentation.

## Implementation and verification

Implemented across shared tokens, global typography/actions, BaseLayout, ArticleLayout, the homepage, Writing, About, Building, shared reading components, newsletter presentation and share-card templates. The shared shell also carries through ancillary routes. DESIGN.md and .impeccable/design.json reflect Q38/Q39. Existing content edits from the preceding homepage/analog-life preview remain in the branch.

Validation on October 22:

- `pnpm build` and `pnpm generate:og` passed; 49 page cards and the standalone review-loop image regenerated without missing fonts, images or overflow.
- `pnpm gate` passed: 25 newsletter tests, Astro check with no errors, copy lint with no errors (12 review warnings), build, 112 redirect checks, three current notes, 49 share cards and 84 responsive layout checks. Astro reports 25 hints, principally the existing content-schema deprecations.
- Browser captures inspected for homepage, Writing, dashboard article, About and Building at 1440, 900 and 390px, plus the homepage at the actual 890px browser width. One H1 per route and no horizontal overflow. All visible photos loaded. The article author rail is intentionally hidden below desktop.
- Checked runner pause and keyboard resume, Start here navigation to the writing section, phone menu open/Escape/focus return, and invalid email handling without submitting a real address. Existing offscreen, hidden-tab and reduced-motion guards remain in the runner source.
- `git diff --check` passed. Documentation tokens, specimens and JSON/YAML parity checked by the documenter.
- Fresh independent finish reviewer returned `ship` for local user review after inspecting all required captures and relevant source. No material findings; browser interactions and gate execution were builder-verified. No source changes followed the review.

Screenshots and the independent finish review are kept under `.impeccable/review/sitewide-editorial/`. This is a local preview at http://127.0.0.1:4328/; nothing in this pass is committed, pushed or published. The video remains deferred until a real clip is available.

## Subsequent homepage simplification

Rob then requested removing the repeated Start here heading and All writing link above the posts. The row and its spacing are removed. The writing section retains its anchor and a visually hidden Writing heading; the first essay now follows the hero directly with a single dividing rule. The prior full-surface review predates this narrow edit. Mobile navigation treatments were initially recommendations; the subsequent approval below authorizes their implementation.

## Approved wordmark, footer and phone menu refinement

Rob approved refining the full-name wordmark, replacing the footer line with “Digital days. Analog nights.” and applying the mobile menu recommendations. This remains a local preview before publication.

- Header, footer and generated share cards now share the Newsreader 400 wordmark: 32px, -0.02em letter spacing, 0.08em word spacing and the retained blue period.
- Mobile navigation has visible Menu/Close labels, a two-stroke icon that becomes an X, larger serif primary destinations, and a separate quieter LinkedIn/contact row. The native disclosure still works without JavaScript; the enhancement supports Escape and link-selection closing. A short landscape viewport can scroll the open panel. Reduced motion removes menu transitions.
- DESIGN.md and the corresponding component specimens describe this approved refinement. No dependencies or newsletter behavior changed.

Validation: build, share-card generation and the full site gate passed. The gate checked 25 newsletter tests, 112 legacy URLs, three notes, 49 unique share cards and 84 route/width combinations. Existing schema/script hints remain; no errors. Browser review and screenshots are recorded under `.impeccable/review/wordmark-menu/`. The earlier independent full-site review predates this refinement; this pass is builder-verified.

Browser verification for the refinement: inspected the homepage at 900px and 1440px, the menu at 390px and 320px, and the footer at desktop and 390px. At 568×320 the menu panel scrolls within the viewport. Enter opens the menu, Tab reaches Writing, Enter navigates and closes it; Escape returns focus to the trigger. The Writing link has the current-page state. Header and footer both compute to Newsreader 32px with 2.56px word spacing. No overflow found. Reduced-motion guards were verified in source. Representative regenerated share cards were inspected. No physical-device test or publication was performed.

## Approved signup theme

Rob approved “Digital days. Analog nights.” for the shared signup heading, with the reader promise about building small companies, making sense of AI and making time for people. Updated the shared editorial copy, matching confirmation-email description, PRODUCT.md and design specimens. The submit label remains “Send me the next essay”; confirmation, unsubscribe and delivery behavior are unchanged.

Validation: `pnpm gate` passed (25 newsletter tests, Astro check with no errors, copy lint with no errors, build, 112 redirects, 49 share cards and 84 layout checks). Existing hints and copy review warnings remain. Checked the actual signup at desktop and 390px; screenshots are in `.impeccable/review/signup-theme/`. No real signup was sent for this copy-only change. Opened a separate local preview at the signup section. No commit, push or publication. Additional character animations remain recommendations only.
