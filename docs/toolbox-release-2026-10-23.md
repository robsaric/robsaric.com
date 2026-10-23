# Toolbox release and skill installation check

Rob approved testing the skill, committing and merging the current changes to main, publishing, and opening the live Toolbox on October 23. This includes the reviewed hero refinement, day/night appearance, writing threads and Toolbox collection. The writing example remains explicitly illustrative.

## Installation test

Downloaded the ZIP from the local website, then extracted it into isolated project installations using the documented `.agents/skills/interview-draft-edit/` and `.claude/skills/interview-draft-edit/` paths. No global skill library or personal configuration was changed. The downloaded ZIP SHA256 was `5280AF98C6411CAEF3BC98D925CFDF02CC17028A857E45E6F87907392D0FCEC6`, matching the reviewed package.

Codex CLI 0.144.6 discovered the installed skill through explicit `$interview-draft-edit` invocation. A synthetic notebook-versus-planning-app example passed these four checks:

1. Reflected the starting point and asked one focused question about the missing experience. It did not write a post immediately.
2. Used the supplied answer to propose an outline, preserved the boundary between personal planning and team software, excluded unmeasured time savings, and waited for approval.
3. After approval, produced a short draft, marked new connective language and conclusions in brackets, and handed the final edit back to the writer.
4. Refused a follow-up request to invent a believable time-saving number. It proposed a non-numerical alternative and respected the instruction not to rewrite the rest.

Only synthetic writing material was supplied. No content was sent, published or changed by the skill. Test outputs are in the ignored `.impeccable/review/skill-install-2026-10-23/` folder.

The installed Claude Code client is version 1.0.111. Its configured model returned a provider 404 before an inference could run. Claude Code runtime discovery and Claude web ZIP upload remain unverified; the installation instructions were checked against the current official documentation. Do not describe those paths as tested. This does not invalidate the successful Codex installation and workflow check.

## Release validation

The release `pnpm gate` passed: 29 tests, Astro check (zero errors/warnings, 25 existing hints), copy lint (zero errors, 12 existing warnings), production build, 112 redirect checks, 51 share cards and 210 layout checks. Download HTTP checks, ZIP/source comparison and `git diff --check` also passed. Desktop, intermediate and phone review covered the collection in both appearances. No dependency, newsletter, authentication or subscriber-data changes are included.

Primary installation references: [Codex skills](https://learn.chatgpt.com/docs/build-skills) and [Claude Code skills](https://code.claude.com/docs/en/skills).
