# Co-founder, Dusk and the old sitemap — November 14, 2026

Rob confirmed Grill Q58–Q63 on 2026-11-15 (“Confirmed on your questions.”), after accepting each recommendation on 2026-11-14 (“yes agreed to all of the above”). CAR-1171 carries the same record. Each answer authorizes only what it states. Publishing remains separate.

## Q58. The old WordPress sitemap

Remove `sitemap_index.xml` from Search Console before the site is imported into Bing Webmaster Tools. It was submitted 2019-10-30, last read 2025-03-12, lists 44 old URLs and returns 404. The current `sitemap-index.xml` (53 URLs) is the one `robots.txt` names. This is Rob's click in Search Console. Nothing is built, and no redirect is added.

## Q59. The dashboard essay points to the Dashboard Test

One sentence in Rob's words goes before the closing line of *What should a dashboard do?* (`src/content/notes/2026-10-19-are-dashboards-dead.mdx`), pointing readers to the Dashboard Test. Read next stays. The sentence comes from a short `/interview`, then the `rs-note` Codex review and a new `updated` date, on a branch with a PR.

Done on 2026-11-15, without the interview. Rob wrote: “for q59 go with what you have the most confidence around.” The sentence reuses the Dashboard Test page's approved wording in `src/data/dashboard-test.ts`: free, “a redacted screenshot or a description”, and “what to keep, one useful change, or a simpler alternative”. The `rs-note` Codex review asked for “redacted”, matching the page's privacy line. `updated` is 2026-11-15.

## Q60. Co-founder and CEO of Caretrics

caretrics.com lists Rob as Co-founder & CEO, per CAR-1571 (Rob, 2026-10-02). robsaric.com now matches in the four strings in `src/data/editorial.ts` that name the role:

- the homepage hero: “Co-founder of Caretrics”;
- the homepage What I’m building intro and the `/building/` lead: “I’m the co-founder and CEO of Caretrics.”;
- the Caretrics card on `/building/`: “Co-founder & CEO”.

The generic lines stay (“a founder and dad in Ottawa”, “Founder and builder”), because a co-founder is a founder. V1 in `docs/COPY.md` is resolved.

## Q61–Q63. Dusk, the lamp and the thread labels

These three are approved for a local preview only. Publishing is a separate yes, after checks in Safari, Firefox, a screen reader and a low-end phone.

- **Q61, Dusk.** Tapping Night lets evening fall from the top of the page over 600 ms. Tapping Day lets morning rise from the bottom. Only the reader's click starts it. Auto (the clock-based default), reduced motion and browsers without view transitions keep today's instant switch, and the sweep stops if the reader scrolls. It is a limited motion exception like the hero runner, recorded in `DESIGN.md` with the build. It meets the Q24–26 motion rule: it explains a change, follows a deliberate interaction and respects reduced motion. When it is published, it replaces “No transition animates the whole page.” in `docs/day-night-toolbox-2026-10-23.md`. Until then, that rule describes the live site.
- **Q62, the lamp.** At night the switch's thumb turns Sketch Yellow, with no glow and a thin track edge. The preview measures the thumb against the track at 4.52:1 and the edge against the page at 4.65:1; the readback had attached 4.52:1 to the edge. The high-contrast rules take priority. Yellow stays an accent, never text.
- **Q63, thread labels.** In the writing lists, each current essay's date gains its thread as plain text: “Digital days” or “Analog nights”, and “Digital days, Analog nights” for *Building with AI and life beyond the feed*, which belongs to both (`src/data/writing-threads.ts`). No new colour.

## Also decided on 2026-11-14, outside the Grill numbering

Vercel Web Analytics, base tier: page views only, no Plus, no custom events. PR #34 adds it and amends `AGENTS.md` rule 7, `PRODUCT.md` and `docs/AUDIENCE-AND-PUBLISHING.md`. The LinkedIn click count in CAR-1171's October 18 record needs custom events, which need Pro. On 2026-11-15 Rob confirmed the team is on Pro, so the count is possible. It still needs its own decision, because this approval excludes custom events.
