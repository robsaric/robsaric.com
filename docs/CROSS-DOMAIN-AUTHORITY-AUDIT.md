# Cross-domain authority audit

First pass 2026-08-24, against `docs/AUTHORITY-CLAIMS.md`. Surfaces fetched live: caretrics.com home, /about, /pricing, /product. Not yet audited: LinkedIn (login wall), older article author boxes, pitch decks, social profiles; those need Rob or a logged-in session. Re-run this audit when any of those surfaces changes.

## Verdict of the first pass

caretrics.com holds the line better than the strategy docs feared. The locked credential components appear verbatim, no banned verb ("advised", "audited") was found, no conflicting clinic count (no 40+, no 65+), no Provider.app, no M&A or DSO framing, and the identified/recovered discipline holds: "identified" for Caretrics findings, "recovered" only inside customer quotes and product names. The Jane wording ("Your team keeps booking, charting, and billing in Jane. Caretrics never writes back.") implies no partnership.

## Findings

| # | Location | Current wording | Registry position | Call | Status |
|---|---|---|---|---|---|
| A1 | caretrics.com/about | "Rob spent twenty years building software, then went through twelve months of records for 50+ clinics, one clinic at a time." | Matches the locked components | **Keep** | aligned 2026-08-24 |
| A2 | caretrics.com/about | "twenty years building software for health-service organizations, most of it on the systems that move the money" | Approved form: "including years as a systems architect inside large managed health-service organizations". The Caretrics line stretches "years inside" to all twenty. | **Change** on caretrics.com to the "including years" shape, or Rob confirms the broader claim and the registry updates | open, Rob |
| A3 | caretrics.com home + /about | $127,000 in one clinic over one year, WITH the per-gap breakdown: Unbilled claims $52,000 · No-shows $37,000 · Missed re-bookings $24,000 · Missing re-evals $14,000 (sums to $127,000) | V5 cut the figure from robsaric.com precisely because the breakdown was not written down. It is written down, on caretrics.com. | **Rob confirms the four names and amounts**, then the metric can return to the Evidence band with the `/how-i-counted/` link, per the V5 plan | open, Rob |
| A4 | caretrics.com home | "half of clinics find more than $4,200/month" | Registry: $4,200 has no public calculation page. The line does carry scope (a median across clinics), but nothing says what it counts, the period, or the denominator. | **Change**: publish the calculation (a Caretrics methods note, or extend `/how-i-counted/`) or attach "identified, not collected" scope where it appears | open |
| A5 | caretrics.com home | Named testimonials: Kootenay Therapy Center ("$2,800 recovered"), London Chiro ("$6,000 recovered in the first few months") | robsaric.com's biggest missing trust layer is exactly one named, permissioned operator story. These exist and are already public. | **Opportunity**: if the permission covers robsaric.com, one becomes the homepage external-proof block the review called for | open, Rob |
| A6 | caretrics.com home | Rob bio: "Rob Saric, Founder, Caretrics. I write about what I keep finding in clinic operations at robsaric.com." | Consistent with the approved title; cross-links the two properties | **Keep** | aligned 2026-08-24 |
| A7 | LinkedIn, author boxes, decks, social | unknown | The strategy docs report older bios with different counts and revenue claims | **Audit next** with Rob logged in; record each occurrence here | blocked on access |

## Not found anywhere fetched

"advised", "audited", "advisor", "consultant", "DSO", "M&A", "$50M", "Provider.app", "40+ clinics", "65+ clinics", purple palette remnants. If any of these turn up on a surface this pass could not reach, they go in the table above.
