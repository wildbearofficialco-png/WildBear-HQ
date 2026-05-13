# WildBear HQ Screens

This directory is the next major architecture step for WildBear HQ.

## Goal

Break the giant `App.js` file into focused screen modules.

## Planned Screens

```text
/screens
  HQScreen.js
  CreateScreen.js
  PipelineScreen.js
  ProductsScreen.js
  AgentsScreen.js
  MoneyScreen.js
```

## Why This Matters

The app now has:

- persistence
- runtime state
- automation systems
- revenue systems
- agent systems
- pipeline systems

A single-file architecture will eventually slow development and increase bug risk.

## Refactor Strategy

Do NOT rewrite everything at once.

Safe order:

1. Extract constants
2. Extract reusable UI components
3. Extract utility helpers
4. Extract one screen at a time
5. Validate app after each extraction

## First Recommended Screen

Start with:

```text
HQScreen.js
```

because it has:

- isolated metrics
- briefing UI
- check-in UI
- mission controls

and minimal cross-screen dependencies.

## Important Rule

Every extraction should preserve:

- persistence
- styling
- navigation
- save behavior
- mobile layout

The goal is cleaner architecture, not visual redesign.
