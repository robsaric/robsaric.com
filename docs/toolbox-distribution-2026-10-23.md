# Toolbox: guides and reusable skills

Rob asked for a clearer explanation of Toolbox, explicit skill usage on its guides, and a recommendation for future public GitHub distribution. This pass changes local copy and installation help only. It does not create a repository, install a skill into Rob's account, or publish the site.

## What a reader should understand

Toolbox is a growing collection of products, GitHub libraries, AI skills and practical workflows. Each entry should explain the task it helps with, what is needed to use it, a concrete example, limitations and trade-offs. Record whether Rob uses it, is trying it or has only researched it; do not present evaluation as firsthand experience. Only entries with actual reusable instructions should offer a prompt or skill. Readers can copy a prompt for one conversation or install the instructions as a skill for reuse. Explain that distinction before asking readers to download anything.

The first entry, "Your ideas. AI asks questions. You edit the final copy.", offers a clearly named skill download and separate setup instructions for Claude, Claude Code in a local project, and Codex in a local project. The existing instruction-only ZIP is portable; platform-specific installation does not require three copies of the workflow. ChatGPT users can still paste the prompt. Avoid implying that pasting a website or repository URL installs a persistent skill.

Voice reference: Rob supplied his private voice folder. The voice guide and two public writing samples were read to guide plain language and peer-to-peer explanation. No source documents, private paths, personal voice profile, or client material were added to the public downloads. The reusable skill guides each reader to use their own material.

## Proposed public distribution, for a later decision

Recommend a separate public repository named `robsaric/toolbox` (proposed; not created or checked for availability). The website remains the guide and demonstration. GitHub holds the authoritative reusable instructions, versions, change history and installation documentation.

Suggested starting layout:

```text
README.md
LICENSE
skills/
  interview-your-draft/
    SKILL.md
    assets/
      voice-profile.md
examples/
  interview-your-draft.md
```

- Keep one canonical skill and generate the downloadable ZIP from a tagged release. Link each guide to that exact version and its source. Do not maintain separate hand-edited Claude and Codex copies.
- Choose an explicit reuse license before calling the library open source. MIT is a recommendation for the original skill instructions, subject to Rob's decision; public source alone does not grant that license. Personal essays and photos do not become part of the skill library.
- For the first release, document and test the ZIP path plus individual skill installation from GitHub. Codex's built-in skill installer accepts repository sources. Vercel's skills CLI can select a skill from a repository for Claude Code or Codex. These are distinct installation mechanisms, not a bare repository link magically taking effect.
- Add a thin plugin package when shipping a maintained collection. Current OpenAI guidance recommends plugins for reusable distribution, and Claude Code also supports them. Keep the skill source shared; manifests should only package it. Do not build an MCP service for a writing workflow that needs no external connection.
- Before advertising a platform as tested, install the actual release in that platform and run a rough draft through the interview. Record version, date, expected first question, outline behavior, and refusal to invent a missing story. Format validation alone is insufficient.
- Keep downloads free and email signup optional. Link a useful example back to the guide rather than promising productivity gains without evidence.

## Examples and primary documentation reviewed

Reviewed 2026-10-23:

- [Matt Pocock's skills](https://github.com/mattpocock/skills): task-oriented explanations and agent-specific installation sections. Borrow the clear handoff from problem to runnable workflow, not the engineering-only positioning.
- [Anthropic's skill examples](https://github.com/anthropics/skills): self-contained skill folders and separate usage instructions by surface.
- [Vercel's skills CLI](https://github.com/vercel-labs/skills): repository installation with skill and agent selection; project scope is the default.
- [Codex skill instructions](https://learn.chatgpt.com/docs/build-skills): local `.agents/skills/` discovery, explicit invocation, repository installation through the skill installer, and plugin distribution guidance.
- [Claude Code skill instructions](https://code.claude.com/docs/en/skills): local `.claude/skills/` discovery and slash invocation.
- [Claude custom skill instructions](https://support.claude.com/en/articles/12512180-use-skills-in-claude): ZIP upload through Customize and capability requirements.

## Local verification

- `pnpm gate` passed: 29 tests, Astro check with zero errors/warnings and 25 existing hints, copy lint with zero errors and 12 existing warnings, production build, 112 redirect checks, 3 current notes, 51 share cards, and 210 layout checks across both appearances.
- Visually reviewed the Toolbox overview and guide at 1440, 900 and 390 pixels. Expanded Codex setup by keyboard; confirmed native disclosure controls have 54px targets, visible focus and wrapping file paths on phones. The local server needed restarting to invalidate stale development CSS; the production build had the correct styles.
- Reviewed the overview in night appearance and restored Auto. Screenshots are in `.impeccable/review/toolbox-clarity-2026-10-23/`.
- No installer code was added. The actual Claude/Codex installation walkthrough remains a release check before advertising platform-tested compatibility.

## Confirmed naming and sequence: Grill Q47

Rob rejected "Interview your draft" and clarified that the whole method should be visible. He confirmed:

1. Title: "Your ideas. AI’s questions. Your edit."
2. Introduction: "Start by writing or speaking what’s on your mind. Let AI ask questions to fill in the gaps, then turn your answers into a draft. You make the final edit."
3. Five roles in sequence: you write or speak an idea; AI asks questions; you answer; AI assembles a draft; you make the final edit. Checking the outline belongs before AI assembles the draft.
4. Update the guide, Toolbox listing and share card together. Update the copyable prompt and skill instructions to accept a spoken starting idea and wait for the writer's answers. Preserve existing addresses and the `interview-your-draft` installation identifier.

The new title replaces the Q44 label and the unaccepted Q46 alternative. Publishing remains separate.

## Subsequent preview clarification

Rob then requested "Your ideas. AI asks questions. Your edit the final copy." and asked how to make it a method. Correct the grammatical typo to "You edit the final copy." Present the already approved process as the interview-first writing method, with a written or spoken input, distinct human/AI roles, an outline checkpoint and a human-edited result. Do not claim that the method is novel or experimentally validated. The example now includes the fifth stage so AI's draft is visibly different from the writer's final edit.

Rob also explicitly broadened Toolbox beyond AI workflows to GitHub libraries and products. The introduction describes that intended collection. There is still only one guide; no placeholder reviews, product endorsements, filter interface, public repository or new product recommendations were added.

## Final local verification after the clarification

- Rebuilt both Toolbox share cards. The guide card shows the revised title at 1200 x 630 with no overflow.
- `pnpm gate` passed tests (29), Astro check, copy lint, production build, redirects (112), notes and social cards (51), then stopped on a temporary `EBUSY` lock while the layout browser opened its port file. The isolated `pnpm check:layout` rerun passed all 210 checks. No application fix was needed. Existing hints and copy warnings remain as recorded above.
- Checked the revised guide title at 1440, 900 and 390 pixels and opened the expanded five-stage example. Reviewed the updated Toolbox overview in night appearance. Saved current screenshots as `guide-final-desktop.png`, `guide-final-tablet.png`, `guide-final-phone.png` and `toolbox-final.png` under `.impeccable/review/toolbox-clarity-2026-10-23/`. Browser viewport restored; the reader's selected Night appearance was retained.
- Rebuilt the ZIP and verified that its only entry is `interview-your-draft/SKILL.md`, byte-for-text equivalent to the source. SHA256: `CCA86D275C8813C9799BBEA95A2E73830D1DC4B7EB67C181399E9E5DEAE68E99`. This supersedes earlier local download hashes.
- `git diff --check` passed. Actual Claude/Codex installation and behavioral testing remain a pre-release check; no account installation was performed.
- Clarifications recorded in CAR-1171 under the invoked Grill workflow. No commit, push, merge, deployment or public repository creation was performed in this pass.
