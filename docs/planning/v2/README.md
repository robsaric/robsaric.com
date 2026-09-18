# Personal website v2 and Clinic Operations launch

Prepared 2026-09-18 for Rob Saric. Source: robsaric/robsaric.com main at `8665c6a5836f796b801ad8257cdccdbb6f5559a2`.

## Decisions

- Rob's personal site leads with his ambition and approach to building. Caretrics remains the principal current project and evidence of that ambition.
- Clinic Operations welcomes owners, managers, front-desk, billing and operations teams in single-location clinics and larger groups. It is initially relevant to allied health and rehab; using Jane is welcome, never a membership requirement.
- Clinic Operations begins as an invitation to exchange practical experience. It is not represented as an established community, research institute, benchmark service or independent publication.
- The smallest launch is three public pages plus a 404: Home, About & Participate, Privacy. The interaction is email. No accounts, member directory, newsletter backend, analytics or community software at launch.
- Rob said “astra similar to robsaric/robsaric.com.” The checked repository uses Astro. This package assumes Astro + Vercel, not the WordPress Astra theme and not Sites hosting.
- This delivery changes planning documents only. Rob will implement. No production source, content, deployment settings or existing historical plans are changed by this package.

## Start here

1. Give Codex [00-START-HERE.md](00-START-HERE.md) in the personal-site repository.
2. Implement the personal-site changes using [01](01-PAGE-REVIEW.md), [02](02-PERSONAL-COPY.md), [03](03-PERSONAL-IMPLEMENTATION.md), and [04](04-ACCEPTANCE.md).
3. In a separate checkout for Clinic Operations, use [05](05-CLINICOPERATIONS-BRIEF.md), [06](06-CLINICOPERATIONS-COPY.md), and [07](07-CLINICOPERATIONS-CODEX-PROMPT.md). The new repository name is a suggested destination, not a repository that has already been created.
4. Use [08](08-CONVERSATION-PILOT.md) to start conversations. No software build beyond the three-page site is needed for the pilot.
5. Read [09](09-EVIDENCE-AND-VERIFICATION.md) for claims, source boundaries and validation results.

## Precedence and working rules

This v2 brief is Rob's requested new direction. It supersedes the older product-first homepage composition and clinic-only personal positioning where explicitly specified. It does not supersede truthfulness, approved biography, locked credentials, permanent URLs, copy law, accessibility, or deployment controls. Keep existing design tokens and images.

The repository AGENTS.md specifies a Claude-applies/Codex-emits-files workflow and no remote push without Rob. Rob explicitly requested that this planning package be written to GitHub; that authorizes this docs branch and review PR. For implementation, follow the active session authorization and repository workflow. If running in its read-only Codex mode, emit complete `===FILE=== path` / `===END===` blocks. Do not change AGENTS.md merely to remove constraints. Do not merge or publish as part of a planning task.

## Two independent releases

Personal-site v2 must work before Clinic Operations launches. Its second project card initially links to the existing contact page. Switch to clinicoperations.com only after the destination passes its launch checks. Keep the existing personal newsletter audience separate; participation in conversations does not subscribe someone to marketing.
