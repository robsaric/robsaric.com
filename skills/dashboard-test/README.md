# The Dashboard Test

## Does your dashboard earn its place?

A free AI skill I created to review a dashboard or report against the job someone needs it to do.

Bring a screenshot or description. The skill asks who uses it, what they need to understand, and what happens next. Then it recommends what to keep, one useful change, or a simpler alternative.

Sometimes the best improvement is one less dashboard.

**[Try it without installing anything](https://robsaric.com/toolbox/dashboard-test/#prompt)** · **[Download the skill ZIP](https://robsaric.com/downloads/dashboard-test/dashboard-test.zip)**

## When to use it

- You already use a dashboard, but still need several other sources to understand what needs attention.
- You are reviewing a recurring report or spreadsheet with a team or client.
- You are about to build a dashboard and want to check whether it is needed.

Start with one reader and one recurring question. No other skill or connected account is required. Use redacted material.

## See a complete review

We applied this thinking to Caretrics’ revenue diagnostic report for a demo clinic. The owner’s job was to see how the clinic was doing and what needed attention. The report already contained a useful attendance pattern; the proposed improvement was to make that pattern easier to see while preserving its dates, counts and limits.

**[Read the worked Caretrics example](resources/caretrics-example.md)**. It distinguishes what was visible, what Rob stated, our interpretation and what remains untested. It is not a measured customer result.

## Install and use

Download and unzip the [skill package](https://robsaric.com/downloads/dashboard-test/dashboard-test.zip), or copy this folder from the repository. Keep its supporting files together; if copying from GitHub, include [the Toolbox license](../LICENSE).

| Where | Setup | Start the review |
| --- | --- | --- |
| Claude Code | Put the folder in your project’s `.claude/skills/dashboard-test/` | `/dashboard-test` |
| Codex | Put the folder in your project’s `.agents/skills/dashboard-test/` | `Use $dashboard-test to review this report with me.` |
| Claude web | Upload the ZIP through its Skills settings | `Use the dashboard-test skill to review this with me.` |
| ChatGPT or another chat | Paste [the prompt](resources/chat-prompt.txt) | Add your context and a redacted screenshot or description. |

[Detailed setup and requirements](https://robsaric.com/toolbox/dashboard-test/#downloads). Pasting a repository link into a chat does not install a skill.

Try this:

> Use the dashboard-test skill. I’m reviewing our monthly report as the owner. I need to understand what changed and whether our process needs attention. Here is a redacted screenshot. Ask me about anything you need before reviewing it.

## What you get

A short review: the reader’s job, a provisional verdict, the main gap, one recommendation and a way to test it. Keeping the view unchanged, removing it and asking for more evidence are valid conclusions.

A screenshot cannot verify calculations or prove how a team works. The skill recommends; you decide. It does not change your dashboard or connect to your accounts.

## Source and feedback

[Read the instructions](SKILL.md) · [Use the checklist](resources/checklist.md) · [Why I built it](https://robsaric.com/field-notes/2026-10-19-are-dashboards-dead/)

Created by [Rob Saric](https://robsaric.com/). MIT licensed. Share a redacted example and what happened in [a GitHub issue](https://github.com/robsaric/robsaric.com/issues). These files are the maintained source; site downloads are generated from them.
