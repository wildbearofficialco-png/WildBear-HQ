# Contributing to WildBear HQ

WildBear HQ is a solo-founder operating system for WildBear.Co. Contributions should protect the product identity and improve the founder's ability to create, repurpose, automate, and monetize.

## Before You Build

Read these files first:

- `README.md`
- `ROADMAP.md`
- `DEVELOPER_HANDOFF.md`
- `QA_CHECKLIST.md`

## Product Rules

Every change should support at least one of these goals:

- Help the founder create podcast-first content
- Move assets through the repurposing pipeline
- Build or sell digital products
- Improve AI agent workflows
- Increase revenue per hour
- Protect focus and creative energy

Avoid changes that make the app feel like generic corporate SaaS.

## Development Flow

1. Create a feature branch
2. Make one focused change
3. Run the QA checklist
4. Open a pull request
5. Use the PR template
6. Merge only after smoke testing

## Branch Names

Use clear names:

```text
feature/persistence
feature/data-controls
feature/content-calendar
feature/agent-workflows
fix/navigation-spacing
```

## Manual QA Minimum

Before opening a PR, confirm:

- App opens without a red error screen
- Bottom tabs switch correctly
- Inputs accept text/numbers
- Main buttons work
- Calculations update correctly
- No obvious mobile layout break

## Current Priority

The next major technical milestone is persistence.

Use AsyncStorage so WildBear HQ remembers:

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
- check-ins

## Design Tone

The app should feel like:

- high-country futuristic
- focused
- calm
- useful
- founder-led
- lightly cinematic

Not like:

- enterprise dashboard sludge
- cluttered admin panel
- generic task app

## North Star

Build a private command center for a company of one that feels like a team of ten.
