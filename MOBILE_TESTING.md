# WildBear HQ Mobile Testing Guide

This guide is for testing WildBear HQ from iPhone, GitHub Mobile, Expo Go, or Snack.

## Goal

Make sure WildBear HQ can be tested without needing a full desktop development setup.

## Fastest Mobile Testing Path

### Option 1: Expo Snack

Use this when you want the fastest paste-and-run test.

1. Open https://snack.expo.dev
2. Create a new Snack
3. Open `App.js` from this repo
4. Copy the current `App.js` code
5. Paste it into Snack's `App.js`
6. Run preview
7. Scan/open with Expo Go if needed

Best for:

- quick UI testing
- iPhone layout checks
- confirming buttons and inputs work

Limitations:

- project files are not automatically synced to GitHub
- native build settings are not fully tested

## Option 2: Expo Go

Use this when running from a local or cloud dev server.

1. Install Expo Go on iPhone
2. Run the project with `npm start`
3. Scan the QR code
4. Test the app on device

Best for:

- real phone interaction
- touch testing
- scroll behavior
- keyboard behavior

## Option 3: EAS Preview Build

Use this when the app is ready for installable testing.

```bash
eas build --profile preview --platform android
```

For iOS preview builds, Apple account/device setup may be required.

## Mobile QA Checklist

Confirm:

- [ ] App opens without a red error screen
- [ ] Bottom tabs are visible
- [ ] Bottom tabs are tappable
- [ ] Text inputs open the keyboard correctly
- [ ] Scroll works on every tab
- [ ] Buttons are not too small to tap
- [ ] Cards do not run off screen
- [ ] Money calculations update
- [ ] Pipeline Move Forward works
- [ ] Agents Run / Activate buttons work

## Known Mobile Risks

- Bottom nav can get cramped on smaller phones
- Long card titles may wrap awkwardly
- Keyboard may cover lower inputs
- App currently has no persistence, so reloads reset state

## Testing Priority

For iPhone testing, focus on:

1. Does it open?
2. Can I tap everything?
3. Can I type without frustration?
4. Can I understand the app in under 60 seconds?
5. Does the HQ feel useful enough to return to tomorrow?

## WildBear Standard

The app should feel calm, focused, and powerful on a phone. If it feels cramped, confusing, or too corporate, simplify it.
