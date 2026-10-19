# Personal-site redesign handoff

Prepared 2026-10-18; refined 2026-10-19 for Rob Saric. Repository: `robsaric/robsaric.com`. Branch: `codex/personal-site-redesign`. Base: `ca034cfd010467db249e072ecc9cda1a43e2166d`.

## Result

The homepage now leads with “Work is hard enough. The tools should help.” Rob approved applying a supplied homepage critique on 2026-10-19 and then explicitly selected a warm background, blue accents, and the unbranded portrait. The smaller rectangular photo makes room for three real writing selections under “Start here.” Primary action leads to those selections; secondary action leads to current work. The supporting copy connects better tools to more room for life.

The dedicated `/building/` page leads with “More people should get to build something of their own.” It connects opportunity, ownership and independence to Rob’s already-public personal history, Togetheren, developing SkillNav and Caretrics. The homepage sequence is introduction, writing, conditional email signup, a short mission invitation, and a personal introduction. Navigation and the hero work link go directly to the new page. LinkedIn remains in navigation and footer and is the new page’s closing primary action. No email form appears without a configured endpoint, and no cadence or new service is promised.

The writing index and articles retain their cool-paper reading palette, real titles, dates, and complete mobile selections. Article endings retain the quiet follow invitation and one deliberate next read. Shared arrow feedback respects reduced motion. The homepage, building page and updated default sharing image use warm paper and dark headlines; blue primarily identifies page links and actions. The “Creed” screenshot was a point-of-view reference, not approved copy or a request to make subscription primary.

## Review

Local design preview: http://127.0.0.1:4327/ . Mission and work: http://127.0.0.1:4327/building/ . Writing: http://127.0.0.1:4327/field-notes/ . These URLs require the local preview process to remain running; they are not public deployments.

Two proposed first-person essays remain `draft: true`:

- `2026-10-18-small-teams-deserve-their-time-back.md`
- `2026-10-18-building-with-ai-and-life-beyond-the-feed.md`

Only explicit `editorial-review` mode includes these drafts, with a visible review notice and `noindex`. Ordinary production excludes their routes and links from the homepage, writing index, RSS, and sitemap. RSS excludes drafts even in review mode. Approve the wording and publication before changing either draft flag. Existing published articles, original dates, archive bodies, and numerical qualifications were preserved.

`docs/AUDIENCE-AND-PUBLISHING.md` contains the audit, three recurring subjects, a sustainable proposed cadence, two LinkedIn drafts, and a measurement plan. No social post or message was sent. Audience growth is an objective, not a promised outcome.

## Changed surfaces and files

- Homepage, writing index, article template, About, Contact, shared navigation/footer, RSS, and shared typography. Existing evidence, principles, archive, and subscription routes inherit the new shared palette and navigation.
- `src/data/editorial.ts` holds the new personal-site copy; `src/lib/editorial.ts` selects recent and earlier writing.
- New components: `Arrow`, `ReadingList`, `WorkingSketch`, and `Connect`.
- `src/styles/{tokens,global,prose}.css`, `astro.config.mjs`, and both layouts define the visual system and self-hosted fonts.
- Site/UI metadata, `public/llms.txt`, OG templates, default social card, and five note cards follow the new identity.
- `src/lib/notes.ts` and `scripts/check-notes.mjs` distinguish review drafts from production. The layout gate now checks the new personal-copy element.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, the direction contract, README, and AGENTS record the current approved direction. Historical design references remain available.

No dependencies, package version, lockfile, backend newsletter handler, tracking service, or legacy redirect mapping changed.

## Validation

### October 19 editorial accents and small-team rewrite

- Added a static yellow drawn underline beneath the homepage’s “help.” and reused it in an original, text-first article sketch. The existing layout, dark headline, portrait and finite arrow feedback remain. The sketch stacks on mobile and has no JavaScript or external asset requirement.
- Rewrote the small-team draft as “Small teams still have to answer the phone.” Its clearly hypothetical studio story moves through a changed date, a customer complaint, an inadequate automated summary and a concrete ownership decision. The AWS two-pizza source is linked; Daniel Bentes is credited as the prompt. His infographic, statistics and executive anecdotes are not reused.
- Updated the summary, revision date, related-reading reasons, draft share card and unsent LinkedIn draft. Kept the canonical URL, original date and draft flag. SkillNav remains explicitly in development. The Building page, published articles, newsletter provider and dependencies are unchanged.
- Independent copy review passed after correcting a causal gap and removing internal planning language. Browser review covered homepage and essay at 1440, 900 and 390px, including the diagram and share image. No overflow, missing images or heading problems; article ending aligns with prose. Keyboard focus, reduced motion and no-JavaScript reading passed. Evidence: `.impeccable/review/small-team/`.
- Final ordinary `corepack pnpm@10.27.0 gate` passed: 112 redirects, 11 notes and 84 layout checks. Existing Astro hints and three copy taste warnings remain. Generated-output checks passed across 50 production and 52 review HTML pages; both drafts stay excluded from production routes, links, RSS and sitemap, and review remains noindexed.
- Opened the updated homepage and essay in the default browser. Update the existing redesign PR under the prior push authorization; no merge, production publication or subscriber write is included.
### October 19 final headline and push preparation

- Chose “Work is hard enough. The tools should help.” after Rob asked for the stronger wording and authorized pushing. Updated the homepage, page title, share-card text/alt, generated site card and current documentation together.
- Refreshed editorial preview and opened the homepage in the default browser. Inspected the final homepage at 1440, 900 and 390px and the generated sharing image. Heading, loaded images, first writing selection, keyboard focus, reduced motion and no-JavaScript reading links pass. Evidence: `.impeccable/review/home-headline/`.
- Final ordinary `corepack pnpm@10.27.0 gate` passed: zero Astro/copy errors, 112 redirects, 11 notes and 84 layout checks. Existing 25 Astro hints and three copy taste warnings remain. The last build is ordinary production.
- GitHub main contains no newer commits than the redesign base. Push destination is the separate `codex/personal-site-redesign` branch in `robsaric/robsaric.com`, with a review PR against main. The two essays remain drafts; no newsletter configuration, subscriber write or direct production deploy is part of this push.
### October 19 homepage copy refinement

- User supplied a Perplexity critique as a copy reference and explicitly rejected its styling. Kept the existing visual composition, portrait, dark headline, button shapes and two-action hierarchy; the building page is unchanged.
- Tightened the introduction, changed the identity to Founder · Writer · Ottawa, and preserved the exact life-outside-work sentence with darker text and medium weight. Conditional signup heading/action now says Get my notes; its position and provider behavior are unchanged.
- `corepack pnpm@10.27.0 gate`: passed, including all 84 layout checks, 112 redirect checks and 11 notes. Existing Astro hints and copy taste warnings remain; no new errors.
- Review build passed. All six homepage full-page/viewport captures inspected at 1440, 900 and 390px. Keyboard focus, finite hover feedback, reduced motion and no-JavaScript reading links passed. Evidence: `.impeccable/review/home-copy/`.
- The first writing title is fully visible inside a 900px-high viewport at each reviewed width. No new form, subscription, cadence promise or production configuration change was introduced. The local preview has no newsletter endpoint; production signup configuration remains unverified.
- Changed application files: `src/data/editorial.ts` and `src/pages/index.astro`. No article, building-page, navigation, provider, dependency or lockfile change. In-app homepage opening was queued; use the local URL above to review.

### October 19 mission page

- `corepack pnpm@10.27.0 gate`: passed. Astro zero errors and 25 existing hints; copy lint zero errors and three existing taste warnings; 112 redirect checks; 11 notes; 84 responsive checks across 12 routes and seven widths.
- Review build passed. Homepage and building-page captures inspected at 1440, 900 and 390px. One H1, loaded images, warm theme, dark headlines, no horizontal overflow, visible first reading title and correct active navigation.
- Browser checks: 17 internal links/anchors resolve, all 23 building-page keyboard targets show focus, mobile Enter/Escape works, hover feedback respects reduced motion, and the full building page remains readable without JavaScript.
- Generated output: 50 production and 52 review HTML pages checked, next reads valid, draft URLs absent from production and both RSS feeds. No article bodies or publication flags changed.
- The default sharing image was regenerated with dark headline text. No dependencies, lockfiles, backend or tracking changes. This static page adds no loading, empty or error states; existing newsletter handling is unchanged.
- New files: `src/pages/building.astro`, `docs/building-direction.md`. Updated: homepage, navigation, editorial data, OG template/image and product/design/direction documentation. Browser evidence: `.impeccable/review/building/`.
- Independent Impeccable finish review: **ship**, with no material findings across source, all 12 desktop/intermediate/mobile captures and the sharing image. The launcher/detector was unavailable; direct source inspection and browser evidence were used.
- Automatic approval review initially blocked the CAR-1171 append. Rob then explicitly authorized the destination and six-decision payload; the append succeeded, preserving prior issue history. The local record is `docs/building-direction.md`.
- Homepage and building page opened in the default browser. In-app panel requests were queued. No push or deployment.

### October 19 homepage publication update

- Final `corepack pnpm@10.27.0 gate`: passed on the selected warm-background/blue-accent/unbranded-portrait version. Astro: zero errors, 25 existing hints. Copy lint: zero errors, three existing taste warnings. Redirects: 112 URLs, zero misses. Notes: 11, no problems. Layout: 77 checks across 11 routes and seven widths, no overflow or homepage failures.
- Explicit editorial-review build passed. Fresh homepage, writing, and essay probes passed at 1440, 900, and 390px. Homepage first article titles are fully visible within a 900px-tall viewport, starting at about 723, 783, and 804px. Desktop, intermediate, mobile, and sharing-image captures were visually inspected.
- All three homepage reading links return 200; both hero anchors resolve. All 24 desktop keyboard targets have visible focus. Enter opens the mobile menu; Escape closes it and returns focus. Link feedback, reduced motion, and no-JavaScript reading links passed. Measured principal text contrasts range from 5.11:1 to 11.99:1.
- All 49 production and 51 review HTML pages passed generated-output checks. Draft exclusions and next-read destinations remain correct. The two draft essay bodies did not change in this task. Newsletter submission/provider delivery were not tested; the homepage renders no signup without a configured endpoint.
- Independent finish review: **ship** for the layout. The follow-up review confirmed the user-selected blue/warm identity and unbranded image, with no material corrections. The Impeccable launcher/detector was unavailable; source inspection and browser evidence were used directly.
- Files changed: homepage composition; editorial, site, UI, and sharing copy; the optional warm theme in BaseLayout/tokens; the conditional newsletter-only variant in Connect; the matching layout guard; default sharing-card template/output; and design/direction/handoff documentation. No dependency, lockfile, article body, redirect, or tracking changes.
- Evidence: `.impeccable/review/home-publication/`. The updated homepage was opened in the default browser. Review the headline, the first three pieces, and the two reading/work actions. Nothing was pushed or published.

### October 19 analog-life essay revision

- Rewrote the proposed AI/attention essay as **I want my analog life back.** Adult analog life now leads; childhood remains part of the argument. The title, summary, draft sharing image, and companion LinkedIn draft agree. The canonical URL, date, and draft flag are unchanged.
- Verified the short Cory Doctorow quotation against the actual book introduction on Macmillan's website and the Meta quotation against its 2025 SEC annual report. Sources are linked in the essay. The client-handoff example is explicitly hypothetical; no personal story, product capability, or organizational affiliation was invented.
- A separate copy review supplied four cuts, all applied before validation. The revised essay removes the generic Big Tech passage and ends with a concrete reader action.
- Explicit editorial-review build and the final pinned `pnpm gate` passed. Redirects: 112 URLs, zero misses. Content: 11 notes. Layout: 77 checks, no overflow. Generated-output checks passed for all 49 production and 51 review pages, including draft exclusions and valid next-read links.
- Fresh browser checks passed for homepage, writing index, and essay at 1440, 900, and 390px. Inspected the revised essay at desktop and mobile widths and its 1200x630 sharing image. Keyboard feedback, reduced motion, and no-JavaScript checks also passed.
- Changed files for this revision: the one draft essay, its sharing image, `docs/AUDIENCE-AND-PUBLISHING.md`, and this handoff. No layout, dependency, lockfile, or published article changed. The revised essay remains a local review draft.

### October 19 refinement validation

- Final `corepack pnpm@10.27.0 gate`: passed after the sharing-image update. Astro: zero errors; copy lint: zero errors and the same three existing taste warnings. Content: 11 notes. Redirects: 112 URLs with zero misses. Responsive gate: 77 checks across 11 routes and seven widths.
- Explicit editorial-review build: passed. Visually inspected homepage and article endings at 1440, 900 and 390px, plus the mobile writing index and 1200x630 social image. Nine page/viewport probes passed: no overflow, one H1, images loaded, RSS targets 44x44px, and article endings aligned with prose within one pixel.
- Browser interaction checks: 3px hover feedback, keyboard focus with a visible outline, stationary arrows under reduced motion, and all three sketch panels available without JavaScript. No loading sequence or new client script was introduced.
- Generated-output check: all 49 production HTML pages and 51 review HTML pages inspected. Six production and eight review next-read links resolve, none point to themselves, production contains no links to the two draft essays, and both RSS feeds exclude drafts. Unselected articles omit the related section instead of showing an empty state or arbitrary fallback.
- Share card regenerated and inspected. `git diff --check` passed. No content-entry, dependency or lockfile changes.
- Evidence is local in `.impeccable/review/refinements/`. The Impeccable launcher remains unavailable; the checks above used the repository tools and rendered browser evidence.
- Both requested pages were opened in the default browser. Review the opening, hover or tab through its reading link, then read to the post's final sentence and follow invitation. No deployment or public posting occurred.

### Original redesign validation

Node 22.18.0; pnpm 10.27.0. Dependencies installed with the frozen lockfile. In this sandbox, commands used the pinned `corepack pnpm@10.27.0` executable with automatic package-manager pinning disabled; plain `pnpm` otherwise attempted a registry lookup.

- `pnpm gate`: passed. Includes Astro checks, copy lint, production build, redirects, content checks, and responsive layout checks.
- Final production responsive gate: 11 routes at 7 widths, **77 checks**, no horizontal overflow or homepage failures.
- Redirect gate: **112 URLs, zero misses**. Content gate: **11 notes**, no problems, including all draft exclusions.
- Explicit review build: passed. A separate browser pass verified 15 page/viewport combinations, loaded images and self-hosted fonts, one heading per page, all 8 selected writing items visible on mobile and desktop, and 16 internal links returning 200.
- Mobile menu and Escape/focus return, keyboard sketch controls, finite motion, reduced motion, and all three no-JavaScript sketch panels passed.
- Both draft routes exist only in review output, are visibly labelled and noindexed, and are absent from normal output and both RSS feeds. Production homepage remains indexable and has no preview notice.
- Newsletter front-end invalid-address, recovery, and loading states passed with submission prevented. No real address was sent. Newsletter provider delivery was not tested.
- Default OG card plus five note cards generated and visually inspected at 1200 by 630. Existing numerical context remains readable.
- `git diff --check`: passed. Published historical content and dependency files have no changes.

Astro reports existing deprecated `z` usage and a JSON-LD inline-script hint. Copy lint has no errors and three taste warnings: an animation `transform` identifier and two existing uses of “dashboard.” They do not indicate failed gates.

Review evidence and scripts live locally in `.impeccable/review/` and are intentionally ignored. The bundled Impeccable launcher was unavailable; the disclosed code-led fallback used a fresh independent reviewer and a separate design documenter. The final review disposition is **ship**, with no remaining material fixes. The report is `.impeccable/review/finish-review.md`; its clearance does not authorize publication.

## Release boundary

All implementation is in the isolated redesign checkout. Rob authorized the GitHub redesign-branch push on October 19; the earlier validation entries record the local-only state before that authorization. Merge, direct production deployment, newsletter submission and social publishing are outside this push. The source checkout was not edited by this work.

Before an authorized release, review the two essay drafts, inspect the preview on Rob's own phone, and confirm the hosting environment's newsletter configuration. Run the ordinary `pnpm gate` last: the Vercel adapter writes its deployment output during both ordinary and review builds. The final validated output for this handoff is the ordinary production build.

See README for review-build and essay-publication steps. Publishing requires Rob's explicit approval. MCP compatibility: not applicable to this static presentation and content change; no assistant write surface or business workflow was added.
