# robsaric.com v3 — content, verification & handoff sheet

Companion to designs 4a (desktop 1440) and 4b (mobile 390).

## 1. How Caretrics was made primary
- Header: the only button is "Caretrics ↗"; advising pill removed.
- Hero eyebrow: "Founder & CEO of Caretrics"; primary CTA "See Caretrics".
- Work section leads with a featured Caretrics block (~70% of the section's area, featured shadow, product image, $4,200 proof point, methodology link). Togetheren is one compact strip; Shift Concussion / QUANT1 / HWARP are rows inside it, not peer cards.
- "Now" strip: first two updates are Caretrics/clinic; only the third is an experiment.
- Advising is one late section labeled "Selective advising" with a single CTA.
- Footer serif line and Caretrics link close the loop.

## 2. Final copy deck (recommended)
- Hero eyebrow: Founder & CEO of Caretrics
- Hero H1: I build healthcare software beside the people who use it.
- Hero body: I'm Rob. I've spent more than 20 years building software and the last decade working in allied health and rehab. Today, I'm building Caretrics with clinic operators to find revenue they've already earned and make the next step clear.
- CTAs: See Caretrics / Read the field notes
- Now strip label: NOW · AUGUST 2026 (3 linked updates max)
- Work H2: Caretrics first. Selected work through Togetheren.
- Caretrics problem line: Clinics lose revenue to work nobody has time to do: the follow-up never rebooked, the authorization that expired, the claim never filed.
- Caretrics description: Caretrics helps allied health and rehab clinics find revenue they are already owed and gives each item an owner and a clear next step.
- Proof point: $4,200 — median identified on a clinic's first scan
- Feed H2: What I shipped, and what it taught me.
- Failure H2 + body: Two of the four didn't make it. / One sold. Two closed. Both were mine to own. / I built what interested me instead of what someone was waiting for. Then I stayed months past the point when the answer was clear. / That changed how I work. Three rules came out of it.
- Personal H2: Where the standard came from. (quote integrated: "If it doesn't remove work from the people doing the care, it doesn't ship." — serif treatment chosen, signature dropped)
- Advising: Selective advising / I advise two or three founders at a time. / I'll tell you quickly if I'm not the right person. / CTA: Start a conversation
- Newsletter: One letter, when I've got something worth sending. Placeholder you@company.com.

## 3. Factual verification checklist — confirm before launch
| # | Claim | Status |
|---|---|---|
| V1 | "Founder & CEO of Caretrics" title | [VERIFY] |
| V2 | "More than 20 years building software" | [VERIFY] |
| V3 | "Last decade working in allied health and rehab" | [VERIFY] |
| V4 | Four companies: one sold, two closed, one active | [VERIFY] names/years |
| V5 | $4,200 median: sample size, period, definition ("identified", not "recovered"), calculation | [VERIFY] + methodology page |
| V6 | Jane.app wording — "connects to Jane.app" only; no partnership/endorsement implied | [VERIFY] approved language |
| V7 | SickKids + seniors' homes volunteering | [VERIFY] |
| V8 | Caregiving wording ("several years caring for my aging parents") | [VERIFY] |
| V9 | All feed entries and "Now" updates | [DRAFT] — replace with real, dated entries; do not invent |
| V10 | Every screenshot | approved + anonymized (no PHI, no client names without consent) |

## 4. Required asset list (slots in the design are named to match)
- A1 — Caretrics product image, approved + anonymized, ≥1120×700
- A2 — Caretrics claim scan screenshot (feed), ≥800×500
- A3 — Shift Concussion screen (feed), ≥800×500
- A4 — QUANT1 screen (feed), ≥800×500
- A5 — HWARP screen (feed), ≥800×500
- A6 — hi-res hero portrait (≥1200px, warm light; current rob-portrait.jpg is usable if sharp at 2x)
- Existing: rob-family.png, rob-booth.png (confirm consent of anyone identifiable)

## 5. Component inventory
Header bar · DS Button (primary gradient — one per page, dark, outline) · availability-free nav · hero portrait w/ lime offset · Now strip · featured work card · studio strip card · filter pill (active/hover/focus/disabled-none) · feed cards ×3 (field note / shipped project / essay) · empty-state panel · dark principles band · personal story block w/ integrated quote · advising card w/ checklist · newsletter form (default/focus/loading/success/error/existing-subscriber — live in 4a) · forest footer.
Tokens: Caretrics DS (`colors_and_type.css`) — no new colors, radii 8/14/16, borders #e2e8f0, shadows via var(--shadow-*).

## 6. Interaction & responsive annotations
- Filters: active = forest fill; hover = teal border/text; focus = 2px teal ring, 2px offset; empty state included. DOM order stays chronological; desktop grid 3-col `align-items: start`, mobile single column + Load more.
- Newsletter (4a is functional): invalid → inline error + red border; valid → loading (button label) → success panel; existing@company.com → already-subscribed notice.
- Motion: hover shadow lifts and 150–200ms transitions only; `prefers-reduced-motion` disables all.
- Touch targets on mobile ≥44px (nav toggle, links, buttons, inputs).
- Headings: one H1 (hero) → H2 sections; alt text supplied for all real photos.

## 7. URLs to retain or redirect
- / (new homepage)
- /writing — feed archive of all essays (add)
- Existing WordPress post URLs (e.g. /2019/.../be-an-insatiably-curious-intrapreneur, Amazing People posts) → 301 to /writing/[slug]; pull the definitive list from the current sitemap before cutover
- /about, /contact — keep, rebuild on this system
- caretrics.com, togetheren.com — external, linked from Work

## 8. Open decisions
- Methodology page copy for V5 (required before the $4,200 figure ships)
- Real "Now" + feed entries (V9)
- GitHub link: keep only if the profile shows activity
