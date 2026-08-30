# Authority claims registry

One canonical version of every public claim about Rob, so robsaric.com, caretrics.com, LinkedIn, author boxes, structured data, and decks stop drifting apart. Created 2026-08-23 from the reconciled authority review (`docs/strategy/`, 2026-08-20 set), P0 item "claim and bio registry".

Rules of this file:

- Wording here is assembled from copy already shipped on the site (`docs/COPY.md` or `src/data/*.ts`); each entry names its source, and the audit-target list at the bottom comes from the 2026-08-20 strategy docs, not from approved copy. Nothing in this file invents a fact.
- `docs/COPY.md` copy law and its locked credential (item 7) outrank this file. If the two disagree, this file is the defect.
- Entries marked `[VERIFY]` are not yet confirmed by Rob and must not ship anywhere new.
- Update an entry rather than adding a second version of it.

## Canonical identity

| Field | Canonical value | Notes |
|---|---|---|
| Name | Rob Saric | |
| Title | Founder of Caretrics | "& CEO" was dropped by the artboard; still flagged V1 `[VERIFY]` in `docs/COPY.md` |
| JSON-LD jobTitle | Founder, Caretrics | `src/data/site.ts` |
| Location | Ottawa, Canada | "Ottawa" alone in the footer byline |
| Email | rob@caretrics.com | `src/data/site.ts` |

## The credential (locked 2026-08-16; ban narrowed 2026-08-19)

Verbatim from `docs/COPY.md` item 7. These are the approved forms; new surfaces assemble from these components verbatim rather than rewording them. The homepage hero body (changed 2026-08-23, see `docs/COPY.md` Hero) is one such assembly: the first-person core clause, prefixed with the twenty-years fact, with "the same four gaps" carried by the H1 as "the same revenue gaps".

- **Short:** `50+ clinics, firsthand`
- **First person:** "I went through twelve months of records for more than fifty clinics, one clinic at a time, and kept finding the same four gaps."
- **Third person (About page, JSON-LD):** "Rob Saric spent twenty years building software, including years as a systems architect inside large managed health-service organizations. He built Dentallytics, an analytics platform for dental groups, then went through twelve months of records for 50+ allied health clinics, one clinic at a time, and found the same four gaps almost every time."

Banned verbs: "advised", "audited". Banned phrases: "ex-DSO", "by hand", "the books". The nouns "advisor"/"advisory" are permitted only as the checkable role: "digital advisor through the Canadian Digital Adoption Program" (roster confirmed 2026-08-19). Dentallytics is named without "and sold".

## Canonical bios

Assembled from copy already shipped on the site; each entry notes where its sentences come from. Word counts are approximate targets, not promises.

- **~25 words (site description, approved):** "Rob Saric builds Caretrics with allied-health and rehab clinics that run on Jane.app. Field notes on clinic revenue, ownership, and AI that shows its work."
- **~60 words `[DRAFT until Rob approves]`:** "Rob Saric is the founder of Caretrics, in Ottawa. He spent twenty years building software, then went through twelve months of records for 50+ allied health clinics, one clinic at a time, and found the same four gaps almost every time. Caretrics helps allied-health and rehab teams using Jane.app see what is slipping, give the work an owner, and verify what changed."
- **~120 words `[DRAFT until Rob approves]`:** the third-person credential above, followed by: "Before Caretrics he spent years as a systems architect inside large managed health-service organizations, and earlier at Trend Micro, Mitel and Pythian. He built one startup around helping orthopedic surgeons deliver care protocols; Athlete Builder had a product he believed in and the wrong economic model. He is a dad to two kids and has mentored with Big Brothers Big Sisters for over a decade. His standard: if it adds work to care, it has failed." (Employer names are approved for `/about/` text only; confirm before using this bio off-site. The Athlete Builder and family/BBBS sentences trace to the `/about/` copy in `src/data/copy.ts`, whose verification rows are still pending per `docs/ABOUT-PAGE-BRIEF.md`; BBBS "over a decade" is V7 `[VERIFY]` in `docs/COPY.md`.)

## Public numbers

| Number | What it counts | Source | Status |
|---|---|---|---|
| 20+ years | Years building software | Career; V2 in the `docs/COPY.md` verification table | approved (V2 confirmed by Rob 2026-08-24; ships in the About stat row and hero body) |
| 50+ clinics | Clinics whose records Rob went through, twelve months each, one clinic at a time | Locked credential | approved, locked form only |
| Twelve months | The record window per clinic, and the window Caretrics reads | Credential; `docs/COPY.md` 02 | approved |
| $127,000 | Identified across four gaps in one clinic, over one year. Identified is not collected. | One clinic, 25 providers, June 2025 through May 2026. Four gaps confirmed by Rob 2026-08-24: unbilled claims $52,000 · no-shows $37,000 · missed re-bookings $24,000 · missing re-evaluations $14,000 | approved; ships in the Evidence band and `/how-i-counted/` section 8 |
| 38 posts, 2009 to 2019 | Imported archive posts | `docs/MIGRATION.md` | approved |

No clinic counts beyond the credential line. Every number that ships carries what it counts and where it came from.

## Outdated or conflicting phrases to reconcile (cross-domain audit, P1)

Found or suspected on Caretrics pages, older author boxes, and profiles; none may be introduced here. Each occurrence gets a row (location, current wording, approved wording, keep/change/remove, date done) when the audit runs.

- `40+ clinics`, `65+ clinics` → the locked short form
- `advised`, `audited` (as verbs), `ex-DSO`, `by hand`, `the books`
- `$4,200`, `$50M` → no public use until a calculation page exists ($4,200 is live on caretrics.com as a median with partial scope; audit finding A4. $50M not found on any fetched surface)
- `Provider.app`, the 2024 purple palette → historical; never reintroduced
- `recovered` / `collected` where the fact is `identified`
- "practice" → "clinic"

## Approved image set

| File | Use |
|---|---|
| `src/assets/images/rob-portrait-caretrics.png` | Homepage hero portrait (eye-level Caretrics polo, 2026-08-23) |
| `src/assets/images/rob-hero.jpg` | Accelerate OTT event photo (Rob corrected the event name 2026-08-30; earlier notes said Jane Summit), held for an event or "currently building" context |
| `src/assets/images/rob-portrait.jpg` | `/about/` portrait |
| `src/assets/images/rob-family.png` | Homepage About band |
| `src/assets/images/rob-avatar.png` | Nav mark (decorative, empty alt) |
| `src/assets/images/rob-signature.png` | Signature under the About quote |
| `src/assets/images/rob-sketch.png` | Reserve |

## Canonical links

- Site: https://robsaric.com
- Caretrics: https://caretrics.com
- Togetheren: https://togetheren.com
- LinkedIn: https://www.linkedin.com/in/robertsaric/
- GitHub: https://github.com/robsaric
- Source: https://github.com/robsaric/robsaric.com
- X: unset on purpose (undecided)
