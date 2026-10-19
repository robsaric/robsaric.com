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
typography:
  display:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6.5vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.035em"
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
  step: "100px"
spacing:
  gutter-desktop: "clamp(32px, 5vw, 80px)"
  gutter-mobile: "24px"
  section-pad-desktop: "104px"
  section-pad-mobile: "56px"
  column-gap: "64px"
  stack-gap: "24px"
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
  featured-writing:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    padding: "40px"
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
---

# Design System: Rob Saric

## Overview

**Creative North Star: "A person with a view"**

The site feels like a personal editorial space: direct, generous, and interested in the people doing the work. Large geometric headings give the writing conviction; cool paper, open margins, and quiet reading text keep the experience approachable. Existing solo portraits put the author beside the ideas.

Asymmetry establishes the larger compositions, while thin rules and aligned text give the writing structure. Blue makes a confident statement in headings, links, and the working sketch. Yellow provides a small human accent in that sketch and in keyboard feedback. The system is grounded in the approved personal-site direction and the implemented public pages, rather than the superseded clinic-focused artboards.

**Key Characteristics:**
- Expressive Manrope headings paired with steady Inter reading text.
- Cool paper, deep ink, vivid blue, and occasional yellow.
- Open editorial lists and projects, with selective flat sky panels.
- Arched solo portraits and a finite hand-drawn SVG process line.
- Responsive stacking, visible keyboard focus, and complete content without JavaScript.

This is a scan of the implemented source: `src/styles/tokens.css`, `global.css`, `prose.css`, the current page layouts, and their active components. The YAML primitives are normative; `.impeccable/design.json` adds state examples, motion, and responsive metadata. Historical compatibility aliases are implementation support, not additional palette families. The editorial-review notice is preview chrome and is excluded from the public component vocabulary.

## Colors

The palette combines a vivid working blue with cool paper and deep ink; yellow supplies a focused accent.

### Primary
- **Working Blue — `blue`:** headline emphasis, links, primary actions, the process section, and focus on light backgrounds.
- **Deep Blue — `blue-deep`:** primary-action hover feedback.

### Secondary
- **Sketch Yellow — `yellow`:** selected process steps, the hand-drawn line, process annotations, text selection, and focus or hover feedback against dark backgrounds.

### Neutral
- **Cool Paper — `paper`:** the page, navigation, and light footer text.
- **Sky — `sky`:** the featured writing panel, follow invitation, and compact project status.
- **Deep Ink — `ink`:** headings and reading text, the footer surface, and text on yellow.
- **Quiet Ink — `ink-muted`:** summaries, dates, supporting text, and field borders.
- **Rule — `rule`:** thin dividers on light surfaces.
- **White — `white`:** primary-action text, process-section text, and the conditional email field.
- **Dark-surface Supporting Text — `on-dark-78`:** subdued copy in the blue process section and ink footer.
- **Dark-surface Rule — `on-dark-28`:** translucent process-control borders and footer dividers.

The functional `status-critical-text` color is reserved for the conditional newsletter field's invalid border and status message; it is not an editorial accent.

**The Contrast Rule.** Use blue focus on light surfaces and yellow focus on blue or ink. Yellow carries ink text when it becomes a control surface.

## Typography

**Display Font:** Manrope, with Inter and system sans-serif fallbacks.
**Body Font:** Inter, with system sans-serif fallbacks.

Both families are self-hosted through Astro's font build. Manrope supplies compact, geometric headings; Inter keeps paragraphs, controls, and dates quiet. The scale is role-based and fluid rather than a single mathematical ratio.

### Hierarchy
- **Display:** the frontmatter's largest role is the home statement. Its short measure (12ch on desktop) creates an emphatic, readable composition; the blue emphasis occupies its own line.
- **Headline:** recurring section headings use the fluid headline role. Balancing is applied to headings, with reading-section headings allowed to wrap naturally.
- **Title:** writing-list titles use the title role; compact entries use a slightly smaller size (24px), then (23px) on mobile.
- **Article title:** the separate article-title role fits long titles without forcing the home's short measure. Mobile articles use `clamp(2.1rem, 7.7vw, 3rem)`.
- **Lead:** the home lead uses the lead role. Page introductions use the same size with a more relaxed line height (1.65).
- **Body:** long-form prose uses the body role with a maximum measure (68ch). Mobile prose becomes (17px); summaries and interface descriptions range from (16px) to (18px).
- **Label:** actions use the label role; navigation uses the same size at a lighter weight (500).
- **Meta:** dates, photo captions, and supporting statuses use the meta role. Reading dates use tabular numerals. A project-status tag is smaller (12px).

Article subheads are (26px) and (20px), with a line height (1.25); their mobile sizes are (24px) and (19px). Article quotations use Manrope (24px, 1.4), reducing to (22px) on mobile. The code font is the existing `ui-monospace, Menlo, Consolas, monospace` stack and remains confined to code and retained archive formatting.

**The Reading Measure Rule.** Keep continuous prose within 68ch. Express hierarchy through size, weight, space, and real headings; do not add decorative eyebrow text above them.

## Layout

The shared shell is centered with a maximum width (1440px). Its desktop gutter uses the fluid gutter token, switching to the mobile gutter below (768px). The baseline page supports widths down to (320px).

Large compositions use unequal columns for introductions and the process sketch, then balanced two-column writing, project, and personal sections. The home introduction uses (1.35fr / 0.85fr); the process section uses (0.85fr / 1.15fr). These are context-specific compositions, not a requirement that every section split in two. The recurring column gap is in the frontmatter; intermediate widths from (768px) to (1050px) reduce home section gaps to (36px).

Mobile stacks the source reading order into one column. Main sections commonly use the mobile section padding; text remains readable before images or secondary links. Action groups wrap naturally. Navigation switches from an inline row to a native disclosure menu, and its height changes from (88px) to (72px).

Writing rows have a date column (154px), a gap (32px), and a flexible text column. Compact and mobile rows place the date above the title. They retain rules and generous vertical breathing room rather than turning into tiles.

The article shell narrows to (1040px), with an author column (160px), a gap (64px), and a reading column capped at (720px). At (1023px) and below the author rail disappears and the reading column centers. The article follow invitation and related reading remain in the document flow.

**The Open Structure Rule.** Use aligned text and thin rules for repeated writing and project entries. Reserve sky panels for a deliberately featured idea or invitation.

## Elevation & Depth

The public design is flat at rest. Paper, sky, blue, and ink establish sections through tone, while rules establish grouping. Editorial panels, project entries, images, and actions do not acquire decorative shadows or hover lifts.

### Shadow Vocabulary
- **Mobile navigation:** the sole reusable shadow is `0 6px 16px rgb(25 43 58 / 7%)`. It distinguishes the open mobile disclosure from the page below, without making the rest of the site float.

**The Flat Surface Rule.** Use tonal changes and rules for depth; reserve the existing shadow for the mobile navigation overlay.

## Shapes

Featured writing and follow invitations are square panels. Primary actions and email fields have the modest medium corner token; the project-status tag uses the small corner token. Process steps are pill-shaped because they form a compact, selectable sequence.

Solo portraits are the signature image shape: the home portrait uses an arched top (`48% 48% 4px 4px`), and the about portrait uses the closely related (`45% 45% 4px 4px`). The mobile home crop becomes wider (`aspect-ratio: 1.12`) with the explicit arch (`120px 120px 4px 4px`). Outdoor photography uses the small photo radius. Article author portraits are circular.

Rules are a single thin stroke (1px). Link arrows are inline SVG strokes, with a diagonal variant created by rotation; they are not text glyphs. The working sketch uses the native SVG curve and arrowhead already in `WorkingSketch.astro`, with no decorative icon library.

## Components

### Primary action and text link

Direct and easy to identify. The primary action uses blue with white text, a medium corner, an internal gap (14px), and a minimum height (52px). Its hover deepens the blue over (180ms). Keyboard focus uses the shared visible outline (2px), offset (2px).

The lighter text action is an inline link with a minimum target height (44px), a gap (12px), and an underline on hover, offset (5px). The inline SVG arrow can point forward or diagonally. Preserve both treatments; the outline action class retained in the stylesheet is not an observed public-page primitive.

### Navigation

A paper header with a single bottom rule and a dark Manrope wordmark whose final dot is blue. Desktop links are quiet ink; hover and current-page state turn blue and underline. The LinkedIn link is separated by a vertical rule.

The mobile menu is native `details/summary`, so opening and closing still work without JavaScript. The menu button and links keep minimum targets (44px). The enhancement updates accessible state, closes on link selection, and supports Escape with focus returned to the trigger. The open panel has the navigation shadow and a brief entrance (200ms).

### Reading entry and featured writing

Reading entries are open ruled rows. The linked title carries the interaction, with blue on hover and visible keyboard focus; supporting text stays muted. Dates and the optional earlier-writing indicator remain close to the title.

The featured writing panel is a square sky field with blue title text and a date anchored below the summary. It uses desktop padding (40px), reduced to (28px) on intermediate and mobile layouts. The panel itself does not lift or become an extra nested click target.

### Project status

A compact, noninteractive sky tag beside the child-project name. It uses ordinary sentence case and communicates an actual status. It is not a filter, badge collection, or decorative kicker.

### Working sketch

The blue section presents a three-step process using explicit buttons, a yellow SVG path, and one reading panel after enhancement. Unselected controls are transparent with a translucent light border; hover brightens that border. The selected control is yellow with ink text and uses `aria-pressed`. Focus is yellow with an offset (5px).

JavaScript selects a panel and updates the pressed state. The first visible path reveal runs once (1100ms); a deliberate step change redraws the path (650ms) and introduces the panel (320ms). There is no continuous motion. The panel area reserves minimum height (215px desktop, 235px mobile) to limit movement.

Without JavaScript, all process text remains visible in order and inactive controls stay hidden. Reduced motion suppresses the path and panel animations while preserving the same content and selected states. The sidecar illustrates the real control appearances; the production component owns state changes.

### Follow invitation and conditional email field

The follow invitation uses a sky section or panel, an explicit primary link, and a quieter contact link. A newsletter field renders only when its endpoint is configured.

The email field is white with an ink-muted border, a medium corner, a visible label, and a height (52px). It receives the common blue focus outline. Invalid state uses the functional red border plus a readable status message; the status region reserves height (20px). A submitting button becomes disabled with opacity (0.7) and a wait cursor. The design specimen does not submit to a service.

### Article body

The continuous reading surface remains paper with ink text. Links stay visibly underlined. Quotations use a blue left rule, open space, and Manrope. Related writing reuses the same reading-entry component. Existing code blocks and archival images retain their local prose styles; they do not establish a new card family.

## Do's and Don'ts

### Do:
- **Do** use the existing blue, paper, ink, sky, and yellow roles with their source values.
- **Do** keep the Manrope and Inter pairing and the 68ch maximum reading measure.
- **Do** use thin rules, aligned text, and open spacing for repeated entries.
- **Do** preserve visible keyboard focus, source-order mobile stacking, and usable native controls.
- **Do** keep all process text available without JavaScript and preserve state when reduced motion is requested.
- **Do** use the approved solo portraits and outdoor image with the implemented crops.

### Don't:
- **Don't** inherit legacy eyebrow styling or invented kickers into new surfaces.
- **Don't** replace the real SVG arrows or working-sketch path with Unicode glyph icons.
- **Don't** add floating-card shadows, hover lifts, or offset decorative slabs to this flat editorial world.
- **Don't** add continuous animation, scroll traps, custom cursors, or content that depends on an entrance reveal to become visible.
- **Don't** turn the editorial-review notice into a public brand component or treat old clinic-focused artboards as current visual authority.
