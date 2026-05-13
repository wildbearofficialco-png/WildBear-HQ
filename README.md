# WildBear HQ

WildBear HQ is an AI-powered solo founder operating system for WildBear.Co and *The Wind Under the Sea* ecosystem.

The mission is simple:

> Create once. Repurpose everywhere. Turn the best ideas into digital products. Protect the founder's energy.

## Current App

The app is currently built as a Snack-friendly Expo React Native single-file prototype in `App.js`.

### Live Modules

- **HQ / Command Mode**: daily mission, momentum score, bottleneck detection, operator briefing
- **Create**: podcast episode tracker and clip logging
- **Pipeline**: idea-to-offer repurposing pipeline
- **Products**: digital product vault and progress tracker
- **Tasks**: lightweight task board
- **Money**: RPH, conversion, visitors, sales, and offer ladder tracking

## Core Workflow

```text
Podcast idea
  -> Script
  -> Record
  -> Edit
  -> Clip
  -> Post
  -> Offer
  -> Revenue
```

## Founder Operating Philosophy

WildBear HQ is built around Revenue Per Hour and creative leverage.

The founder should focus on:

- voice
- taste
- strategy
- offers
- decisions
- honest creative output

The system should increasingly handle:

- admin
- tracking
- repurposing
- content queues
- product follow-up
- workflow visibility
- AI employee coordination

## Roadmap

### V5: Persistence

- Add AsyncStorage
- Auto-save app state
- Restore missions, tasks, products, pipeline, and revenue after reload
- Add reset/demo data button

### V6: Architecture

Move from one large `App.js` into:

```text
/components
/screens
/data
/storage
/hooks
/utils
```

### V7: AI Agent Center

- Script Agent
- Clip Agent
- Product Agent
- Publishing Agent
- Revenue Agent
- Each agent gets queue, objective, status, throughput, and last completed task

### V8: Content Calendar

- Weekly creator schedule
- Recording days
- Editing days
- Publishing days
- Product days
- Recovery days

### V9: Media Vault

- Scripts
- Audio notes
- Clips
- Thumbnails
- PDFs
- Offer assets

### V10: Integrations

- OpenAI API
- Make.com / Zapier webhooks
- Google Drive
- Gumroad or Stripe
- TikTok / YouTube publishing support where possible

## Design Direction

- Dark futuristic high-country aesthetic
- Turquoise and chrome-orange accents
- Clean iOS-style rounded cards
- Minimal but powerful founder cockpit

## Status

WildBear HQ is in rapid prototype mode. The current priority is to make it useful on mobile first, then harden the architecture.
