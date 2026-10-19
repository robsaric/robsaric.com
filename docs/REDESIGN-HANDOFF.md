# Personal-site redesign handoff

Prepared 2026-10-18 for Rob Saric. Repository: `robsaric/robsaric.com`. Branch: `codex/personal-site-redesign`. Base: `ca034cfd010467db249e072ecc9cda1a43e2166d`.

## Result

The site now leads with “I’m on the side of small teams.” Rob's perspective connects useful tools, building companies, design, and life beyond the screen. Togetheren is the intended home for SkillNav, visibly in development. Caretrics is one example of the work. LinkedIn is easy to find in the introduction, navigation, articles, and closing invitation.

The blue, paper, ink, and yellow system pairs self-hosted Manrope headlines with Inter prose. Existing solo photographs carry the personal identity. A three-step working sketch adds finite, purposeful motion; readers can use it by keyboard, with reduced motion, or without JavaScript. The writing index shows actual titles, summaries, and dates, including wider selections from the archive. Mobile keeps those selections visible.

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
