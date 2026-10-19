# Personal-site redesign handoff

Prepared 2026-10-18; refined 2026-10-19 for Rob Saric. Repository: `robsaric/robsaric.com`. Branch: `codex/personal-site-redesign`. Base: `ca034cfd010467db249e072ecc9cda1a43e2166d`.

## Result

The homepage now leads with “Work is complicated enough. The tools should help.” Rob approved applying a supplied homepage critique on 2026-10-19 and then explicitly selected a warm background, blue accents, and the unbranded portrait. The smaller rectangular photo makes room for three real writing selections under “Start here.” Primary action leads to those selections; secondary action leads to current work. The supporting copy connects better tools to more room for life.

Togetheren remains the intended home for SkillNav, visibly in development. Caretrics is one example of the work. The homepage sequence is introduction, writing, conditional email signup, current work, and a short personal introduction. The process demonstration and repeated follow panel are removed from this page. LinkedIn remains in navigation and footer. No email form appears without a configured endpoint, and no cadence or new service is promised.

The writing index and articles retain their cool-paper reading palette, real titles, dates, and complete mobile selections. Article endings retain the quiet follow invitation and one deliberate next read. Shared arrow feedback respects reduced motion. The homepage's warm variant and updated default sharing image use the same blue and typefaces, so it has a personal identity without reverting to clinic-only framing. The “Creed” screenshot was a point-of-view reference, not approved copy or a request to make subscription primary.

## Review

Local design preview: http://127.0.0.1:4327/ . Writing: http://127.0.0.1:4327/field-notes/ . These URLs require the local preview process to remain running; they are not public deployments.

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

All implementation is in the isolated redesign checkout. No remote push, merge, production deployment, newsletter submission, or social publishing occurred. The source checkout was not edited by this work.

Before an authorized release, review the two essay drafts, inspect the preview on Rob's own phone, and confirm the hosting environment's newsletter configuration. Run the ordinary `pnpm gate` last: the Vercel adapter writes its deployment output during both ordinary and review builds. The final validated output for this handoff is the ordinary production build.

See README for review-build and essay-publication steps. Publishing requires Rob's explicit approval. MCP compatibility: not applicable to this static presentation and content change; no assistant write surface or business workflow was added.
