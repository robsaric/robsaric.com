# Toolbox share cards and the repository front door (2026-11-16)

## Why

On 2026-11-16 Rob asked whether the site's brand needed updating to help him build an audience. The review found the brand sound and recommended leaving the pages alone. It found the gap in what travels off the site: the link preview a reader sees when a Toolbox page is shared, and the first screen of this repository on GitHub. Rob agreed: "I agree with what you suggest changing."

Neither change touches a page's design, so both sit outside the Q68 design freeze.

## What changed

**Share cards.** Four of the five Toolbox cards showed a title alone ("The Dashboard Test", "CRM by Conversation"). Essay cards already carried a diagram. Every Toolbox card now has three parts:

- the page's promise, as the headline;
- a panel of illustrative output, the same one the Toolbox index shows for that guide;
- the guide's name and "Free. No signup." in the footer. The CRM card says "Free. For Attio. No signup." because that skill needs the reader's own Attio connection.

The Toolbox index card lists the four guides in place of an output panel.

**One source for each string.** The generator reads the promise from the built page's `og:image:alt` and the guide's name from its `<title>`. The output panel is the guide's entry in `src/data/toolbox-collection.mjs`, which the pages import through `src/data/toolbox-presentation.ts`. A card cannot say something its page does not.

**Guards.** `pnpm check:social` fails when a Toolbox page has no `ogImageAlt` of its own (proven red by removing it from the index). `pnpm generate:og` stops when a page under `/toolbox/` is missing from the collection.

**Image version.** `SOCIAL_IMAGE_VERSION` changed, so every page's image URL changed. Posts already shared keep the preview each platform cached. LinkedIn's Post Inspector refreshes one URL at a time.

**README.** The repository's first screen now names the four skills, what each is for and how to try or install one. The site's maintenance notes follow under "The site".

## Not checked

- No preview was fetched by LinkedIn, Slack or another platform. The cards were read as generated PNGs.
- The Interview, Draft, Edit card lost its "Free writing skill" label in favour of the shared "Toolbox" label and footer. Rob has not seen the new card.
