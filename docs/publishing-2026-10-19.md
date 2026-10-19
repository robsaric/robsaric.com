# October 19 publication

Rob explicitly requested publication of both October 18 essays, removal of the three clinic notes below, and an original dashboard replacement informed by SEO research. This follows his authorization to merge the site work to main.

## Published selection

- Small teams still have to answer the phone: original October 18 URL retained; approved copy and original diagram preserved.
- I want my analog life back.: original October 18 URL retained; approved copy and source links preserved.
- Are dashboards going the way of the dodo?: October 19, `/field-notes/2026-10-19-are-dashboards-dead/`.

All three appear on the homepage, writing index, RSS and sitemap. Each has a canonical URL, server-rendered BlogPosting data, a 1200x630 share image and a next read. Other placeholder notes remain drafts.

## Dashboard research and thesis

Research performed October 19, 2026, before drafting. Applied the caretrics-seo checklist to this personal Astro site without importing clinic positioning or Caretrics schema.

Searches included “AI dashboards dead conversational analytics dashboards decision making”, Power BI Copilot data preparation, and Tableau Pulse delivery of metric insights. Results show an existing discussion about dashboards versus conversational analytics; this establishes topical relevance, not query volume or ranking potential. No saric-seo/GSC tools were available in this session. No traffic, search-volume or ranking estimates are claimed.

Primary sources checked:

- [Tableau Pulse: explore metrics](https://help.tableau.com/current/online/en-gb/pulse_explore_metrics.htm): metric insights delivered through email and Slack. This supports a change in how information reaches people, not a claim that dashboards are disappearing.
- [Microsoft: preparing Power BI data for AI](https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-faq): data selection, business definitions and verified answers underpin natural-language interaction. This supports the limits of replacing a chart with chat.
- [Google: HTTP status codes](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes): absent pages can return 404; do not redirect unrelated retired content to a new article solely to retain traffic.

Search intent: readers asking whether AI will replace dashboards and what a useful alternative would do. Target phrase: “are dashboards dead”; related concepts used only where useful: “AI replace dashboards” and “conversational analytics”. The question headline keeps Rob's dodo framing without claiming an unsupported extinction.

Thesis: keep charts for comparison and investigation; operational software should carry the reader from the finding into the work and record what happens. The renovation company is explicitly hypothetical. Its causal story is dashboard finding, manual reconstruction in a spreadsheet, decisions stranded outside the source, and a better path from evidence to action. This differs from the small-team essay's focus on commitments after a prototype.

## Retired articles

These three source files moved from the notes collection to `docs/retired-notes/`, outside the public build. Their OG cards and active links were removed. Their old URLs return 404 with the site's existing page, rather than redirecting readers to a different argument. Git history and these files preserve the originals. The 2009–2019 archive is untouched.

- `2026-08-18-unbooked-at-the-desk`: “Unbooked at the desk, seventy percent did not return within nine weeks”.
- `2026-08-19-i-took-my-own-number-down`: “If a vendor needs a week, you are looking at a claim”.
- `2026-08-19-i-only-checked-the-widths-i-designed-for`: “A clean report is not a clean clinic”.

The methods page remains, with the link to the retired vendor essay removed. No newsletter broadcast is part of this publication.

## Validation

- Independent field-note review passed after separating the dashboard story from the small-team essay's AI example.
- Pinned pnpm 10.27.0 `gate` passed: Astro check had zero errors and 25 existing hints; copy lint had zero errors and nine taste warnings, principally the word “dashboard” in an article about dashboards. Reviewed and retained those uses.
- Production build passed, all 112 legacy redirect checks passed, nine remaining note files passed content checks, and all 84 layout checks passed across seven widths.
- Additional production checks confirmed all three new essays on the homepage, writing index, RSS and sitemap; correct canonicals and server-rendered BlogPosting data; indexable article pages; and all three 1200x630 OG images.
- All retired article URLs returned 404 in the production-output server. No generated HTML links to them. Other drafts remain excluded by the content gate.
- Visually inspected homepage and dashboard article at 1440, 900 and 390px, the mobile writing index and the dashboard share image. Seven browser views had one H1, loaded images and no overflow. Homepage keyboard traversal reached 23 targets with visible focus; mobile menu closed with Escape.
