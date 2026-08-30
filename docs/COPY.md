# robsaric.com copy deck

Words win here; layout wins in `docs/DESIGN-SPEC.md`. Every string on the site comes from this file, `src/data/*.ts`, or a content entry. Nothing is written inline in a component.

## Copy law (applies to every string, every content entry, every meta description)

Human-centred, no AI slop. Enforced partly by `pnpm lint:copy` (see `scripts/lint-copy.mjs`) and mostly by review.

**Errors protect commitments. Warnings are taste.** (Set 2026-08-19.) The lint fails the build only for a broken promise: a locked factual claim, or a house rule Rob has explicitly set. Everything else, including the whole hype and jargon vocabulary, is a warning for a person to judge. The two used to carry equal force, which meant the gate could push copy into unnatural wording just to go green, and that is backwards. **An authentic human voice matters more than mechanical word control.** These rules will change over time; treat them as a memory of decisions already made, not a cage. Before adding a word to the error list, ask whether it protects a promise or a preference. Preferences are warnings. Code comments are not copy and are not linted.

1. **No em dashes** (U+2014) anywhere in site copy or content. Use a comma, colon, period, or a new sentence. Middle dots (·) and arrows (→) are fine, they are design punctuation.
2. **No chatbot tone.** No "Great question", "Absolutely", "I love this", "Hope this helps", no exclamation marks in body copy, no compliments to the reader as an opener, no hedge stacks.
3. **No hype or empty verbs.** Banned: simple, powerful, seamless, intuitive, easy, robust, modern, smart (as declared adjectives), best-in-class, world-class, cutting-edge, next-gen, revolutionary, game-changing, industry-leading, unlock, transform, supercharge, elevate, empower, leverage, synergy, optimize. If a sentence needs one of these, it needs a specific noun or number instead.
4. **Machine-rhythm tells.** At most one "not X, it's Y" contrast per section. Two examples where two carry the point, not three. Do not end two consecutive paragraphs on a punchline. Do not announce the point ("Here's the thing:"). Vary sentence length. Active voice.
5. **Healthcare register.** "Clinic", never "practice". "Provider" for headcount, "clinician" only when the care relationship is the point. "Jane.app" on first mention on a page, "Jane" after that. Never imply a Jane partnership or endorsement; "reads a clinic's Jane data with read-only access" is the approved shape. Patient examples use "First L." format and never real data.
6. **Numbers.** Every public number carries a line saying what it counts and where it came from. "Identified is not collected." No clinic counts beyond the credential line. Never say "audited", "advised", "ex-DSO", "by hand", or "the books".
7. **The credential (locked 2026-08-16; the ban narrowed 2026-08-19).** The banned words are the VERBS: "advised" and "audited". They are the claim. The NOUNS "advisor" and "advisory" are not banned, because a named role is a checkable job title, not a claim about how many clinics were advised. Rob was on the Canadian Digital Adoption Program approved advisor roster, confirmed 2026-08-19, so "digital advisor through the Canadian Digital Adoption Program" is permitted. Short: `50+ clinics, firsthand`. First person: "I went through twelve months of bookings, visits, and billing for more than fifty clinics, one clinic at a time, and kept finding the same four gaps." Third person (About page, JSON-LD): "Rob Saric spent twenty years building software, including years as a systems architect inside large managed health-service organizations. He built Dentallytics, an analytics platform for dental groups, then went through twelve months of bookings, visits, and billing for 50+ allied health clinics, one clinic at a time, and found the same four gaps almost every time." ("records" became "bookings, visits, and billing" 2026-08-27, Rob's re-ruling: the concrete nouns name what was actually read. The claim's substance is unchanged.) Dentallytics is named without "and sold". Trend Micro, Mitel, Pythian may be named on `/about/` only, text only.
8. **Do not invent.** Now items, field notes, dates, dollar figures, and biography lines flagged `[VERIFY]` or `[DRAFT]` below stay flagged until Rob confirms them. Draft entries carry `draft: true` and are hidden from production builds.
9. **Vision line** may be used but never over-explained: "clinics that do good do well." Never the word "simple".

## Global

- Site name: Rob Saric
- Home `<title>`: Rob Saric · Founder of Caretrics
- Home meta description: Rob Saric builds Caretrics with allied-health and rehab clinics that run on Jane.app. Notes on clinic revenue, ownership, and AI that shows its work.
- Skip link: Skip to content
- Nav links: My notes · About · Write to me · Caretrics (button, external). "Field notes" renamed "My notes" 2026-08-27 (Rob's call; the URL `/field-notes/` and the card type "Field note" stay). Write to me in the nav since 2026-08-24 per the reconciled authority review; Principles keeps its homepage link (02) and its footer link.
- Menu toggle label: Open menu / Close menu

## Hero

- Eyebrow (desktop): Founder of Caretrics · Revenue recovery operations for clinics on Jane.app
- Eyebrow (mobile): For clinics on Jane.app
- H1: I kept finding the same revenue gaps in clinic after clinic.
- Body, paragraph 1: I'm Rob Saric. I spent twenty years building software, then went through twelve months of bookings, visits, and billing for more than fifty clinics, one clinic at a time. (the locked credential, item 7)
- Body, paragraph 2: That work became Caretrics. It helps allied-health and rehab teams identify the work affecting revenue, give it a clear owner, and verify what changed, without replacing Jane or the people making the decisions.
- Primary CTA: See how Caretrics works (external, caretrics.com/product; the destination continues the label's promise, per the 2026-08-24 rule)
- Secondary CTA: Read my notes (`/field-notes/`). Outline button on desktop; on mobile a text link "Read my notes →" below the full-width primary button.
- Tagline: Evidence-led. AI-assisted. Human-controlled. (restored 2026-08-29)
- Portrait alt: Rob Saric
- The eyebrow carries the page's FIRST "Jane.app"; every later homepage mention is plain "Jane".

Hero history, three rulings in three days: Rob's verbatim Hormozi hero shipped 2026-08-27 ("I reviewed 50+ clinics..."); on 2026-08-29 he adopted the cleaned opening from an external review after two independent reviews flagged the same boundary breach ("verifies the revenue is recovered" vs "identified is not collected"). Cleaned means: the review's em dash removed, the locked credential restored as paragraph 1, present-boundary paragraph 2 ("verify what changed"), Jane.app once, sentence-case CTAs, and a CTA the destination can honor. Every open tension from the 08-27 hero closed with this replacement, and the tagline returned, reversing the 08-27 cut and restoring the 08-20 "Keep". To kill the echo with the new H1, the 01 body's "I watched the same pattern in clinic after clinic" became "I watched it repeat in" (same date). The 2026-08-23 body architecture carries forward.

## Now strip

Visually hidden H2: What I am working on now

| Kicker | Title | Blurb (desktop only) | Link | Status |
|---|---|---|---|---|
| Writing | Unbooked at the desk, seventy percent never come back | Two years of first visits at one clinic, and the one thing at the front desk that predicted whether a new patient came back. | `/field-notes/2026-08-18-unbooked-at-the-desk/` | live 2026-08-18 |
| Building | The Caretrics revenue diagnostic | What a first read of a clinic's Jane account looks for, and what it deliberately leaves alone. | (field note, TBD) | `[DRAFT, V9]` |
| From the field | What clinic operators keep asking about | The three questions that come up in almost every conversation, and my current answers. | (field note, TBD) | `[DRAFT, V9]` |

Drafts carry `draft: true` in `src/data/now.ts` and are hidden in production. "Ownership is the difference between a report and a result" was the third placeholder; the real Writing item replaced it.

## 01 · What I found

Restructured 2026-08-27 at Rob's direction: the old 01 Evidence and 02 Caretrics read as a product pitch interrupting a personal site. They are now one arc, the realization, the proof, then Caretrics as the answer; the Caretrics block keeps its label but loses its number, and 03 to 06 renumber to 02 to 05.

- Eyebrow: 01 · What I found
- H2: I realized why the money keeps slipping.
- Body (desktop): Not carelessness. The report exists, somebody reads it, and the task it points at belongs to no one in particular. I watched it repeat in places full of people doing real good and quietly eating the cost. Everyone selling to clinics was selling demand, more new patients, more bookings. I became obsessed with the other side: operations, and recovering the money a clinic has already earned. Here is one signal, from detection through to a verified outcome.
- Body (mobile): The report exists, somebody reads it, and the task it points at belongs to no one. Everyone sells demand; I became obsessed with recovering money already earned. Here is one signal, from detection to a verified outcome.
- The obsession beat (Rob's line, added 2026-08-27) does double duty: it is principle 1 ("recover before you acquire") in story form, and it sets up the Revenue Recovery Diagnostic name in the Caretrics block that follows.
- Metric (**restored 2026-08-24**, cut 2026-08-19): `$127,000` · note "Identified across four gaps in one clinic, over one year. Identified is not collected." · mono link "How I counted this →" (`/how-i-counted/`). The 2026-08-19 cut was waiting on the per-gap breakdown; Rob confirmed it 2026-08-24, matching what caretrics.com publishes: unbilled claims $52,000 · no-shows $37,000 · missed re-bookings $24,000 · missing re-evaluations $14,000 (sums to $127,000). The breakdown is written down in `/how-i-counted/` ("The $127,000"), which the metric links to. Cohort: one clinic, 25 providers, the twelve months of June 2025 through May 2026. On mobile the metric sits after the body, before the panel.
- Signal eyebrow: The signal
- Exit link: More of these, in my notes → (`/field-notes/`). Added 2026-08-19 so the strongest argument on the page does not dead-end in "Start again".
- Methods link: How I count and verify clinic findings → (`/how-i-counted/`). Added 2026-08-24 with the methods page, below the exit link.
- Signal: 17 insurance items have had no activity in 21 days.
- Steps (`src/data/evidence-steps.ts`):
  1. Detected / kicker "Signal detected" / body "Seventeen insurance items on one clinic's account show no status change in 21 days. Caretrics flags the group, not the individual claim, because the pattern is the finding." / source "read from Jane · read-only · grouped by days since last activity"
  2. Evidence / "Evidence reviewed" / "Each item links back to the visit it came from, the date it was submitted, and the last status recorded. Nothing is inferred. Where a field was missing, the item says so instead of guessing." / "per-item record · no derived values · gaps disclosed"
  3. Owner / "Owner assigned" / "The clinic assigns the group to a person. Caretrics does not decide who. It records the name and the date, so the work stops being nobody's in particular." / "assigned by the clinic · named by role · timestamped"
  4. Action / "Action completed" / "The owner resubmits, corrects, or writes each item off. The choice is logged against the item, never against the person who made it." / "one action per item · reversible · audit trail retained"
  5. Verified / "Outcome verified" / "An item only closes when its status changes in Jane. Identified is not collected, and the record shows plainly which of the two happened." / "confirmed against source data · identified and collected reported separately"
- Controls: Next step / Start again / Step N of 5

## Operator proof (unnumbered band closing the 01 arc, after the Caretrics block)

Added 2026-08-24: the external-proof layer the authority review called the site's largest gap. One named clinic-operator quote, verbatim from caretrics.com (fetched 2026-08-24); Rob approved its reuse here the same day. "Recovered" is Ryan's own word about his own result and stays untouched; site copy keeps "identified". The band carries no section number on purpose: 01 to 05 are the homepage's table of contents, and one quote does not renumber it. Moved below the Caretrics block 2026-08-27 (it names "the Caretrics team", so ahead of that block it floated) and the "From a clinic owner" eyebrow became visible, not aria-only, the same day. Strings live in `src/data/operator-proof.ts`; do not edit the quote.

- Quote: "No-shows and late cancels were costing us more than we realized, and we never had a clear number on it. Rob and the Caretrics team gave us the number, then helped our front desk stay on top of exactly who to follow up with first. We recovered about $2,800 last month, and our team now runs the week on top of our operational priorities instead of chasing them."
- Attribution: Ryan Sleik · Owner, Kootenay Therapy Center

## Caretrics (continues 01, unnumbered since 2026-08-27)

- Eyebrow: Caretrics (label only; the block continues the 01 arc rather than starting a section)
- H2: So I am building Caretrics.
- Body (desktop): It starts with the Recovery Scan: a read-only pass over a clinic's own Jane data, across the five stages revenue moves through. It works between Booked and Paid, and it shows where money slips and what to fix first. Select a stage.
- Body (mobile): It starts with the Recovery Scan: a read-only pass over a clinic's own Jane data, across the five stages revenue moves through. It shows where money slips and what to fix first.
- Noun alignment 2026-08-29, superseding the 2026-08-27 "Revenue Recovery Diagnostic" naming: verified against live caretrics.com, "Diagnostic" appears zero times there while the Recovery Scan is the named entry (producing the Recovery Report, discussed in the Recovery Review, yielding the Action Plan, worked on the Recovery Board). One vocabulary across both sites; on this site the five-stage read is described as the method behind the Scan, never a sixth object. The draft Now item renamed to "The Recovery Scan" the same day. "Proprietary" stays unused on principle: the method is owned by being named and shown (`/how-i-counted/`), not asserted.
- Panel eyebrows: The clinic's question · Example signals
- Stages (`src/data/stages.ts`):
  1. Found (not owned) / "Are the right patients finding you and booking a first visit?" / "Referral sources · first-visit bookings · enquiries that never became appointments" / "Caretrics does not measure this stage. A gap here often gets blamed on a later one."
  2. Booked / "Does the schedule hold once it is set?" / "No-shows · late cancellations · scheduling gaps nobody fills" / "Read from the clinic's own calendar data."
  3. Treated / "Are patients completing the care they started?" / "Plan-of-care completion · drop-offs · visits that happened and were never invoiced" / "Read from visit and billing records, never from clinical judgement."
  4. Retained / "Does the plan of care finish, or fade?" / "Missed re-bookings · re-evaluations never scheduled · authorizations that expired with visits left" / "The stage where the most money quietly leaves."
  5. Paid (default open) / "Does the completed work turn into money?" / "Unbilled visits · aging receivables · claims that never went out" / "Identified only. Caretrics does not bill or collect."
- H3: What Caretrics does
- Body: It reads twelve months of a clinic's Jane data, groups missed revenue and follow-up work into an Action Plan, and records who acted and what changed.
- Trust line: Read-only access · Cancel anytime · Revoke anytime
- H3: What it does not do
- Body: It does not send bills, collect money, or decide what a patient clinically needs. It identifies. Your team decides.
- Mobile combined paragraph: It reads twelve months of a clinic's Jane data, groups missed revenue and follow-up work into an Action Plan, and records who acted and what changed. It does not send bills, collect money, or decide what a patient clinically needs.
- CTA: See Caretrics

Compressed 2026-08-24 per the reconciled authority review: the homepage explains the operating idea, the product page lists the pieces. The component inventory (Recovery Report, Action Plan, weekly report, Coverage Alerts, Patient Follow-Ups, Aging AR workspace) moved to caretrics.com/product. "Found sits outside it" dropped from the boundary: the Found stage note already carries it. The Togetheren row moved out of this section entirely; the footer's "Togetheren, selected work" link and the `/about/` page's "See selected work →" link are the remaining surfaces (V11).

## 02 · Principles

- Eyebrow: 02 · Principles
- H2: Principles I use when reviewing clinic operations.
- Homepage shows 1 to 3; `/principles/` shows all five. Bodies below are the desktop long form; the mobile short form is the first sentence (or as marked).

1. **Recover before you acquire.** If money is slipping out of the current operation, more patients mostly means more slipping. Handle the missed follow-ups and unbilled visits first, then spend on growth. (mobile: first sentence)
2. **A signal without an owner is just another dashboard.** A finding needs a person and a next step. Otherwise it sits on a screen while the money waits. (mobile: both sentences)
3. **AI must show its work.** When money or patients are involved, anything automated should say what it read, what it skipped, and what it is unsure about. If it cannot, it does not get to make the call. (mobile: "Anything automated should say what it read, what it skipped, and what it is unsure about.")
4. **Identified is not collected.** A scan identifies money that may be slipping. Nothing counts as recovered until it lands. So the proof is what changed afterward: the claim that went out, the patient who rebooked, the authorization renewed before the visit. I would rather show a small change that happened than a large one on a slide. Every public number I use is held to that line, here and at Caretrics.
5. **Billing problems usually start upstream.** By the time it shows in billing, the miss usually happened earlier: at booking, in the plan of care, in a re-evaluation nobody scheduled. Trace it back through Found, Booked, Treated, Retained and Paid, and look for the stage that broke.

- Per-item link: The note behind this one → (only when a note slug is set; none are set yet)
- Homepage link: See all five principles →
- `/principles/` H1: Five principles for reviewing clinic operations
- `/principles/` intro: Written down so a clinic owner can hold me to them. If one does not match what you see at your front desk, write to me.
- `/principles/` meta description: Five principles Rob Saric uses when reviewing clinic operations: recover before you acquire, a signal needs an owner, AI must show its work, identified is not collected, billing problems start upstream.

Principles 4 and 5 come from design v4 (7a), where the list had six; "Good systems create flow" (2011) is retired from the list and lives in the archive.

## 03 · My notes

Renamed from "Field notes" 2026-08-27 (Rob's call, made personal). The URL `/field-notes/` is permanent and the card type "Field note" keeps its name; only the visible surfaces rename. "Shipping" left the H2 the same day for plainer language.

- Eyebrow: 03 · My notes
- H2: What I am seeing, building, and rethinking.
- Body: Kept in public, in order. The wrong turns stay in.
- Header link: All notes → · Mobile bottom link: See all notes →
- Filter pills: All, then only the tags carried by notes actually in that grid, in `NOTE_TAGS` order (Clinic revenue · Billing and insurance · Patient flow · AI and trust · Building Caretrics · Founder notes). Below two represented tags the row is not rendered, so a pill never leads to the empty state.
- Empty state: Nothing filed under this one yet.
- Card types: Field note · Shipped · Changed my mind
- Notes (`src/content/notes/*.md`). Live: `2026-08-18-unbooked-at-the-desk` (2026-08-18), `2026-08-19-i-took-my-own-number-down` and `2026-08-19-i-only-checked-the-widths-i-designed-for` (both 2026-08-19). The two 08-19 notes are written from events in this repo that are verifiable in git history: the metric cut in `82b38da` and the mid-range layout bug measured in `0c016fe`. They invent no clinic data, which is why they could be written and the six seed notes could not. The widths note was retitled "A clean report is not a clean clinic" and inverted 2026-08-25 to lead with the clinic and compress the website story to a confession (the rs-voice widths test, which it had failed); the slug is unchanged because the filename is the permanent URL. The number-down note was rebuilt 2026-08-27 through the rs-voice post gate (Rob: no lesson up front, chronology structure, nothing shareable): retitled "If a vendor needs a week, you are looking at a claim" (slug unchanged, the URL is permanent), inverted to lesson-first (the vendor test opens, the homepage story is the confession that earns it), the exit lands in the reader's next vendor meeting, an "Update, five days later" section closes the loop with the /how-i-counted/ link, and it carries the $127,000 stat for its OG card; `updated: 2026-08-27` drives the Updated date line. A Codex review the same day (a rejected third-party rewrite prompted it) fixed the note's own boundary drift: the body now says the figure was "identified, not collected" in the sentence that introduces it, the OG stat label reads "identified in one clinic, not collected" (with context "off this page for five days, until the breakdown existed") so the share card cannot imply recovery, "the working" became the concrete "rows", the title names the vendor so it stands cold, the opener runs two examples instead of three (copy law item 4), and the update closes on the reader ("Hold me to the same test you hold them to") rather than on the workflow. Still `draft: true` `[DRAFT, V9]`: the six seed entries transcribed from the artboard. Each card body is the note's `summary`; each seed file needs a real body before `draft` is removed.
- `/field-notes/` H1: My notes, and nothing else in the page header. The line "Kept in public, in order. The wrong turns stay in." belongs to the section intro and was printing twice on this page until 2026-08-19. · meta description: Notes from Rob Saric on clinic revenue, ownership, and building Caretrics. Kept in public, in order.
- Article byline (field-note articles only, added 2026-08-24): "By Rob Saric · Founder of Caretrics", under the date in the article header; the name links to `/about/`. The JSON-LD already carried the author; now the reader sees it too. Archive posts stay as written, no byline.
- Updated line: when a note carries `updated` frontmatter, the date line reads "[published date] · Updated [updated date]".
- OG share cards (added 2026-08-25): every published note ships a generated 1200x630 card at `/og/notes/<slug>.png` (`pnpm generate:og`, committed under `public/og/notes/`). On the card: the note's `type` and full date as the eyebrow, the title anchored to the footer rule, then the avatar mark, "Rob Saric" and "robsaric.com" (`src/data/og-card.mjs`). Design approved 2026-08-25 from the claude.ai/design "Field Note OG Cards" sheet: 9a dark with the 92/84/76 title ladder, plus the 9c stat slot when a note carries `stat` + `statLabel` (+ optional `statContext`) frontmatter, the avatar added by Rob; transcribed in `scripts/og-card-template.mjs`. Stat strings state what they count ("against 15% booked at the desk · one clinic, two years"). Other pages keep `og-default.png`, which regenerates from the same pipeline (`renderSiteCard`, strings in `og-card.mjs` `OG_SITE_CARD`: the hero line, kept in step by hand, with the current portrait on the lime backplate). Regenerated 2026-08-29, replacing a stale static asset that carried the old studio portrait into every link unfurl.

## 04 · About

Rewritten 2026-08-27 at Rob's direction: "Where the standard came from." read as self-regard. The band is now the belief, in his words. The BBBS line moved off the homepage (it lives on `/about/`, V7 still applies there); the creed now leads here and signs the `/about/` card, superseding the 2026-08-25 division-of-labor ruling.

- Eyebrow: 04 · About
- H2: Why I care.
- Body: People who do good should do well. I am tired of the opposite: people who contribute little, monetizing the people who carry the world. Clinicians spend themselves helping others live with pain and injury. The clinics around them should thrive for it, not struggle.
- Mobile body: first two sentences.
- Quote: "If it adds work to care, it has failed."
- Under the signature, one mono line replacing the three stat rows (2026-08-27, Rob's call: the resume register broke the band's emotion, and both claims already live in the hero prose and the `/about/` facts rail): Founder of Caretrics · Ottawa
- Photo alt: Rob Saric outdoors
- Signature alt: Rob Saric (`rob-signature.png`, under the quote, signing the standard)

Change from the artboard: "50+ clinic owners advised" became "50+ clinics, firsthand" (locked credential form).

## 07 · /about/ page

Its own composition (`src/pages/about.astro`), not the homepage About band. Built 2026-08-19 from `docs/ABOUT-PAGE-BRIEF.md` and the claude.ai/design turn 9 artboards. Strings live in `COPY.aboutPage`.

- Label: About (plain word in the label column; `Section` `number` is optional as of 2026-08-19, because 01 to 05 are a table of contents for one homepage scroll)
- H1: I spent twenty years building software. Healthcare is where the work became personal.
- Facts rail (definition list, values at body size, never a stat display): Based in / Ottawa, Canada · Building software / 20+ years · Clinics seen firsthand / 50+
- Background opens on the reason, not the resume: "My father battled illness for ten years. Watching that is what made healthcare personal for me, before it was ever a business." Confirmed true by Rob 2026-08-19. The wording is a rewrite of the claude.ai/design line "After watching my father battle illness for 10 years" into the house register; Rob should own the final words.
- Zones: Background ("Where healthcare came in." and "What the failures changed."), Caretrics ("Why Caretrics."), Outside ("Outside the work.")
- The standard sits in a card at the end: serif italic 28px (24 mobile), signature, then "Rob Saric, founder of Caretrics". The card is `fit-content` capped at 722px.
- Card quote: "People who do good should do well." Rob's pick 2026-08-25 from the About refinements canvas. As of 2026-08-27 the creed also leads the homepage About band body (section 04, "Why I care."), superseding the one-surface division of labor; the test line ("If it adds work to care, it has failed.") remains that band's signed quote and the `/how-i-counted/` standard. The line is used, never over-explained (vision-line rule).
- Outside photo strip, LIVE 2026-08-29 with the design's three slots (O1-O3, 320x213 desktop): the Jane Summit shot (`rob-portrait-caretrics.png`, shared with the hero), the family group shot (`rob-family-together.jpg`), and the trail shot (`rob-hiking.jpg`). Captions: "The Jane Summit, 2026" · "Family day at the park" · "On the trail, above the valley". Drafted by Claude at Rob's direction 2026-08-29, written only to what the photos visibly show; Rob's wording overrules anytime (V14 resolved).
- Header portrait replaced 2026-08-29 with the head-and-shoulders shot Rob delivered (`rob-portrait-about.png`, crops 5:6 with the face on the upper third); the studio `rob-portrait.jpg` stays in the repo unused.
- Exits: "Write to me →" (`/contact/`) · "Read my notes →" (`/field-notes/`). Softened from "Write to me and tell me where I am wrong →" 2026-08-25: the challenge line stays on the homepage band heading and the `/how-i-counted/` exit, where it follows the evidence; the About exit is a plain door.

`Clinics seen firsthand / 50+` splits the locked short form `50+ clinics, firsthand` across a term and a value. `[VERIFY V13: item 7 sign-off for the split, or the rail drops to two cells and the credential lives in prose only]`

The claude.ai/design export rewrote copy in both artboards. Those rewrites were NOT applied; they are listed for a ruling in `docs/ABOUT-PAGE-BRIEF.md`. The approved copy is what ships.

- `/about/` H1: About
- `/about/` body: the About body above, then the third-person credential paragraph (Copy law item 7), then: "Before Caretrics I spent years as a systems architect inside large managed health-service organizations, and earlier at Trend Micro, Mitel and Pythian." `[VERIFY V3]` (V2 confirmed 2026-08-24)
- `/about/` meta description: Rob Saric, founder of Caretrics in Ottawa. Twenty years building software, 50+ clinics firsthand, and one standard: if it adds work to care, it has failed.

## 05 · Write to me

- Eyebrow: 05 · Write to me
- H2: Tell me where I am wrong.
- Body (desktop): You run the clinic. You see things I cannot. If a principle does not match what you see at your front desk, or you know where money slips that I have not mentioned, write to me. I read and answer everything myself. ("write to me" links to `/contact/`)
- Body (mobile): You run the clinic. You see things I cannot. Write to me. I read and answer everything myself.
- Card H3: Get the notes.
- Card body (desktop): Occasional notes on what I saw in a clinic and what I would check in yours. No schedule I cannot keep.
- Card body (mobile): Occasional notes on what I saw in a clinic and what I would check in yours.
- Label: Email address · Placeholder: you@clinic.com · Button: Subscribe · Loading label: Subscribing…
- Invalid error: That does not look like an email address.
- No-endpoint fallback link: Email me and I will add you. (`/contact/`)
- Newsletter backend: Resend contacts (segment + topic) via `POST /api/subscribe/`; see README "Environment".

## Footer

- Line: I build things to help people live better lives.
- Byline: Rob Saric · Founder of Caretrics · Ottawa.
- Links: Write to me (internal, `/contact/`) · LinkedIn · X · GitHub · View source ↗ · Caretrics ↗ · Togetheren, selected work (mobile: Togetheren)
- Archive line: Earlier writing on systems and flow, 2009 to 2019, is in the archive. ("the archive" links to `/archive/`)

Change from the artboard: "I look for people building things that help others live better lives." became "I build things to help people live better lives." (2026-08-19). The artboard line described what Rob looks for in other people, which is a scout's posture on a site written entirely in the first person about what he did. "to help" rather than "that help" is deliberate: it claims the intent, not the outcome, which is the same discipline as "Identified is not collected".

Change from the artboard: "2011 to 2019" became "2009 to 2019" (the oldest post is July 2009).

## Inner pages

- `/archive/` H1: Earlier writing, 2009 to 2019 · intro: Thirty-eight posts from the first blog, kept as they were written. Systems, flow, leadership, and a few detours. · meta description: Rob Saric's earlier writing on systems, flow, and leadership, 2009 to 2019, kept as it was written.
- Archive post notice: Written in {year}. Kept as it was.
- `/how-i-counted/` — built 2026-08-24; the full deck is the "/how-i-counted/ page" section below. Named for what it does rather than "methodology": it exists to be checked, not to assert rigour. (The 2026-08-19 plan sketched here, three sections and "How I counted it", was superseded by the shipped page.)
- `/contact/` H1: Write to me · body: "You run the clinic. I only write about them. That means you hold the answer key, and I would rather hear a correction from you than keep being wrong in public. Questions, arguments, and notes that missed all land in the same inbox, which is just me. I read and answer everything, and if I do not know, I will say so." (Rob's pick 2026-08-25, the "Answer key" body: the door is wide, the humor is dry, and the "tell me where money slips" ask is gone because nobody writes in to report that. The challenge line stays on the homepage band and the `/how-i-counted/` exit.) then the email (if set) and LinkedIn. First person throughout. The page carries its own meta description, third person to match the other pages: "Write to Rob Saric about clinic operations, a note that landed or missed, or a question he has not answered. He reads and answers everything himself." (under the 155 clamp in `src/lib/seo.ts`)
- 404 H1: Nothing here. · body: The page moved or never existed. Try my notes or the archive.
- `/subscribed/` (server-rendered result of the subscribe form; `noindex`; state comes from `?status=`):
  - ok (default): H1 "You are on the list." · body "Occasional notes, no schedule I cannot keep. Reply to any of them. I read and answer everything myself."
  - exists: H1 "You were already on the list." · body "Nothing to do. The next note will reach you."
  - invalid: H1 "That does not look like an email address." · body "Go back and try again, or email me and I will add you myself." ("email me" links to `/contact/`)
  - error: H1 "That did not go through." · body "Something failed on my side, not yours. Email me and I will add you myself." ("email me" links to `/contact/`)
  - all states: link "Back to my notes →" (`/field-notes/`)

## /how-i-counted/ page

Added 2026-08-24, the methods page the authority review called the biggest missing trust layer after external proof. Every sentence is assembled from copy already approved elsewhere in this deck (the evidence steps, the stage notes, principles 3 and 4, the 02 trust line, copy law items 5 and 6); nothing on the page is a new claim. Strings live in `COPY.pages.howICounted`. Linked from the Evidence band. V5 resolved 2026-08-24: the $127,000 metric is back in the Evidence band, its "How I counted this →" link lands here, and the per-gap breakdown is section 8 below.

- Title: How I count
- H1: How I count and verify clinic findings.
- Meta description (third person): How Rob Saric counts and verifies clinic findings: what Caretrics reads, what is never inferred, and why identified is not collected.
- Context (added 2026-08-27, before the intro; Rob: the page assumed the reader arrived from the homepage): I find revenue that clinics are missing, by reading their own Jane.app data. Numbers like that are easy to claim and hard to check, so this page shows the counting.
- Intro: Every public number I use is held to the standard on this page. If a number cannot meet it, it comes down until it can. That has already happened once.
- Intro link: The note where I took my own number down → (`/field-notes/2026-08-19-i-took-my-own-number-down/`)
- Pipeline strip (added 2026-08-27, between the header and the sections): eyebrow "One signal's journey", then the five evidence-stepper labels and kickers (Detected/Signal detected .. Verified/Outcome verified) as a numbered strip, forest rule per step. Data reused from `src/data/evidence-steps.ts`, nothing new authored.
- Breakdown bars (added 2026-08-27, inside section 8): the four gaps as single-hue forest bars on wash tracks, name left, amount right, every value direct-labeled, no legend or hover. Note under it: "One clinic, 25 providers, June 2025 through May 2026. Identified is not collected." Data in `copy.ts` `pages.howICounted.gaps`, the V5 amounts.
- Sections (H2 + one paragraph each):
  1. What gets read. / Caretrics reads twelve months of a clinic's Jane.app data with read-only access and works between Booked and Paid. Signals come from the clinic's own calendar, visit, and billing records, never from clinical judgement. Access can be revoked anytime.
  2. Read, not inferred. / Each item links back to the visit it came from, the date it was submitted, and the last status recorded. Nothing is inferred. Where a field was missing, the item says so instead of guessing.
  3. A finding needs an owner. / The clinic assigns each finding to a person. Caretrics does not decide who. It records the name and the date, so the work stops being nobody's in particular.
  4. Identified is not collected. / A scan identifies money that may be slipping. Nothing counts as recovered until it lands. The proof is what changed afterward: the claim that went out, the patient who rebooked, the authorization renewed before the visit.
  5. How an outcome closes. / An item only closes when its status changes in Jane. Identified and collected are reported separately, and the record shows plainly which of the two happened.
  6. Where AI assists, and where a person decides. / Anything automated says what it read, what it skipped, and what it is unsure about. If it cannot, it does not get to make the call. People assign the work and make the decisions, and each action is logged against the item, never against the person who made it.
  7. Public examples. / Patient examples use a first name and last initial, never real data. Signals shown in public are anonymized, and every public number carries what it counts and where it came from. When a number is missing its breakdown, it comes down.
  8. The $127,000. / The number on the homepage: one clinic, 25 providers, the twelve months of June 2025 through May 2026. Four gaps: unbilled claims, $52,000. No-shows, $37,000. Missed re-bookings, $24,000. Missing re-evaluations, $14,000. Identified across those four, and identified is not collected: it is what the records showed, not what the clinic banked.
- Exit link: Write to me and tell me where I am wrong → (`/contact/`)

Section 8 added 2026-08-24 when the metric returned to the Evidence band (V5). The four gap names and amounts are the ones caretrics.com publishes, confirmed by Rob 2026-08-24.

## Verification table (carry into the launch checklist)

| # | Claim | Where | Status |
|---|---|---|---|
| V1 | "Founder of Caretrics" (artboard dropped "& CEO") | hero, footer, About | VERIFY |
| V2 | "20+ years building software" / "I spent twenty years building software" | About stat row, hero body (2026-08-23) | **CONFIRMED by Rob 2026-08-24** |
| V3 | systems-architect / Trend Micro, Mitel, Pythian line | /about only | VERIFY |
| V5 | $127,000 identified, four gaps, one clinic, one year | Evidence, /how-i-counted/ | **RESOLVED 2026-08-24.** Rob confirmed the four gaps and amounts (unbilled claims $52,000, no-shows $37,000, missed re-bookings $24,000, missing re-evaluations $14,000; the caretrics.com breakdown). Metric restored to the Evidence band with the "How I counted this →" link; the breakdown is written down in `/how-i-counted/` section 8. Cohort: one clinic, 25 providers, June 2025 through May 2026 |
| V6 | Jane.app wording, no endorsement | hero, 02 | approved shape used |
| V7 | Big Brothers Big Sisters, "over a decade" | About | VERIFY |
| V9 | Now items and six seed notes | Now strip, 04 | Writing item and first note LIVE 2026-08-18; the other two Now items and the six seed notes stay DRAFT (hidden in prod) |
| V10 | Portrait 400×400 is below the 2x target for a 400×460 slot | hero, /about/ | **RESOLVED 2026-08-19.** Source replaced with a 944×1136 portrait, and `densities={[1, 2]}` added to both `<Image>` slots. The larger source alone was not enough: Astro emitted 1x only until the densities prop was set. Now serves 400×460 + 800×920 (hero) and 320×384 + 640×768 (/about/) |
| V11 | Togetheren description | was 02 | **Row removed from 02 2026-08-24** with the section compression; the footer's "Togetheren, selected work" link is the remaining surface. The description string is retired until Togetheren returns somewhere, and still needs verifying if it does |
| V12 | Social URLs, repo URL for "View source", contact email | footer, contact | SET 2026-08-18 (email rob@caretrics.com, LinkedIn, GitHub, source repo). X left off until decided. |
| V14 | Outside photo strip captions | /about/ | **RESOLVED 2026-08-29.** Strip live with three photos; captions drafted by Claude at Rob's direction ("come up with the captions for now"), limited to what the photos visibly show. Rob's wording overrules anytime |
