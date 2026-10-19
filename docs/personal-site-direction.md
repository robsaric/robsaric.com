# Approved personal-site direction

Date: 2026-10-18. Supersedes the old Caretrics palette and clinic-only framing for the personal site. User explicitly approved implementation after the grill interview. Decisions appended to CAR-1171.

## Direction contract
The October 19 homepage update below supersedes this initial composition for the homepage. The later mission-page decision extends its warm identity to `/building/`; reading routes retain the established blue reading palette.

- Home mode: Persuade, grounded in personal writing. Writing and articles: Read.
- Thesis: I am on the side of small teams. Care and agency are the reason to build.
- Visual world: vivid blue, cool paper, deep ink, occasional yellow; expressive geometric sans headlines; unbranded existing portrait; generous editorial margins. The personal website should feel like a person with a view, not a product funnel.
- Composition: asymmetric portrait-led introduction, editorial writing selections, a blue interactive process sketch, open ruled project entries and an invitation to keep in touch. Reading pages prioritize title, dates, comfortable prose and a useful next read.
- Signature interaction: a three-part working sketch (listen, make, learn) with a finite hand-drawn path reveal and explicit step buttons. All content is visible without JavaScript. Reduced motion retains every state.
- Motion budget: one brief entrance and deliberate interaction responses. No continuous loops, scroll traps, hidden-content reveals, custom cursors or autoplay video.
- Content boundaries: use original archive text with years visible; keep the clinic evidence exact; unpublished stories remain drafts. The two proposed October 18 essays carry draft: true. Only the explicit editorial-review build includes them, with a visible review notice and noindex; ordinary builds and RSS exclude them. SkillNav is in development. No invented anecdotes, product claims or Unplugged Canada affiliation.
- Audience path: recognize a shared concern, read something worthwhile, follow on LinkedIn or write to Rob. No forced email capture.

## Confirmed refinements, 2026-10-19

Rob approved replacing the homepage opening with “The people doing the work know what needs fixing.” The blue emphasis is “doing the work.” One supporting paragraph connects small-team tools with making room for life and the reason to read. The separate biography tier and portrait caption are removed; About retains the biography.

The writing index uses “Latest writing” and removes its repeated section introduction. Article endings preserve the final sentence, then offer a quiet LinkedIn invitation and one curated next read with a reason for the connection. Recommendations resolve against the visible content collections, including production draft exclusions. An article without a deliberate selection has no generic recommendation list.

The working sketch remains the motion focal point. Shared link arrows move 2–3px in their direction on hover or keyboard focus over 200ms, using the existing ease-out curve; touch does not depend on hover. Reduced motion keeps the arrows stationary. No text entrance, page-load delay, loop, dependency or new script is added.

Visuals should clarify an idea: diagrams and actual artifacts first, with occasional directed AI-assisted illustration. An image is optional. Cause and effect should connect the writing's observations, complications and implications, without forcing “but” into every paragraph or inventing conflict. These decisions are recorded in CAR-1171.

## Assets
Existing repository assets: rob-portrait.jpg (unbranded solo portrait), rob-hiking.jpg (solo outdoors). Source files are preserved; crops use CSS/Astro. Family images excluded from the redesign. No new image generation or external photography.

## Homepage publication direction, 2026-10-19

Rob supplied and approved a pasted homepage critique, then clarified that its scope is the homepage. Apply its preferred direction: “Work is complicated enough. The tools should help.” A small founder/Ottawa identity line and one lead introduce Rob's writing; the closing thought connects better work to more room for life. Keep the audience broad enough for small teams, with Caretrics and Togetheren/SkillNav as concrete examples below.

The homepage is a warm, light personal publication. After reviewing the initial cream/forest interpretation, Rob explicitly chose “Warm background, blue accents, unbranded portrait.” Cream paper, charcoal text, blue actions, and occasional yellow detail apply through the warm theme on this route. Existing self-hosted Manrope and Inter stay. The unbranded blue-blazer portrait uses a modest rounded rectangle on desktop and a small portrait beside the identity line on mobile. No retouched or generated likeness.

The sequence is introduction, “Start here” with three real dated pieces, conditional email signup, current work, and a short personal introduction. Remove the process demonstration and repeated follow panel from this page. Primary action leads to the three selections; secondary action leads to current projects. Navigation says Writing, About, What I’m building. LinkedIn remains in navigation and footer.

Preview selections use the two approved-for-review essays and an existing archive piece. Production uses published archive selections instead of exposing drafts. Do not create the critique's hypothetical article titles or promise a publishing schedule. Email signup exists only with a configured endpoint; no service or submission is added by this task.

First-viewport target: the first writing selection is visible within a 900px-tall desktop and mobile review viewport. Retain subtle link-arrow feedback, visible keyboard focus, and reduced-motion support. No entrance delay or autoplay.

Rob also supplied “The Creed” as a framing reference, explicitly excluding its sample copy. Take its point-of-view-led reader promise, not the clinic-specific headline or an unconfigured email signup as the primary action. Reading remains primary until email publishing is ready.

## Acceptance
Production build; copy checks; existing note, redirect and responsive gates; desktop/mobile visual inspection; keyboard menu and process controls; no-JS and reduced-motion check; actual metadata/share cards; no publication or newsletter submission during verification.

## October 19 mission page

Rob confirmed Grill Q14: a dedicated What I’m building page, led by opportunity, ownership and independence, with a personal why and projects as expressions of the ambition. The confirmed contract is `docs/building-direction.md`.

The homepage and `/building/` now use dark headlines. Blue primarily marks links and actions on these two surfaces. The homepage keeps its approved headline, portrait and writing selections; its full project list becomes a compact invitation to `/building/`. Navigation and the hero work link lead there directly. Legacy `/work` and `/mission` redirects are unchanged; homepage `#work` and `#caretrics` both reach the invitation.

## October 19 homepage copy refinement

Rob supplied a Perplexity critique and screenshot, explicitly saying he disliked its style but preferred some of the copy. Treat it as an editorial reference, not an approved visual replacement. Keep the warm identity, dark headline, rectangular unbranded portrait, current button shapes and writing-first hierarchy. The building page remains unchanged.

Use “Founder · Writer · Ottawa” and the tighter introduction: “I build software for small teams and write about better work, useful AI, and what’s worth keeping human.” Preserve the exact existing promise about making more room for life outside work. Give that promise charcoal text and medium weight while keeping its current scale and spacing.

The existing conditional signup follows the writing selections. Label it “Get my notes” when configured. The local review checkout has no newsletter endpoint or provider credentials; it does not show a working signup. Production configuration is unverified. This refinement adds no publishing cadence, provider setup or subscriber writes.
