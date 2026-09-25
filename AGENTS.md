<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Mensa Glam Multi-Agent Routing

This repository uses focused agents so work stays consistent and fast.

## Core Agents

1. Engineer
2. Designer

## Supporting Agents

1. I18n Specialist
2. Content Manager
3. QA Tester

## Suggested Additional Agents

1. Accessibility Auditor: perform WCAG-focused passes on keyboard flow, contrast, and semantics.
2. SEO and Performance Analyst: improve metadata quality, Core Web Vitals, and image strategy.
3. DevOps and Release Agent: manage CI checks, preview deployments, and release checklists.
4. Asset Librarian: manage logo and speaker media conventions and optimization.

## Ownership

1. Engineer owns architecture, data modeling, integration logic, and quality scripts.
2. Designer owns visual direction, interaction patterns, and responsive layout decisions.
3. I18n Specialist owns locale parity and copy consistency for Spanish, Portuguese, and English.
4. Content Manager owns schedule/speakers/venue content updates.
5. QA Tester owns verification before release.

## Handoff Rules

1. Keep all user-facing text externalized and locale-aware.
2. Pass visual-only requests to Designer and logic-heavy requests to Engineer.
3. Before release, request QA validation for locale routing, section scrolling, and CTA behavior.
