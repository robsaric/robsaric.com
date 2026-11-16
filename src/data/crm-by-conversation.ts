import prompt from '../../skills/crm-by-conversation/resources/chat-prompt.txt?raw';

const skillId = 'crm-by-conversation';
const downloadBase = `/downloads/${skillId}`;
const attioDocs = 'https://docs.attio.com/mcp/overview';

/** Public guide copy. The worked example is invented and labelled as such; no customer result is claimed. */
export const CRM = {
  title: 'CRM by Conversation',
  category: 'Set up & run',
  formats: 'Guide · Prompt · Skill',
  description: 'A free prompt and AI skill for running an Attio CRM from a chat. Plan the workspace in an interview, build it after you approve, then keep it current from your notes.',
  promise: 'Keep your CRM current without opening it.',
  intro: 'A free AI skill I created for running an Attio workspace from a chat. I run my own this way through Claude. It plans the workspace with you, builds it after you approve, then turns your rough notes into proposed updates. You approve every change.',
  format: 'Free prompt and skill for Claude or ChatGPT. Needs your own Attio connection. No signup required.',
  primary: 'Try the prompt',
  secondary: 'Download skill ZIP',
  skillNameLabel: 'Skill name:',
  skillName: skillId,
  version: 'Version 1.0 · November 16, 2026',
  before: {
    heading: 'This one works inside your account.',
    intro: 'The other Toolbox skills work from what you paste into a chat. This one guides an assistant that you have connected to Attio, so read this before you start.',
    items: [
      { label: 'What you need', body: 'An Attio workspace, with your work email and calendar connected inside Attio so contacts and conversations fill in on their own. Then connect Attio to Claude or ChatGPT.' },
      { label: 'What it can do', body: 'Read your workspace, then create and change fields, lists, views, records, notes and tasks. The instructions tell it to show you each change as a proposal and wait for your yes.' },
      { label: 'What it does not do', body: 'It does not send email. It deletes or merges records only when you ask in those words. The download contains instructions only: no scripts, connectors or keys.' },
      { label: 'Where to start', body: 'In a new or test workspace, until you trust how it behaves in yours. It can see and change only what your own Attio login allows, and you can revoke the connection in Attio.' },
    ],
    note: 'Allow twenty minutes for the interview. The assistant asks how you sell before it builds anything.',
    attioLabel: 'Attio’s connection instructions',
    attioHref: attioDocs,
  },
  example: {
    heading: 'See one update, start to finish.',
    intro: 'Rough notes go in. A proposal comes back. Nothing is saved until the answer is yes.',
    label: 'Illustrative example: an update after a call',
  },
  workflow: {
    heading: 'Plan first. Build once. Then run it.',
    why: 'Attio comes with default fields. Which ones matter depends on what you sell and how you reach people, so the assistant asks before it builds. Once your segments, lists and fields are in place, it can keep them current from your notes.',
    commandsHeading: 'What you can ask for, once it is built',
    commands: [
      { label: 'After a call', body: 'Paste or dictate rough notes. It finds the record and proposes a note under three headings (What they said, What we saw, Plan), any field or stage change your notes support, and one follow-up task.' },
      { label: '“What needs attention today?”', body: 'One list, most urgent first: tasks due or overdue, records that meet the attention rule you set, and today’s meetings with the last note for each.' },
      { label: '“Start a campaign.”', body: 'It creates the list, adds the records that match and stamps the follow-up tasks with dates from your cadence.' },
      { label: '“Clean up.”', body: 'It finds duplicates and records missing a field that drives a decision, then proposes fixes in batches of ten.' },
    ],
    methodDetails: 'See the five setup steps',
    steps: [
      { title: 'It inspects your workspace.', body: 'It reads the fields, lists, views and members that already exist, and tells you in five lines what is there and what is unused.' },
      { title: 'It interviews you.', body: 'Seven questions about what you sell, the one motion to set up first, the steps from first contact to done, the facts that decide who you contact, your cadence and what makes a record need attention.' },
      { title: 'It proposes the structure.', body: 'One table of fields, lists and views, including a view named Needs attention. It should be the smallest structure that runs the motion you chose. You approve it or change it.' },
      { title: 'It builds and reads back.', body: 'It creates the structure in one pass, then reads every field, list and view back and reports what was built, what failed and what needs your clicks in Attio.' },
      { title: 'It loads your contacts.', body: 'Give it companies or people. It proposes the column mapping and the first five rows, then loads the rest and counts what was created, matched and skipped.' },
    ],
  },
  downloads: {
    intro: 'A skill saves these instructions so you can use them again. It works through the Attio connection you set up in your own assistant.',
    files: [
      { href: `${downloadBase}/${skillId}.zip`, label: 'Download the skill', format: 'ZIP', detail: 'One folder with SKILL.md, the chat prompt and the worked example. Use the same download for Claude, Claude Code or Codex.' },
      { href: `${downloadBase}/chat-prompt.txt`, label: 'Download the chat prompt', format: 'Plain text', detail: 'The same instructions as one prompt for ChatGPT, Claude or another chat tool with Attio connected.' },
      { href: `${downloadBase}/after-a-call-example.md`, label: 'Download the worked example', format: 'Markdown', detail: 'An invented update after a call, showing the proposal, the approval and the read-back.' },
    ],
    source: 'Read the skill before installing it',
    sourceHref: `${downloadBase}/${skillId}/SKILL.md`,
    setupHeading: 'Choose your setup.',
    setups: [
      {
        name: 'Claude',
        steps: [
          'Connect Attio first. In Claude, open Settings → Connectors → Browse connectors, install Attio and sign in.',
          'Then open Customize → Skills, upload the ZIP and enable it. Claude requires Code execution and file creation to use skills. Your organization may also need to allow them.',
        ],
        path: '',
        invocation: 'Use the crm-by-conversation skill to set up my Attio workspace with me.',
        link: 'Claude setup instructions',
        href: 'https://support.claude.com/en/articles/12512180-use-skills-in-claude',
      },
      {
        name: 'ChatGPT · no installation',
        steps: [
          'Connect Attio first. In ChatGPT, open Apps, search for Attio and connect it.',
          'Then paste the chat prompt into a new chat and add your starting context. To use it again without pasting, keep the prompt in a project’s instructions.',
        ],
        path: '',
        invocation: 'Start with my workspace as it is today. Ask me how I sell before you propose anything.',
        link: 'Attio’s connection instructions',
        href: attioDocs,
      },
      {
        name: 'Claude Code · local project',
        steps: [
          'Add Attio’s MCP server, https://mcp.attio.com/mcp, to Claude Code and sign in when asked.',
          'Unzip the download. Put the crm-by-conversation folder inside .claude/skills/ in your project. Keep its files together.',
        ],
        path: '.claude/skills/crm-by-conversation/SKILL.md',
        invocation: '/crm-by-conversation',
        link: 'Claude Code skill instructions',
        href: 'https://code.claude.com/docs/en/skills',
      },
      {
        name: 'Codex · local project',
        steps: [
          'Add Attio’s MCP server, https://mcp.attio.com/mcp, to Codex and sign in when asked.',
          'Unzip the download. Put the crm-by-conversation folder inside .agents/skills/ in your project. Keep its files together.',
        ],
        path: '.agents/skills/crm-by-conversation/SKILL.md',
        invocation: 'Use $crm-by-conversation to set up my Attio workspace with me.',
        link: 'Codex skill instructions',
        href: 'https://learn.chatgpt.com/docs/build-skills',
      },
    ],
    setupCheck: 'Check the first response. It should read your workspace and tell you what exists before it asks how you sell. If it describes a workspace without reading one, the Attio connection is missing.',
    updates: 'These downloads are local copies. To update one, download the new version, review the changes and replace your copy. Keep any edits you made.',
  },
  limits: {
    heading: 'An assistant with write access needs a reader.',
    paragraphs: [
      'AI can match the wrong record, misread a note or propose a field you do not need. The instructions make every change a proposal, but they are instructions, not a lock. Read each proposal before you approve it.',
      'I wrote this skill and am not affiliated with Attio. What an assistant is able to do in your workspace is decided by Attio’s connector and your own permissions, and both can change.',
    ],
  },
  closing: {
    heading: 'The screen should not be the job.',
    body: 'Keep the record clean and checkable underneath. Then work the way you already do: a voice note after a meeting, a list of what needs attention on Monday morning.',
    action: 'Back to the prompt',
  },
} as const;
export const CRM_PROMPT = prompt;
