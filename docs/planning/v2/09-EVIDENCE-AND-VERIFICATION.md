# Evidence and verification boundary

## Sources

- Repository main, reviewed 2026-09-18: `8665c6a5836f796b801ad8257cdccdbb6f5559a2`.
- AGENTS.md; package.json; Astro config; every src/pages route template; COPY, SITE, UI/data dependencies; layouts; subscription API; all nine current notes; archive inventory and shared template; authority claims; OG sources; llms.txt; existing checks.
- Public personal homepage and About/Principles pages were fetched. Some web fetches fail or are cached; source at the pinned commit is the implementation reference. No pixel-level live-browser audit is claimed.
- https://chrisbarlow.nz/ : reference for a broad personal opening supported by specific current projects. No copying of his phrases, biography or project taxonomy.
- https://www.lennysnewsletter.com/about : reference for useful audience-specific publishing, not evidence for interview response rates or clinic reading habits.
- https://docs.astro.build/en/guides/deploy/vercel/ : official support for a static Astro site on Vercel without a server adapter.

## Facts and corrections

- “Astra” is interpreted as Astro based on the named reference repository. No WordPress migration proposed.
- $127,000 is documented as approved in the repo's claims registry; the published note explains its removal and later restoration. The previous chat's apparent-contradiction diagnosis was incomplete. Main issue is current summary/context clarity, not an invented factual retraction.
- The 70%/15% article has a nine-week observation window and mixed year/two-year wording. Do not claim a fresh dataset validation from reading the article. Preserve URL and request source reconciliation before strengthening the statistic.
- Runtime source for newsletter is Resend API; an older AGENTS environment-variable description is stale. Keep backend out of this change.
- Existing customer quote has a documented reuse approval for the personal site. That does not authorize portraying the clinic as a Clinic Operations participant.
- The new publication's participation and handling promises must be followed operationally. No mail, interviews, subscriber migrations or community enrollment were performed in this task.

## Current delivery versus future implementation

Current delivery: versioned Markdown planning package only, with exact copy, page-level review, file map, prompts and acceptance criteria. Existing site source remains unchanged. No new remote Clinic Operations repository, deployment, domain configuration or live website is claimed.

Future implementation: run site gates and visual checks described in 04. Copy statements labeled as operating policy require actual behavior at launch. Missing optional facts are omitted, not made into blocking questions for the whole implementation.

## Validation log

Checks run on the unmodified application plus this docs package:

- `pnpm install --frozen-lockfile`: passed; lockfile unchanged.
- `astro check`: passed, 0 errors, 26 existing hints.
- Copy lint: passed, 0 errors, 4 existing wording warnings.
- Astro/Vercel production build: passed.
- Redirect check: passed, 112 URL variants, 0 misses.
- Notes check: passed, nine entries checked and Now links resolve.
- `pnpm gate` overall: blocked at final `check:layout` because this environment has no Chrome/Edge executable in the checker search paths. No application source changed; do not claim full gate or visual QA passed.
- All relative links among these eleven Markdown documents: passed.
- Tracked source diff: empty before adding the planning directory. This is documentation only.

This log validates the baseline and package consistency, not the proposed website implementation. The implementation must still satisfy 04.

## Delivery status

GitHub repository metadata was readable, and the source checkout succeeded. Creating the requested docs branch through the connected GitHub app failed with HTTP 403, `Resource not accessible by integration`. No branch, commit or PR was created remotely. This package contains the exact local planning files for `docs/planning/v2/`; extract at the repository root and commit them from your authorized local checkout. No existing tracked file is overwritten by this package at the reviewed baseline.
