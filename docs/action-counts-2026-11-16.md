# Counting what readers take away (2026-11-16)

## Why

The 2026-11-14 approval covered page views only, and said custom events needed their own decision (`docs/cofounder-and-dusk-2026-11-14.md`). On 2026-11-16 a review of the site for Rob found that nobody could tell which Toolbox skill gets used: the site recorded that a page was opened, not that a prompt was copied or a file downloaded. It recommended counting those actions. Rob agreed: "I agree with what you suggest changing."

This reverses "no custom events" from the 2026-11-14 decision. It adds no service and no script; the events go through the Vercel Web Analytics loader already on every page.

## What is counted

| Event | When | Fields |
| --- | --- | --- |
| `Prompt copied` | A reader presses the copy button in a guide's quick start. | `page` |
| `Download` | A reader follows a link to a file under `/downloads/`. | `page`, `file` |
| `Signup requested` | A reader submits the email form with a valid address. | `page` |

`page` is the path of the page the reader is on. `file` is the path of the downloaded file. A Pro team may attach two fields to an event, and no event here needs more.

## What is not collected

- Nothing a reader types. The quick start's context fields and the email address are never read by the analytics script. The guide's line "These fields are not saved or sent from this page" stays true.
- No query string or fragment. The existing `beforeSend` filter applies to events as it does to page views.
- A signup request is not a subscription. The reader still has to confirm by email, and a confirmed reader lands on `/subscribed/`, which is an ordinary page view.

## How it is held in place

`scripts/check-analytics.mjs` runs each built page's analytics script against stand-in elements and fails the gate when:

- a counted action sends nothing, or an uncounted click or form sends something;
- an event carries a field other than `page` and `file`, or a value that is not a plain path;
- the markup hook for an action is renamed, which would silently stop the count.

It was proven red twice: before the events existed, and with an event changed to send a field's typed text.

## Checked

In headless Chrome against a production build with the signup form enabled: a copy and a download on the Dashboard Test guide produced one event each with the fields above, with text typed into a context field first; a plain link produced none; an invalid email produced none; a valid one produced `Signup requested`.

## Not checked

- No event has reached Vercel. The loader does not exist on a local build, so the test read the queue the loader would send. After release, the Events panel on the project's Web Analytics page should show the three names.
- The team's plan. The 2026-11-14 record says Rob confirmed Pro on 2026-11-15. Vercel's documentation, read on 2026-11-16, lists custom events as included on Pro at two fields per event, billed with page views at USD 0.03 per thousand events.
- A reader who copies the prompt by selecting text, or who downloads from GitHub, is not counted.
