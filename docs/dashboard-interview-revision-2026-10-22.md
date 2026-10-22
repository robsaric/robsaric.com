# Dashboard interview revision, October 22

Rob approved the short draft drawn from his answers and asked to retain the bracketed wording without brackets. He also requested smoother transitions, an updated article and share card, and a local preview before publication.

## Editorial changes

The article is now “What should a dashboard do?” It uses the anonymous plastic-surgery dashboard observation Rob supplied. It does not name the clinic, infer motives or invent results.

The order follows one argument: displaying numbers; understanding and action; the risk of skipping discovery when building becomes easy; a monthly accounts-receivable review; choosing interfaces that fit the person; and preserving personal contact where automation would weaken the relationship. Small connective edits make the examples answer the preceding paragraph. The final question asks the reader to identify a bottleneck and where they need to remain involved.

The approved source claims are linked in the body: Attio describes connecting context with action, and Sequoia argues for selling work rather than tools. These are narrow descriptions of those sources, not evidence that dashboards will disappear or that a vendor solves every workflow.

The fictional renovation-company story, failure-state table and detached further-reading footer are removed. The original URL and October 19 publication date remain; the updated date is October 22. The old what-id-change fragment remains as an alias at the practical review example. Athlete Builder and the broader growth framework are reserved for separate writing.

The title, summary, description, Now teaser, featured illustration and dashboard share card now agree. The illustration asks what changed and why, with the decision left to the reader. The share card asks “What changed?” then “What can you do about it?” within the existing warm paper, blue and yellow design. The cache version changes; image and page paths remain stable.

## Review and validation

Independent read-only review: /root/dashboard_revision_review. No factual, privacy or product-boundary blockers. Applied its one small language edit: “different ways to do the work” replaces the jargon “interact with your job to be done.”

Passed:

- `pnpm build`.
- `pnpm generate:og`: 49 cards, 1200 × 630, loaded fonts/images, no overflow. Visually inspected the dashboard card.
- `pnpm gate`: 25 subscription fixtures, Astro check, copy lint, build, 112 redirect checks, three current notes, 49 share-card checks and 84 responsive layout checks.
- Browser inspection of the article and Writing index at 1440, 900 and 390 pixels. The new title, source links, readable paragraphs, one newsletter invitation and matching feature were visible. No horizontal overflow; one article H1; old failure-state table absent.
- Keyboard traversal of the homepage's 26 controls: reachable with visible 2px focus outlines. Mobile menu opened and closed with Escape.

Evidence is in the ignored `.impeccable/review/dashboard-interview/` directory. No subscription was submitted. The homepage CTA, article URLs, newsletter behavior and original dates are preserved. Existing unused historical illustration components were not removed.

The browser now shows the revised local article. No commit, push, merge or deployment occurred in this pass.

## Publication authorization

After reviewing the local article, Rob explicitly requested: “Looks good. Commit and merge these changes to main, publish them, and open the live article so I can review it.” This authorizes the approved article/share-card revision and the accumulated approved homepage and Writing-page refinements on this branch. Publication will follow the repository's pull-request and Vercel deployment checks; the earlier local-only statements above describe the preview stage.

## Decision and voice records

The confirmed scope was appended to CAR-1171 under “Decisions — 2026-10-22: dashboard interview revision,” following the invoked Grill skill.

The invoked interview skill's close step saved Rob's verbatim answers to `I:/My Drive/Caretrics Brain/1-voice/wrote/interviews/2026-10-22-what-should-a-dashboard-do.md`. The copied file hash matched the source. The dashboard and Athlete Builder stories were appended to the story bank as candidates, not automatically approved entries. Raw interview material is excluded from the site's Git changes.
