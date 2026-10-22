# Character moments and the Writing URL

Status: authorized local preview only. No publishing, commit or push in this pass.

## Approved scope

Rob approved the footer character closing his laptop and opening a book, plus a wrong-turn sequence on the custom 404. He also authorized choosing Writing or Blog for the writing index using the SEO skill.

## Motion thesis

The site remains Read mode. The footer marks the move from digital work to an analog evening; the 404 is a brief visual wrong turn beside immediate recovery links. Both use the homepage runner's authored joints, blue shirt and ink limbs, without adding a library or media download. Footer: 4.3 seconds; wrong turn: 4.7 seconds. Each starts when 65% visible, pauses offscreen or in a hidden tab, and settles after one play. No sound, looping, wait to use controls or layout movement. Reduced motion and no JavaScript show an intentional still pose. The footer stays still on the 404 so only its wrong-turn scene moves. The existing homepage runner and its user-controlled loop remain unchanged.

## URL decision and SEO scope

Use `/writing/` because it matches the visible title and the personal editorial identity. This is a naming and navigation improvement, not a promised ranking gain. Google recommends descriptive, human-readable URLs; there is no evidence here for a special advantage from the word blog.

Move only the index. Keep `/field-notes/<existing-article>/` and every article's original date and canonical unchanged. `/field-notes` and `/field-notes/` permanently redirect to `/writing/`. The former `/writing` alias is explicitly superseded in `src/data/redirects.mjs` while the historical legacy redirect map remains intact. `/blog` retains its established archive destination.

Update rendered internal links, active navigation, the Writing share card, llms.txt and the generated sitemap. The new index must return a page with a self-canonical and matching Open Graph URL; the old index must be absent from the sitemap. Existing article RSS links remain stable. Redirect checks now follow chains to their terminal target and validate the built index, sitemap and links. The responsive gate also covers the custom 404.

Sources checked October 22:
- Google URL structure: https://developers.google.com/search/docs/crawling-indexing/url-structure
- Google site moves: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes

No search traffic or ranking numbers are claimed. Production redirect responses, reindexing and Search Console inspection can only be verified after a separately approved deployment. The Caretrics SEO skill is applied to this personal-site migration; its clinic keywords, product schema and article-length conventions do not govern Rob's personal essays.

## Validation and local review

- Full `pnpm gate` passed: 25 newsletter tests; Astro check with zero errors (25 existing hints); copy lint with zero errors (12 existing warnings); build; 112 redirect cases; three published notes; 49 unique share cards; 91 responsive checks across 13 routes and seven widths, including the 404.
- Final copy repair: the 404 now says “Head home or find something to read,” matching its Home and Writing links. Re-ran copy lint, build and all 112 redirect cases successfully after that repair.
- Live local HTTP: `/field-notes/` returns 301 to `/writing/`; `/writing/` and the existing dashboard essay return 200; an unknown path returns the custom 404. Astro's development server returns 404 for the slashless old index; the generated Vercel routing configuration (both slash variants) is covered by the 112-case check. Verify actual production responses after deployment.
- Browser review: footer and 404 at phone, intermediate and desktop sizes; recovery link activated by keyboard. Footer pauses offscreen, resumes when visible, and stays complete after one play. Reduced-motion and no-JavaScript resting poses checked in source and static scene renders; the browser tool did not provide reduced-motion emulation.
- Review captures are in `.impeccable/review/character-moments/`. The final bounded pass corrected the 404 wording; it did not expand the design scope.
- No commits, pushes, deployment or Search Console changes in this pass.
