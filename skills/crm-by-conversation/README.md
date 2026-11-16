# CRM by Conversation

## Keep your CRM current without opening it.

A free AI skill I created for running an Attio workspace from a chat. I run my own workspace this way through Claude: I describe what happened or what I want set up, the assistant shows me the change, and I approve it before anything is saved.

The skill does two jobs. First it plans the workspace with you, because a CRM built before you have described how you sell is a list of default fields. Then it keeps the workspace current from your notes.

**[Try it without installing anything](https://robsaric.com/toolbox/crm-by-conversation/#prompt)** · **[Download the skill ZIP](https://robsaric.com/downloads/crm-by-conversation/crm-by-conversation.zip)**

## This one connects to an account

The other Toolbox skills work from what you paste into a chat. This one is different, so read this first.

- It needs your own Attio connection in Claude or ChatGPT. The skill contains instructions only. It does not include a connector, a script or a key.
- With that connection, your assistant can create and change records in your workspace. The instructions tell it to show you every change as a proposal and wait for your yes.
- It can see and change only what your own Attio login allows. You can revoke the connection in Attio.
- It keeps the record. It does not send email.

Start in a new or test workspace until you trust how it behaves in yours.

## What you need

1. An Attio workspace.
2. Your work email and calendar connected inside Attio, so contacts and conversations fill in on their own.
3. Attio connected to your assistant. [Attio's instructions](https://docs.attio.com/mcp/overview) cover Claude, ChatGPT and other tools.
4. Twenty minutes for the interview. The assistant asks how you sell before it builds anything.

## Install and use

Download and unzip the [skill package](https://robsaric.com/downloads/crm-by-conversation/crm-by-conversation.zip), or copy this folder from the repository. Keep its supporting files together; if copying from GitHub, include [the Toolbox license](../LICENSE).

| Where | Setup | Start |
| --- | --- | --- |
| Claude web | Connect Attio, then upload the ZIP through Skills settings | `Use the crm-by-conversation skill to set up my Attio workspace with me.` |
| ChatGPT | Connect Attio, then paste [the prompt](resources/chat-prompt.txt) | Add your starting context. Keep the prompt in a project's instructions to use it again. |
| Claude Code | Add Attio's MCP server, then put the folder in `.claude/skills/crm-by-conversation/` | `/crm-by-conversation` |
| Codex | Add Attio's MCP server, then put the folder in `.agents/skills/crm-by-conversation/` | `Use $crm-by-conversation to set up my Attio workspace with me.` |

[Detailed setup and requirements](https://robsaric.com/toolbox/crm-by-conversation/#downloads). Pasting a repository link into a chat does not install a skill.

Once it is set up, try this after a call:

> Use the crm-by-conversation skill. I just spoke with a contact. Here are my rough notes. Show me the update before you save anything.

## What you get

- **Once:** an interview about how you sell, a proposed set of fields, lists and views in one table, and a build after you approve it.
- **Every day:** a proposed note, field changes and a follow-up task from your rough notes, and a list of what needs attention when you ask for it.

[See an illustrative update after a call](resources/after-a-call-example.md). It is invented to show the shape of a proposal. It is not a customer result.

An assistant can match the wrong record, misread a note or propose a field you do not need. That is why every change is a proposal. Read it before you approve it.

## Source and feedback

[Read the instructions](SKILL.md) · [Read the chat prompt](resources/chat-prompt.txt)

Created by [Rob Saric](https://robsaric.com/). MIT licensed. Not affiliated with Attio. Share what happened in [a GitHub issue](https://github.com/robsaric/robsaric.com/issues), and keep customer names and records out of public issues. These files are the maintained source; site downloads are generated from them.
