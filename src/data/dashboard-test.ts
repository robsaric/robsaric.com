import prompt from '../../skills/dashboard-test/resources/chat-prompt.txt?raw';

export const DASHBOARD_TEST = {
  "title": "The Dashboard Test",
  "category": "Review & decide",
  "formats": "Checklist · Prompt · Skill",
  "description": "A free dashboard review checklist, chat prompt and AI skill. Find the main gap, choose one improvement, or decide a dashboard is not needed.",
  "question": "Does your dashboard earn its place?",
  "intro": "A free AI skill I created to review a dashboard or report against the job someone needs it to do. Bring a screenshot or description. Find what to keep, one useful change, or a simpler alternative.",
  "format": "Free checklist, copyable prompt and skill for Claude or Codex. No signup required.",
  "primary": "Try the prompt",
  "secondary": "Download skill ZIP",
  "back": "Toolbox",
  "navLabel": "In this guide",
  "nav": [
    {
      "href": "#before",
      "label": "What to bring"
    },
    {
      "href": "#checklist",
      "label": "The checklist"
    },
    {
      "href": "#prompt",
      "label": "Copy the prompt"
    },
    {
      "href": "#downloads",
      "label": "Get the skill"
    },
    {
      "href": "#examples",
      "label": "Two possible outcomes"
    }
  ],
  "beforeHeading": "Start with one job.",
  "before": [
    {
      "label": "Bring this",
      "body": "A screenshot or description of an existing dashboard, or a design you are considering. Say who uses it, when and what they want to understand or decide. If that is unclear, the interview starts there."
    },
    {
      "label": "Helpful, not required",
      "body": "A recent decision, what happened after it, the source dates and any existing checklist or routine. No other skills, integrations or live account access are required."
    },
    {
      "label": "What you’ll leave with",
      "body": "A provisional verdict, the main gap, one practical improvement and a way to check whether it helps. “Keep it” and “not enough evidence” are valid answers too."
    }
  ],
  "privacy": "Use a redacted screenshot or a description. Leave out patient details, customer names and confidential records.",
  "checklistHeading": "Follow the work, not just the chart.",
  "checklistIntro": "Use these questions yourself or let the prompt guide the conversation. Check a question after you have considered it, even if your answer is “I don’t know.” This is not a score.",
  "checklist": [
    {
      "title": "Who is looking, and why?",
      "body": "Name the person, the moment and the question they bring. “See how we’re doing” is a starting point. What would tell them something needs attention?"
    },
    {
      "title": "Can they trust what they are seeing?",
      "body": "Check the period, comparison and source date. Missing data should look different from zero. A count without context can send you after the wrong problem."
    },
    {
      "title": "Can they look into what changed?",
      "body": "Show enough evidence to investigate a pattern. A falling number does not explain why it fell."
    },
    {
      "title": "Can they decide what to do next?",
      "body": "Follow the path from the finding to the relevant work. Keeping things as they are can be the right decision."
    },
    {
      "title": "Does the next step have a home?",
      "body": "If action is needed, keep the next step, agreed owner and review date in the existing work record. A dashboard should not become a second task list."
    },
    {
      "title": "Will the next review teach them anything?",
      "body": "Check what happened after the decision. What you learn from doing the work should help you improve how the work gets done."
    },
    {
      "title": "What could we remove without making the job harder?",
      "body": "Consider an unnecessary metric, duplicate report or extra handoff. Keep the comparisons, source limits and records the reader needs. Removal is an option, not a requirement."
    }
  ],
  "caretricsExample": "See the full Caretrics demo review",
  "githubLabel": "Read the GitHub guide",
  "githubHref": "https://github.com/robsaric/robsaric.com/tree/main/skills/dashboard-test",
  "checklistNote": "These checks stay on this page only. Download the checklist if you want to keep your notes.",
  "alternativeHeading": "Does it need to be a dashboard?",
  "alternative": "Try the same job with an existing list, report, alert or conversation. If that gets you to a sound decision with less work, use it. A dashboard can still earn its place by helping you spot a pattern or confirm that no change is needed.",
  "checklistDownload": "Download the checklist",
  "promptHeading": "Review it with AI.",
  "promptIntro": "Paste this into a chat and add your context. The AI asks about what is missing before giving its review. You make the call.",
  "promptLabel": "The Dashboard Test prompt",
  "copy": "Copy the prompt",
  "copied": "Prompt copied. Paste it into your chat and add your context.",
  "selected": "Prompt selected. Copy it using your device’s copy command.",
  "failed": "Clipboard access was unavailable. The prompt is selected so you can copy it.",
  "select": "Select the prompt",
  "noScript": "Select the text and copy it into your chat. The checklist and downloads work without JavaScript.",
  "downloadHeading": "Use it again as a skill.",
  "downloadIntro": "A skill saves the review instructions so you can reuse them. This one contains instructions only: no scripts, connectors or automatic changes to your dashboard.",
  "skillNameLabel": "Skill name:",
  "skillName": "dashboard-test",
  "version": "Version 1.1 · October 31, 2026",
  "downloadLabel": "Download the skill ZIP",
  "sourceLabel": "Read SKILL.md before installing",
  "promptDownload": "Download the chat prompt",
  "setupHeading": "Choose your setup.",
  "setups": [
    {
      "name": "Claude",
      "body": "In Customize → Skills, upload the ZIP and enable it. Claude requires Code execution and file creation to be enabled; your organization may control access. You can use the chat prompt if skills are unavailable.",
      "path": "",
      "invoke": "Use the dashboard-test skill to review this dashboard with me.",
      "url": "https://support.claude.com/en/articles/12512180-use-skills-in-claude",
      "link": "Claude setup instructions"
    },
    {
      "name": "Claude Code",
      "body": "Unzip the download and place the dashboard-test folder in your project’s .claude/skills/ directory. Keep the folder contents together.",
      "path": ".claude/skills/dashboard-test/SKILL.md",
      "invoke": "/dashboard-test",
      "url": "https://code.claude.com/docs/en/skills",
      "link": "Claude Code setup instructions"
    },
    {
      "name": "Codex",
      "body": "Unzip the download and place the dashboard-test folder in your project’s .agents/skills/ directory. Open that project in Codex and ask it to use the skill.",
      "path": ".agents/skills/dashboard-test/SKILL.md",
      "invoke": "Use $dashboard-test to review this dashboard with me.",
      "url": "https://learn.chatgpt.com/docs/build-skills",
      "link": "Codex setup instructions"
    }
  ],
  "setupCheck": "Check the first response: it should use the context you provided and ask about any missing decision or reader. If you only provided a screenshot, it should not claim to know how your team works.",
  "updates": "Downloads are local copies. To update, download again and review the changes before replacing your copy.",
  "examplesHeading": "Two possible outcomes.",
  "examplesIntro": "These are illustrative reviews, not measured customer results.",
  "examples": [
    {
      "title": "Keep the dashboard. Make the pattern clearer.",
      "context": "An owner reviews attendance over several months and wants to know what deserves attention. The chart and its source dates are available, but the pattern is buried in the report.",
      "verdict": "Change the presentation. The recurring comparison gives the dashboard a purpose.",
      "improvement": "Bring the supported pattern and its time period together above the chart. Keep the counts, limits and existing priority visible.",
      "check": "At the next review, ask the owner what changed and what they would investigate. Check whether they can answer without reconstructing the report."
    },
    {
      "title": "Skip the dashboard. Surface the blocker.",
      "context": "A team preparing a workshop already has a shared task list. A proposed dashboard shows percent complete, but the owner needs to know what is blocked and who will handle it.",
      "verdict": "Do not build a dashboard for this job. Keep the existing list.",
      "improvement": "Put blocked tasks first, with the owner, next step and due date on the same line.",
      "check": "At the next check-in, see whether the owner can identify the blocker and next action from that list."
    }
  ],
  "verdictLabel": "Verdict",
  "improvementLabel": "One improvement",
  "checkLabel": "How to check it",
  "limitHeading": "A useful review, not a certificate.",
  "limit": "A screenshot cannot establish calculation accuracy, access controls or how people actually use a product. AI can miss context and make poor recommendations. Check the review against the real work before changing anything.",
  "closingHeading": "The question behind the test.",
  "closing": "What you learn from doing the work should help you improve how the work gets done.",
  "articleLink": "Read: What should a dashboard do?",
  "articleHref": "/field-notes/2026-10-19-are-dashboards-dead/"
} as const;
export const DASHBOARD_PROMPT = prompt;
