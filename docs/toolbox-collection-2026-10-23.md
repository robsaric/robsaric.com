# Toolbox collection and skill naming

## Requested correction

Rob clarified that he wanted a better skill name, not a visible label repeating the rejected "Interview your draft". He also requested a logical collection of useful things, with Impeccable applied to the layout.

Use **Interview, Draft, Edit**, identified as `interview-draft-edit`. The explanation names the roles: AI interviews you, drafts from your answers, and leaves the final edit to you. The guide, overview, installation examples, prompt, skill source, ZIP and share card use this name together.

The existing guide URL remains `/toolbox/interview-your-draft/`. Canonical downloads live under `/downloads/interview-draft-edit/`. Prior download addresses contain compatibility copies of the renamed files; their ZIP installs the new folder. Future edits should update the canonical source first, then rebuild the ZIP and copy the compatibility files. No platform account has been modified or skill installed.

## Surface contract

- Mode: Read. Help a visitor choose something useful for the task in front of them.
- Keep the approved paper/charcoal appearance, serif headings and restrained actions.
- A short introduction and three anchor links expose the collection's structure without a filter interface for a tiny collection.
- Writing workflow: one guide with explicit AI/human roles, a primary guide link and a direct skill download.
- Downloads: the plain-text prompt and blank voice template, each with its purpose and file format.
- Tools & libraries: Claude, Codex, Anthropic's skill examples and Vercel's skills CLI. These are clearly labelled documentation/repository references, with a specific use and limitation. They are not claims of Rob's firsthand experience or product endorsements.
- Stack the content in reading order on phones, with accessible link names and at least 44px action targets.
- No email gate, fabricated reviews, public GitHub repository, new dependency or publication.

## Reference checks

Reviewed the makers' current documentation for Claude custom skills, Codex skills, Anthropic's example library and Vercel's skills CLI. Links are present in the collection. Avoid implying that a repository URL installs instructions by itself, that every repository file has the same license, or that package-format validation proves actual platform behavior.

## Verification

- `pnpm gate` passed: 29 tests, Astro check, copy lint, production build, 112 redirect checks, three current notes, 51 share cards and 210 layout checks across both appearances. Existing Astro hints and copy warnings remain; no new test or application failure.
- Regenerated and inspected both Toolbox share cards. The guide card uses the new name at 1200 x 630 without overflow.
- Inspected the collection at 1440, 900 and 390 pixels across day and night. Verified the renamed guide at desktop width, one H1, no mobile horizontal overflow, clear phone stacking and keyboard activation of section links. Evidence is saved under `.impeccable/review/toolbox-collection-2026-10-23/`. The development server was restarted once to load changed scoped styles.
- The canonical ZIP contains only `interview-draft-edit/SKILL.md`, matching the source. The compatibility ZIP matches byte for byte. SHA256: `5280AF98C6411CAEF3BC98D925CFDF02CC17028A857E45E6F87907392D0FCEC6`.
- The ZIP, prompt, voice template and old ZIP address each returned HTTP 200 from the local preview. `git diff --check` passed.
- No actual Claude/Codex installation or workflow run was performed. That remains a release check before claiming platform-tested behavior. No commit, push, deployment or public repository creation was performed.
