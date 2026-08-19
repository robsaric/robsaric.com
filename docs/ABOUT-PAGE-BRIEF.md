# `/about/` design brief, robsaric.com

Paste this into a design tool. Everything here is measured against the live repo, not against a generic design system: the token names, hex values, breakpoints, component names, and gate commands are the real ones. Where a decision is still open it is marked and left open, rather than resolved quietly.

Companion documents: `docs/DESIGN-SPEC.md` (layout law), `docs/COPY.md` (copy law and the verification table), `AGENTS.md` (hard rules).

---

## 1. What this page is

**The job.** Someone has read the homepage, believed some of it, and clicked About to decide whether the person behind Caretrics is worth a reply. The page answers two questions in order: *why is he in healthcare at all*, and *why can he say the same revenue gaps repeat across clinics*.

The page today answers neither. It renders the word "About" as both the `<title>` and the `<h1>`, then drops in the homepage About band with an `extended` flag. Building a real page here is the gap.

**The reader.** One person, on a laptop at a front desk between patients, or on a phone. Not a recruiter, not a conference bio scanner.

**What it must not read like.** A founder journey post. A manifesto with a pull quote per scroll. A CV with a logo wall. A product page. The site's voice is first person, specific, and quiet. Restraint is the design here, not a limit on it.

**What it must not contradict.**

- Homepage H1: *"I kept finding the same revenue gaps in clinic after clinic."*
- Homepage section 05 stat row: `20+ years building software · 50+ clinics, firsthand · Founder of Caretrics, Ottawa`
- The standard, in Instrument Serif above the signature: *"If it adds work to care, it has failed."*

---

## 2. Open decisions

Settle 2.1 and 2.2 before design is final. The rest are wording.

### 2.1 The Dentallytics clinic count. Open

**Confirmed by Rob on 2026-08-19: Dentallytics did serve a dental group of more than 500 clinics. The number is true.** So this is no longer a truth question. Two other objections survive, and they are the real ones.

**It is a third party's number.** The count describes a client's business, published by their former vendor. The set of Canadian dental groups above 500 clinics is short enough that "unnamed" does not anonymize them. Truth is necessary but it is not sufficient: this is somebody else's figure to disclose.

**It sits inches from a smaller number that is yours.** A reader meets `500+` and `50+` on one screen. The bigger number attaches to the weaker relationship, and the risk is that it reads as inflation rather than scale.

| Option | Result |
|---|---|
| **(a) Keep with precise scoping** | *"a data product I built for a dental service organization spanning more than 500 clinics."* The 500 clearly describes the DSO, not Rob's client count. Needs copy law item 6 amended to permit exactly two clinic counts, each with its scope stated. |
| **(b) Drop the number** | *"Dentallytics, an analytics platform I built for a dental group."* This is item 7's existing wording, so the page, `llms.txt`, and the JSON-LD all agree with no further work. |

**Recommendation: (b), and it is close.** The narrative loses nothing. "My first real view into healthcare operations" already establishes that Dentallytics was substantial, and the page is stronger when the only clinic count on it is the one Rob earned himself. Take (a) only if Rob has the client's blessing.

### 2.2 "advisor" fails the build. Decided, one thing to confirm

`scripts/lint-copy.mjs` bans `advised`, `advisor`, `advisory`, `audited`, added 2026-08-19 at Rob's instruction because copy law item 7 locks the credential. The draft line exits 1:

```
ERROR banned word "advisor"
```

`pnpm lint:copy` exiting 0 is a hard gate under AGENTS.md rule 1. The `copy-lint-ignore` marker is for code that discusses the rule, not for copy that breaks it.

**Fix:** delete the role noun. The program name carries the fact.

> Later, through the Canadian Digital Adoption Program, I worked directly with clinic owners on the gap between software, operations and care.

**Confirm separately, and this is the sharper question:** was Rob on the program's approved advisor roster, or did he do work funded by a CDAP grant? Those are different claims, and the first is checkable against a public directory.

### 2.3 The locked credential. Resolved, keep it

**Confirmed by Rob on 2026-08-19: "I went through twelve months of records for 50+ allied health clinics, one clinic at a time" is true.**

The draft removed it. Put it back, for three reasons:

1. **The homepage depends on it.** *"I kept finding the same revenue gaps in clinic after clinic"* rests entirely on having looked at a lot of clinics. Remove the evidence and the H1 is an assertion.
2. **It is not confined to this page.** It lives in `copy.ts:65` (`extendedCredential`, which is *also* the JSON-LD `Person.description` on this page), `copy.ts:70` (the stat row, rendered on the **homepage**), `copy.ts:151` (the meta description, currently 155 characters exactly), `public/llms.txt:5`, and `docs/COPY.md` item 7 marked **locked 2026-08-16**.
3. **It is the bridge the draft is missing.** Without it the page runs exposure → failure → Caretrics, and "Why Caretrics" arrives on feeling. With it, it arrives on evidence.

Use item 7's already-locked **first person** form, which has never shipped anywhere and exists for exactly this:

> I went through twelve months of records for more than fifty clinics, one clinic at a time, and kept finding the same four gaps.

**One structural consequence.** `extendedCredential` is third person by design because it feeds JSON-LD, and this page is first person throughout. Split it: a machine-only `about.schemaDescription` (third person, unchanged, feeds structured data) and first-person visible prose. That removes the voice seam the current page already has.

### 2.4 Contractions. Recommendation, needs a ruling

The site contains **zero** verb contractions today, in any data file or content entry. The draft has exactly one, `I've`, in the largest type on the page, then reverts to "It is difficult work", "That is what I am building", "I am a dad".

**Recommendation: hold at zero.** One contraction in an H1 and none anywhere else is a per-page voice, which is the worst of both. The existing About body proves warmth does not need them:

> Time is the thing people in care have least of, and it is the thing most software asks for more of. That is the whole reason I care about this work.

The H1 does not need the contraction anyway. `I spent twenty years building software.` is cleaner than `I have spent`, and it mirrors the locked credential's own opening.

If Rob wants contractions, it goes into copy law item 4 and every page changes in the same commit.

### 2.5 Two new employer names

Copy law item 7 permits exactly three on `/about/`: Trend Micro, Mitel, Pythian. The draft adds **Liquid Computing** and **IBM**. Either cut them or amend item 7 and verification row V3 in the same change. Confirm the relationship for each: direct employment, contract, or via acquisition.

### 2.6 Consent, not just memory

Four claims are not Rob's alone to confirm.

- **Family members who run clinics.** Unnamed but identifiable to anyone who knows him. Do they consent, and are any of them Caretrics customers or data sources? If so, the sentence implies arms-length observation while a commercial relationship exists.
- **"a dad to two kids."** This publishes a fact about identifiable minors on an indexed page, and `/about/` already renders `rob-family.png`. Photo plus "two kids" is more identifying than either alone. If it ships, record that it never gains names, ages, schools, or a second photo.
- **Athlete Builder.** If it had co-founders or investors, "the wrong economic model" is a public post-mortem on a shared venture. A courtesy heads-up, not permission.
- **The dental group's clinic count.** See 2.1.

### 2.7 Verification rows

Ten biography claims need rows in the `docs/COPY.md` table before they ship: Windsor upbringing, each employer, Dentallytics as the first healthcare view, the CDAP role, "more than once" on medical software companies, orthopedic surgeons as Athlete Builder's customer, the failure cause, allied-health workforce supply, the Big Brothers Big Sisters duration, and "twenty years". V4 and V8 are burned, so new numbering starts at **V13**.

Copy law item 8: biography lines stay flagged until Rob confirms. "Rob wrote it" is not the same as "Rob confirmed it" when the draft came from outside the repo.

### 2.8 Oxford commas

Site copy uses them: *"seeing, shipping, and rethinking"*, *"revenue, ownership, and building Caretrics"*, *"systems, flow, and leadership"*. The draft drops them seven times. Add them.

---

## 3. The copy

### 3.1 As it should render

> **H1.** I spent twenty years building software. Healthcare is where the work became personal.
>
> I grew up in a blue-collar family in Windsor, Ontario. Work meant showing up, helping where help was needed, and not making much noise about it. I carried that with me to Ottawa and into a career building software.
>
> Along the way I worked at Trend Micro, Pythian and Mitel. Each taught me something about running systems other people depend on.
>
> **H2. Where healthcare came in.**
>
> My first real view into healthcare operations came through Dentallytics, an analytics platform I built for a dental group. *(Or the 500+ scoping, per 2.1.)*
>
> Later, through the Canadian Digital Adoption Program, I worked directly with clinic owners on the gap between software, operations, and care. I also have family members who run clinics, and I have tried more than once to build clinical software companies.
>
> It is difficult work. The workflows are complicated and trust is earned slowly.
>
> I went through twelve months of records for more than fifty clinics, one clinic at a time, and kept finding the same four gaps.
>
> **H2. What the failures changed.**
>
> I built one startup around helping orthopedic surgeons deliver care protocols. Athlete Builder had a product I believed in and the wrong economic model.
>
> Those failures cost time and money. They also changed how I build. Stay close to the people doing the work, and test the business before the product.
>
> **H2. Why Caretrics.**
>
> Allied-health and rehab clinicians help people live better with pain, injury, and chronic conditions. There are not enough of them, and the clinics around them have to stay open.
>
> That is what I am building with Caretrics: a way for clinics to see the revenue and follow-up work that gets missed, give it an owner, and keep it moving without adding administration.
>
> **H2. Outside the work.**
>
> I like athletics, travel, AI experiments, and small projects that teach me something. I am a dad to two kids and have mentored with Big Brothers Big Sisters for over a decade.
>
> Time is the thing people in care have least of, and it is the thing most software asks for more of. That is the whole reason I care about this work.
>
> **Quote, serif, italic.** *"If it adds work to care, it has failed."*
>
> **Signature**, then the two closing routes.

### 3.2 Changes from the approved draft, shown not made

| Current | Proposed | Why |
|---|---|---|
| I've spent twenty years building software. | **I spent twenty years building software.** | Zero contractions on the site. Simple past also mirrors the locked credential. |
| as a digital advisor through the Canadian Digital Adoption Program | **through the Canadian Digital Adoption Program** | `advisor` fails `pnpm lint:copy`. |
| a dental service organization spanning more than 500 clinics | **a dental group** | See 2.1. True, but a third party's figure sitting beside a smaller one that is Rob's. |
| Trend Micro, Pythian, Liquid Computing, IBM and Mitel | **Trend Micro, Pythian and Mitel** | Copy law item 7 permits three. Amend the rule or cut the names. |
| *(absent)* | **I went through twelve months of records for more than fifty clinics, one clinic at a time, and kept finding the same four gaps.** | Restores the locked credential the homepage depends on, in first person, as narrative rather than a boast. |
| We need more of them, and we need the clinics around them to be sustainable. | **There are not enough of them, and the clinics around them have to stay open.** | "We" appears nowhere on the site. "Stay open" is what an owner worries about; "sustainable" is what a deck says. |
| One startup was built around helping orthopedic surgeons... | **I built one startup around helping orthopedic surgeons...** | Passive voice on the one sentence about his own failure. |
| test the business early and own the result | **test the business before the product** | "Own the result" is stock. The replacement is an actual lesson. |
| At the centre of all of it, I try to work hard, treat people well and build things that earn their place. | **cut** | The only sentence in the draft that could belong to anyone, sitting directly above the line that does the job properly. |
| *(seven places)* | **Oxford commas** | Site convention. |

### 3.3 Keep exactly as written

*"Work meant showing up, helping where you could and not making much noise about it."* and *"Athlete Builder had a product I believed in and the wrong economic model."* are the two best sentences in the draft. Specific, unflattering, checkable. Do not polish them.

---

## 4. Design system, non-negotiable

Rule 4: tokens only. No new colours, radii, or fonts.

### 4.1 Colour

| Token | Hex | Use |
|---|---|---|
| `--cream` | `#f9f9f6` | page background |
| `--white` | `#ffffff` | cards, inputs |
| `--ink` | `#14201b` | body and headings |
| `--ink-muted` | `#4b5a53` | eyebrows, secondary, meta |
| `--rule` | `#d9d8d0` | borders, hairlines |
| `--wash` | `#f1efe8` | already the outline-button hover fill and active stage tab. Do not use as a band background under a section containing an outline button. |
| `--forest-500` | `#0c3b2e` | dark bands, primary buttons, focus rings |
| `--forest-700` | `#082820` | footer |
| `--teal-700` | `#0f766e` | inline links |
| `--lime-500` | `#c8f57d` | **accent on dark only.** 12.6:1 on forest-700, **1.18:1 on cream.** Never text on a light background. |
| `--lime-100` | `#e8f5c8` | the "Write to me" band |

This page is a light page. **Lime does not appear on it.**

### 4.2 Type

- `--font-inter` for everything structural.
- `--font-serif` (Instrument Serif) **only** for the quote. Never a heading, never body.
- Mono is the system stack, used for eyebrows at 13px, uppercase, `0.08em`.
- Body 18px desktop / 17px mobile, line height 1.6. Never below 17 and 16.
- Sentence case throughout.

### 4.3 Space

`--gutter-desktop` 96px, `--gutter-mobile` 20px, `--section-pad-desktop` 96px, `--section-pad-mobile` 44px, `--label-col` 160px, `--label-gap` 48px, `--max-page` 1440px.

### 4.4 Breakpoints

Three ranges, not two. **This is the part a designer coming from the old brief will get wrong.**

| Range | Behaviour |
|---|---|
| **1440 (artboard 8a)** | Full desktop. |
| **768 to 1149.98** | Desktop layout, reduced chrome: `--gutter-desktop` 40px, `--label-col` 96px, `--label-gap` 32px, `--section-pad-desktop` 64px, and two-column blocks stack. Drops no content. No artboard exists and it does not get its own design. |
| **below 768 (artboard 8b)** | Mobile. Edited, not stacked. |

`pnpm check:layout` fails the build on horizontal overflow at **320, 390, 768, 900, 1024, 1280, 1440**. Any design must survive all seven.

### 4.5 Motion

`--dur-micro` 120ms for state under the pointer. `--dur-short` 200ms for change away from the pointer. `--ease-out` `cubic-bezier(0.16, 1, 0.3, 1)`.

A shared keyframe `rs-panel-enter` exists in `global.css`. `prefers-reduced-motion` disables all transition and animation globally in `tokens.css`, so **never put `opacity: 0` on an element an entrance animates**; put it in the keyframe's `from`, or reduced-motion readers get invisible content.

On this page motion is hover and focus states only. No scroll reveal, no count-up, no parallax, no ambient motion.

### 4.6 Accessibility

WCAG 2.2 AA. One `<h1>`. Semantic heading order, no level skipped. Focus visible everywhere, ring `--forest-500` on light. 44px minimum targets on mobile (`--tap-min`). No text inside images. Never colour alone for hierarchy. Everything works without JS, and this page needs none.

---

## 5. Page structure

Four zones: a header, then three bands. The label column, the site's structural signature at `96 + 160 + 48 = 304px` at 1440, runs the full height.

**Reading measure: 62ch, flush left, everywhere.** At 1440 the content column is 1040px, far too wide. At 18px Inter, 62ch is about 670px, which renders 66 to 70 characters of running English, the centre of the 58 to 72 target. Flush left, never centred: Evidence, Caretrics, and Principles all begin at the same x on the homepage, and centring breaks that spine. The roughly 370px of empty right margin at 1440 is where the portrait hangs.

### 5.0 One shared-component change, and only one

`Section.astro` currently requires `number`. On this page that renders `05 · About` with nothing numbered 01 to 04 above it. The numbers are a table of contents for one homepage scroll and are meaningless on an inner page. Make `number` optional so the label column can carry a plain word:

```ts
interface Props { number?: string; label: string; /* … */ }
```
```astro
<Eyebrow onDark={tone === 'dark'}>
  {number ? `${number}${UI.section.separator}${label}` : label}
</Eyebrow>
```

Output for the six homepage bands is byte-identical. No new component, no new tone. The gain: with `About` in the margin, the `<h1>` is free to be the real headline instead of the word "About". `pages.about.title` then splits into a `<title>` key and an `<h1>` key.

**The homepage `About.astro` band is not touched.** It is transcribed from artboards 8a and 8b. `/about/` gets its own composition and stops importing it, which makes the `extended` prop dead and frees `extendedCredential` for the split in 2.3.

### 5.1 Zone 0, header

Not a `Section`: no number, no top rule (the nav already has one), asymmetric padding. Mirror `.section__frame` in about twelve lines of page-scoped CSS with a comment pointing at `Section.astro`.

- Frame: `max-width: var(--max-page)`, `margin: 0 auto`, `padding: 96px var(--gutter-desktop) 72px`, grid `var(--label-col) minmax(0, 1fr)`, `gap: var(--label-gap)`.
- Label column: `<Eyebrow>About</Eyebrow>`, `padding-top: 10px` to meet the H1 cap height.
- Content column: nested grid `minmax(0, 1fr) 320px`, `gap: 48px`, `align-items: start`.
- `<h1>`: 48px / 1.1 / `-0.028em`, `max-width: 22ch`, `text-wrap: pretty`. At 90 characters it is the longest heading on the site; the hero H1 is 56.
- Two intro paragraphs, 18px / 1.6 / 62ch, 24px apart.
- Portrait: `<Image width={320} height={384}>`, `--radius-xl`, `1px solid var(--rule)`, `loading="eager"`.
- Facts rail: `grid-column: 1 / -1`, `margin-top: 48px`, `border-top: 1px solid var(--rule)`, `padding-top: 24px`.

**Mid range:** nested grid collapses to one column, `gap: 32px`, portrait `width: 100%; max-width: 320px`. Narrowing instead of stacking would leave 288px for a 48px H1 at 768.

**390:** eyebrow, H1 at **32px**, portrait `width: 100%; height: 280px; object-fit: cover`, then paragraphs at 17px, then the rail. Portrait between H1 and body mirrors the mobile hero order. At 32px on a 350px column the H1 runs about six lines, so this is the strongest case on the site for a `headingDesktop` / `headingMobile` pair.

### 5.2 The facts rail

A definition list, not a stat display. `<dl>` with one `<div>` per pair. `<dt>` styled as `Eyebrow` (13px mono, uppercase, `0.08em`, `--ink-muted`), `<dd>` 17px / 1.5 `--ink`, `margin: 0`. Spans the full content column, not the 62ch measure.

| Term | Value |
|---|---|
| Based in | Ottawa, Canada |
| Building | Caretrics |
| Building software | 20+ years |
| Clinics seen firsthand | 50+ |

It cannot become a large stat display: no `--text-metric`, no box, no borders between cells, no icon, no colour. **The largest glyph in the rail is the same size as body copy.**

Big Brothers Big Sisters stays in the closing prose. It is a character fact, not a spec. Employer names stay in the narrative; a list of them in a rail is a logo wall rendered as text.

- **1440:** `repeat(4, minmax(0, 1fr))`, `column-gap: 40px`, one row.
- **Mid:** `repeat(2, minmax(0, 1fr))`, `column-gap: 32px`, `row-gap: 20px`.
- **390:** single column, each cell after the first with `border-top: 1px solid var(--rule)` and `padding-top: 16px`, no gap, because the rule is the gap. Values drop to 16px.

> Note: `Clinics seen firsthand / 50+` splits the locked short form `50+ clinics, firsthand` across a term and a value. That is a rewrite of a locked string and needs sign-off plus an item 7 edit. If declined, the rail drops to three cells and the credential lives in prose only.

### 5.3 Zone 1, Background

`<Section label="Background" tone="cream-rule">`

Two `<h2>`s in one band, not two bands. Four bands of continuous first-person narrative separated by 192px of padding and a rule would chop the story into unrelated announcements.

- `<h2>` 26px / 1.25 / `-0.015em` (mobile 24px). Paragraph to next `<h2>`: 48px.
- Paragraphs 18px / 1.6 / 62ch, `gap: 24px`.
- Optional candid image, last in the band: `width: 100%` of the 62ch column, `aspect-ratio: 3 / 2`, `object-fit: cover`, `--radius-xl`, `1px solid var(--rule)`, `loading="lazy"`. Inline in the reading column, not hung in the right margin, because that margin disappears below 1150.
- **390:** image `width: 100%; height: 240px`, h2 24px, paragraphs 17px, `gap: 20px`.

### 5.4 Zone 2, Caretrics

`<Section label="Caretrics" tone="cream-rule">`

Restrained means **no card**. A container reads as an offer. Plain paragraphs then a button, as the homepage 02 band does.

- `<h2>` "Why Caretrics.", two paragraphs at 62ch.
- `padding-top: 32px`, then the dark `Button` with `COPY.caretrics.cta` ("See Caretrics"), external, `--forest-500` fill, white text, `--radius-lg`, 48px tall, hover `--forest-700` at `--dur-micro`.
- 20px below, on its own line, the quiet link `COPY.caretrics.togetherenLink` ("See selected work →"): 16px / 600 / `--teal-700`, `min-height: var(--tap-min)`, external. **Never beside the button**, so the hierarchy is unambiguous.
- **390:** button full width; link 44px tall beneath.

### 5.5 Zone 3, Outside

`<Section label="Outside" tone="cream-rule">`

- `<h2>` "Outside the work.", the closing paragraphs at 62ch.
- `padding-top: 40px`, then `<blockquote>`: `--font-serif`, 30px, italic, `line-height: 1.3`, `max-width: 24ch`. Scoped locally, **not** `prose.css`'s blockquote treatment. Consistency with `.about__quote` matters more here than with article prose.
- **Signature** directly under it, reusing the exact values from `About.astro`: `rob-signature.png`, 176px wide, `margin: 0 0 -14px -13px`. The negative left margin exists because the ink sits 61/800 in from the left of its canvas; it pulls the first stroke onto the text edge. The PNG is genuinely transparent, so no blend mode. **The ink is near-black, so it never goes on a forest band.**

### 5.6 Height budget

Target three to four viewports at 1440 (900px each). Header about 780, Background about 1150, Caretrics about 620, Outside about 700, plus the footer. Roughly 3.7 viewports. If a zone grows past this, cut copy rather than tightening leading.

---

## 6. Images

| Asset | State | Requirement |
|---|---|---|
| Portrait | `rob-portrait.jpg` is **400×400** and already flagged **V10** as below 2x for its slot | A new natural portrait, **at least 1200px on the long edge**, portrait crop tolerant to 320×384 desktop and 100%×280 mobile. This is a blocker for the header. |
| Candid | none exists | Optional. Athletics, travel, or community, with a visible connection to Rob. 3:2, at least 1600px wide. No staged founder photography, no stock travel. |
| Signature | `rob-signature.png`, 800×800, transparent | Ready. Reuse as specified. |
| `rob-family.png` | in use on the homepage About band | Do not add a second family photo here. See 2.6. |
| `rob-sketch.png` | retired | Do not use. |

All images go through `astro:assets` `<Image>` from `src/assets/images/`. Alt text lives in `src/data/copy.ts`, never inline.

---

## 7. What not to do

- Employer logo wall, in images or as a text list in the rail.
- Animated career timeline, or any timeline.
- Large statistic displays, count-ups, or oversized year markers.
- A separate card per company, or card-heavy storytelling generally.
- A full-screen manifesto band.
- A product screenshot or any Caretrics UI. None is approved and none is needed.
- Generic AI or futuristic imagery, gradients implying technology, glassmorphism, aurora effects, parallax.
- Scroll-jacking or scroll-triggered reveals. They fail no-JS, fast scroll, Ctrl+F, and print.
- Lime anywhere on this page. It is a light page.
- Centred body text.
- A second accent colour.
- Turning each paragraph into its own card on mobile.
- Describing Rob as a clinic owner, DSO operator, consultant, advisor, thought leader, serial entrepreneur, or healthcare expert. Let the details do it.
- Making every personal interest lead back to a product pitch.

---

## 8. Acceptance criteria

### Enforced mechanically

- `pnpm gate` exits 0. Six steps: `astro check`, `lint-copy`, `astro build`, `check-redirects`, `check-notes`, `check-layout`.
- `pnpm lint:copy` exits 0, which means no em dashes, no banned words, and **no `advisor`**. Warning baseline is 3, all `dashboard`. A fourth is yours.
- `pnpm check:layout` passes at all seven widths.
- Meta description is at or under **155 characters**, the clamp in `src/lib/seo.ts`.

### Verified by review

- The page reads comfortably in under three minutes.
- Every visible sentence is first person. Third person survives only in the JSON-LD.
- One `<h1>`, no heading level skipped.
- Caretrics is clearly the current work without dominating the page.
- Failure is present without being performative.
- No section exists only for visual variety.
- Roughly three to four viewports at 1440.
- Mobile is edited, not merely stacked.
- Keyboard pass: every control reachable and visibly focused.
- Read it once as a clinic owner would.

### Truth checks, and these matter most

- Every claim in section 2.7 has a verification row, confirmed or struck.
- The consent items in 2.6 are settled before publication, not after.
- Nothing on the page contradicts the homepage, `public/llms.txt`, or the JSON-LD.
- A reader can accurately describe Rob's healthcare path after one read.
