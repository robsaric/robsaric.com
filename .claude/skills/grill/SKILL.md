---
name: grill
description: Interview Rob relentlessly about a robsaric.com decision, plan or idea until every branch of its design tree is settled, before any code, Codex handoff or copy change. Invoke on "grill me", "/grill", "interview me about this decision", "let's decide", "what haven't we decided", "stress-test my thinking", or when a request hides several unmade decisions (a page or section, a change to the approved direction, motion or colour, links and redirects, analytics, a claim about Rob or his companies). Questions come in rounds, numbered on from the last Grill question recorded in CAR-1171, each with a recommended answer; facts are looked up, never asked. Not for drawing copy out of Rob in his own words: that is /interview. Ported from the Caretrics /grill, itself adapted from the MIT `grilling` skill in mattpocock/skills.
metadata:
  last_reviewed: 2026-11-14
---

# Grill (design-tree interview)

Interview Rob until there is a shared understanding of what is being decided and why. Model the work as a **design tree**: every decision branches into the decisions that hang off it. The session ends when nothing is left silently assumed, and no code, Codex handoff, copy change or decision record is written until Rob confirms the tree is complete.

## Before the first question

Find the facts yourself. A question that could be answered from the repository, the live site, Search Console, Linear, git history or memory is not a question for Rob. Check, in this order:

- The authorities `AGENTS.md` names: `PRODUCT.md` (product), `DESIGN.md` with `src/styles/tokens.css` and `docs/personal-site-direction.md` (visual), `docs/building-direction.md` (Building), `docs/COPY.md` (copy law, verified facts and the verification table of open `[VERIFY]` items), `docs/MIGRATION.md` (legacy URLs). Is this already decided, superseded or flagged?
- CAR-1171 in Linear, description and comments. Its dated Decisions sections record every earlier Grill answer for this site and what each one superseded. The dated records under `docs/` (for example `docs/day-night-toolbox-2026-10-23.md`) carry the same decisions with build detail. A settled branch is not asked again. A branch you would reverse is asked with the record named.
- The code and data the decision touches: `src/data/*.ts` for copy and links, `src/data/legacy-redirects.mjs` (append-only), the page or component, and the hard rules in `AGENTS.md` that lock it. Grep a fresh build in `dist/` to see what actually renders before you count the cost of a change.
- Production and search: the live page (`curl`), and Search Console or GA4 through saric-seo for anything that turns on traffic. Per-page and brand sums mislead, so read the saric-seo memory before quoting one, and label a missing figure as a gap.
- Facts about Caretrics (titles, team, offers) come from the Caretrics repo and its Linear issues, not from this site's copy.

Dispatch a sub-agent for anything that takes more than a quick look, and do not block the round on it: only the questions downstream of that fact wait; ask the rest now.

## Numbering

Grill questions on this site are numbered continuously across sessions, and the records cite them that way ("Grill Q40–45", "Q48"). Before the first round, find the highest number already used in CAR-1171 and `docs/`, and continue from the next one. Do not restart at Q1: a Grill number cited in a doc has to point at one decision.

## Rounds

The **frontier** is every decision whose prerequisites are already settled, so it can be asked without guessing at answers not yet heard. Ask the whole frontier in one round. A question whose answer depends on another question still open in this round belongs to a later round.

Format each round like this:

```
❓ **Q<n>** - **<decision>**: <what is being decided, with the realistic options and what each drops>

➡️ <recommended answer, one or two sentences on why>

---

❓ **Q<n+1>** - **<decision>**: ...

➡️ ...
```

Rules for a question:

- Word it so "yes" accepts the recommended answer. Rob reads the recommendation first.
- When an option simplifies, say what it drops. When an option reverses an earlier decision, name the decision and where it was made: the Grill number, the CAR-1171 section, the dated doc or the commit.
- Options carry their real cost: a code change and its test, an edit to approved or published copy (with the `rs-note` Codex review for a note), the `docs/COPY.md` mirror, an append to the legacy redirects, a hard rule in `AGENTS.md` or a line in `PRODUCT.md` that would need amending, a claim that needs a source, a check not yet run.
- Say what the answer authorizes: a local preview, a branch and PR, or publishing. On this site each is a separate approval, which is why the records keep saying "Publishing remains separate".
- No invented urgency, no leading with the downside of the alternative, no "great question". Plain words, and no em dashes.
- The decisions are Rob's. Put each to him and wait. Do not fill an answer in because the recommendation seemed obvious.

After each round, recompute the frontier: settled decisions unblock their children. Ask the next round. Keep going until the frontier is empty.

## Ending the session

When the frontier is empty:

1. Read the settled decisions back as a numbered list, one line each, in the order they were made, with the "why" where Rob gave one.
2. Ask Rob to confirm the shared understanding. Nothing is built, briefed or recorded before that confirmation.
3. Record the decisions where the next agent will look:
   - In CAR-1171, as a new dated Decisions section that names the Grill numbers and follows the existing sections: Rob's confirming words in quotes, the numbered decisions, what each one supersedes, the scope line (local preview, branch or publishing) and the MCP compatibility line.
   - In the repo, in the authority that owns each decision (`PRODUCT.md`, `DESIGN.md`, `docs/personal-site-direction.md`, the `docs/COPY.md` verification table), or in a dated `docs/<topic>-YYYY-MM-DD.md` that opens with "Rob confirmed Grill Qn–Qm on <date>" when no authority owns it.
4. Route the next step. Codex builds (`AGENTS.md` roles: a read-only handoff, or an isolated checkout when Rob authorizes one). A string goes through `rs-copy`, a note through `rs-note` and its Codex review, and a sentence that has to be Rob's own words through `/interview`. A bounded change goes straight to a branch and a PR. Nothing is pushed, merged or deployed without Rob's say-so.

## What this skill is not

- Not a way to write Rob's copy. Settle the decision here; get the words with `/interview`.
- Not a review of a finished change. A branch or PR gets `/code-review` or a review workflow.
- Not a way to avoid reading. A session that opens with a question answerable from `PRODUCT.md`, CAR-1171 or `docs/COPY.md` has failed step one.

## Source

Ported on 2026-11-14 from the Caretrics `/grill` (`caretricsplatform/.claude/skills/grill/SKILL.md`, last reviewed 2026-10-25), itself adapted from `grilling` in https://github.com/mattpocock/skills (MIT): the design-tree model, frontier rounds, numbered questions with recommended answers worded so "yes" accepts them, and the rule that facts are the agent's job. Kept from Caretrics: the simplification and reversal rules, and the confirmation before anything is recorded. Changed for robsaric.com: the fact sources, continuous numbering, CAR-1171 plus the repo as the decision record, the authorization line, and hand-offs to Codex, `rs-copy`, `rs-note` and `/interview` in place of `/premortem`, `/plan-arbiter` and `/codex-brief`.
