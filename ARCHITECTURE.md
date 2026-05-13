# WildBear HQ Architecture

This document tracks the evolving structure of the WildBear HQ app.

## Current State

WildBear HQ started as a single-file Expo prototype.

The app now includes:

- persistent state
- AI agent systems
- revenue systems
- pipeline systems
- CI workflows
- QA systems
- release workflows
- mobile testing workflows

Because of this growth, the architecture is now transitioning into modular structure.

## Current Folder Structure

```text
/components
/constants
/data
/docs
/screens
/storage
/.github
```

## Folder Responsibilities

### /components

Reusable UI pieces.

Examples:

- Card
- Metric
- Button
- ProgressBar
- Pill

### /constants

Static app-wide values.

Examples:

- theme colors
- navigation tabs
- pipeline stages

### /data

Starter/demo state and seed content.

Examples:

- starter episodes
- starter products
- starter pipeline assets
- starter agents

### /screens

Main application screens.

Planned:

- HQScreen
- CreateScreen
- PipelineScreen
- ProductsScreen
- AgentsScreen
- MoneyScreen

### /storage

Persistence and state helpers.

Examples:

- AsyncStorage helpers
- save/load/reset logic
- future migrations

### /.github

Repo automation and workflow infrastructure.

Examples:

- CI workflows
- issue templates
- PR templates

## Architecture Philosophy

WildBear HQ should remain:

- mobile-first
- founder-focused
- calm
- fast
- modular
- AI-native

Avoid:

- overengineering
- unnecessary abstractions
- enterprise dashboard complexity
- premature backend complexity

## Current Technical Priority

Continue reducing `App.js` safely.

Safe extraction order:

1. constants
2. seed data
3. reusable components
4. utility helpers
5. screens
6. navigation structure

## Important Rule

Never sacrifice app stability for architectural purity.

The app must remain usable during refactors.
