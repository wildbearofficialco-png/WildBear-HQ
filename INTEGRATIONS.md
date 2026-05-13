# WildBear HQ Integrations Plan

WildBear HQ should eventually connect the founder cockpit to real automation tools. This file defines the integration direction without adding fragile live dependencies too early.

## Integration Philosophy

Integrations should reduce manual work, not add complexity.

Every integration must support at least one of these outcomes:

- Turn podcast ideas into reusable content
- Move assets through the pipeline faster
- Build or sell digital products
- Improve revenue per hour
- Reduce admin burden
- Protect founder focus

## Priority Integration Stack

### 1. OpenAI

Use cases:

- Generate episode hooks
- Draft TikTok captions
- Create newsletter versions
- Summarize podcast transcripts
- Generate product outlines
- Recommend next best actions

Future app action examples:

```text
Generate 10 clip hooks
Draft product outline
Summarize this episode
Create sales page bullets
Find bottleneck recommendation
```

### 2. Make.com / Zapier

Use cases:

- Send new pipeline assets to automations
- Trigger content repurposing flows
- Create Google Docs from episodes
- Add leads to CRM/spreadsheet
- Notify founder when workflows finish

Suggested webhook events:

```text
asset.created
asset.stage_changed
product.ready
agent.ran
mission.updated
revenue.updated
```

### 3. Google Drive

Use cases:

- Store podcast scripts
- Store generated captions
- Store workbook drafts
- Store product files
- Link assets to Drive folders

### 4. Gumroad / Stripe

Use cases:

- Track product sales
- Sync revenue
- Calculate conversion
- Identify best-performing offers

### 5. YouTube / TikTok Workflow Support

Direct publishing may be limited depending on API access.

Initial support should focus on:

- copy-ready captions
- checklist status
- asset readiness
- publishing reminders
- content calendar

## Suggested Event Object

```js
const event = {
  type: 'asset.stage_changed',
  createdAt: new Date().toISOString(),
  source: 'wildbear-hq',
  payload: {
    id: 'asset-id',
    title: 'Episode clip idea',
    fromStage: 'Script',
    toStage: 'Record',
    owner: 'Founder'
  }
};
```

## Suggested API Action Names

```text
createEpisode
createPipelineAsset
movePipelineAsset
generateClipHooks
generateProductOutline
runAgent
syncRevenue
exportDailyBrief
```

## Do Not Build Yet

Avoid adding live API credentials until the app has:

- persistence
- stable screens
- basic settings area
- safe error handling
- user-controlled API key storage

## Integration North Star

The founder should be able to open WildBear HQ, choose one high-leverage move, and let automation handle the repeatable work behind the scenes.
