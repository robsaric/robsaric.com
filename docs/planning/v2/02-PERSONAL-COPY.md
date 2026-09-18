# Personal site v2: copy and composition

Proposed public copy for implementation under Rob's requested direction. Existing approved biography remains authoritative. Copy law applies: no em dashes, hype, new quantified claims or invented experiences.

## Homepage

Order: Hero / What I am building / Notes / Why I care / Contact and existing newsletter. Reuse the current portrait, typography, cream/forest/lime tokens, section component and spacing rhythm. Keep a readable personal editorial page, not a grid of SaaS feature cards.

### Hero

Eyebrow: Founder and builder · Ottawa

H1: I build software that helps good people run better businesses.

Intro: I'm Rob Saric, a founder in Ottawa. I'm interested in how AI can take more of the operational burden off people doing valuable work.

Second paragraph: My focus today is clinics: helping teams see what needs attention, follow through, and know whether things improved.

Primary link: What I am building → `/#work`

Secondary link: Read my notes → `/field-notes/`

Remove the existing three-part tagline from the hero. Keep the concrete title Founder, Caretrics in factual biography and schema; “Founder and builder” is the visible personal framing, not an invented job.

### What I am building (`id="work"`)

Two entries, each with name, plain description and one link. No status badges that imply milestones.

**Caretrics**

I'm building Caretrics to help clinic teams using Jane see where revenue and follow-up work need attention, decide what to work on next, and check what changed.

Link: Explore Caretrics → `https://caretrics.com`

**Clinic Operations**

I'm starting a place for the people running clinics to compare notes on what works and where they get stuck. One clinic or several, there's something to learn from each other.

Pre-launch link: Talk with me about clinic operations → `/contact/`

After launch only: Visit Clinic Operations → `https://clinicoperations.com/`

Use a single config entry to switch the link/label. Default to pre-launch. The domain is not considered launched just because a DNS record or preview exists.

### Notes

Heading: What I am learning and building.

Intro: Notes on clinic operations, software, AI, and the decisions that change my mind.

Show at most three published entries in reverse chronological order; never pad with drafts. Preserve real dates. No mandatory carousel or filter controls on this short homepage block; retain full filters on /field-notes/.

### Why I care

Heading: People who do good should do well.

Body: Clinicians spend their days helping people live better. I want the businesses around them to work better too. That is where I am putting my time, and why I stay close to the people doing the work.

Link: More about me → `/about/`

Keep the original family/outdoors imagery if the existing section needs it; no new generated portrait.

### Contact and newsletter

Heading: What are you working through?

Body: If you run a clinic, build useful software, or have a question worth exploring, I'd like to hear from you.

Link: Write to me → `/contact/`

Newsletter heading: Get my notes.

Newsletter body (desktop and mobile): Occasional notes on what I am building and learning. Reply whenever something connects with your own work.

Preserve the actual subscription endpoint and statuses. Success body: You are on the list for my occasional notes. You can reply to any of them.

Footer line: I build things to help people live better lives.
Footer byline: Rob Saric · Founder of Caretrics · Ottawa.

## About page

Keep existing heading “I spent twenty years building software. Healthcare is where the work became personal.” It is specific and earned. Add this paragraph after the two existing introductory paragraphs:

Today, I'm building software that helps good people run better businesses. My focus is clinics, and the operational work that gets in the way of looking after people.

Preserve the full approved Background and Outside sections. In the current Caretrics section, use heading “What I am building now.” Replace its current three paragraphs with the two project descriptions above, giving Caretrics the first position. Retain the selected-work link only if it resolves; do not invent additional ventures or case studies. Preserve the family story and approved quotes verbatim.

## Contact page

Title/H1: Write to me

Body: If you run a clinic, are building something useful, or want to compare notes on software and AI, I'd like to hear from you. Tell me what you're working on and what you're trying to figure out.

Keep `rob@caretrics.com` and the existing LinkedIn link. Do not imply an established robsaric.com or clinicoperations.com inbox.

## Notes page

Title: My notes

Intro: What I am learning about clinic operations, building software, and using AI in real work. Some are observations. Some are decisions I have changed my mind about.

Leave note types and tags unchanged. An intro can be rendered in the existing page header from COPY.pages.fieldNotes.intro.

## Principles context

Keep the title and five principles. Replace intro with:

These are the principles I use in my work with clinics. They are one part of how I think about building useful software. If your experience challenges one, write to me.

## Methods: bounded corrections

Keep the historical $127,000 breakdown and cohort, not a new recovery guarantee. Replace source-specific absolutes with the following standards:

Context: This page explains how I check clinic findings and describe their limits. A recorded balance, an estimated opportunity and money collected are different things.

“Read, not inferred.” → heading “Separate records from estimates.” Body: For each finding, I want to know which records support it, which fields are missing, and whether any part is estimated. Missing billing information alone does not prove that a service was never invoiced.

“How an outcome closes.” → heading “Check what changed.” Body: A completed task is evidence of work done. A booking, a payment and an updated balance are different outcomes. I check the relevant source before describing a result as confirmed, and I keep an estimated opportunity separate from collected money.

“The $127,000.” body: This historical example covers one clinic with 25 providers, from June 2025 through May 2026. The four categories are unbilled claims, $52,000; no-shows, $37,000; missed re-bookings, $24,000; and missing re-evaluations, $14,000. These categories include estimated revenue opportunities. The total is not cash collected or a receivables balance.

“Identified is not collected.” body: A finding can point to work worth doing. Completing that work does not by itself prove that money was collected. I describe bookings, submitted claims and payments separately, using the evidence available for each.

Do not state that this repository proves current Caretrics integration scopes, automatic closure or real-time updates. Keep the source/access paragraph factual without implying all billing data comes through the Jane developer API. Safe replacement: The relevant records depend on the question being investigated and the information available from the clinic. I state the period, sources and missing information for each finding.

## Metadata

SITE.title: Rob Saric · Founder and builder

SITE.description: Rob Saric is a founder in Ottawa building Caretrics and exploring how software and AI can help clinics and the people running them.

About description: Meet Rob Saric, a founder in Ottawa building Caretrics and sharing what he learns about clinics, software, and AI.

Contact description: Get in touch with Rob Saric about clinic operations, building software, or a question worth exploring.

Notes description: Notes from Rob Saric on clinic operations, software, AI, and what he is learning while building Caretrics.

OG_SITE_CARD: use the new H1, eyebrow “Founder and builder”; preserve Rob Saric and robsaric.com. Regenerate instead of leaving the old revenue-gap headline embedded in the PNG.

public/llms.txt opening: Personal website and notes of Rob Saric, founder of Caretrics in Ottawa. Rob writes about clinic operations, building software and using AI in real work.

Update llms page descriptions to match the new composition; keep the approved extended credential as the biography, and list Clinic Operations only when its public launch is verified.
