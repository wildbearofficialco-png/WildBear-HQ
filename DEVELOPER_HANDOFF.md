# WildBear HQ Developer Handoff

This file explains how to continue building WildBear HQ without losing the product vision.

## Product Identity

WildBear HQ is not a generic productivity app.

It is a solo-founder operating system for an AI-driven media company.

The app should help the founder:

- create podcast-first content
- repurpose one idea into many assets
- build digital products
- run AI agents
- track revenue per hour
- protect creative energy
- see bottlenecks clearly

## Current Architecture

The current app is intentionally kept as a single `App.js` prototype so it is easy to run in Expo Snack and simple to paste/test on mobile.

Current files of interest:

- `App.js` - active prototype
- `README.md` - product vision and roadmap
- `QA_CHECKLIST.md` - manual testing checklist

## Important Rule

Before adding big new features, keep the app stable.

The next true engineering milestone should be persistence.

## Current Screens

- HQ / Command Mode
- Create
- Pipeline
- Products
- Agents
- Money

## Core Concepts

### Command Mode

The top-level founder briefing. It should answer:

- What matters today?
- Where is the bottleneck?
- What should move next?
- What is the highest leverage action?

### Pipeline

The repurposing flow:

```text
Idea -> Script -> Record -> Edit -> Clip -> Post -> Offer
```

The goal is to move assets toward visibility and revenue.

### Products

The digital product vault. Products should eventually include:

- workbook
- ebook
- template
- course
- tool
- offer page

### Agents

AI workers that represent repeatable jobs:

- Script Writer
- Clip Miner
- Product Builder
- Revenue Analyst
- Publishing Agent

Agents should have:

- objective
- queue
- throughput
- completed count
- status

### Money

Revenue tracking should focus on:

- revenue per hour
- conversion rate
- product value
- offer ladder
- content-to-revenue path

## Next Recommended Build Order

1. Add AsyncStorage persistence
2. Add reset/demo data controls
3. Add delete/edit controls
4. Split components from App.js
5. Split screens from App.js
6. Add React Navigation
7. Add real AI/API integrations

## Persistence Notes

Recommended dependency:

```bash
npx expo install @react-native-async-storage/async-storage
```

Suggested storage key:

```js
const STORAGE_KEY = 'wildbear_hq_state_v1';
```

Persist:

- mission
- episodes
- products
- tasks
- pipeline
- agents
- revenue
- hours
- visitors
- sales
- checkIn

## Design Rules

Use:

- dark background
- turquoise accents
- orange highlights
- rounded iOS-style cards
- high-country futuristic tone
- simple mobile-first UI

Avoid:

- generic corporate SaaS feel
- clutter
- overwhelming data tables
- too many dependencies too early

## QA Rule

After every code change, run through `QA_CHECKLIST.md`.

At minimum confirm:

- app opens
- tabs switch
- buttons work
- inputs do not crash
- calculations update
- no red screen

## North Star

WildBear HQ should feel like a private command center for a company of one that operates like a team of ten.
