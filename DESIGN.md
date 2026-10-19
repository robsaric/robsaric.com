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
  on-dark-28: "rgb(244 247 250 / 28%)"
  status-critical-text: "#a42124"
  home-paper: "#faf8f2"
  home-sky: "#f0f1ec"
  home-ink: "#29343b"
  home-ink-muted: "#61666a"
  home-rule: "#d6d9d9"
  home-on-dark-78: "#dce1e5"
  home-on-dark-28: "rgb(250 248 242 / 28%)"
typography:
  display:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6.5vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  home-display:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 4.45vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  home-display-mobile:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 8.2vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  home-lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.6
  home-promise:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  home-identity:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  headline:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.035em"
  article-title:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  meta:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
rounded:
  sm: "3px"
  md: "6px"
  photo: "4px"
  home-photo: "12px"
  home-portrait-mobile: "8px"
  step: "100px"
spacing:
  gutter-desktop: "clamp(32px, 5vw, 80px)"
  gutter-mobile: "24px"
  section-pad-desktop: "104px"
  section-pad-mobile: "56px"
  column-gap: "64px"
  stack-gap: "24px"
  home-hero-gap: "clamp(40px, 5vw, 72px)"
  home-reading-gap: "48px"
  home-personal-gap: "80px"
components:
  action:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 23px"
  action-hover:
    backgroundColor: "{colors.blue-deep}"
    textColor: "{colors.white}"
  text-link:
    textColor: "{colors.blue}"
  navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "88px"
  reading-entry:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "30px 0"
  status-tag:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "5px 8px"
  email-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
    height: "52px"
    width: "100%"
  sketch-step:
    textColor: "{colors.white}"
    rounded: "{rounded.step}"
    padding: "12px 18px"
  sketch-step-selected:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.step}"
    padding: "12px 18px"
  home-introduction:
    backgroundColor: "{colors.home-paper}"
    textColor: "{colors.home-ink}"
    typography: "{typography.home-display}"
    padding: "48px clamp(32px, 5vw, 80px) 56px"
  home-navigation:
    backgroundColor: "{colors.home-paper}"
    textColor: "{colors.home-ink}"
    height: "88px"
  home-identity:
    textColor: "{colors.home-ink-muted}"
    typography: "{typography.home-identity}"
  home-portrait:
    rounded: "{rounded.home-photo}"
    width: "100%"
  home-portrait-mobile:
    rounded: "{rounded.home-portrait-mobile}"
    width: "66px"
  home-reading-entry:
    textColor: "{colors.home-ink}"
    typography: "{typography.title}"
    padding: "30px 0"
  home-newsletter:
    backgroundColor: "{colors.home-sky}"
    textColor: "{colors.home-ink}"
    padding: "80px 0"
  home-project:
    textColor: "{colors.home-ink}"
    padding: "32px 0"
  home-status-tag:
    backgroundColor: "{colors.home-sky}"
    textColor: "{colors.home-ink}"
    rounded: "{rounded.sm}"
    padding: "5px 8px"
  home-personal:
    backgroundColor: "{colors.home-sky}"
    textColor: "{colors.home-ink}"
    padding: "64px 0"
---

# Design System: Rob Saric

## Overview

**Creative North Star: "A person with a view"**

The site feels like a personal editorial space: direct, generous, and interested in the people doing the work. Large geometric headings give the writing conviction; open margins and quiet reading text keep the experience approachable. Reading routes retain cool paper and deep ink. The approved homepage variant uses warm cream paper, charcoal text, the same vivid blue, and an unbranded rectangular portrait.

Asymmetry establishes the larger compositions, while thin rules and aligned text give the writing structure. Blue connects headings, links, and actions across both palettes. Yellow remains a small accent for selection and dark-surface keyboard feedback. The system follows the approved personal-site direction and its October 19 homepage update. The old clinic-focused artboards remain historical references; the warm homepage does not restore their palette or composition.

**Key Characteristics:**
- Expressive Manrope headings paired with steady Inter reading text.
- Cool reading pages and a warm homepage share vivid blue and occasional yellow.
- Open editorial lists and projects, with selective flat tonal sections.
- An unbranded rectangular homepage portrait; the About portrait retains its arch.
- Responsive stacking, visible keyboard focus, and complete content without JavaScript.

This is a scan of the implemented source: `src/styles/tokens.css`, `global.css`, `prose.css`, the current page layouts, and their components, checked against the 1440px, 900px, and 390px homepage review captures. The YAML primitives are normative; `.impeccable/design.json` adds state examples, motion, and responsive metadata. The `home-*` names document the explicit `:root[data-theme="warm"]` overrides and homepage styles, not new CSS custom properties. Historical compatibility aliases are implementation support, not additional palette families. The editorial-review notice is preview chrome and is excluded from the public component vocabulary.

## Colors

The default palette combines vivid working blue with cool paper and deep ink. The warm homepage keeps blue and yellow unchanged and replaces only its neutral and dark-surface roles.

### Primary
- **Working Blue — `blue`:** headline emphasis, links, primary actions, and focus on light backgrounds in both variants. The retained process component also uses it as a surface.
- **Deep Blue — `blue-deep`:** primary-action hover feedback.

### Secondary
- **Sketch Yellow — `yellow`:** text selection and focus or hover feedback against dark backgrounds. The retained process component uses it for selected steps, its line, and annotations.

### Neutral
- **Cool Paper — `paper`:** reading-route pages, navigation, and light footer text.
- **Sky — `sky`:** follow invitations and supporting tonal surfaces outside the warm variant.
- **Deep Ink — `ink`:** headings and reading text, the footer surface, and text on yellow.
- **Quiet Ink — `ink-muted`:** summaries, dates, supporting text, and field borders.
- **Rule — `rule`:** thin dividers on light surfaces.
- **White — `white`:** primary-action text, process-section text, and the conditional email field.
- **Dark-surface Supporting Text — `on-dark-78`:** subdued copy in the blue process section and ink footer.
- **Dark-surface Rule — `on-dark-28`:** translucent process-control borders and footer dividers.
- **Warm Paper — `home-paper`:** the homepage, its navigation, and its light footer text.
- **Warm Wash — `home-sky`:** the homepage personal section, conditional newsletter, and project-status tag.
- **Charcoal — `home-ink`:** homepage headings and reading text, its footer surface, and text on yellow.
- **Warm Quiet Ink — `home-ink-muted`:** homepage identity, summaries, supporting copy, dates, and field borders.
- **Warm Rule — `home-rule`:** homepage dividers.
- **Warm Dark-surface Supporting Text — `home-on-dark-78`:** homepage footer supporting copy.
- **Warm Dark-surface Rule — `home-on-dark-28`:** homepage footer dividers.

Only the homepage passes `theme="warm"` to `BaseLayout.astro`; the theme applies to its shared header and footer as well as the content. Other routes keep the default palette. Blue actions, white action text and email fields, yellow feedback, and functional invalid-state red are shared.

The functional `status-critical-text` color is reserved for the conditional newsletter field's invalid border and status message; it is not an editorial accent.

**The Contrast Rule.** Use blue focus on light surfaces and yellow focus on blue or ink. Yellow carries ink text when it becomes a control surface.

## Typography

**Display Font:** Manrope, with Inter and system sans-serif fallbacks.
**Body Font:** Inter, with system sans-serif fallbacks.

Both families are self-hosted through Astro's font build. Manrope supplies compact, geometric headings; Inter keeps paragraphs, controls, and dates quiet. The scale is role-based and fluid rather than a single mathematical ratio.

### Hierarchy
- **Display:** the default display token remains available to existing surfaces. The homepage uses the separate `home-display` and `home-display-mobile` roles. Its blue second sentence starts a new block, both sentences wrap naturally, and the headline has no fixed character measure. The small founder/Ottawa identity line sits above it, followed by the lead and a quieter closing thought.
- **Headline:** recurring section headings use the fluid headline role. Balancing is applied to headings, with reading-section headings allowed to wrap naturally.
- **Title:** writing-list titles use the title role; compact entries use a slightly smaller size (24px), then (23px) on mobile.
- **Article title:** the separate article-title role fits long titles without forcing the home's short measure. Mobile articles use `clamp(2.1rem, 7.7vw, 3rem)`.
- **Lead:** reading-page introductions retain the lead size with a relaxed line height (1.65). The homepage uses `home-lead` within 58ch and `home-promise` within 56ch; mobile sizes are (17px) and (16px), respectively, both at a line height (1.6).
- **Body:** long-form prose uses the body role with a maximum measure (68ch). Mobile prose becomes (17px); summaries and interface descriptions range from (16px) to (18px).
- **Label:** actions use the label role; navigation uses the same size at a lighter weight (500).
- **Meta:** dates, photo captions, and supporting statuses use the meta role. Reading dates use tabular numerals. A project-status tag is smaller (12px).

Article subheads are (26px) and (20px), with a line height (1.25); their mobile sizes are (24px) and (19px). Article quotations use Manrope (24px, 1.4), reducing to (22px) on mobile. The code font is the existing `ui-monospace, Menlo, Consolas, monospace` stack and remains confined to code and retained archive formatting.

**The Reading Measure Rule.** Keep continuous prose within 68ch. Express hierarchy through size, weight, space, and real headings. The approved founder/Ottawa identity line is a homepage exception to the avoidance of decorative eyebrow text; it is ordinary sentence-case metadata, not a new global kicker style.

## Layout

The shared shell is centered with a maximum width (1440px). Its desktop gutter uses the fluid gutter token, switching to the mobile gutter below (768px). The baseline page supports widths down to (320px).

The homepage introduction uses a flexible text column and a portrait column (220px to 320px), with the fluid home hero gap. Its vertical padding is (48px above, 56px below). At intermediate widths from (768px) to (1050px), the portrait column becomes (200px minimum, 25%), the gap becomes (32px), and the portrait aligns toward the top with (38px) padding. On mobile the introduction uses (24px above, 32px below); the portrait is a small image beside the identity line, which reserves (72px) height.

The homepage reading section has a label rail (180px) and flexible list separated by the home reading gap, with vertical padding (40px above, 64px below). Intermediate widths use a (140px) label rail and (32px) gap and stack each reading date above its title. Mobile puts the heading and all-writing link on one row, then the list, with section padding (28px above, 40px below) and a (20px) gap.

Homepage work headings and ruled project entries use (1fr / 1.2fr) columns and a (64px) gap, reduced to (36px) at intermediate widths and stacked on mobile. The personal section uses columns capped at (400px / 600px), with the home personal gap, then (36px) at intermediate widths and (24px) on mobile. Its vertical padding is (64px), reducing to (40px). These are scoped compositions, not a requirement that every section split in two.

Mobile stacks the source reading order into one column, with the homepage's small portrait positioned beside its identity line. Reading-route sections retain the existing section padding tokens; homepage sections use their compact values above. Action groups wrap naturally. Navigation switches from an inline row to a native disclosure menu, and its height changes from (88px) to (72px).

Writing rows have a date column (154px), a gap (32px), and a flexible text column. Compact and mobile rows place the date above the title. They retain rules and generous vertical breathing room rather than turning into tiles.

The article shell narrows to (1040px), with an author column (160px), a gap (64px), and a reading column capped at (720px). The ending shares this grid, keeping its divider, follow invitation and single next read aligned with the prose. At (1023px) and below the author rail disappears and both the prose and ending center.

**The Open Structure Rule.** Use aligned text and thin rules for repeated writing and project entries. Use tonal sections selectively for an invitation or the homepage personal introduction.

## Elevation & Depth

The public design is flat at rest. Paper, wash, and ink establish sections through tone, while rules establish grouping. Project entries, images, and actions do not acquire decorative shadows or hover lifts. The retained process component uses a flat blue surface when mounted; it is not on the current homepage.

### Shadow Vocabulary
- **Mobile navigation:** the reusable shadow is `0 6px 16px rgb(25 43 58 / 7%)` on default routes and `0 6px 16px rgb(41 52 59 / 7%)` on the warm homepage. It distinguishes the open mobile disclosure from the page below, without making the rest of the site float.

**The Flat Surface Rule.** Use tonal changes and rules for depth; reserve the existing shadow for the mobile navigation overlay.

## Shapes

Follow invitations and homepage tonal sections have square boundaries. Primary actions and email fields have the modest medium corner token; the project-status tag uses the small corner token. Retained process steps are pill-shaped because they form a compact, selectable sequence.

The homepage's unbranded blue-blazer portrait is a modest rounded rectangle, using `home-photo`, an aspect ratio (5 / 6), and object position (50% 35%). Its mobile version is (66px) wide, uses `home-portrait-mobile`, and has an aspect ratio (10 / 11). The homepage outdoor image also uses `home-photo`; on mobile it crops to (1.5). The About portrait retains its arch (`45% 45% 4px 4px`), and About's outdoor image retains the small photo radius. Article author portraits remain circular.

Rules are a single thin stroke (1px). Link arrows are inline SVG strokes, with a diagonal variant created by rotation; they are not text glyphs. The working sketch uses the native SVG curve and arrowhead already in `WorkingSketch.astro`, with no decorative icon library.

## Components

### Primary action and text link

Direct and easy to identify. The primary action uses blue with white text, a medium corner, an internal gap (14px), and a minimum height (52px). Its hover deepens the blue over (180ms). Keyboard focus uses the shared visible outline (2px), offset (2px).

The lighter text action is an inline link with a minimum target height (44px), a gap (12px), and an underline on hover, offset (5px). The inline SVG arrow can point forward or diagonally. On hover-capable devices it moves 2–3px in its direction over 200ms with the existing ease-out curve. Keyboard focus gets the same feedback; reduced motion keeps its position fixed. Primary-action focus also deepens the background while retaining the visible outline. Footer navigation links have a minimum width as well as height of 44px. The outline action class retained in the stylesheet is not an observed public-page primitive.

### Navigation

A paper header with a single bottom rule and a dark Manrope wordmark whose final dot is blue. It inherits the active route's paper, ink, rule, and navigation-shadow values. Navigation reads Writing, About, and What I'm building, followed by the LinkedIn link separated by a vertical rule. Desktop links are ink; hover and current-page state turn blue and underline.

The mobile menu is native `details/summary`, so opening and closing still work without JavaScript. The menu button and links keep minimum targets (44px). The enhancement updates accessible state, closes on link selection, and supports Escape with focus returned to the trigger. The open panel has the navigation shadow and a brief entrance (200ms).

### Homepage introduction and reading entries

The homepage introduction combines the approved identity line, a two-sentence heading with a blue second sentence, one lead, a quieter closing thought, and the unbranded portrait. Its primary action goes to `#start-here`, with a text action to `#work`. The three dated selections use the shared reading-entry component; there is no featured card. Their review and production content follow the visibility rules in `docs/personal-site-direction.md`.

Reading entries are open ruled rows. The linked title carries the interaction, with blue on hover and visible keyboard focus; supporting text stays muted. Dates and the optional earlier-writing indicator remain close to the title.

The homepage sequence is introduction, three Start here readings, the conditional newsletter, current projects, and a compact personal introduction. These placements describe this approved route; they are not mandatory structure for reading pages.

### Project status

A compact, noninteractive warm-wash tag beside the child-project name on the homepage. It uses ordinary sentence case and communicates an actual status. It is not a filter, badge collection, or decorative kicker. Its default counterpart retains the cool sky values.

### Working sketch (retained component)

`WorkingSketch.astro` remains available in the repository but is not mounted on the current homepage. Its tokens and specimen document the retained component and must not be used as a reason to reinsert it into the approved homepage sequence.

The blue section presents a three-step process using explicit buttons, a yellow SVG path, and one reading panel after enhancement. Unselected controls are transparent with a translucent light border; hover brightens that border. The selected control is yellow with ink text and uses `aria-pressed`. Focus is yellow with an offset (5px).

JavaScript selects a panel and updates the pressed state. The first visible path reveal runs once (1100ms); a deliberate step change redraws the path (650ms) and introduces the panel (320ms). There is no continuous motion. The panel area reserves minimum height (215px desktop, 235px mobile) to limit movement.

Without JavaScript, all process text remains visible in order and inactive controls stay hidden. Reduced motion suppresses the path and panel animations while preserving the same content and selected states. The sidecar illustrates the real control appearances; the production component owns state changes.

### Follow invitation and conditional email field

On the homepage, `Connect newsletterOnly` renders a warm-wash signup section only when its endpoint is configured. With no endpoint, the entire section is absent. The newsletter-only layout is centered within a (720px) column, with no side divider or inner padding; its section padding is (80px) vertically and (56px) on mobile. The homepage omits the repeated follow invitation; LinkedIn remains in navigation and footer.

The reusable standalone follow invitation on other routes retains its cool sky section, explicit primary link, and quieter contact link. Within articles, the invitation stays on cool paper after a thin divider: a 24px heading (23px on mobile), short supporting text, and a LinkedIn text link. One curated next read follows when selected; there is no generic recommendation fallback.

The email field is white with an ink-muted border, a medium corner, a visible label, and a height (52px). It receives the common blue focus outline. Invalid state uses the functional red border plus a readable status message; the status region reserves height (20px). A submitting button becomes disabled with opacity (0.7) and a wait cursor. The design specimen does not submit to a service.

### Article body

The continuous reading surface remains paper with ink text. Links stay visibly underlined. Quotations use a blue left rule, open space, and Manrope. Related writing reuses the same reading-entry component. Existing code blocks and archival images retain their local prose styles; they do not establish a new card family.

## Do's and Don'ts

### Do:
- **Do** preserve the cool reading palette and use the approved warm neutrals only through the homepage theme; blue and yellow remain shared.
- **Do** keep the Manrope and Inter pairing and the 68ch maximum reading measure.
- **Do** use thin rules, aligned text, and open spacing for repeated entries.
- **Do** preserve visible keyboard focus, source-order mobile stacking, and usable native controls.
- **Do** keep all process text available without JavaScript and preserve state when reduced motion is requested.
- **Do** use the approved unbranded rectangular homepage portrait and outdoor crop while preserving About's existing image shapes.
- **Do** preserve the homepage founder/Ottawa identity line as the approved scoped exception to the eyebrow guidance.

### Don't:
- **Don't** inherit legacy eyebrow styling or invent kickers for new surfaces; this does not remove the approved homepage identity line.
- **Don't** restore the process sketch or repeated follow panel to the homepage, or render its newsletter section without a configured endpoint.
- **Don't** replace the real SVG arrows or working-sketch path with Unicode glyph icons.
- **Don't** add floating-card shadows, hover lifts, or offset decorative slabs to this flat editorial world.
- **Don't** add continuous animation, scroll traps, custom cursors, or content that depends on an entrance reveal to become visible.
- **Don't** turn the editorial-review notice into a public brand component or treat old clinic-focused artboards as current visual authority.
