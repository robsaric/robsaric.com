# robsaric.com design spec (turn 8a desktop / 8b mobile)

Source of truth: `docs/design-reference/site-directions-turn8.dc.html`. Open it in a browser to see both artboards. This document is the structural transcription so an agent can build without parsing the artboard HTML. When the two disagree, the artboard wins on layout; `docs/COPY.md` wins on words.

Tokens: `src/styles/tokens.css`. No new colours, radii, or fonts.

## Breakpoints and layout model

- Design references: desktop **1440** (8a), mobile **390** (8b). Build fluid between them; nothing may overflow horizontally at 320.
- Two breakpoints. `768px` divides mobile from desktop: below it the mobile artboard applies. `1150px` divides the mid range from full desktop. Use `clamp()` for type between the two reference sizes where a value differs (values listed per section).
- Desktop page gutter 96px, mobile 20px. Content max width 1440 (centred).
- **768 to 1150 is the mid range.** It runs the desktop layout and drops nothing, but the page chrome shrinks (`--gutter-desktop` 40px, `--label-col` 96px, `--label-gap` 32px, `--section-pad-desktop` 64px) and the two-column blocks stack: Evidence, About, and Write to me each collapse to one column, and the hero portrait column narrows to 280px. There is no artboard for this range and it does not get its own design.

> Corrected 2026-08-19. This section previously read "Between 768 and 1440 the 96px gutter and the 160px label column stay; the content column shrinks." Built as written, that left 368px of content at 768px while Evidence alone needed 472px, and the homepage overflowed by 390px at 768, 258px at 900, and 134px at 1024. The checklist called for screenshots at 1440 and 390, the two widths where none of that is visible. `pnpm check:layout` now fails the build on horizontal overflow at seven widths.
- Every desktop numbered section (01 to 06) is a two-column grid: `160px | 1fr` with `48px` gap. Column 1 holds the mono eyebrow (`01 · Evidence`), top-padded 10px so it aligns with the H2 cap height. On mobile the eyebrow sits above the H2 in one column.
- Section vertical padding: desktop 96px top and bottom (Write to me: 88px; footer 56px). Mobile 44px (footer 36px; hero 40px top / 32px bottom).
- Sections after 02 carry a `border-top: 1px solid var(--rule)` on the cream background. Dark and lime bands have no border.
- Backgrounds in page order: cream (nav, hero, now strip) → forest-500 (01 Evidence) → cream (02 Caretrics) → cream + rule (03 Principles) → cream + rule (04 Field notes) → cream + rule (05 About) → lime-100 (06 Write to me) → forest-700 (footer).

## Type

- Sans: Inter 400/500/600/700. Serif: Instrument Serif italic (400). Mono: `ui-monospace` stack (system, no download).
- Eyebrow / kicker style (used everywhere): mono 13px, weight 500, uppercase, letter-spacing 0.08em, colour `--ink-muted` (on dark: `--on-dark-78`; the active step kicker is `--lime-500`).
- H2 (section title): 38px / 1.16 / -0.026em, weight 700, ink. Mobile 27px / 1.2 / -0.022em.
- Hero H1: 58px / 1.06 / -0.03em, weight 700, max-width 17ch. Mobile 34px / 1.1 / -0.028em. The hero heading is the page's only `<h1>`. (The artboard uses `<h2>` for canvas reasons; the site uses `<h1>`.)
- Body large 18px / 1.6 (mobile 17px). Hero body 19px (mobile 17px). Meta/mono 13px. UI 15 to 17px.
- Serif principle line 28px / 1.28 (mobile 23px / 1.3). Serif quote 30px / 1.3 (mobile 24px / 1.32).
- Metric: 44px / 1 / -0.03em tabular-nums (mobile 34px).
- `text-wrap: pretty` on headings and body paragraphs.

## Links, focus, motion

Motion rule: `--dur-micro` (120ms) is for state under the pointer, `--dur-short` (200ms) is for
change that happens away from where the reader clicked and has to be perceived to be understood.
Everything is CSS, so the `prefers-reduced-motion` block in `tokens.css` disables all of it and the
resting state is always the visible one. Never put `opacity: 0` on an element that an entrance
keyframe animates; put it in the keyframe's `from`, or reduced-motion users get invisible content.
The shared `rs-panel-enter` keyframe lives in `global.css` and is used by the Evidence step contents
and the Stages panel.

- Inline links: `--fg-link` (#0f766e), underline 1px, offset 2px; hover thickness 2px. Nav links: ink, weight 500, no underline; hover underline offset 4px.
- Focus: `outline: 2px solid var(--forest-500); outline-offset: 2px` on light; `var(--lime-500)` on dark. Always visible (`:focus-visible`). Stage tabs use `outline-offset: -2px`.
- Motion: only 120ms ease-out on background/border/transform, and hover `translateY(-2px)` on feed cards. `prefers-reduced-motion` disables all transitions (in tokens.css).
- Every interactive element is at least 44px tall on mobile (nav toggle, filter pills, links in the footer and Now strip, buttons, input).

## Components

### DS Button (dark)
From the Caretrics DS `Button` (variant `dark`, size `lg`): height 44px, padding 0 20px, font 15px/600, radius 8px, background `--forest-500`, colour white, border 1px solid `--forest-500`, inline-flex, gap 6px, `white-space: nowrap`, transition 150ms. Optional trailing icon 14px (stroke 1.75): `arrow-right` (See Caretrics) or `arrow-up-right` (nav Caretrics, external). Hero and section CTAs render at 48px height (`hint-size` 48). Mobile CTAs are full width (`width: 100%`). Hover: background `--forest-700`. Implement as `Button.astro` with `href` (renders `<a>`) or `type` (renders `<button>`), inline SVG icons (no icon library).

### Outline button
Transparent background, 1.5px solid `--forest-500` border, radius 6px, ink text 16px/600, padding 0 22px, min-height 48 (Subscribe: 44). Hover background `--wash`.

### Lime button (Evidence "Next step")
Background `--lime-500`, colour `--forest-500`, 15px/600, radius 6px, padding 0 20px, min-height 44. Hover `#d8fa9a`. Mobile full width.

### Filter pill
Radius pill, 15px, padding 0 18px (mobile 16px), min-height 44, 1px border. Inactive: transparent bg, ink text weight 500, border `--rule`; hover border `--forest-500`. Active (`aria-pressed="true"`): bg `--forest-500`, text `--on-dark`, weight 600, border `--forest-500`.

### Feed card (field note)
White card, 1px `--rule` border, radius 8, padding 26 (mobile 20), column flex gap 14 (mobile 12). Whole card is one `<a>` (no nested links). Rows: (1) type + date row: mono 13px uppercase type left (colour `--ink-muted`; `--teal-700` when type is "Changed my mind"), mono 13px date right; (2) body 19px / 1.5 ink (mobile 17px / 1.55); (3) footer pinned to bottom with `margin-top: auto`, `border-top` rule, padding-top 12: five 7px dots (gap 4; the dot for the note's stage is `--forest-500`, others `--rule`; the whole rail is `aria-hidden`) followed by mono 13px meta text. Hover: border `--forest-500`, `translateY(-2px)`. Desktop grid `repeat(3, 1fr)` gap 20 `align-items: start`; mobile single column gap 14.

### Photo
Radius 12, 1px `--rule` border, `object-fit: cover`, `display: block`. Use Astro `<Image>` with explicit width/height and `alt`.

## Sections (page order)

### Nav
- Desktop: height 72, **`--wash` background** (changed 2026-08-19: the bar was `--cream`, identical to the page ground, so it had no separation at all), bottom rule. The mobile panel that drops from it uses the same ground. Safe against the outline-button collision because the nav carries no outline button: Caretrics is the dark variant and the toggle is transparent. Left: an avatar mark (28px desktop, 24px mobile, circular, 10px gap) then the "Rob Saric" wordmark link (17px/700, `--forest-500`, -0.015em).  Right: links "Field notes", "About", "Write to me" (16px/500 ink, 44px tall hit area, gap 32) then DS Button dark lg "Caretrics" with `arrow-up-right`, external to `SITE.caretricsUrl`. (Changed 2026-08-24: "Write to me" replaced "Principles" per the reconciled authority review; Principles moved to the footer link row.)
- Mobile: height 56, padding 0 20. Left wordmark 16px. Right: DS Button "Caretrics" (no icon, 44 tall) then a 44×44 menu toggle (`aria-label="Open menu"`, `aria-expanded`, `aria-controls`). Toggle opens a full-width panel below the bar with the three links stacked (each 44 tall, 20px gutter, rule between). Close on link click and on Escape. Works without JS: the panel is inside a `<details>`/`<summary>` fallback or the links are visible when JS is unavailable (choose the `<details>` route; style the summary as the toggle).
- Nav is `position: sticky; top: 0` with `z-index` above content. Skip link ("Skip to content") as the first focusable element, visually hidden until focused.

### Hero
- Desktop: padding 104 96 72; grid `1fr 400px`, gap 88, `align-items: center`. Left column: eyebrow, H1, body (two paragraphs, 19px, gap 14, max-width 54ch), CTA row (gap 14, padding-top 4): DS Button dark 48px "See how Caretrics works" (arrow-right, external) + outline button "Read the field notes" (link to `/field-notes/`); then a 15px `--ink-muted` line "Evidence-led. AI-assisted. Human-controlled." Right: portrait 400×460 (photo style; `rob-portrait-caretrics.png` since 2026-08-23, the eye-level Caretrics polo portrait, source 1169×1345 so both densities are real).
- Mobile: padding 40 20 32, single column gap 20 in this order: eyebrow ("Founder of Caretrics" short form), H1, body (17px, both paragraphs, gap 12), actions column (gap 4): DS Button full-width "See how Caretrics works" + text link "Read the field notes →" (16px/600, 44px tall, left-aligned; the outline button itself stays desktop-only), portrait 190×190, tagline. Changed 2026-08-23: the body sits with the H1 instead of below the portrait, and the field-notes path is no longer dropped on mobile; the reconciled authority review (`docs/strategy/`) called both.

### Now strip
- Semantic: `<section aria-labelledby>` with a visually-hidden `<h2>` "What I am working on now".
- Desktop: padding 0 96 88; top rule; padding-top 28; grid gap 40 with one column per visible item (`--now-count`, max 3): one live item renders as a deliberate full-width row, never beside empty columns (2026-08-23, per the reconciled authority review). Each item is one `<a>` (column flex, gap 10, no underline): kicker eyebrow, title 19px/600/1.4 ink, blurb 16px/1.55 `--ink-muted` max 62ch. Focus outline offset 4.
- Mobile: padding 0 20 40; column gap 18; each item has its own top rule and padding-top 16, gap 6; kicker + title (18px) only, blurb dropped.
- Data: `src/data/now.ts`. Render nothing (no rule, no padding) when the list is empty after draft filtering.

### 01 Evidence (dark band, forest-500)
- Desktop: padding 96; label grid; inner grid `400px 1fr` gap 72 `align-items: start`.
  - Left column (gap 24): H2 on-dark "The dashboard held the evidence. The work still had no owner."; body 18px on-dark; the metric block was cut 2026-08-19 (docs/COPY.md V5); when it returns it sits here, with top rule `--on-dark-28`, padding-top 20, gap 10: metric `$127,000` (44px, `aria-describedby` the note), note 17px on-dark, then mono 14px lime link "How I counted this →" to `/how-i-counted/`.
  - Right column: panel with bg `--on-dark-05`, 1px `--on-dark-28` border, radius 8, padding 36, column gap 28. Inside: (a) "The signal" eyebrow (on-dark-78) + signal line 26px/600/1.35 on-dark; (b) step rail: 5 buttons flex 1 each, transparent, `border-top: 2px solid` (lime for steps ≤ active, on-dark-28 otherwise), padding 14 12 0 0, left aligned, min-height 44, column gap 6: mono 13px number `01`..`05` (lime when active, on-dark-78 otherwise) + label 15px/600 (on-dark when active, on-dark-78 otherwise), `aria-pressed`; (c) content area min-height 168 gap 14: kicker (lime), body 19px/1.6 on-dark max 56ch, source line mono 13px on-dark-78 with top rule padding-top 12 `margin-top: auto`; (d) controls row gap 16: lime button "Next step" (becomes "Start again" on step 5) + mono 13px counter "Step N of 5"; (e) exit link, mono 14px lime "More of these, in the field notes →" to `/field-notes/`, `align-self: flex-start`, inheriting the treatment the cut metric link used to carry; (f) methods link, same treatment, "How I count and verify clinic findings →" to `/how-i-counted/` (2026-08-24); the two exits sit in one column with gap 10, not at the panel's 28px rhythm.

  Rail motion (2026-08-19): the `border-top` is now a permanent `--on-dark-28` track sized by `--rail-w`, and the completed state wipes a `--lime-500` bar over it via `::after`, `scaleX(0)` to `scaleX(1)` from the left, `--dur-short`. A colour flip reads as "state changed"; the wipe reads as "this advanced", and only the second is the argument. This is the only progress indicator on mobile, where the labels and counter are hidden. Step contents animate in with the shared `rs-panel-enter` keyframe (`--dur-short`) because the text swaps in place inside a fixed min-height and otherwise produces no perceptual event.
- Mobile: padding 44 20, column gap 20: eyebrow, H2 27px on-dark, short body ("One anonymized signal, from detection through to a verified outcome."), then panel (border only, no fill, padding 20, gap 18): signal block; step rail as 5 numbered buttons (`--rail-w: 3px`, min-height 44, `aria-label` = step label, mono 13px number only); content min-height 210; lime button full width; exit link 44px tall.
- Behaviour: server-render step 1 active. JS: clicking a step selects it; "Next step" advances and wraps (label switches to "Start again" on step 5, which returns to step 1); rail, kicker, body, source, counter update. Data: `src/data/evidence-steps.ts`. Without JS the panel shows step 1 and the buttons do nothing (acceptable).

### 02 Caretrics (cream)
- Desktop: padding 96; label grid; column gap 44.
  - Intro (max 58ch, gap 16): H2 "Clinic revenue moves through five stages. So do its problems." + body 18px.
  - Stage panel: white, 1px rule border, radius 8, overflow hidden. Header row: grid 5 equal columns, bottom rule; each stage button: bg white (active `--wash`), no border except `border-right: 1px rule`, padding 20, left aligned, min-height 44, column gap 8: 12px dot (owned stages: filled `--forest-500`; Found: transparent fill with 2px `--ink-muted` ring) then name 20px/700/-0.015em ink. Focus outline offset -2. Body: padding 36 40, grid `1fr 1fr` gap 56 min-height 180: left "The clinic's question" eyebrow + question 26px/600/1.35; right "Example signals" eyebrow + signals 18px + note 16px `--ink-muted`.
  - Then a two-column row (gap 56, top rule, padding-top 40): "What Caretrics does" H3 22px/700 + body 18px + trust line 15px muted; "What it does not do" H3 + body + DS Button dark 48 "See Caretrics" (padding-top 6). (Bodies compressed 2026-08-24: the component inventory moved to caretrics.com/product.)
  - The Togetheren row was removed 2026-08-24 with the compression; the footer link carries Togetheren.
- Mobile: padding 44 20 gap 18: eyebrow, H2 27px, body 17px (shorter, no "Select a stage."), stage panel as an accordion (each row: 56px min button full width, padding 16 18, bg white/`--wash` when open, dot + name 19px/700 left, mono `+`/`−` right `aria-hidden`; open panel padding 4 18 20 gap 12: question 19px/600, signals 16px, note 15px muted; rows separated by bottom rule). Then combined paragraph ("It reads twelve months … clinically needs.") 17px, trust line 15px, DS Button full width. (The mobile Togetheren block was removed 2026-08-24 with the desktop row.)
- Behaviour: one markup for both. Default open = Paid (index 4). Desktop: exclusive, one always open. Mobile: exclusive, tapping the open one closes it (all closed allowed). Use disclosure semantics on both (`aria-expanded`, `aria-controls`); no `role=tab` swap. Data: `src/data/stages.ts`. Without JS: Paid panel is open, others closed.

### 03 Principles (cream, top rule)
- Desktop: padding 96; label grid; column gap 36: H2 max 24ch "Principles I use when reviewing clinic operations."; `<ol>` of three items, each grid `56px 1fr 1fr` gap 40 baseline, top rule, padding 32 0 (last also bottom rule): mono 24px number, serif italic 28px line, right column (gap 10) body 18px + link 16px/600 teal "The note behind this one →" (to the linked field note; render the link only if `noteSlug` is set); then a stand-alone link 17px/600 "See all five principles →" to `/principles/`.
- Mobile: padding 44 20 gap 16: eyebrow, H2 27px, list items column gap 8 padding 20 0 (rule top; last also bottom): serif 23px line prefixed by an inline mono 15px number (padding-right 10, non-italic), body 17px (short form). "The note behind this one" links are dropped on mobile. Then link "See all five principles →" 44 tall.
- Data: `src/data/principles.ts` (first three `featured: true` appear on the homepage; all five on `/principles/`).

### 04 Field notes (cream, top rule)
- Desktop: padding 96; label grid; column gap 28. Header row flex `align-items: flex-end` space-between gap 40: left (gap 14, max 58ch) H2 "What I am seeing, shipping, and rethinking." + body 18px "Kept in public, in order. The wrong turns stay in."; right link 17px/600 "All field notes →" (`/field-notes/`). Filter row: wrap, gap 8, seven pills (`All` first). Empty state (hidden unless zero visible): dashed 1px `--rule` border, radius 8, padding 40, centred 17px muted "Nothing filed under this one yet." Grid of feed cards (see component), latest first, up to 6.
- Mobile: padding 44 20 gap 16: eyebrow, H2 27px, filter row horizontally scrollable (`overflow-x: auto`, no wrap, gap 8, padding-bottom 4, `flex: 0 0 auto` pills), empty state (padding 28, 16px), cards single column gap 14 (up to 3 of the filtered set), then link "See all field notes →" 44 tall.
- Behaviour: server-render all 6 latest non-draft notes with `data-tags` on each card. JS filters by tag (`aria-pressed` on pills), toggles the empty state, and on `< 768px` hides beyond the first 3 visible. DOM order stays chronological. Filters live in `src/data/filters.ts`.

### 05 About (cream, top rule)
- Desktop: padding 96; label grid; inner grid `360px 1fr` gap 64 `align-items: center`. Left photo 360×400 (rob-family, alt "Rob Saric outdoors", lazy). Right column gap 24: H2 "Where the standard came from."; body 18px max 52ch; serif quote 30px max 24ch; signature (`rob-signature.png`, 176px wide) directly under the quote, signing the standard; stat row (top rule, padding-top 20, flex wrap gap 40) three 17px items.

  The signature PNG is genuinely transparent (alpha 0 outside the strokes) so it needs no blend mode, but its ink sits 61/800 in from the left of the canvas: the negative left margin pulls the first stroke onto the text edge. The ink is near-black, so this never goes on a forest band.
- Mobile: padding 44 20 gap 16: eyebrow, H2, photo full width height 280 cover, body 17px, quote 24px, signature 150px (`order: 6`, since `.about__copy` is `display: contents` here and the stat row moves to 7), stat column (gap 10, top rule padding-top 16) 16px items.

### 06 Write to me (lime-100)
- Desktop: padding 88 96; label grid; inner grid `1fr 400px` gap 64 `align-items: start`. Left (gap 20, max 52ch): H2 "Tell me where I am wrong." + body 18px (the words "write to me" are a link to `/contact/`). Right card: cream bg, 1px rule, radius 8, padding 28, gap 16: H3 20px/700 "Get the field notes."; body 17px; form (column gap 10): label 16px/500 "Email address", email input (16px, white, 1.5px `--forest-500` border, radius 6, padding 12 14, height 48, `autocomplete=email inputmode=email spellcheck=false placeholder="you@clinic.com"`), status line (min-height 20, 14px muted, `aria-live="polite"`), outline Subscribe button 44 tall (`align-self: flex-start`).
- Mobile: padding 44 20 gap 16: eyebrow, H2 27px, short body, card padding 22 gap 14, H3 19px, body 16px, form; Subscribe full width.
- Behaviour: form `method="post"` `action={PUBLIC_NEWSLETTER_ENDPOINT}` with field `email`. JS: on submit validate; invalid → inline error text in the status line + `aria-invalid` + red-ish border (use `#b91c1c`, the DS critical-text token; add it to tokens.css as `--status-critical-text`); valid → set button label "Subscribing…" and disable, then let the native POST proceed. When `PUBLIC_NEWSLETTER_ENDPOINT` is unset, render the card without the form and with a single link "Email me and I will add you." to `/contact/` (never ship a form that posts nowhere).

### Footer (forest-700)
- Desktop: padding 56 96, column gap 20: 20px/1.4 on-dark line (max 44ch) "I build things to help people live better lives."; 16px on-dark-78 "Rob Saric · Founder of Caretrics · Ottawa."; link row (top rule on-dark-28, padding-top 16, flex wrap gap 28, each link 44 tall, 16px on-dark): "Write to me" (internal, `/contact/`, no `target`), LinkedIn, X, GitHub, "View source ↗", "Caretrics ↗" (weight 700, `--lime-500` since 2026-08-19; 12.6:1 on forest-700, and every page but the homepage otherwise carries no lime at all), "Togetheren, selected work" (on-dark-78); then 15px on-dark-78 line "Earlier writing on systems and flow, 2009 to 2019, is in the archive." with "the archive" linked to `/archive/`. A "Principles" link (internal, `/principles/`) joined the row after "Write to me" on 2026-08-24, when Principles left the nav.
- Mobile: padding 36 20 gap 14; 18px line; 15px byline; link row gap 20, 15px links: LinkedIn, GitHub, "View source ↗", "Caretrics ↗", "Togetheren". (X and the archive line are dropped on mobile per the artboard; keep the archive line if space allows, it is short.)
- Render only the social links whose URL is set in `src/data/site.ts`.

## Inner pages (not in the artboard; reuse the same components and rhythm)

- `/field-notes/` — H1 "Field notes", the body line, filter pills, full grid of all notes (no 6 cap), same empty state.
- `/field-notes/[slug]/` — article layout: eyebrow (type · date · stage), H1 title, date line (mono 13px; appends " · Updated [date]" when the note carries `updated`), byline 16px `--ink-muted` "By Rob Saric · Founder of Caretrics" with the name a teal link to `/about/` (field notes only, 2026-08-24; archive posts carry no byline), prose at 18px/1.6 max 68ch, `<article>`; footer nav back to `/field-notes/`. Prose styles: h2 26px, h3 20px, links teal underline, blockquote serif italic 24px with left rule, code mono 15px, images radius 12.
- `/principles/` — H1 "Five principles for reviewing clinic operations", the five items in the desktop list layout (mobile as on the homepage), each with its optional note link.
- `/about/` — H1 "About", the family photo, the About body, quote, the medium credential paragraph, stat row. Optional second photo (`rob-signature.png` is available; do not use the booth photo).
- `/how-i-counted/` (2026-08-24) — the methods page. Page-header pattern (H1 48px, intro 18px max 58ch with the note link), then a rule-separated list of seven H2 (22px/700) + one-paragraph (18px, max 58ch) sections, then the contact exit link. Same paddings as `/principles/`; mobile drops to 34px H1 and 17px body. No new tokens, no JS.
- `/archive/` — H1 "Earlier writing, 2009 to 2019", intro line, list grouped by year: title link + date (mono). `/archive/[slug]/` — same article layout with an eyebrow "From the archive · {year}" and a one-line notice under the H1: "Written in {year}. Kept as it was." Canonical is the new URL.
- `/how-i-counted/` — not built. Returns with the metric it explains (docs/COPY.md V5). Named for what it does rather than "methodology": the page exists to be checked, not to assert rigour.
- `/contact/` — H1 "Write to me", the Write-to-me body, email link (only if `SITE.email` set), LinkedIn link.
- `404` — H1 "Nothing here.", body "The page moved or never existed. Try the field notes or the archive.", links.
- `rss.xml` — field notes only. `sitemap-index.xml` via the integration.

## Head / SEO

- `<title>` pattern: `{page} · Rob Saric` (home: `Rob Saric · Founder of Caretrics`).
- Meta description per page (from COPY.md). Canonical from `Astro.site`. OpenGraph + Twitter card (summary_large_image) with a static `public/og-default.png` (1200×630; generate from the portrait on cream with the name in Inter, no fancy art). Favicon: `rob-sketch.png` as `apple-touch-icon` and a 32px PNG; keep the SVG slot for a monogram later.
- JSON-LD `Person` on `/` and `/about/` (name, url, jobTitle "Founder, Caretrics", sameAs from SITE links, worksFor Organization Caretrics). `BlogPosting` on notes and archive posts (headline, datePublished, author Person).
- `lang="en"`. Fonts self-hosted through Astro Fonts API with `preload` for Inter 400/600/700 only.
