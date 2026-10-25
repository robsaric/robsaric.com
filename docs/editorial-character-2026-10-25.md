# Illustrated character preview, October 25

Rob requested the approved LinkedIn banner's warmer ink-and-wash likeness across the website, especially beside Start here, in the footer and on the 404. He confirmed retaining the stories and quiet motion. Rob approved publishing the website on October 25, including the homepage/Building copy, Day/Night control and favicon. Featured items and the monthly newsletter remain drafts.

## Implemented

- New editorial character component and small transparent WebP pose strips. No external animation runtime.
- Daytime runner: start, run, stumble, gentle tumble, recover, brush off, reset. 8.5-second story, including three visible dust-off strokes, and an 8-second quiet interval, visible pause/resume control.
- Nighttime reader: settle into a book once, with the closed laptop on the side table.
- Footer: close the laptop, open a book, remain reading. Single 4.3-second sequence.
- 404: consult a paper map and turn back. Single 4.7-second sequence, with a still footer.
- Stop offscreen, in hidden tabs and when a day/night character is inactive. Reduced motion and no-JavaScript visitors get a complete still drawing. The runner shrinks within the available mobile track.
- Native Newsreader RS favicon, plus PNG/ICO and Apple touch variants. A face would not read at tab size.
- Caretrics' Building-page action and status use its verified lime #c8f57d and forest #0c3b2e. The rest of the personal site keeps its own identity.

The sprites use deliberately distinct illustrated poses, not smooth motion-captured movement. The larger handwritten style cannot be converted faithfully from the previous stick-figure geometry. Old components remain unused for rollback; no archive or article route was changed.

## Artwork provenance and export

Created with the built-in image-generation tool using the approved `rob-reader-ink-wash-v4.png` as the identity/style reference. Prompts requested the same bald, bearded Rob; original pen-and-ink with sparse grey wash; equal grid cells; transparent backgrounds; no text or borrowed cartoon scene.

Source sheets saved in the current conversation's generated-images folder:

- runner: `exec-0b2f19f5-4cce-450b-9535-c270f700a62f.png`, 4 by 2 cells.
- evening: `exec-a05242fc-bd7f-4846-9105-0f9dfba543ef.png`, four cells.
- wrong turn: `exec-8aa8c5e1-4466-48f0-b2a0-75312bdc6fca.png`, 3 by 2 cells; transparent-background revision.

`node scripts/prepare-editorial-character.mjs <source-sheet-folder> <Newsreader-banner.ttf>` exports the equal registered cells and favicon. Published assets are local files under `public/illustrations/rob-ink/`; runtime has no dependence on generated-images or private folders. Export uses Sharp already in the project.

## Parallel review deliverables

Featured mockup, Caretrics five-page PDF, evidence manifest and monthly newsletter draft are outside the site checkout in `profile-next-2026-10-25`. Rob requested seeing Featured before any profile update. The newsletter is approved as a monthly proposal for review, not a live creation or invitation send. LinkedIn's own follow-triggered subscription invitation is separate from adding someone to the site's confirmed email list.

The walkthrough is product/workflow evidence. Synthetic claims remain labelled. North End's lesson is qualitative; private financial results and an unconfirmed Lifemark contract are not used.

## Resilience revision for review

Rob found the first recovery too suggestive of an injury. The local revision uses twelve poses: a four-pose run, brief tuck-roll, spring from both feet, small hop, three upright shoulder brushes, and a return to running. The active story lasts eight seconds; the quiet interval remains eight seconds. No kneeling over or rubbing a knee. The new source is exec-1b8ef2ab-9238-4537-8a05-7b3ff630cd45.png (4 by 3 grid with adjusted transparent gutters). Only the runner changes. This revision is local, pending publication approval; Featured and newsletter remain drafts.

Rob's follow-up keeps the runner strictly monochrome and removes the raised/outstretched left hand. Three replacement poses from exec-837a9de9-6252-4809-8ebe-e870c638a57b.png provide a clear seated fall, compact hop and close-to-body shoulder brush. The fall is held 480ms, followed by a 340ms grounded push-up before the hop. A runner-specific grayscale filter removes incidental colour from the artwork in both appearances. Focused animation tests pass after this correction; the preceding full site gate also passed (35 tests, 210 layout checks).

Latest local direction: stop after dusting off, pause upright, then perform a small backward heel-to-toe shuffle while still facing right. Two added poses (exec-c8f2aeb6-9343-4659-af50-f9766a45b76c.png) bring the strip to fourteen frames. The character returns to frame zero at the original position before the eight-second quiet interval. No fade or reset jump. Black/white/grey treatment, pause, reduced-motion and visibility behaviour are retained. All six focused animation checks and diff whitespace check pass. Not published.

## Viewer glance refinement

Rob noted that the character never looks toward the screen. After the third brush, he now turns his head toward the viewer, holds eye contact for 680ms, then turns back before the backward shuffle. No new hand gesture or colour. Two registered poses extend the story to 9.38 seconds; the eight-second quiet interval, reduced-motion still and pause/visibility behavior remain.

The built-in image generator produced the two poses from the existing upright drawing: source `exec-d6a672ea-a177-4d3e-866c-2d5370eafcc2.png`. The registered two-cell source is saved in `src/assets/illustrations/runner-glance.png`. The sixteen-cell public strip uses a new `runner-glance.webp` URL so a cached fourteen-cell sheet cannot display against the new frame count. The original strip remains available for rollback. Rob reviewed the local preview and approved release on October 25. Validation: 36 tests, Astro check, copy lint, build, redirect/social/content checks and 210 responsive layout checks passed; desktop, tablet and phone views inspected.
