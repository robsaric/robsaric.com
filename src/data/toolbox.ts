import chatPrompt from '../../skills/interview-draft-edit/resources/chat-prompt.txt?raw';
import { INTERVIEW_METHOD } from './interview-method.mjs';

const interviewTitle = 'Interview, Draft, Edit';
const skillId = 'interview-draft-edit';
const downloadBase = `/downloads/${skillId}`;
const skillDownload = `${downloadBase}/${skillId}.zip`;
const promptDownload = `${downloadBase}/chat-prompt.txt`;
const profileDownload = `${downloadBase}/voice-profile.md`;

/** Public workflow copy. Examples are illustrative, not claims about client work. */
export const TOOLBOX = {
  title: 'Toolbox',
  description: 'Products, GitHub libraries, AI skills and practical workflows, with useful examples and honest trade-offs. A growing Toolbox from Rob Saric.',
  intro: 'Useful tools, and practical ways to use them.',
  explanation: 'Workflows to try, files to make your own, and tools worth understanding. Start with the job you want to do.',
  navigationLabel: 'Browse the Toolbox',
  sections: [
    { href: '#workflows', label: 'Guides & skills' },
    { href: '#downloads', label: 'Downloads' },
    { href: '#tools', label: 'Tools & libraries' },
  ],
  workflowHeading: 'Guides & skills',
  feature: {
    title: interviewTitle,
    category: 'Write & communicate',
    kind: 'Guide · Prompt · Skill',
    description: 'Use AI to organize your thoughts. Keep your voice.',
    detail: 'Start with what you want to say. AI asks questions to help you work through it, then organizes your answers into a draft. You make the final edit.',
    href: INTERVIEW_METHOD.path,
    action: 'Read the guide',
    download: 'Download the skill',
    downloadHref: skillDownload,
    sequenceLabel: 'How the skill works',
    sequence: [
      { title: 'AI interviews you', body: 'You answer questions about your idea, experience and point of view.' },
      { title: 'AI drafts', body: 'It builds from your answers, with its own suggestions marked for review.' },
      { title: 'You edit', body: 'You check the facts, change the wording and decide what to publish.' },
    ],
  },
  dashboard: {
    title: 'The Dashboard Test',
    category: 'Review & decide',
    kind: 'Checklist · Prompt · Skill',
    description: 'Does your dashboard help you decide what to do?',
    detail: 'Review one real decision. Find the main gap, choose one improvement, or decide you do not need a dashboard.',
    href: '/toolbox/dashboard-test/',
    action: 'Start the review',
    inputs: 'Bring a screenshot or description and the question you need to answer. No other skills required.',
  },
  downloads: {
    heading: 'Downloads',
    intro: 'Start a conversation or work through a checklist yourself. No signup required.',
    action: 'Download',
    items: [
      { title: 'The Dashboard Test', format: 'Markdown checklist', description: 'Review who it serves, what it helps them decide and whether a smaller alternative would do.', href: '/downloads/dashboard-test/checklist.md' },
      { title: 'The interview prompt', format: 'Plain text', description: 'Paste it into a chat, then write or dictate your idea. Nothing to install.', href: promptDownload },
      { title: 'Your writing voice', format: 'Markdown template', description: 'Describe how you write, add a few approved samples and say what to avoid.', href: profileDownload },
    ],
  },
  resources: {
    heading: 'Tools & libraries',
    intro: 'Places to run these workflows or learn how skills work. These are links to the makers’ documentation and repositories, not hands-on product reviews.',
    useLabel: 'Use it for',
    limitLabel: 'Keep in mind',
    items: [
      { title: 'Claude', kind: 'Product', use: 'Try a workflow in a chat. Upload its skill when you want to use it again.', limit: 'Custom skills need Code execution and file creation enabled.', href: 'https://support.claude.com/en/articles/12512180-use-skills-in-claude', action: 'Read the setup' },
      { title: 'Codex', kind: 'Product', use: 'Use a skill in a project alongside your draft, screenshot or reference files.', limit: 'For a quick conversation, the copyable prompt is a simpler starting point.', href: 'https://learn.chatgpt.com/docs/build-skills', action: 'Read the setup' },
      { title: 'Anthropic’s skill library', kind: 'GitHub library', use: 'See how reusable skills are written and organised, with working examples.', limit: 'The examples are for learning. Adapt and test them for your own task.', href: 'https://github.com/anthropics/skills', action: 'View the library' },
      { title: 'Vercel’s skills CLI', kind: 'GitHub tool', use: 'Install selected skills from a repository into Claude Code or Codex.', limit: 'This uses the terminal. You don’t need it to use the prompt or ZIP here.', href: 'https://github.com/vercel-labs/skills', action: 'View the tool' },
    ],
  },
} as const;

export const INTERVIEW_YOUR_DRAFT = {
  title: interviewTitle,
  category: 'Write & communicate',
  formats: 'Guide · Prompt · Skill',
  headline: INTERVIEW_METHOD.headline,
  skillNameLabel: 'Skill name:',
  skillName: skillId,
  description: 'Start with your idea. Let AI interview you and organize your answers into a draft. You make the final edit. A free writing skill for Claude and Codex.',
  intro: 'Start with what you want to say. AI asks questions to help you work through it, then organizes your answers into a draft. You make the final edit.',
  format: 'Interview, Draft, Edit: a free writing skill for Claude or Codex, with a copyable prompt.',
  why: 'The point is to help you work out your own answers. You bring the idea, your experience and your point of view. AI asks about what is missing or unclear, then helps put those thoughts in an order someone else can follow. The thinking stays with you.',
  opening: 'Before I had AI, I would spend five minutes getting a rough draft down. I still think that’s a useful place to start. Write it or say it out loud, then let AI ask about the parts you haven’t worked through.',
  action: 'Use the prompt',
  skillAction: 'Use as a skill',
  availability: 'Free to use. No signup required.',
  contentsLabel: 'In this guide',
  contents: [
    { label: 'The method', href: '#workflow' },
    { label: 'Copy the prompt', href: '#prompt' },
    { label: 'Use as a skill', href: '#downloads' },
    { label: 'See an example', href: '#example' },
  ],
  workflow: {
    heading: 'How it works.',
    setup: 'Bring an idea, a rough draft or a spoken explanation. Know who you want to reach and what you want them to take away. A few samples of writing you still stand behind can help with the voice.',
    inputs: [
      { label: 'Bring this', body: 'An idea, rough draft or spoken explanation. Say who you want to reach and what you want them to take away. If that is unclear, start there.' },
      { label: 'Helpful, not required', body: 'A few approved writing samples or a completed voice template. No other skills or knowledge library required.' },
      { label: 'What you’ll leave with', body: 'A draft built from your answers, with AI additions marked for your review. You check the facts and make the final edit.' },
    ],
    steps: [
      { title: 'You write or speak the starting idea.', body: 'Use your own words, even if the order is wrong. A paragraph or a spoken explanation is enough. Use your chat tool’s dictation, or paste a transcript. You don’t need to turn it into a finished draft first.' },
      { title: 'AI asks questions.', body: 'Ask it to read what you’ve shared and find the gaps. What actually happened? What do you believe? What connects these two thoughts? One question at a time gives you room to think.' },
      { title: 'You answer.', body: 'Give it the detail only you can supply: the experience, the opinion, the part you’re unsure about. Skip questions that add nothing. When there’s enough material, check the main point and the order before moving to a draft.' },
      { title: 'AI assembles a draft.', body: 'Ask it to build from your starting idea and answers, using approved writing samples to guide the voice. Have it mark suggested transitions and conclusions in brackets. That makes its additions visible for your review.' },
      { title: 'You make the final edit.', body: 'Read it aloud. Check the facts. Keep, change or cut every bracketed suggestion. If you wouldn’t say a sentence to someone, rewrite it. You decide what’s ready to publish.' },
    ],
  },
  prompt: {
    heading: 'Start the conversation.',
    intro: 'Paste this into a new chat, then write or dictate your starting idea. You can also paste a rough draft or a voice-note transcript. Add writing samples only if you want to use them and have permission to share them with that service.',
    label: 'Interview prompt',
    text: chatPrompt.trim(),
    copy: 'Copy the prompt',
    select: 'Select the prompt',
    copied: 'Copied. Paste it into your chat, then write or dictate your starting idea.',
    selected: 'Prompt selected. Use your device’s Copy command.',
    failed: 'Clipboard access is unavailable. The prompt is selected so you can copy it yourself.',
    noScript: 'You can select and copy the text below without using the button.',
  },
  downloads: {
    heading: 'Use this as a skill.',
    intro: 'If you want to use this again, install the skill. It saves this process as instructions your AI tool can follow. You bring your own idea, answer the questions and edit the draft it produces.',
    files: [
      { href: skillDownload, label: 'Download the skill', format: 'ZIP', detail: 'One folder with a SKILL.md instruction file. Use the same download for any of the setups below. No scripts or account connections are included.' },
      { href: profileDownload, label: 'Download the voice template', format: 'Markdown', detail: 'A short place to describe your voice and list approved samples. Fill it in with your own material; the defaults are deliberately empty.' },
      { href: promptDownload, label: 'Download the chat prompt', format: 'Plain text', detail: 'Keep a local copy to use in Claude, ChatGPT or another chat tool. This is a prompt, not an automatic connection to your files.' },
    ],
    source: 'Read the skill before installing it',
    sourceHref: `${downloadBase}/${skillId}/SKILL.md`,
    setupHeading: 'Choose your setup.',
    setups: [
      {
        name: 'Claude',
        steps: [
          'Download the ZIP. In Claude, open Customize → Skills, choose + Create skill, then Upload a skill. Upload the ZIP and enable it.',
          'Claude requires Code execution and file creation to use skills. Your organization may also need to allow them.',
        ],
        path: '',
        invocation: 'Use the interview-draft-edit skill. Ask me questions about this idea before writing a draft:',
        detail: 'Write or dictate your idea after that request. Expect a question before a draft.',
        link: 'Claude setup instructions',
        href: 'https://support.claude.com/en/articles/12512180-use-skills-in-claude',
      },
      {
        name: 'Claude Code · local project',
        steps: [
          'Unzip the download. Put the interview-draft-edit folder inside .claude/skills/ in your project. Keep SKILL.md inside that folder.',
        ],
        path: '.claude/skills/interview-draft-edit/SKILL.md',
        invocation: '/interview-draft-edit',
        detail: 'Open Claude Code in that project, invoke the skill and add your idea, draft or transcript. Check that it asks a focused question before drafting.',
        link: 'Claude Code skill instructions',
        href: 'https://code.claude.com/docs/en/skills',
      },
      {
        name: 'Codex · local project',
        steps: [
          'Unzip the download. Put the interview-draft-edit folder inside .agents/skills/ in your project. Keep SKILL.md inside that folder.',
        ],
        path: '.agents/skills/interview-draft-edit/SKILL.md',
        invocation: 'Use the interview-draft-edit skill. Ask me questions about this idea before writing a draft:',
        detail: 'Open that project in Codex and add your idea, draft or transcript with this request. In the CLI or IDE, you can also select it with $interview-draft-edit. Expect a question before a draft.',
        link: 'Codex skill instructions',
        href: 'https://learn.chatgpt.com/docs/build-skills',
      },
    ],
    updates: 'These downloads are local copies. To update one, download the new version, review the changes and replace your copy. Keep any edits you made.',
  },
  example: {
    heading: 'What the interview changes.',
    label: 'Illustrative example',
    disclaimer: 'This is a made-up writing exercise, not a client story or a result from my work.',
    draftLabel: '1. Your starting idea',
    draft: 'Our weekly updates could be shorter. We talk for ages and still leave confused.',
    questionLabel: '2. AI’s question',
    question: 'What was still unclear when the last update ended?',
    answerLabel: '3. Your answer',
    answer: 'We agreed to revise the proposal, but nobody was named to send it. I left without knowing who was doing what.',
    editLabel: '4. AI’s draft',
    editBefore: 'Our weekly updates could be shorter. We agreed to revise the proposal, but nobody was named to send it. I left without knowing who was doing what.',
    editAddition: '[A shorter meeting would help. Leaving with a clear decision would help more.]',
    finalEditLabel: '5. Your final edit',
    finalEdit: 'We agreed to revise the proposal, but nobody was named to send it. I left without knowing who was doing what. Before we end the next meeting, I’m going to ask: who is sending it?',
    explanation: 'The answer supplies the concrete problem. In this example, the writer cuts the general opening and replaces AI’s suggested conclusion with a choice they want to make. The model has no basis to claim that this change saved time or improved results.',
  },
  limits: {
    heading: 'Where this helps. Where it doesn’t.',
    paragraphs: [
      'An interview can help you notice the example you skipped, the belief you haven’t explained, or the part you’re unsure about. It can also slow you down if the questions keep circling a point you have already made. Ask it to stop.',
      'Writing samples help with rhythm and vocabulary. They don’t prove that you still hold an old opinion, and they don’t give the model permission to invent a story in your voice. You remain responsible for what you publish.',
    ],
    libraryHeading: 'Already have a writing library?',
    library: 'Use a few relevant passages, with their sources, instead of sending everything. Tell the model which are voice examples and which are factual background. A library can supply context; you still need to answer when a belief, experience or fact is missing.',
  },
  closing: {
    heading: 'Try it on something you already started.',
    body: 'Bring an unfinished paragraph or speak your idea. After the interview, check the draft: does it say what you mean, use your actual examples and sound like something you would say? Keep editing until it does.',
    action: 'Back to the prompt',
    writing: 'Read my writing',
  },
} as const;
