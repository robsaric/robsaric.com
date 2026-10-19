# Personal principles and reading design

Rob accepted Grill Q15–17 on October 19, 2026. These decisions supersede the earlier equal-row homepage selections and cool reading-page palette in DESIGN.md, AGENTS.md and the earlier direction notes. DESIGN.md remains the reference for the retained typography, spacing, portrait and motion.

- Replace the clinic content at /principles/ with What I believe. Explain personal choices about ownership, listening, useful AI, evidence and room for life.
- Feature the dashboard essay on the homepage and writing index. Give it an explanatory visual; keep supporting essays compact.
- Use warm paper and dark text throughout. Keep blue primarily for actions.
- Preserve the approved homepage hero and Building page.

The diagram illustrates the essay's explicitly hypothetical renovation-company example. It is selectable text with simple connectors, not a product screenshot or customer evidence. Its fuller article version contrasts the disconnected records with keeping the decision beside the work. It renders without JavaScript.

The existing finite link/focus motion remains. No repeating illustration animation or scroll-triggered concealment is added. No new dependencies, tracking or newsletter service changes.

SEO scope: preserve /principles/, note slugs, publication dates, legacy redirects, draft exclusions and article structured data. Update principles metadata and llms.txt, give Writing a complete search description, and repeat existing path exclusions in specific crawler groups without changing the training-crawler allow policy. Search ranking and audience growth are not guaranteed.

Confirmed decisions recorded in CAR-1171. MCP compatibility: not applicable to this static personal-site presentation.

## Direction contract

THESIS: Let a reader find one worthwhile idea and see how Rob thinks. A featured essay leads; the other essays remain easy to scan.

OWN-WORLD: Retain Manrope, Inter, cream paper, charcoal type, blue links and the unbranded portrait. A yellow record in the diagram gives the spreadsheet update a distinct place.

STORY: The homepage introduces Rob's perspective, offers the dashboard essay, then broadens into small teams and life off-screen. What I believe explains the choices behind that work.

FIRST VIEWPORT: Keep the homepage hero unchanged. On Writing, a large dark title sits beside the introduction on desktop, with the featured essay immediately below. Mobile places the essay title and read link before the diagram. Principles pairs its title and introduction, then leads directly into ownership.

FORM: An open editorial feature, compact supporting readings and a readable personal statement. Code-led extension of the approved identity; no separate image comp or launcher seed.

MOTION: Preserve the existing short arrow feedback on hover and focus. All content is immediately visible; reduced-motion removes transitions.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. The existing DESIGN.md is retained under the repository's instruction; this approved direction note records the palette and composition overrides. No new raster assets.

## Implementation and documentation verification

- `BaseLayout.astro` now defaults to the existing warm theme. The reused values are paper `#faf8f2`, wash `#f0f1ec`, charcoal `#29343b`, muted text `#61666a` and rules `#d6d9d9`. Working blue `#244fc7`, deep blue `#183996` and sketch yellow `#f2cc69` are unchanged. These match the previously documented warm values; no new palette was introduced.
- The retained vocabulary is Manrope headings, Inter body text, open ruled entries, flat tonal sections and inline SVG arrows. Prose keeps its `68ch` maximum measure and `18px` / `1.75` desktop body treatment. Shared links retain a `44px` minimum height, a `2px` focus outline and finite `200ms` arrow feedback, with transitions suppressed for reduced motion. Existing photographs, font configuration and the Building page source are unchanged.
- `FeaturedEssay.astro` places the essay introduction beside `DashboardSketch.astro`, then stacks the introduction before the figure below `768px`. Supporting readings use two open columns on desktop and one on mobile. The figure uses selectable text, warm wash, thin record borders and a yellow spreadsheet record; its article variant adds the resolved record. The beliefs use open title-and-prose rows that stack at the same mobile breakpoint. These are scoped compositions, not new global card primitives.
- Saved evidence is in `.impeccable/review/editorial/`: full-page and viewport captures of home, Writing, What I believe and the dashboard essay at `1440px`, `900px` and `390px`, with `verification.json`. The report records one main heading, no horizontal overflow, loaded images and warm paper on all 12 route/width combinations. It also records visible outlines for 21 homepage keyboard stops, zero animations and a `0s` transition in its motion check, and the complete article diagram and ending without JavaScript.
- This documentation pass compared source, the retained `DESIGN.md` and sidecar, the saved verification report and representative desktop, intermediate and mobile captures. It did not rerun browser checks or replace the independent finish review. `DESIGN.md` and `.impeccable/design.json` remain unchanged; their earlier cool-route and equal-row descriptions must be read through this approved override. No new shipping raster needs provenance.

## Validation and finish review

`pnpm gate` passed: Astro check, copy lint, production build, 112 redirect checks, nine note checks and 84 layout checks. The focused browser pass covered four routes at three widths, keyboard access, reduced motion, no JavaScript and local links. A separate SEO check covered all 49 sitemap pages, article structured data and share-image dimensions. Existing deprecation hints and editorial taste warnings remain non-blocking.

The independent screenshot-and-source finish review returned `ship` with no material findings on the four reviewed routes. The independent copy review found no material principles issues and caught an ambiguity in the diagram; the quoting-system label now reads “Revision not recorded.” No detector ran because the launcher is unavailable. Real newsletter delivery, search rankings and audience growth were not tested.

## Dashboard essay: the next job for dashboards

Rob requested a stronger story, a clearer diagram, discussion of Gumloop and similar tools, and a future-facing argument. The dodo remains an opening question, not a claim that dashboards will disappear. The argument now follows a hypothetical renovation company through a customer reply, a disconnected record, a repeated follow-up and the risks of automating the work. It proposes a view of completed work, decisions needing approval and partial failures alongside the charts a team still needs.

The first visual now says “Customer declined” in the owner's spreadsheet while the quoting system says “Follow-up still due.” These labels replace the earlier revision example. The new `ActionReview` figure uses a semantic table to show a recorded decision, a price request awaiting review and an email that was sent even though its record update failed. Both visuals use selectable text and render without JavaScript; no decorative dodo or new raster asset was added.

Sources checked against the publishers' current documentation on October 19, 2026: Gumloop's Agent Tasks and human-in-the-loop announcements, and n8n's human approval documentation. The essay describes configurable capabilities, not tested outcomes or a claim that either tool can run this business without setup. The existing Power BI source remains. The URL, title, publication date and share image are unchanged; the summary and search description now reflect the stronger argument.

Validation: the full gate passed, including 112 redirects, nine notes and 84 layout checks. A focused production-build review in `.impeccable/review/dashboard-future/` checked home, Writing and the essay at 1440, 900 and 390 pixels, 21 keyboard stops, reduced motion, no-JavaScript rendering and local links. SEO checks passed for the 49 sitemap pages and existing article structured data and share images. Existing Astro deprecation hints remain non-blocking. The independent copy review's partial-failure clarification was applied before capture.

The independent finish review of this refinement returned `ship` with no material findings after inspecting all 15 requested top/detail/action captures and the three full article captures. The mobile table wraps tightly but retains clear row and column relationships. No further design changes were needed.
