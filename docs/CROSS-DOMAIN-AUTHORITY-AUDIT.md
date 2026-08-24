# Cross-domain authority audit

First pass 2026-08-24, against `docs/AUTHORITY-CLAIMS.md`. Surfaces fetched live: caretrics.com home, /about, /pricing, /product. Not yet audited: LinkedIn (login wall), older article author boxes, pitch decks, social profiles; those need Rob or a logged-in session. Re-run this audit when any of those surfaces changes.

## Verdict of the first pass

caretrics.com holds the line better than the strategy docs feared. The locked credential components appear verbatim, no banned verb ("advised", "audited") was found, no conflicting clinic count (no 40+, no 65+), no Provider.app, no M&A or DSO framing, and the identified/recovered discipline holds: "identified" for Caretrics findings, "recovered" only inside customer quotes and product names. The Jane wording ("Your team keeps booking, charting, and billing in Jane. Caretrics never writes back.") implies no partnership.

## Findings

| # | Location | Current wording | Registry position | Call | Status |
|---|---|---|---|---|---|
| A1 | caretrics.com/about | "Rob spent twenty years building software, then went through twelve months of records for 50+ clinics, one clinic at a time." | Matches the locked components | **Keep** | aligned 2026-08-24 |
| A2 | caretrics.com/about | "twenty years building software for health-service organizations, most of it on the systems that move the money" | Approved form: "including years as a systems architect inside large managed health-service organizations". The Caretrics line stretches "years inside" to all twenty. | **Change**: exact replacement specified below; this session could not write to `caretricsplatform`, so Rob applies it there (two files, one paragraph and one test regex) | fix specified 2026-08-24, needs applying |
| A3 | caretrics.com home + /about | $127,000 in one clinic over one year, WITH the per-gap breakdown: Unbilled claims $52,000 · No-shows $37,000 · Missed re-bookings $24,000 · Missing re-evals $14,000 (sums to $127,000) | V5 cut the figure from robsaric.com precisely because the breakdown was not written down. | **Done.** Rob confirmed the four names and amounts 2026-08-24; the metric is back in the Evidence band with the "How I counted this →" link, and the breakdown is written down in `/how-i-counted/` section 8 | resolved 2026-08-24 |
| A4 | caretrics.com home | "On a first scan, half of clinics find more than $4,200/month. That is what twelve months of their own records identified." | The first fetch missed the second sentence. Re-reading the source: the rendered line states the median in plain English WITH "identified" attached, `src/config/marketingProof.ts` records the founder-confirmed source (2026-05-05, reaffirmed 2026-08-18), and tests pin both the median framing and the word "identified". | **Downgraded**: internal provenance and scope exist. A public calculation page stays a nice-to-have on the Caretrics side | mostly aligned 2026-08-24 |
| A5 | caretrics.com home | Named testimonials: Steven Hill (Kings Cross Physio), Ryan Sleik (Kootenay Therapy Center, "$2,800 recovered"), Dr. Eric Jackson (London Chiro, "$6,000 recovered") | robsaric.com's biggest missing trust layer was one named, permissioned operator story. | **Done.** Rob approved reuse 2026-08-24; Ryan Sleik's quote, verbatim, is the homepage proof band (`src/data/operator-proof.ts`) | resolved 2026-08-24 |
| A6 | caretrics.com home | Rob bio: "Rob Saric, Founder, Caretrics. I write about what I keep finding in clinic operations at robsaric.com." | Consistent with the approved title; cross-links the two properties | **Keep** | aligned 2026-08-24 |
| A7 | LinkedIn, author boxes, decks, social | unknown | The strategy docs report older bios with different counts and revenue claims | **Audit next** with Rob logged in; record each occurrence here | blocked on access |

## The A2 fix, ready to apply in `caretricsplatform`

Two files. The paragraph is the CAR-1131 PR5 letter on `/about`; the test pins its old wording.

**`src/app/(site)/about/AboutPageClient.tsx`** (the P2a paragraph, ~line 283). Replace:

> I have spent twenty years building software for health-service organizations, most of it on the systems that move the money.

with:

> I have spent twenty years building software, including years inside large managed health-service organizations, working on billing and operations.

The rest of the paragraph stays. Two corrections in one sentence: the scope (the bios on the same page, and the Person JSON-LD they feed, say "including years ... inside", so the letter now agrees with them) and the language ("the systems that move the money" was rejected by Rob 2026-08-24 as too cute; "billing and operations" states the same claim plainly). Rob should confirm "billing and operations" names those years accurately before applying; if not, the sentence stands without the final clause. "As a systems architect" is left to the bios.

**`src/app/(site)/__tests__/homepage-additions.spec.ts`** (~line 727). Replace:

```
assert.match(src.about, /twenty years building software for health-service/);
```

with:

```
assert.match(src.about, /twenty years building software, including years\s+inside large managed health-service/);
```

(`\s+` because the JSX wraps the line.)

## Not found anywhere fetched

"advised", "audited", "advisor", "consultant", "DSO", "M&A", "$50M", "Provider.app", "40+ clinics", "65+ clinics", purple palette remnants. If any of these turn up on a surface this pass could not reach, they go in the table above.
