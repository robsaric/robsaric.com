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
7. **The credential (locked 2026-08-16; the ban narrowed 2026-08-19).** The banned words are the VERBS: "advised" and "audited". They are the claim. The NOUNS "advisor" and "advisory" are not banned, because a named role is a checkable job title, not a claim about how many clinics were advised. Rob was on the Canadian Digital Adoption Program approved advisor roster, confirmed 2026-08-19, so "digital advisor through the Canadian Digital Adoption Program" is permitted. Short: `50+ clinics, firsthand`. First person: "I went through twelve months of records for more than fifty clinics, one clinic at a time, and kept finding the same four gaps." Third person (About page, JSON-LD): "Rob Saric spent twenty years building software, including years as a systems architect inside large managed health-service organizations. He built Dentallytics, an analytics platform for dental groups, then went through twelve months of records for 50+ allied health clinics, one clinic at a time, and found the same four gaps almost every time." Dentallytics is named without "and sold". Trend Micro, Mitel, Pythian may be named on `/about/` only, text only.
8. **Do not invent.** Now items, field notes, dates, dollar figures, and biography lines flagged `[VERIFY]` or `[DRAFT]` below stay flagged until Rob confirms them. Draft entries carry `draft: true` and are hidden from production builds.
9. **Vision line** may be used but never over-explained: "clinics that do good do well." Never the word "simple".

## Global

- Site name: Rob Saric
- Home `<title>`: Rob Saric · Founder of Caretrics
- Home meta description: Rob Saric builds Caretrics with allied-health and rehab clinics that run on Jane.app. Field notes on clinic revenue, ownership, and AI that shows its work.
- Skip link: Skip to content
- Nav links: Field notes · Principles · About · Caretrics (button, external)
- Menu toggle label: Open menu / Close menu

## Hero

- Eyebrow (desktop): Founder of Caretrics · Allied-health revenue operations
- Eyebrow (mobile): Founder of Caretrics
- H1: I kept finding the same revenue gaps in clinic after clinic.
- Body: So I built Caretrics. It helps allied-health and rehab teams using Jane.app identify the operational gaps affecting revenue, give the work a clear owner, and measure what changed.
- Primary CTA: See Caretrics (external, caretrics.com)
- Secondary CTA (desktop only): Read the field notes (`/field-notes/`)
- Tagline: Evidence-led. AI-assisted. Human-controlled.
- Portrait alt: Rob Saric

Change from the artboard: "using Jane" became "using Jane.app" (first mention on the page).

## Now strip

Visually hidden H2: What I am working on now

| Kicker | Title | Blurb (desktop only) | Link | Status |
|---|---|---|---|---|
| Writing | Unbooked at the desk, seventy percent never come back | Two years of first visits at one clinic, and the one thing at the front desk that predicted whether a new patient came back. | `/field-notes/2026-08-18-unbooked-at-the-desk/` | live 2026-08-18 |
| Building | The Caretrics revenue diagnostic | What a first read of a clinic's Jane account looks for, and what it deliberately leaves alone. | (field note, TBD) | `[DRAFT, V9]` |
| From the field | What clinic operators keep asking about | The three questions that come up in almost every conversation, and my current answers. | (field note, TBD) | `[DRAFT, V9]` |

Drafts carry `draft: true` in `src/data/now.ts` and are hidden in production. "Ownership is the difference between a report and a result" was the third placeholder; the real Writing item replaced it.

## 01 · Evidence

- Eyebrow: 01 · Evidence
- H2: The dashboard held the evidence. The work still had no owner.
- Body (desktop): The same pattern turned up in clinic after clinic. The report existed, somebody had read it, and the task it implied still belonged to no one in particular. Here is one anonymized signal, from detection through to a verified outcome.
- Body (mobile): One anonymized signal, from detection through to a verified outcome.
- Metric: **cut 2026-08-19.** The band now runs H2, body, then straight to the signal and the stepper. The figure ($127,000, one clinic, 25 providers, the twelve months of June 2025 through May 2026, AR the largest gap) is real, but copy law item 6 requires every public number to carry what it counts and where it came from, and the per-gap breakdown is not written down yet. When it is, this returns with `/how-i-counted/` in the same change: metric `$127,000`, note "Identified across four gaps in one clinic, over one year. Identified is not collected.", link "How I counted this →".
- Signal eyebrow: The signal
- Exit link: More of these, in the field notes → (`/field-notes/`). Added 2026-08-19 so the strongest argument on the page does not dead-end in "Start again".
- Signal: 17 insurance items have had no activity in 21 days.
- Steps (`src/data/evidence-steps.ts`):
  1. Detected / kicker "Signal detected" / body "Seventeen insurance items on one clinic's account show no status change in 21 days. Caretrics flags the group, not the individual claim, because the pattern is the finding." / source "read from Jane · read-only · grouped by days since last activity"
  2. Evidence / "Evidence reviewed" / "Each item links back to the visit it came from, the date it was submitted, and the last status recorded. Nothing is inferred. Where a field was missing, the item says so instead of guessing." / "per-item record · no derived values · gaps disclosed"
  3. Owner / "Owner assigned" / "The clinic assigns the group to a person. Caretrics does not decide who. It records the name and the date, so the work stops being nobody's in particular." / "assigned by the clinic · named by role · timestamped"
  4. Action / "Action completed" / "The owner resubmits, corrects, or writes each item off. The choice is logged against the item, never against the person who made it." / "one action per item · reversible · audit trail retained"
  5. Verified / "Outcome verified" / "An item only closes when its status changes in Jane. Identified is not collected, and the record shows plainly which of the two happened." / "confirmed against source data · identified and collected reported separately"
- Controls: Next step / Start again / Step N of 5

## 02 · Caretrics

- Eyebrow: 02 · Caretrics
- H2: Clinic revenue moves through five stages. So do its problems.
- Body (desktop): Caretrics reads a clinic's Jane data with read-only access and works between Booked and Paid. Select a stage.
- Body (mobile): Caretrics reads a clinic's Jane data with read-only access and works between Booked and Paid.
- Panel eyebrows: The clinic's question · Example signals
- Stages (`src/data/stages.ts`):
  1. Found (not owned) / "Are the right patients finding you and booking a first visit?" / "Referral sources · first-visit bookings · enquiries that never became appointments" / "Caretrics does not measure this stage. A gap here often gets blamed on a later one."
  2. Booked / "Does the schedule hold once it is set?" / "No-shows · late cancellations · scheduling gaps nobody fills" / "Read from the clinic's own calendar data."
  3. Treated / "Are patients completing the care they started?" / "Plan-of-care completion · drop-offs · visits that happened and were never invoiced" / "Read from visit and billing records, never from clinical judgement."
  4. Retained / "Does the plan of care finish, or fade?" / "Missed re-bookings · re-evaluations never scheduled · authorizations that expired with visits left" / "The stage where the most money quietly leaves."
  5. Paid (default open) / "Does the completed work turn into money?" / "Unbilled visits · aging receivables · claims that never went out" / "Identified only. Caretrics does not bill or collect."
- H3: What Caretrics does
- Body: It reads 12 months of a clinic's Jane account, groups what it finds into an Action Plan with a next step, and records who took it. The pieces are the Recovery Report, the Action Plan, a weekly report, Coverage Alerts, Patient Follow-Ups, and an Aging AR workspace.
- Trust line: Read-only access · Cancel anytime · Revoke anytime
- H3: What it does not do
- Body: It does not send bills, collect money, or decide what a patient clinically needs. It identifies. Your team decides. Found sits outside it.
- Mobile combined paragraph: It reads 12 months of a clinic's Jane account, groups what it finds into an Action Plan with a next step, and records who took it. It does not send bills, collect money, or decide what a patient clinically needs.
- CTA: See Caretrics
- Togetheren title: Selected work through Togetheren
- Togetheren body (desktop): I work with a small number of healthcare teams on AI strategy, product systems, and operational implementation. `[VERIFY: current Togetheren positioning]`
- Togetheren body (mobile): A small number of healthcare teams, on AI strategy, product systems, and operational implementation.
- Togetheren link: See selected work → (external, togetheren.com)

## 03 · Principles

- Eyebrow: 03 · Principles
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

## 04 · Field notes

- Eyebrow: 04 · Field notes
- H2: What I am seeing, shipping, and rethinking.
- Body: Kept in public, in order. The wrong turns stay in.
- Header link: All field notes → · Mobile bottom link: See all field notes →
- Filter pills: All, then only the tags carried by notes actually in that grid, in `NOTE_TAGS` order (Clinic revenue · Billing and insurance · Patient flow · AI and trust · Building Caretrics · Founder notes). Below two represented tags the row is not rendered, so a pill never leads to the empty state.
- Empty state: Nothing filed under this one yet.
- Card types: Field note · Shipped · Changed my mind
- Notes (`src/content/notes/*.md`). Live: `2026-08-18-unbooked-at-the-desk` (first real note, published 2026-08-18). Still `draft: true` `[DRAFT, V9]`: the six seed entries transcribed from the artboard. Each card body is the note's `summary`; each seed file needs a real body before `draft` is removed.
- `/field-notes/` H1: Field notes, and nothing else in the page header. The line "Kept in public, in order. The wrong turns stay in." belongs to the section intro and was printing twice on this page until 2026-08-19. · meta description: Field notes from Rob Saric on clinic revenue, ownership, and building Caretrics. Kept in public, in order.

## 05 · About

- Eyebrow: 05 · About
- H2: Where the standard came from.
- Body: I have mentored with Big Brothers Big Sisters for over a decade. Time is the thing people in care have least of, and it is the thing most software asks for more of. That is the whole reason I care about this work. `[VERIFY V7: BBBS wording and duration]`
- Mobile body: first two sentences.
- Quote: "If it adds work to care, it has failed."
- Stat row: 20+ years building software `[VERIFY V2]` · 50+ clinics, firsthand · Founder of Caretrics, Ottawa
- Photo alt: Rob Saric outdoors
- Signature alt: Rob Saric (`rob-signature.png`, under the quote, signing the standard)

Change from the artboard: "50+ clinic owners advised" became "50+ clinics, firsthand" (locked credential form).

## 07 · /about/ page

Its own composition (`src/pages/about.astro`), not the homepage About band. Built 2026-08-19 from `docs/ABOUT-PAGE-BRIEF.md` and the claude.ai/design turn 9 artboards. Strings live in `COPY.aboutPage`.

- Label: About (plain word in the label column; `Section` `number` is optional as of 2026-08-19, because 01 to 06 are a table of contents for one homepage scroll)
- H1: I spent twenty years building software. Healthcare is where the work became personal.
- Facts rail (definition list, values at body size, never a stat display): Based in / Ottawa, Canada · Building software / 20+ years · Clinics seen firsthand / 50+
- Background opens on the reason, not the resume: "My father battled illness for ten years. Watching that is what made healthcare personal for me, before it was ever a business." Confirmed true by Rob 2026-08-19. The wording is a rewrite of the claude.ai/design line "After watching my father battle illness for 10 years" into the house register; Rob should own the final words.
- Zones: Background ("Where healthcare came in." and "What the failures changed."), Caretrics ("Why Caretrics."), Outside ("Outside the work.")
- The standard sits in a card at the end: serif italic 28px (24 mobile), signature, then "Rob Saric, founder of Caretrics". The card is `fit-content` capped at 722px.
- Exits: "Write to me and tell me where I am wrong →" (`/contact/`) · "Read the field notes →" (`/field-notes/`)

`Clinics seen firsthand / 50+` splits the locked short form `50+ clinics, firsthand` across a term and a value. `[VERIFY V13: item 7 sign-off for the split, or the rail drops to two cells and the credential lives in prose only]`

The claude.ai/design export rewrote copy in both artboards. Those rewrites were NOT applied; they are listed for a ruling in `docs/ABOUT-PAGE-BRIEF.md`. The approved copy is what ships.

- `/about/` H1: About
- `/about/` body: the About body above, then the third-person credential paragraph (Copy law item 7), then: "Before Caretrics I spent years as a systems architect inside large managed health-service organizations, and earlier at Trend Micro, Mitel and Pythian." `[VERIFY V2/V3]`
- `/about/` meta description: Rob Saric, founder of Caretrics in Ottawa. Twenty years building software, 50+ clinics firsthand, and one standard: if it adds work to care, it has failed.

## 06 · Write to me

- Eyebrow: 06 · Write to me
- H2: Tell me where I am wrong.
- Body (desktop): You run the clinic. You see things I cannot. If a principle does not match what you see at your front desk, or you know where money slips that I have not mentioned, write to me. I read and answer everything myself. ("write to me" links to `/contact/`)
- Body (mobile): You run the clinic. You see things I cannot. Write to me. I read and answer everything myself.
- Card H3: Get the field notes.
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
- `/how-i-counted/` — **not built.** Removed 2026-08-19 with the metric it existed to explain; an orphaned page describing a number the site no longer shows is worse than no page. When the metric returns, the page returns with it: H1 "How I counted it", three short sections, "What was counted", "What was not counted", "Where it came from". Named for what it does rather than "methodology": it exists to be checked, not to assert rigour.
- `/contact/` H1: Write to me · body: "You run the clinic. You see things I cannot. If a principle does not match what you see at your front desk, or you know where money slips, message me. I read and answer everything myself, and if I do not know, I will say so." then the email (if set) and LinkedIn. First person throughout. The page carries its own meta description, third person to match the other pages: "Write to Rob Saric about clinic revenue, where money slips, or a principle that does not match your front desk. He reads and answers everything himself." (152 chars, under the 155 clamp in `src/lib/seo.ts`)
- 404 H1: Nothing here. · body: The page moved or never existed. Try the field notes or the archive.
- `/subscribed/` (server-rendered result of the subscribe form; `noindex`; state comes from `?status=`):
  - ok (default): H1 "You are on the list." · body "Occasional notes, no schedule I cannot keep. Reply to any of them. I read and answer everything myself."
  - exists: H1 "You were already on the list." · body "Nothing to do. The next note will reach you."
  - invalid: H1 "That does not look like an email address." · body "Go back and try again, or email me and I will add you myself." ("email me" links to `/contact/`)
  - error: H1 "That did not go through." · body "Something failed on my side, not yours. Email me and I will add you myself." ("email me" links to `/contact/`)
  - all states: link "Back to the field notes →" (`/field-notes/`)

## Verification table (carry into the launch checklist)

| # | Claim | Where | Status |
|---|---|---|---|
| V1 | "Founder of Caretrics" (artboard dropped "& CEO") | hero, footer, About | VERIFY |
| V2 | "20+ years building software" | About stat row | VERIFY |
| V3 | systems-architect / Trend Micro, Mitel, Pythian line | /about only | VERIFY |
| V5 | $127,000 identified, four gaps, one clinic, one year | Evidence | **CUT 2026-08-19**, so nothing unsupported is on the page. Confirmed: one clinic, 25 providers, twelve months (June 2025 through May 2026), AR the largest gap. Still needed before it returns: the four gap names and the amount against each |
| V6 | Jane.app wording, no endorsement | hero, 02 | approved shape used |
| V7 | Big Brothers Big Sisters, "over a decade" | About | VERIFY |
| V9 | Now items and six seed notes | Now strip, 04 | Writing item and first note LIVE 2026-08-18; the other two Now items and the six seed notes stay DRAFT (hidden in prod) |
| V10 | Portrait 400×400 is below the 2x target for a 400×460 slot | hero, /about/ | **RESOLVED 2026-08-19.** Source replaced with a 944×1136 portrait, and `densities={[1, 2]}` added to both `<Image>` slots. The larger source alone was not enough: Astro emitted 1x only until the densities prop was set. Now serves 400×460 + 800×920 (hero) and 320×384 + 640×768 (/about/) |
| V11 | Togetheren description | 02 | VERIFY |
| V12 | Social URLs, repo URL for "View source", contact email | footer, contact | SET 2026-08-18 (email rob@caretrics.com, LinkedIn, GitHub, source repo). X left off until decided. |
