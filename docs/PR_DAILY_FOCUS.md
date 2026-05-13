# Daily Focus PR Notes

Branch:

```text
feature/daily-focus-mode
```

## Goal

Add the Daily Focus card to the HQ screen safely.

## Intended Code Change

Use existing values already in `App.js`:

- `focusTask`
- `openTasks`
- `bottleneck`
- `setActive`

## UI Requirements

The card should show:

- top priority task
- current bottleneck
- open task count
- buttons to Tasks and Pipeline

## Safety Rules

- No dependency changes
- No bottom nav changes
- No persistence changes
- No native packages
- No large rewrite

## QA

- App opens in Snack
- HQ screen renders
- buttons switch tabs
- Tasks tab still works
- Pipeline tab still works
