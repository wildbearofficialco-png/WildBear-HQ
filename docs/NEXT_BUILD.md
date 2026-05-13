# Next Build: Persistence First

This document defines the next major engineering target for WildBear HQ.

## Core Priority

Implement persistent state before adding more large feature systems.

## Why This Matters

WildBear HQ already contains enough prototype functionality to validate the product direction:

- Command Mode
- Content Engine
- Repurpose Pipeline
- Product Vault
- AI Agent Command Center
- Revenue Center
- CI automation
- QA systems
- Mobile testing workflow

The next bottleneck is memory.

Without persistence:

- the app resets after reload
- workflows feel temporary
- testing loses meaning
- habits cannot form
- founder trust stays low

## Recommended Implementation Path

1. Add AsyncStorage dependency
2. Create storage helpers
3. Load saved state on app startup
4. Save state automatically when data changes
5. Add reset demo data button
6. Add corrupted-data fallback handling
7. Update QA checklist
8. Add persistence-specific CI checks later

## State To Persist

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

## Definition of Done

Persistence is complete when:

- mission survives reload
- pipeline survives reload
- products survive reload
- agent state survives reload
- revenue survives reload
- app safely restores defaults if storage breaks

## Product Impact

Persistence transforms WildBear HQ from a prototype dashboard into a real founder operating system.
