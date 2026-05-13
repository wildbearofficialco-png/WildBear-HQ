# WildBear HQ QA Checklist

Use this checklist before sharing WildBear HQ with anyone.

## Smoke Test

- [ ] App opens without a red error screen
- [ ] Bottom navigation is visible
- [ ] HQ tab opens
- [ ] Create tab opens
- [ ] Pipeline tab opens
- [ ] Products tab opens
- [ ] Agents tab opens
- [ ] Money tab opens

## HQ Tab

- [ ] Momentum score displays
- [ ] Bottleneck metric displays
- [ ] Operator briefing displays
- [ ] Mission text can be edited
- [ ] Post a clip button works
- [ ] Open Agents button switches tabs
- [ ] Energy input accepts numbers
- [ ] Focus input accepts text
- [ ] Today’s win input accepts text

## Create Tab

- [ ] Add Episode field accepts text
- [ ] Add Episode button creates a new episode
- [ ] Log Clip button increases clip count
- [ ] Episode status changes to Repurpose after logging a clip

## Pipeline Tab

- [ ] Pipeline Health card displays stage counts
- [ ] Add Asset field accepts text
- [ ] Add to Pipeline creates a new asset
- [ ] Move Forward advances an asset through stages
- [ ] Offer-stage assets do not break when tapped

## Products Tab

- [ ] Add Product field accepts text
- [ ] Add Product creates a new product
- [ ] Advance +8% increases product progress
- [ ] Product progress never exceeds 100%

## Agents Tab

- [ ] Active agent count displays
- [ ] Throughput total displays
- [ ] Queue total displays
- [ ] Run Agent reduces queue when possible
- [ ] Run Agent increases completed count
- [ ] Activate/Pause toggles status

## Money Tab

- [ ] Revenue input accepts numbers
- [ ] Hours input accepts numbers
- [ ] Visitors input accepts numbers
- [ ] Sales input accepts numbers
- [ ] RPH updates correctly
- [ ] Conversion rate updates correctly
- [ ] Offer Ladder card displays

## Known Current Limitations

- Data does not persist after reload yet
- App is still a single-file prototype
- No delete/edit buttons for created records yet
- No real AI/API connections yet
- No account system yet

## Pass Criteria For First Shareable Demo

The app is ready for a first informal test when:

- all tabs open
- all buttons work
- no red error screen appears
- core interactions work on iPhone
- the user understands the app within 60 seconds
