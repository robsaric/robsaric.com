---
name: rs-note
description: Publish a field note on robsaric.com end to end. Use when writing, finishing, or un-drafting anything in src/content/notes/, or when a note needs to appear in the Now strip. Covers the frontmatter schema, the draft trap that ships a production 404, the three docs/COPY.md mirrors, and the gate.
---

# Publish a field note

Eleven steps. Steps 5 and 6 are the ones every gate misses; step 8 is the one that catches what
neither a gate nor the author can see.

## 1. Write the file

`src/content/notes/YYYY-MM-DD-slug.md`. The filename without the extension **is** the slug and the
URL: `/field-notes/<slug>/`, trailing slash always. The date prefix should match the `date` field;
nothing enforces this.

## 2. Fill the frontmatter against `src/content.config.ts`

| Field | Rule |
|---|---|
| `title` | Sentence case. The claim, not a label. |
| `summary` | Schema allows 220. **This is the card body and the RSS description**, and it is the meta description fallback, which clamps at 155 (`src/lib/seo.ts`). Over 155, set `description` too. |
| `type` | `Field note` \| `Shipped` \| `Changed my mind` (`NOTE_TYPES`) |
| `date` | `YYYY-MM-DD`, matches the filename prefix |
| `tags` | At least one, from `NOTE_TAGS` in `src/data/filters.ts`. Tags drive the filter pills, which now derive from tags actually present. |
| `stage` | `-1` if not about a stage, else `0..4` per `src/data/stages.ts`. **Never `0` (Found)**: section 02 says Caretrics does not measure Found, so a Found note contradicts the homepage. |
| `meta` | Card footer. Convention is `<Stage> · <first tag>`. Falls back to that automatically, so set it only to override. |
| `description` | Schema allows 200, **the clamp is 155**. A 156-to-200 char description passes `astro check` and truncates in the wild. Keep it under 155. |
| `stat` / `statLabel` / `statContext` | Optional, for the OG card's stat slot: the note's one load-bearing number, its claim, and its provenance ("one clinic, two years"). `stat` and `statLabel` are a pair (`check:notes` enforces it); numbers must come from the note body, verified. |
| `draft` | Omit for a live note. See step 5. |

## 3. Write the body against copy law, the widths test, and the post gate

Load `rs-voice` first: its widths test decides whether the right reader can parse the note, and
its post gate (five questions: one-sentence lesson, lesson-first structure, the share sentence,
stands cold, the exit is theirs) decides whether the note deserves to exist at all. A draft that
fails the gate stays a draft.

`docs/COPY.md` "Copy law", all nine items. Beyond what `pnpm lint:copy` catches:

- **No relative time markers.** "Last week", "yesterday", "recently" are wrong the day after
  publication and wrong forever in the archive. Say the period or say nothing.
- Every number carries what it counts and where it came from. "Identified is not collected."
- Anonymize to "one clinic". Never a clinic name, never real patient data. Patient examples use
  "First L." format.
- "Clinic", never "practice". Jane.app on first mention, Jane after. Never imply a Jane partnership.
- If you discarded an analysis, say you discarded it and why. That is the house style, not a
  weakness.

## 4. Check it does not invent

Anything unconfirmed stays flagged `[VERIFY]` or `[DRAFT]` and keeps `draft: true`. Do not round a
number into a better one.

## 5. Drop `draft: true`

`src/lib/notes.ts` filters on `import.meta.env.DEV || !entry.data.draft`. A draft note renders in
`pnpm dev` and **does not exist in the production build**.

## 6. Update the Now strip if the note belongs there

`src/data/now.ts`. Three items maximum. Replace the `kicker: 'Writing'` item, keep the exact
trailing-slash href.

> **The trap.** A Now item pointing at a note that is still `draft: true` gives you a homepage link
> that works in `pnpm dev` and **404s in production**. `astro check`, `lint:copy`, `astro build` and
> `check-redirects` all exit 0 on it. `pnpm check:notes` now fails on it, which is the only reason
> this is survivable. Do not rely on the gate to think for you: if you set the Now item, confirm
> step 5 happened.

## 7. Mirror into `docs/COPY.md`

Three places, all of them:

1. The **Now strip** table row, if step 6 applied.
2. The **`04 · Field notes`** notes line: move the slug from the draft list to live, with the date.
3. The **verification table** row `V9`.

`docs/COPY.md` is the source of truth for copy. A data file that disagrees with it is the defect,
whichever one you edited last.

## 8. Send it to Codex for review

Claude orchestrates, Codex reviews (AGENTS.md, "What this is"). Run this before the card and the
gate, from the repo root. The prompt lives in `.claude/skills/rs-note/codex-review.md`; swap the
slug in first, or paste the note's path when it asks.

```
(Get-Content .claude/skills/rs-note/codex-review.md -Raw) -replace '<SLUG>', '2026-08-19-my-note' |
  codex exec --sandbox read-only -m gpt-5.6-sol -c model_reasoning_effort="medium" -c service_tier="priority" -
```

Flags, and why each one: `--sandbox read-only` because Codex reviews and never writes here;
`-m gpt-5.6-sol` pins the latest model rather than inheriting whatever the user config drifts to;
`model_reasoning_effort="medium"` returns in well under a minute where the config's `ultra` runs
for many (raise it to `high` for a note carrying a new public number); `service_tier="priority"`
for the faster queue. On Windows PowerShell, pipe the prompt in on stdin as above: passing it as
an argument breaks on the quotes inside it.

**Codex is a reviewer, not an author.** Take its factual corrections, its boundary catches, and
its cuts. Ignore any rewrite it offers in its own voice. It has caught, on real notes: a body that
never said "identified" while the whole note was about a number, an OG stat label that implied
recovery on a card seen without the body, and an exit that landed in Rob's workflow rather than
the reader's clinic. Fix what it finds, then re-read the note yourself as a clinic owner.

## 9. Generate the OG share card

Every published note ships a 1200x630 card at `/og/notes/<slug>.png`, committed under
`public/og/notes/`. After a build (the generator reads the built fonts from `dist/`):

```
pnpm build
pnpm generate:og
```

`pnpm check:notes` fails a published note whose PNG is missing or the wrong size, so skipping this
fails the gate. Regenerate after a title change too; nothing detects a stale title on the card.

## 10. Run the gate bare

```
pnpm gate
```

Never pipe it. `pnpm gate | tail` hides the exit code. Six steps: `astro check`, `lint-copy`,
`astro build`, `check-redirects`, `check-notes`, `check-layout`.

The lint baseline is **4 warnings**, all `"dashboard"` (`src/data/copy.ts`, `src/data/principles.ts`,
`src/content/notes/2026-08-19-i-took-my-own-number-down.md`, `public/llms.txt`), all deliberate: the
site uses the word critically. **A fifth warning is yours.** Read it, do not wave it through on a
green exit code.

## 11. Confirm it actually shipped

`pnpm check:notes` covers the draft trap, the date prefix, the slug-clean filename, the 155 clamp,
the stage/meta agreement, and the OG card (present and 1200x630). Confirm the rest by eye:

```
ls dist/client/field-notes/<slug>/index.html
grep -o 'href="/field-notes/[^"]*"' dist/client/index.html
grep -o '<link>[^<]*</link>' dist/client/rss.xml
```

The note must be in all three: its own page, the homepage card, and the feed. If you set a Now item,
its href must resolve to a file that exists under `dist/`.

## Notes

- Six seed notes in `src/content/notes/` still carry `draft: true` with placeholder bodies
  transcribed from the artboard. Each needs a real body before its flag comes off. They are not
  examples to copy.
- Section 04 renders a three-column grid. Below three live notes it shows a short row, and below
  two represented tags the filter row does not render at all. That is expected, not a bug.
