---
name: rs-copy
description: Change a string on robsaric.com. Use when editing any copy in src/data/*.ts, docs/COPY.md, or page meta. Covers where copy is allowed to live, the paired mobile forms that drift, the docs/COPY.md mirror, the 155-character meta clamp, and the half of copy law that pnpm lint:copy cannot check.
---

# Change a string

`pnpm lint:copy` checks words. It cannot check mirrors, pairs, register, or truth. Those are this
skill's job, and they are where the defects have actually come from.

## 1. Find the string in the right place

Copy lives in exactly three places (rule 1):

- `docs/COPY.md` — the deck, and the source of truth
- `src/data/*.ts` — `copy.ts` (prose), `ui.ts` (structural), `site.ts`, `principles.ts`,
  `stages.ts`, `evidence-steps.ts`, `now.ts`, `filters.ts`
- a content entry under `src/content/`

**Never inline in a component.** If you find copy in an `.astro` file, move it to `ui.ts` rather
than editing it in place.

## 2. Edit it, then find its pair

Most homepage prose ships twice: a desktop form and a shorter mobile form. Editing one and not the
other is the most common way this repo drifts, and nothing catches it.

| File | Pairs |
|---|---|
| `src/data/copy.ts` | `bodyDesktop` / `bodyMobile` (4 sections), `eyebrowDesktop` / `eyebrowMobile`, `cardBodyDesktop` / `cardBodyMobile`, `togetherenBodyDesktop` / `togetherenBodyMobile`, `desktopLink` / `mobileLink` |
| `src/data/copy.ts` | `caretrics.doesBody` + `caretrics.doesNotBody` are **condensed into** `caretrics.mobileBody`. Three strings, one meaning. |
| `src/data/ui.ts` | `togetherenDesktop` / `togetherenMobile` |
| `src/data/principles.ts` | `body` / `bodyShort`, five times |

The mobile form is not a truncation. Mobile is "edited, not stacked": it drops the sentence that
matters least, it does not cut mid-thought.

## 3. Mirror it into `docs/COPY.md`

`docs/COPY.md` is the source of truth. A data file that disagrees with it is the defect, whichever
one you edited last.

> This is not hypothetical. `copy.ts:166` shipped `"He reads and answers everything himself."` on a
> first-person site while `docs/COPY.md` specified first person. It passed `astro check`,
> `lint:copy`, and the build, and it shipped as the page's meta description.

## 4. Check the length if it is meta

`src/lib/seo.ts` clamps every description at **155 characters** and appends an ellipsis. The notes
schema allows `description` up to 200, so 156 to 200 passes every check and truncates in search.

Meta descriptions are third person ("Rob Saric builds..."), matching the other pages. Body copy is
first person. Do not let one leak into the other.

## 5. Read it against the half the lint cannot see

`docs/COPY.md:7` says the rules are "enforced by `pnpm lint:copy`". Roughly half of them are. The
lint catches em dashes, a banned-word list, chatbot openers, and the locked credential forms. It
cannot catch any of this:

- **Machine rhythm.** At most one "not X, it's Y" contrast per section. Two examples where two carry
  the point, not three. Do not end two consecutive paragraphs on a punchline. Do not announce the
  point. Vary sentence length. Active voice.
- **Healthcare register.** "Clinic", never "practice". "Provider" for headcount, "clinician" only
  when the care relationship is the point. "Jane.app" on first mention per page, "Jane" after.
  Never imply a Jane partnership or endorsement; the approved shape is "reads a clinic's Jane data
  with read-only access". Patient examples use "First L." and never real data.
- **Numbers.** Every public number carries what it counts and where it came from. "Identified is not
  collected." No clinic counts beyond the credential line.
- **The credential.** Short form is `50+ clinics, firsthand`, locked. Long forms are in
  `docs/COPY.md` item 7, word for word.
- **Truth.** Anything unconfirmed stays flagged `[VERIFY]` in the verification table at the bottom
  of `docs/COPY.md`. If your edit touches a flagged claim, the flag moves with it.

Read the finished line once as a clinic owner, not as an editor.

## 6. Run the gate

```
pnpm gate
```

Bare, never piped. Six steps: `astro check`, `lint-copy`, `astro build`, `check-redirects`,
`check-notes`, `check-layout`.

The lint baseline is **4 warnings**, all `"dashboard"` (`src/data/copy.ts`, `src/data/principles.ts`,
`src/content/notes/2026-08-19-i-took-my-own-number-down.md`, `public/llms.txt`), all deliberate: the
site uses the word critically. A fifth warning is yours.

## What the lint now covers that it did not

Worth knowing so you do not re-check it by hand:

- `public/` is scanned, so `public/llms.txt` is checked. It restates the locked credential and the
  site description verbatim and used to sit outside every check. `public/archive/` is exempt with
  the rest of the legacy content.
- Bare `audited`, `advised`, `advisor`, and `advisory` are banned outright, not only in the longer
  phrasings. `audit` is still legal, because "audit trail retained" is approved copy.

## Still outside every check

- Whether `docs/COPY.md` and `src/data/*.ts` agree. Step 3 is yours.
- Whether a desktop form and its mobile form still say the same thing. Step 2 is yours.
