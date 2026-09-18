# Primary prompt: personal website v2

Copy the following into Codex in `robsaric/robsaric.com`.

---

Implement the personal website v2 described in `docs/planning/v2/`. Read AGENTS.md, then README.md, 01-PAGE-REVIEW.md, 02-PERSONAL-COPY.md, 03-PERSONAL-IMPLEMENTATION.md, 04-ACCEPTANCE.md and 09-EVIDENCE-AND-VERIFICATION.md. Read the current source before editing; the reviewed baseline was main at 8665c6a5836f796b801ad8257cdccdbb6f5559a2. Preserve subsequent unrelated work.

Goal: make robsaric.com a compelling personal founder site about building software that helps good people run better businesses. Caretrics is the primary current project. Clinic Operations is an early invitation to learn with clinic teams of every size. It is not only for multi-location groups or Jane users.

Do the work through validation, not just a proposal. Follow the active repository editing mode: apply authorized changes in a writable checkout, or emit complete files in its documented read-only handoff mode. Do not merge or deploy without the applicable authorization.

Tasks:
1. Record baseline git status and run the existing gate. Distinguish pre-existing failures from new ones.
2. Preserve approved biography and facts. Treat the copy in 02 as the v2 implementation brief. Update the canonical docs/COPY.md and relevant authority entries with the new positioning; preserve historical approvals and locked facts.
3. Replace the homepage product walkthrough with: broader hero; what I am building (two compact project entries); up to three real notes; short personal motivation; contact/newsletter invitation. Remove Evidence, Stages and OperatorProof from homepage composition, not from the repository. Retain their methods/supporting routes and data dependencies.
4. Update About, Contact, notes introduction, shared navigation/footer and metadata as specified. Keep all published note and archive URLs, original dates, RSS and permanent redirects. Keep six draft notes hidden in production.
5. Use existing tokens, portraits, Astro components and CSS. Do not upgrade dependencies, add a client framework, rebuild the newsletter, or invent content to fill a grid. Handle mobile explicitly.
6. Personal-site Clinic Operations card must use /contact/ until that domain is launched and checked. Do not add Clinic Operations routes inside this repository's src/pages.
7. Validate through 04. Update OG source copy and regenerate cards. Update public/llms.txt. Check any homepage anchor destinations affected by removed sections.
8. Return changed files, verification results, screenshots at 390/900/1440, and any factual questions that remain. Unsupported optional copy is omitted or retained as draft, never invented.

Completion means the broader personal framing is visible in the rendered site, all retained routes and subscription flows still work, and metadata agrees with the page. Implement only the personal-site track in this run. The separate Clinic Operations prompt is 07-CLINICOPERATIONS-CODEX-PROMPT.md.
