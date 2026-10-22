---
name: Rob Saric
description: A personal editorial site with a view, grounded in care and agency for small teams.
colors:
  blue: "#244fc7"
  blue-deep: "#183996"
  yellow: "#f2cc69"
  paper: "#f4f7fa"
  sky: "#e4edf5"
  ink: "#192b3a"
  ink-muted: "#526473"
  rule: "#cbd6df"
  white: "#ffffff"
  on-dark-78: "#d6e1f5"
  on-dark-28: rgb(244 247 250 / 28%)
  status-critical-text: "#a42124"
  home-paper: "#faf8f2"
  home-sky: "#f0efea"
  home-ink: "#252525"
  home-ink-muted: "#5d5d59"
  home-rule: "#d9d7d1"
  home-on-dark-78: "#dce1e5"
  home-on-dark-28: rgb(250 248 242 / 28%)
  action-ink: "#252525"
  action-hover: "#45433f"
  paper-inset: "#f0efea"
typography:
  display:
    fontFamily: Newsreader, Georgia, serif
    fontSize: clamp(3rem, 6.5vw, 5.75rem)
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.02em
  home-display:
    fontFamily: Newsreader, Georgia, serif
    fontSize: clamp(3.5rem, 7.2vw, 6rem)
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: -0.025em
  home-display-mobile:
    fontFamily: Newsreader, Georgia, serif
    fontSize: clamp(2.6rem, 10.8vw, 4.6rem)
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: -0.025em
  building-display:
    fontFamily: Newsreader, Georgia, serif
    fontSize: clamp(3rem, 5.5vw, 5rem)
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.02em
  building-display-mobile:
    fontFamily: Newsreader, Georgia, serif
    fontSize: clamp(2.25rem, 9vw, 3.5rem)
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.02em
  home-lead:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
  home-identity:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
  headline:
    fontFamily: Newsreader, Georgia, serif
    fontSize: clamp(2rem, 3.8vw, 3.5rem)
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.02em
  title:
    fontFamily: Newsreader, Georgia, serif
    fontSize: 27px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.02em
  article-title:
    fontFamily: Newsreader, Georgia, serif
    fontSize: clamp(2.75rem, 5.2vw, 4.75rem)
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.02em
  lead:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 15px
    fontWeight: 600
  meta:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 13px
    fontWeight: 400
  home-section-title:
    fontFamily: Newsreader, Georgia, serif
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.02em
  home-featured-title:
    fontFamily: Newsreader, Georgia, serif
    fontSize: clamp(34px, 3.5vw, 50px)
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.02em
  home-reading-title:
    fontFamily: Newsreader, Georgia, serif
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.015em
  home-newsletter-title:
    fontFamily: Newsreader, Georgia, serif
    fontSize: clamp(2rem, 3.8vw, 3.5rem)
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.02em
  home-work-title:
    fontFamily: Newsreader, Georgia, serif
    fontSize: clamp(2rem, 3.2vw, 2.75rem)
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.02em
  interface-wordmark:
    fontFamily: Newsreader, Georgia, serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.02em
rounded:
  sm: 3px
  md: 6px
  photo: 4px
  home-photo: 4px
  step: 100px
  building-photo: 12px
  illustration: 10px
  newsletter-inset: 12px
  avatar: 50%
spacing:
  gutter-desktop: clamp(32px, 5vw, 80px)
  gutter-mobile: 24px
  section-pad-desktop: 104px
  section-pad-mobile: 56px
  column-gap: 64px
  stack-gap: 24px
  home-reading-gap: 64px
  home-personal-gap: 80px
  home-introduction-gap: 22px
  home-action-gap: 20px
components:
  action:
    backgroundColor: "{colors.action-ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 14px 23px
  action-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.white}"
  text-link:
    textColor: "{colors.home-ink}"
  navigation:
    backgroundColor: "{colors.home-paper}"
    textColor: "{colors.home-ink}"
    height: 88px
  reading-entry:
    textColor: "{colors.home-ink}"
    typography: "{typography.title}"
    padding: 30px 0
  email-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.home-ink}"
    rounded: "{rounded.md}"
    padding: 12px 14px
    height: 52px
    width: 100%
  sketch-step:
    textColor: "{colors.white}"
    rounded: "{rounded.step}"
    padding: 12px 18px
  sketch-step-selected:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.step}"
    padding: 12px 18px
  home-introduction:
    backgroundColor: "{colors.home-paper}"
    textColor: "{colors.home-ink}"
    typography: "{typography.home-display}"
    padding: 64px clamp(32px, 5vw, 80px) 80px
  home-navigation:
    backgroundColor: "{colors.home-paper}"
    textColor: "{colors.home-ink}"
    height: 88px
  home-identity:
    textColor: "{colors.home-ink-muted}"
    typography: "{typography.home-identity}"
  home-reading-entry:
    textColor: "{colors.home-ink}"
    typography: "{typography.home-reading-title}"
    padding: 28px 0
  home-newsletter:
    backgroundColor: "{colors.paper-inset}"
    textColor: "{colors.home-ink}"
    rounded: "{rounded.newsletter-inset}"
    padding: 48px
  home-personal:
    backgroundColor: "{colors.paper-inset}"
    textColor: "{colors.home-ink}"
    padding: 64px 0
  building-introduction:
    backgroundColor: "{colors.home-paper}"
    textColor: "{colors.home-ink}"
    typography: "{typography.building-display}"
    padding: 64px clamp(32px, 5vw, 80px)
  building-project-entry:
    textColor: "{colors.home-ink}"
    padding: 40px 0
  building-project-status:
    textColor: "{colors.home-ink-muted}"
    typography: "{typography.meta}"
  building-standard:
    backgroundColor: "{colors.home-sky}"
    textColor: "{colors.home-ink}"
    padding: 72px 0
  building-invitation:
    backgroundColor: "{colors.home-paper}"
    textColor: "{colors.home-ink}"
    padding: 80px clamp(32px, 5vw, 80px)
  home-work:
    textColor: "{colors.home-ink}"
    padding: 80px 0 88px
  home-work-evolution:
    backgroundColor: "{colors.white}"
    textColor: "{colors.home-ink}"
    rounded: "{rounded.illustration}"
    padding: 28px 32px
  commitment-sketch:
    textColor: "{colors.home-ink}"
    padding: 28px 0 22px
  home-avatar:
    rounded: "{rounded.avatar}"
    height: 72px
    width: 72px
  home-avatar-mobile:
    rounded: "{rounded.avatar}"
    height: 52px
    width: 52px
  review-loop:
    backgroundColor: "{colors.white}"
    textColor: "{colors.home-ink}"
    rounded: "{rounded.illustration}"
    padding: 28px
  footer:
    backgroundColor: "{colors.home-paper}"
    textColor: "{colors.home-ink}"
    padding: 56px 0 28px
  writing-newsletter:
    backgroundColor: "{colors.paper-inset}"
    textColor: "{colors.home-ink}"
    rounded: "{rounded.newsletter-inset}"
    padding: 48px
  article-newsletter:
    backgroundColor: "{colors.paper-inset}"
    textColor: "{colors.home-ink}"
    rounded: "{rounded.newsletter-inset}"
    padding: 32px
---

# Design System: Rob Saric

## Overview

**Creative North Star: "A person with a view"**

The site is a personal editorial space: direct, generous, and interested in the people doing the work. In the approved Q38 local review, warm paper, Newsreader 400 display headings, Inter text, near-black actions, neutral illustrations, and quiet paper footers become the shared public-site system. Writing, articles, About, Building, and ancillary pages inherit the same visual identity. The shared Rob Saric wordmark uses Newsreader 400 in the header, footer and share cards, with a blue period.

The site adapts editorial hierarchy and paper material from the linked Dia reference. Its composition remains left-aligned and personal. Thin rules and aligned text organize the writing; illustrations support the text without adopting the visual weight of an action. Small blue wordmark, link, focus, and runner details remain, as does the runner's small yellow start mark. Real photographs and existing article content remain part of the site.

This documentation records implementation for LOCAL REVIEW, not publication or final visual acceptance. Q38 extends and supersedes the prior homepage-only scope and large-portrait/two-link hero. Q39 then supersedes Q38's runner placement: the runner sits immediately right of the hero button at every size. The earlier blue/yellow colour pass and Mercury-inspired preview remain superseded. Final visual review and publishing approval are separate.

**Key Characteristics:**
- Warm paper, Newsreader 400 display headings, and quiet paper footers throughout the public site.
- Inter paragraphs, controls, dates, and readable supporting text.
- Shared charcoal actions, neutral Inter illustration labels, and pale newsletter insets.
- A small circular homepage avatar left of the introduction; other real photographs and About family pictures remain.
- Open editorial rows, responsive stacking, visible keyboard focus, and content available without JavaScript.

Source: src/styles/tokens.css, global.css, review-loop.css, prose.css, BaseLayout, the public pages, FeaturedEssay, ReadingList, Newsletter, Connect, Footer, and share-card templates. YAML primitives are normative; .impeccable/design.json supplies specimens, motion, and responsive metadata. Historical home-* color names now describe the shared active warm theme. There is no personalHome body branch or separate homepage neutral palette. Surface-prefixed typography and component names describe observed layouts, not isolated visual systems.

The current contract is [Shared editorial design and simpler homepage](docs/editorial-sitewide-2026-10-22.md). Q38 supersedes the homepage-only scope and hero composition in [the earlier homepage preview](docs/homepage-editorial-preview-2026-10-22.md); Q39 overrides the runner placement within Q38. The rejected [colour pass](docs/homepage-colour-2026-10-22.md) remains historical. The [Dia reference](https://github.com/scroobius-pip/fudge-design-md/blob/main/design-md/diabrowser.com.md) is a third-party analysis, not Dia's official specification. It informs material and hierarchy without copying proprietary type, screenshots, product claims, or the complete page. Product truth remains in PRODUCT.md; article prose, original dates, permanent URLs, and factual qualifications are preserved.

## Colors

Warm paper is the current page baseline. The original cool primitives remain as root fallbacks, while BaseLayout defaults to the warm theme. Reading routes are warm.

### Primary
- **Working Blue, blue:** small brand details, keyboard focus, navigation/title feedback, and existing article links or drawn accents. Ordinary text actions use ink.
- **Deep Blue, blue-deep:** retained root compatibility token; the current shared action hover uses Action Hover.
- **Action Ink, action-ink:** shared action-button fill throughout public pages.
- **Action Hover, action-hover:** shared action hover and focus fill.

### Secondary
- **Sketch Yellow, yellow:** selection, dark-surface focus, retained article/process accents, and the small runner start mark. It does not fill the homepage newsletter, review loop, or headline decoration.

### Neutral
- **Warm Paper, home-paper:** current pages and navigation throughout the site, including the quiet footer.
- **Warm Wash, home-sky:** retained supporting sections, including the Building standard and standalone Connect invitation.
- **Charcoal, home-ink:** shared near-black headings, reading text, and text actions.
- **Warm Quiet Ink, home-ink-muted:** normal warm-theme summaries, metadata, and field borders.
- **Warm Rule, home-rule:** normal warm-theme dividers.
- **Warm Dark-surface Supporting Text and Rule, home-on-dark-78 / home-on-dark-28:** retained compatibility values for dark component variants; the shared public footer is paper.
- **Paper Inset, paper-inset:** shared pale supporting surfaces and newsletter insets. The active sky role resolves to this value.
- **White, white:** button text, email fields, and neutral illustration frames.
- **Cool root fallbacks, paper / sky / ink / ink-muted / rule / on-dark-78 / on-dark-28:** retained implementation defaults beneath the active warm theme, not the appearance of current reading pages.

The functional status-critical-text color belongs to newsletter invalid borders and messages. It is not an editorial accent. The active warm theme owns the shared ink, muted ink, rule, and link roles. Global selection, native focus, and small runner accents remain.

**The Illustration and Action Rule.** Illustrations use neutral frames and readable text. Filled dark controls identify actions; an illustration must never compete with a CTA.

**The Contrast Rule.** Use blue focus on light surfaces and yellow focus on retained blue or ink surfaces. The shared quiet footer uses blue focus on paper.

## Typography

**Display font:** Newsreader, with Georgia and serif fallbacks.
**Wordmark font:** Newsreader, with Georgia and serif fallbacks.
**Body font:** Inter, with system sans-serif fallbacks.

Fonts are self-hosted through Astro's build pipeline and loaded by the shared BaseLayout. The font-display token now resolves to font-editorial, and the serif compatibility alias follows it. Newsreader (400) supplies public display headings. The shared wordmark uses Newsreader at 32px, weight 400, line height 1.1, letter spacing -0.02em and word spacing 0.08em. Its blue period is decorative. The font-interface token remains for source compatibility; body text, controls and diagrams use Inter.

### Hierarchy
- **Homepage display:** the current two-sentence headline spans the available content width, with the second sentence on its own block. Its desktop size caps at (96px). Sentence-case identity metadata remains above it; the single introduction below begins beside the small avatar.
- **Homepage lead:** the home-lead role is capped at (58ch); mobile uses (17px, 1.6).
- **Homepage writing introduction:** the section retains a visually hidden Writing heading. The first essay follows the hero directly; there is no repeated Start here heading or All writing link.
- **Featured title:** the shared featured-essay role sits within (18ch), relaxing to (22ch) with a (32px) size on mobile.
- **Homepage supporting titles:** paired reading entries use Newsreader (28px), with linked text at line height (1.25); the mobile compact selector reduces them to (23px).
- **Homepage work and personal headings:** the home-work-title role is Newsreader (400); the work-story subheading is (30px, 400).
- **Homepage newsletter heading:** Newsreader (400) uses the prominent heading scale, within (23ch); mobile uses clamp(1.9rem, 6.5vw, 2.6rem).
- **Other-page display:** Newsreader 400 now applies throughout. Building uses its mission heading within (22ch); articles use their updated title role with mobile clamp(2.5rem, 9vw, 3.25rem). Writing, About, and ancillary pages keep their own measures and sizes within the shared family.
- **Reading titles:** ordinary rows use (27px), compact rows (24px), and mobile rows (23px).
- **Body:** continuous prose uses (18px, 1.75) within (68ch), reducing to (17px) on mobile. Homepage summaries and supporting text use source-specific (16–18px) sizes.
- **Labels and metadata:** action labels are Inter (15px, 600), navigation (15px, 500), and reading dates (13px) with tabular numerals. Homepage featured dates are (12px). Building project descriptions remain (14px, 1.6), with plain SkillNav status text (13px).

Article subheads use (30px) and (24px), reducing to (28px) and (23px) on mobile. Quotations use Newsreader (30px, 1.4), then (26px), with a neutral left rule. Diagram questions retain Inter (500). Code retains ui-monospace, Menlo, Consolas, monospace.

**The Reading Measure Rule.** Keep continuous prose within 68ch. Express hierarchy through size, weight, space, and real headings. The homepage identity line is ordinary sentence-case metadata, not a global decorative kicker.

## Layout

The shared shell is centered with a maximum width (1440px). Its desktop gutter uses the fluid gutter token, switching to the mobile gutter below (768px). The baseline page supports widths down to (320px).

The homepage hero now occupies the full content width, with (64px above, 80px below) padding and (32px above, 40px below) on mobile. Beneath the headline, an introduction row capped at (780px) places a (72px) circular avatar immediately left of the lead, separated by (22px). Mobile uses a (52px) avatar, (16px) gap, and top alignment. No large right-side portrait column remains.

Q39 places one Start here button and the runner in the same flex row at every width. The gap is (20px), (16px) at intermediate widths, then (12px) on phones. The button does not shrink; the runner uses a (324px) basis with shrink enabled and min-width (0). It stays immediately right of the button rather than wrapping below it. The row follows the introduction by (26px), then (20px) on mobile.

The writing section at #start-here occupies the full content width with a single top rule, a featured essay, then two paired supporting entries. The featured essay has (1fr / 1.1fr) columns, a fluid gap, and padding (32px above, 44px below); at widths up to (1050px), columns become (1fr / 1.15fr) with a (28px) gap. It stacks below (768px) with a (24px) gap. Supporting entries use two equal columns with a (64px) gap, then one column on mobile. The reading section uses (32px above, 56px below), then (28px above, 40px below). There is no runner beside the writing-section heading; its only placement is the hero action row.

The homepage work section has (80px above, 88px below), then (40px above, 48px below) on mobile. Its heading and Caretrics example each use (1fr / 1.2fr) columns with a (64px) gap, reduced to (36px) at intermediate widths and stacked on mobile. The example follows a rule after (48px) margin and (40px) padding, both (28px) on mobile. The personal section retains columns capped at (400px / 600px), an (80px) gap, and (64px) vertical padding; its gap becomes (36px) at intermediate widths, then (24px) with (40px) padding on mobile.

On the Building page, the introduction has vertical padding (64px), reducing to (36px above, 40px below) on mobile. Its lead and anchor links sit in separate columns with a (64px) gap, then stack below (1051px). The personal story and outdoor image use columns capped at (720px / 400px) with an (80px) gap; at intermediate widths the image column narrows to (200px minimum, 28%) with a (36px) gap, then follows the story on mobile. Ruled project entries and the tonal standard section share (1fr / 1.4fr) columns and an (80px) gap, changing to (.8fr / 1.4fr) and (36px) at intermediate widths and a single column on mobile. Project entries have vertical padding (40px), reducing to (28px). The standard section uses (72px), then (40px); the closing invitation uses (80px), then (48px). These measurements describe this surface; its strategy stays in `docs/building-direction.md`.

Mobile stacks the main reading order into one column while preserving the avatar beside the introduction and runner beside the hero button. Reading-route sections retain the existing section padding tokens; homepage sections use their compact values above. Other action groups wrap naturally; the homepage button/runner row stays together. Navigation switches from an inline row to a native disclosure menu, and its height changes from (88px) to (72px).

Writing rows have a date column (154px), a gap (32px), and a flexible text column. Compact and mobile rows place the date above the title. They retain rules and generous vertical breathing room rather than turning into tiles.

The article shell narrows to (1040px), with an author column (160px), a gap (64px), and a reading column capped at (720px). The ending shares this grid, keeping its divider, follow invitation and single next read aligned with the prose. At (1023px) and below the author rail disappears and both the prose and ending center.

**The Open Structure Rule.** Use aligned text and thin rules for repeated writing and project entries. Use tonal sections selectively, as in follow invitations, the homepage personal introduction, and the Building page's standard section.

## Elevation & Depth

The public design is flat. Paper, pale insets, white illustration frames, and rules define grouping without decorative shadows or hover lifts. The shared quiet footer uses the page material on every route. A dark Footer variant remains in source but is not selected by BaseLayout; the unmounted WorkingSketch retains its blue surface.

### Shadow Vocabulary
- **Mobile navigation:** current warm routes use 0 6px 16px rgb(41 52 59 / 7%). The retained cool root fallback is 0 6px 16px rgb(25 43 58 / 7%). The shadow distinguishes the open mobile disclosure without making the rest of the site float.

**The Flat Surface Rule.** Use tonal changes and rules for depth; reserve the existing shadow for the mobile navigation overlay.

## Shapes

Standalone follow invitations and full-width tonal sections have square boundaries; newsletter invitations use the separate rounded insets below. Primary actions and email fields have the modest medium corner token. Building page statuses use plain text without a tag container. Retained process steps are pill-shaped because they form a compact, selectable sequence.

The homepage uses the same unbranded source photo as a circular avatar (50% radius), sized (72px) on desktop and (52px) on mobile, with object position (50% 25%). It sits to the left of the introduction. The homepage outdoor photo retains (4px) corners and a mobile (1.5) crop. Building retains its (12px) photo radius and mobile (1.3) crop. About retains its arch portrait (45% 45% 4px 4px), outdoor photo, and family photographs. Article author portraits remain circular. Article and archive prose images now use (4px) corners.

The shared review-loop and homepage Caretrics evolution figures use (10px) corners and fine borders. The newsletter inset uses (12px), while fields and buttons retain (6px). These framed figures are editorial illustrations, not interactive cards. The Caretrics timeline uses a thin vertical rule, small neutral nodes, and a dashed separator before its future-direction note.

Rules are a single thin stroke (1px). Link arrows are inline SVG strokes, with a diagonal variant created by rotation; they are not text glyphs. The working sketch uses the native SVG curve and arrowhead already in `WorkingSketch.astro`, with no decorative icon library.

## Components

### Primary action and text link

Direct and easy to identify. The shared action now uses action-ink with white text on every public route, including the homepage hero, newsletter, and Building invitation. It retains (6px) corners, a minimum height (52px), internal gap (14px), and padding (14px 23px). Hover and focus use action-hover over (180ms); keyboard focus retains a blue (2px) outline offset by (2px). Mobile hero buttons use (12px) inline padding and (14px) labels.

The lighter text action has a minimum target height (44px) and gap (12px). Shared text actions are ink and underlined at rest, offset (5px). The SVG arrow points forward or diagonally and moves (2–3px) on focus and hover-capable devices over (200ms); reduced motion holds it still. Footer links retain a minimum width and height (44px). The outline action class remains a retained stylesheet variant, not an observed page primitive.

### Navigation

A warm paper header uses the shared Newsreader Rob Saric wordmark and blue period. Navigation reads Writing, About, and What I'm building, followed by LinkedIn. Writing uses /writing/; the old index permanently redirects there, while article addresses remain under /field-notes/. Writing stays active while reading those articles. Building retains its /building/ route and aria-current treatment. Desktop links are ink; hover and active state turn blue and underline. Small blue navigation feedback remains throughout the shared system. The header inherits current warm paper, rule, and navigation-shadow values.

The mobile menu is native `details/summary`, so opening and closing still work without JavaScript. Its trigger has visible Menu and Close labels, an 88px minimum width and a 44px minimum height. Two strokes rotate into an X over 180ms. Writing, About and What I’m building use Newsreader 400 at 32px with 56px minimum targets; LinkedIn and contact sit in a quieter 16px row below a rule. The paper panel scrolls when taller than the viewport below the header. The enhancement updates accessible state, closes on link selection, and supports Escape with focus returned to the trigger. The open panel has the navigation shadow and a brief entrance (200ms). Both transitions stop under reduced motion.

### Homepage introduction, writing, and illustrations

The introduction preserves the identity, headline words, and personal lead while changing scale and composition. A single "Start here" button leads to #start-here, where writing begins. The runner sits immediately to its right, and Building remains available in navigation and the mission section. The small avatar is left of the introduction. An introduction video is only a future possibility: no clip, player, autoplay, or video destination has been delivered.

Start here contains the featured dashboard essay beside its neutral review-loop figure, followed by two compact paired entries. The featured title, summary, reading link, and date remain distinct from the illustration. The white figure has a fine border, neutral numbered circles, a return rule, and four readable text steps. Its third step does not become a yellow control-like row. The shared FeaturedEssay uses the same neutral quiet review-loop on the homepage and Writing. Its labels are Inter rather than display serif.

The homepage Caretrics example pairs Rob's account with a neutral timeline: manual reporting, insights and recommendations, then workflows. A separate future note describes supportive agents with a person reviewing the result. The figure is an editorial summary of changing thinking, not a live product screenshot or measured outcome. Existing #work and #caretrics destinations remain meaningful.

### Start here runner

The runner is a scoped, user-approved motion exception, immediately right of the hero Start here button at every size under Q39. Its sequence lasts (6200ms), followed by (8000ms) of quiet before repeating. A (44px) pause/resume button remains available when motion is enabled. The script suspends work offscreen and while the document is hidden. Reduced motion restores a still pose and hides the unnecessary control. Without JavaScript the initial figure remains visible. This exception does not authorize other continuous animation or a video player.

### Shared quiet footer

The shared quiet footer uses warm paper, the same Rob Saric wordmark and blue period as the header and share cards, ink links, muted supporting text, and a thin rule with visible blue focus. Its approved closing line is “Digital days. Analog nights.” A 156px-wide character scene sits beside it (112px on phones), closing a laptop and opening a book over 4.3 seconds, then resting. The signoff uses an 18px gap, reduced to 12px on phones, where its text is 18px and wraps within 13ch. The footer is still on the custom 404. BaseLayout selects this variant on every public page, including ancillary routes. The dark variant remains source compatibility, not the current public footer.

### Building page project entries and status

Open project rows use a thin top rule, a name and supporting line in the left column, and prose and a text action in the right. Togetheren contains a nested SkillNav section separated by another thin rule, with a Newsreader heading (24px, 400) and plain muted “In development” text beneath it. Parent project names use (32px), reducing to (28px) on mobile. SkillNav's status has no fill, border, corner, or interactive state.

The Building page uses the existing outdoor photograph beside open personal prose, then the ruled projects, a warm-wash standard section, and a paper closing invitation. The close reuses the shared LinkedIn primary action and contact text link, stacked on mobile. These are implemented surface examples; their content order and mission remain owned by `docs/building-direction.md`.

### Working sketch (retained component)

`WorkingSketch.astro` remains available in the repository but is not mounted on the current homepage. Its tokens and specimen document the retained component and must not be used as a reason to reinsert it into the approved homepage sequence.

The blue section presents a three-step process using explicit buttons, a yellow SVG path, and one reading panel after enhancement. Unselected controls are transparent with a translucent light border; hover brightens that border. The selected control is yellow with ink text and uses `aria-pressed`. Focus is yellow with an offset (5px).

JavaScript selects a panel and updates the pressed state. The first visible path reveal runs once (1100ms); a deliberate step change redraws the path (650ms) and introduces the panel (320ms). There is no continuous motion. The panel area reserves minimum height (215px desktop, 235px mobile) to limit movement.

Without JavaScript, all process text remains visible in order and inactive controls stay hidden. Reduced motion suppresses the path and panel animations while preserving the same content and selected states. The sidecar illustrates the real control appearances; the production component owns state changes.

### Follow invitation and conditional email field

Connect's newsletterOnly mode renders the whole homepage invitation only when its endpoint exists. Its current heading is "Digital days. Analog nights." and its button is "Send me the next essay". Confirmation and unsubscribe copy remain visible, followed by a quieter sample-essay link.

The paper outer section uses padding (24px above, 48px below), then (12px above, 28px below) on mobile. The pale bordered inset uses (48px) padding, then (28px 22px). Copy and form use (1.15fr / 1fr) columns with a fluid gap; mobile stacks them with (28px). The split variant is used on the homepage and Writing.

The field is white with a muted border, visible label, (52px) height, and (6px) corners. Invalid state adds a red border, aria-invalid, and a polite readable status message. An empty status is hidden; it no longer reserves (20px). A submitting button is disabled at opacity (0.7) with a wait cursor, and pageshow restores it. Preserve native validation without JavaScript, confirmation, and privacy behavior. Sidecar specimens have no submission action.

Standalone Connect retains a pale supporting section with the shared charcoal action. Writing uses a matching bordered newsletter inset with (48px) padding, then (28px 22px) on mobile. Article endings use Newsletter when configured, with (32px) inset padding, then (26px 22px); otherwise the existing LinkedIn invitation remains. One curated next read follows when selected. All inherit the shared serif headings, and submission, confirmation, privacy, and fallback behavior remain unchanged.

### Drawn editorial accent and article sketch

The homepage no longer applies the shared yellow ink-underline treatment to its heading. That retained utility remains available to the existing article commitment sketch; it is not a reason to restore the rejected homepage accent.

The small-team essay includes a semantic `figure` comparing a prototype with the commitment to look after it. Two open text columns are joined by a blue drawn arrow; below 600px they stack and the arrow points down. Thin top and bottom rules separate the sketch from prose. A 14px caption keeps the example legible, and the diagram remains ordinary selectable text without JavaScript. It contains no measured outcome.

### Article body

The continuous reading surface remains paper with ink text. Links stay visibly underlined. Quotations use a neutral left rule, open space, and Newsreader. Related writing reuses the same reading-entry component. Existing code blocks retain their local styles; article and archive prose images use the shared small (4px) radius. They do not establish a card family.

### Share cards

Share-card titles now use the shared Newsreader display face at (400), with the shared Newsreader Rob Saric wordmark, Inter supporting labels, warm paper, and neutral diagrams. The default site card uses a small circular avatar (64px) and a larger title (94px), matching the new hero direction without reproducing the screen layout. Content-specific photographs, titles, dates, and permanent destinations remain intact.

## Do's and Don'ts

### Do:
- **Do** apply the approved Q38 Newsreader 400, paper, charcoal action, neutral illustration, and quiet-footer system across public pages.
- **Do** preserve the current headline and lead, keep one Start here button to writing, and retain the real photographs and article content.
- **Do** use neutral illustration frames and thin rules so images support the reading and never compete with CTAs.
- **Do** keep continuous reading within 68ch, with clear hierarchy and readable metadata.
- **Do** preserve visible keyboard focus, 44px control targets, source-order mobile stacking, and native form behavior.
- **Do** keep the runner immediately right of the hero button at every size, with pause, offscreen/hidden-tab suspension, and a still reduced-motion alternative.
- **Do** keep all retained process text available without JavaScript and preserve reduced-motion states.
- **Do** label this implementation LOCAL REVIEW and keep final acceptance and publication approval separate.

### Don't:
- **Don't** restore the superseded blue homepage illustration fill, yellow signup panel, or yellow hero underline.
- **Don't** restore the superseded homepage-only branch, large right-side portrait, or second hero action.
- **Don't** restore the removed homepage promise line, three equal reading rows, or retained WorkingSketch component as the current homepage contract.
- **Don't** render the newsletter without its configured endpoint or weaken confirmation, privacy, and validation behavior.
- **Don't** present the Caretrics evolution as a live product screenshot or measured outcome; supportive agents remain future direction.
- **Don't** replace SVG arrows with Unicode glyph icons, add floating-card shadows or hover lifts, or hide content behind entrance effects.
- **Don't** move the runner beside the writing heading, add a placeholder video/player/autoplay, or add other continuous animation, scroll traps, or custom cursors.
- **Don't** treat the third-party Dia analysis, old clinic artboards, or editorial-review notice as product or brand authority.

## Character moments: approved October 22

The footer and custom 404 share the runner's SVG person and colours. The footer is a single transition into reading. The 404 character runs past a left-pointing sign, consults a paper map and heads back; it occupies 300px by 120px, reduced to 264px wide on phones. Recovery links remain available throughout, with Back home primary and Writing secondary.

Both are decorative and hidden from assistive technology. Each plays once when at least 65% visible, pauses offscreen or when the tab is hidden, and stops doing frame work when complete. The 4.3-second footer and 4.7-second wrong turn are under five seconds and do not loop. Reduced motion and no JavaScript show an intentional still pose. On the 404, only the wrong-turn sequence animates. These additions do not change the approved looping homepage runner. See docs/character-moments-and-writing-url-2026-10-22.md.
