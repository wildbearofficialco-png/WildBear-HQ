# WildBear HQ Roadmap

WildBear HQ is moving from prototype into a real mobile founder operating system.

## Phase 1: Prototype Foundation - Current

Status: In progress

Built so far:

- HQ Command Mode
- Content Engine
- Repurpose Pipeline
- Product Vault
- AI Agent Command Center
- Revenue Center
- Bottleneck detection
- Momentum score
- QA checklist
- Developer handoff
- Launch checklist

## Phase 2: Persistence

Goal: make the app remember.

Tasks:

- Add AsyncStorage dependency
- Save all core state
- Restore state on app launch
- Add reset demo data button
- Add safe fallback if saved data is corrupted

Success criteria:

- User can close/reopen app without losing HQ data
- Missions, products, pipeline, agents, and revenue survive reloads

## Phase 3: Usability Polish

Goal: make the prototype comfortable to use daily.

Tasks:

- Add delete controls
- Add edit controls
- Add success feedback after actions
- Improve bottom navigation spacing
- Add empty states
- Add About / Version card
- Add export summary button concept

Success criteria:

- User can manage data without needing to reset the app
- App feels safe and predictable

## Phase 4: Architecture Refactor

Goal: move from single-file prototype to maintainable app.

Target structure:

```text
/components
/screens
/constants
/data
/storage
/hooks
/utils
```

Tasks:

- Extract shared UI components
- Extract screens
- Extract starter data
- Extract calculations
- Add storage helpers

Success criteria:

- App remains functional after refactor
- Future features are easier to add

## Phase 5: AI Workflow Engine

Goal: make the agent system more useful.

Tasks:

- Add agent queues
- Add assigned pipeline assets
- Add agent output history
- Add recommended agent action
- Add automation workflow map

Success criteria:

- HQ can suggest which AI worker should act next
- Agents feel connected to real work

## Phase 6: Content Calendar

Goal: plan and review the creative week.

Tasks:

- Add weekly schedule
- Add recording days
- Add clipping days
- Add product build days
- Add review day
- Add recovery blocks

Success criteria:

- Founder can see the week at a glance
- App supports sustainable creative rhythm

## Phase 7: Integrations

Goal: connect HQ to real external systems.

Possible integrations:

- OpenAI API
- Make.com
- Zapier
- Google Drive
- Gumroad
- Stripe
- YouTube
- TikTok workflow support

Success criteria:

- App can trigger or prepare real work outside the app

## Phase 8: Shareable Demo

Goal: make WildBear HQ presentable to testers.

Tasks:

- Run QA checklist
- Fix critical bugs
- Add demo walkthrough
- Add screenshots
- Add first-release notes

Success criteria:

- A tester understands the app in under 60 seconds
- Core demo flow works without explanation

## North Star

WildBear HQ should help one founder operate like a focused creative team without losing the human voice behind the brand.
