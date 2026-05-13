# Calendar, Daily Focus, and Reminder Layer

This document defines the next product layer for WildBear HQ.

## Goal

Add planning and reminder systems without breaking the current Snack-stable runtime.

## Daily Focus Mode

Daily Focus should show:

- top 3 open tasks
- highest-priority task
- current pipeline bottleneck
- next calendar block
- one revenue-producing action

## Weekly Calendar

Recommended starter rhythm:

```text
Monday: Clip + publish
Tuesday: Record or script
Wednesday: Product build
Thursday: Repurpose
Friday: Revenue review
Saturday: Light creative reset
Sunday: Planning and recovery
```

## Reminder Layer

Do not add native push notifications yet.

Start with in-app reminders:

- Post a clip
- Move one asset forward
- Complete one high-priority task
- Review RPH
- Check product progress

## Snack-Safe Implementation

To protect Expo Snack stability:

1. Keep reminders as text cards first
2. Keep calendar as local React state
3. Avoid native notification packages
4. Avoid complex date libraries
5. Add one UI section at a time

## Future Production Upgrade

Later, after the app leaves Snack mode:

- persistent calendar storage
- local notifications
- Google Calendar export
- recurring tasks
- weekly review automation

## Product Principle

The calendar should not become a corporate schedule maze.

It should answer one simple question:

What should the founder move today?
