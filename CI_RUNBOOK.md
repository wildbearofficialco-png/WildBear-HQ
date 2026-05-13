# WildBear HQ CI Runbook

This file explains how to respond when GitHub Actions fails.

## Current Workflow

Workflow file:

```text
.github/workflows/expo-ci.yml
```

The CI smoke check currently validates:

- dependencies install
- package metadata exists
- Expo config exists
- App.js has a default App export
- WildBear branding exists in the source

## If CI Fails

### 1. Open the failed run

In GitHub Mobile:

1. Open the repo
2. Tap Actions
3. Tap the failed workflow
4. Tap the failed job
5. Read the first red error section

### 2. Identify the failure type

Common categories:

#### Dependency install failure

Usually means `package.json` dependencies conflict or npm cannot resolve them.

First fixes to try:

- use `npm install --legacy-peer-deps`
- check Expo / React / React Native versions
- avoid adding unnecessary dependencies

#### Package metadata failure

Usually means `package.json` is missing:

- name
- scripts.start
- dependencies.expo

#### App config failure

Usually means `app.json` is invalid JSON or missing `expo.name`.

#### App source sanity failure

Usually means `App.js` was accidentally broken, renamed, or lost its default export.

Expected export:

```js
export default function App() {
  // app code
}
```

## CI Philosophy

CI should be useful but not annoying.

It should catch obvious breakage without requiring full app-store builds or expensive checks.

## What CI Does Not Prove Yet

Current CI does not prove:

- the app renders correctly on iPhone
- every button works
- Expo Go opens successfully
- AsyncStorage works
- EAS builds complete

Manual QA is still required. Use:

```text
QA_CHECKLIST.md
MOBILE_TESTING.md
```

## When To Update CI

Update CI when:

- dependencies change
- app architecture changes
- App.js is split into screens/components
- tests are added
- persistence is implemented

## WildBear Rule

A red CI check is not failure. It is the smoke alarm doing its job.
