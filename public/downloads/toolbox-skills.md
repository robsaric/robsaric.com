# Rob Saric's Toolbox skills

Practical workflows you can inspect, adapt and use again. These skills contain
instructions and optional reference files. They do not run scripts, connect to
accounts or make changes on your behalf.

| Skill | Bring | Get | Guide |
| --- | --- | --- | --- |
| [Value Stream Mapping](https://github.com/robsaric/robsaric.com/blob/main/skills/value-stream-mapping/SKILL.md) | A process description, offers and audiences | A provisional map, evidence gaps and a team-chosen improvement to test. Separate current, next pilot and longer-term ideal views. | [Read the guide](https://robsaric.com/toolbox/value-stream-mapping/) |
| [The Dashboard Test](https://github.com/robsaric/robsaric.com/blob/main/skills/dashboard-test/SKILL.md) | A redacted screenshot or description, the reader and their question | A provisional verdict, one main gap and one practical improvement. Keeping it or using no dashboard are valid outcomes. | [Read the guide](https://robsaric.com/toolbox/dashboard-test/) |
| [Interview, Draft, Edit](https://github.com/robsaric/robsaric.com/blob/main/skills/interview-draft-edit/SKILL.md) | An idea, rough draft or spoken concept | Questions before a draft, your answers as the substance, and suggestions marked for your final edit. | [Read the guide](https://robsaric.com/toolbox/interview-draft-edit/) |

These skills require no other skill, knowledge graph or connected accounts.
Writing samples and the voice template are optional. For a dashboard review,
source dates and an example of what happens next help, but you can start without them.
Use redacted material. A skill is guidance to an AI tool, not a guarantee of accuracy.

## Choose how to use it

### Just try the prompt

Open the guide and copy the prompt into a chat. Nothing to install. The plain-text
prompts also live in each skill's resources folder.

### Claude on the web

Download the skill ZIP from its guide. In Customize → Skills, upload the ZIP
and enable the skill. Code execution and file creation must be enabled, and
your organization may control access. Ask Claude to use the skill by name.

Uploading the ZIP is different from pasting a GitHub link into a conversation.
See [Claude's setup instructions](https://support.claude.com/en/articles/12512180-use-skills-in-claude)
if your interface differs.

### Claude Code or Codex in a local project

Download and unzip one skill from its guide, or clone this repository:

```sh
git clone https://github.com/robsaric/robsaric.com.git
```

Copy only the folder you want from skills/ into your own project. Keep its
contents together, and copy skills/LICENSE into that installed folder as well.
Do not copy the whole website into an agent's skills folder.

| Tool | Example destination | Invoke |
| --- | --- | --- |
| Claude Code | .claude/skills/dashboard-test/SKILL.md | /dashboard-test |
| Codex | .agents/skills/dashboard-test/SKILL.md | Use $dashboard-test to review this dashboard with me. |

For the writing skill, replace dashboard-test with interview-draft-edit.
Start a new session in your project after installation. If a folder with the
same name exists, compare it and save your edits before replacing it.

Examples:

- Dashboard Test: “Use the dashboard-test skill. I review this every Monday to
  understand what needs attention. Here is a redacted screenshot.”
- Interview, Draft, Edit: “Use the interview-draft-edit skill. Ask me questions
  about this idea before drafting: …”

The first response should use your context and ask about the most important
missing information. It should not invent your experience or claim a screenshot
proves how your team works. You review the output and decide what to do.

Official instructions: [Claude Code](https://code.claude.com/docs/en/skills)
and [Codex](https://learn.chatgpt.com/docs/build-skills).

## Updates and feedback

Installed folders are copies, not subscriptions. Pull the repository or download
again, review the differences, and replace the installed folder after saving any
local changes. Do not install both the old interview-your-draft folder and its
replacement: the current skill name is interview-draft-edit.

Use [GitHub issues](https://github.com/robsaric/robsaric.com/issues) for a question
or proposed improvement. Include a redacted example, what you expected and what
happened. Keep client records and personal information out of public issues.

## Maintaining this collection

Edit the named folders in skills/. The resources folders hold the source prompts,
checklist and voice template. The website imports the prompt from that source.
The public/downloads copies and ZIPs are generated; do not edit them directly.

```sh
pnpm skills:build
pnpm skills:check
pnpm test:skills
```

The build generates downloads. The release gate first checks for drift, so source
changes cannot silently leave stale committed downloads. Existing download URLs,
including interview-your-draft, remain available and deliver the current skill.
The package inventory is explicit; internal project skills are not included.

Before a release, validate the packages and try changed skills on realistic cases.
Record the tool/version, input, observed response and any limits. Packaging tests
alone do not establish that a model follows the method.

## Reuse

The public skill instructions and resources in this folder are MIT licensed;
see https://github.com/robsaric/robsaric.com/blob/main/skills/LICENSE. This permission does not extend to the site's essays, photography,
illustrations, company logos or private operational skills.
