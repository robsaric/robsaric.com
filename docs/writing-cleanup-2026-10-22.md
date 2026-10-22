# Writing cleanup, October 22

Rob requested removal of six clinic-focused placeholder posts while reviewing the local Writing page:

- 2026-08-10-receivable-that-ages-ninety-days
- 2026-08-04-claims-group-by-age
- 2026-07-22-operators-want-checkable
- 2026-07-14-three-screens-one-question
- 2026-06-24-expired-authorizations-surprise-month-end
- 2026-06-10-named-after-what-the-clinic-calls-it

All six had `draft: true`: local development displayed them, while production and editorial-review builds excluded them. Their source files now live in `docs/retired-notes/`, outside the content collection, following the October 19 retirement pattern. They no longer appear in development either. No original text was changed.

There are no replacement articles or permanent redirects for these draft URLs. They resolve to the site's normal not-found page; RSS, sitemap, published essays and the 2009–2019 archive remain unchanged. Only the three approved October essays remain in the current-writing collection.

The same request asks for recommendations on the homepage CTA, Writing title, URL and visual refinement. Those recommendations are separate from this removal. This local change does not publish or authorize a URL migration.

## Validation

`pnpm gate` passed: 25 subscription fixtures, Astro check with zero errors/warnings and 25 existing hints, copy lint with zero errors and eight taste warnings, build, 112 redirects, three current notes, 49 share cards and 84 layout checks. A separate completed-build check confirmed all six retired slugs are absent from routes, homepage, Writing index, RSS and sitemap.

Independent browser inspection confirmed three current essays plus three archive selections, one H1 and no overflow at 1440, 900 and 390 pixels. One retired URL displayed the normal “Nothing here.” view. No email was submitted; no production change occurred.

## Review and recommendations, not implemented

Method: two independent assessments. Design review: /root/writing_design_assessment. Browser evidence: /root/writing_browser_assessment. The Impeccable launcher is absent, so no deterministic scan, detector overlay or helper-generated critique trend is claimed.

The page is coherent, warm and readable; the dashboard example adds specificity. The three current essays and the dated archive provide enough choice without filters. The homepage's “Read my writing” CTA is clear and personal; retain it. “Writing” would be a clearer page title than “Thinking out loud.” Keep the current article URLs. The existing /writing alias already redirects to /field-notes/. Any later URL migration needs proper permanent redirects, as described in Google's site-move guidance: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes.

Two priority issues:

1. P2: Too much introduction before the first essay. The large heading, multi-line introduction, section label and spacing consume the top of the page. On a phone, the supporting essay titles begin around 1,308 pixels down. Use “Writing”, shorten the introduction, reduce the space before the feature, align the two header columns at the top and make the mobile diagram more compact. Preserve readable content and the featured/supporting hierarchy. Relevant work: clarify, layout.
2. P2: Repeated positioning weakens the ending. The afterword repeats the homepage and introduction, then leads into separate follow and signup invitations. Remove that afterword and make the existing signup the main closing invitation, with LinkedIn as a quieter secondary link. Relevant work: distill.

Strengths: warm paper and dark typography; blue links with visible focus; one feature with a useful diagram; archive dates that make the age of earlier opinions explicit. Cognitive load is low across the reading choices, but repeated framing adds reading before and after the actual choices. First-time visitors benefit most from a faster introduction. Mobile readers benefit most from seeing all three current essay choices sooner. The peak is the concrete diagram; the repeated afterword is the avoidable valley before the ending.

Heuristic scores from the independent design review (0–4): status 4, real-world language 3, control 3, consistency 3, recognition 4, efficiency 3, minimalist design 3. Error prevention and recovery were not scored because no input flow was assessed; help was not applicable to this reading index. Total 23/28. These are qualitative review judgements, not measured conversion results.

Questions skipped: two priority issues; this request asks for recommendations, and the removal is already authorized. Names, layout and URL recommendations remain unapplied.
