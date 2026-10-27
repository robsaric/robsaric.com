# Start and install
Version 0.1.0. Setup references checked October 27, 2026.
Choose one route. No other skill, integration or paid mapping software is required.
Use an AI account approved for your organization's material. Redact personal and confidential information.

## ChatGPT or Claude: start in a chat
Unzip the review kit. Open START-HERE.md and attach that file to a new chat if your account supports file uploads. If it cannot read the file, paste its contents instead. Add your redacted notes separately.
Send: "Use the attached Value Stream Mapping guide. Read my context, summarize what you understand and ask the first questions. Keep separate workflows high-level until we choose one."

START-HERE.md includes the method and editable templates, so the chat does not have to follow local links. Ask for the completed working document at the end of a session and save it. To resume, attach it with this guide in a new chat.
This supplies instructions to the conversation; it does not install a persistent skill or connect to your files.

## Claude: reusable skill
Use value-stream-mapping.zip, not the larger review-kit ZIP.
In Customize → Skills, choose the upload option and upload the skill ZIP. Enable it.
Code execution and file creation must be enabled; organization policies may control access.
Start a new chat and ask: "Use the value-stream-mapping skill. Here is the context for our review..."
Expect focused questions, not a completed process invented from limited notes.
Official setup: https://support.claude.com/en/articles/12512180-use-skills-in-claude

## Claude Code: project installation
Unzip value-stream-mapping.zip. Copy the entire value-stream-mapping folder into .claude/skills/ in your project.
Expected file: .claude/skills/value-stream-mapping/SKILL.md
Keep resources, agents and LICENSE with it.
Open a new project session and invoke /value-stream-mapping, then provide your context.
Official setup: https://code.claude.com/docs/en/skills

## Codex: project installation
Unzip value-stream-mapping.zip. Copy the entire value-stream-mapping folder into .agents/skills/ in your project.
Expected file: .agents/skills/value-stream-mapping/SKILL.md
Keep resources, agents and LICENSE with it.
Start a new session in the project and ask: "Use $value-stream-mapping to review this workflow with me."
Official setup: https://learn.chatgpt.com/docs/build-skills

## Check the installation
Ask for a review of an organization with two offers and no selected workflow. The first response should distinguish the offers and ask what to examine. It should not invent a detailed current process, select a platform or claim savings.
If the skill is not found, check the folder nesting and SKILL.md filename, confirm the project directory, then start a new session. The chat starter remains a fallback.
Save your own changes before replacing an installed copy. Installed skills do not update automatically.

## Source and licence
The skill and templates are MIT licensed. The maintained source is skills/value-stream-mapping in the Toolbox repository; download files are generated from it.
Repository: https://github.com/robsaric/robsaric.com/tree/main/skills
