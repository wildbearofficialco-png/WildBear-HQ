# WildBear HQ Development Modes

WildBear HQ currently operates in two different development environments.

Understanding the difference is important for stability.

---

# 1. Snack Mode

Purpose:

- rapid mobile testing
- UI iteration
- quick demos
- iPhone testing
- fast visual validation

Characteristics:

- self-contained App.js runtime
- minimal dependency complexity
- avoids fragile multi-file imports
- avoids unstable persistence integrations
- optimized for Expo Snack reliability

Current Runtime Marker:

```text
Snack-safe local session
```

Snack mode prioritizes:

- stability
- rendering reliability
- rapid iteration
- lower crash risk

NOT:

- production architecture purity

---

# 2. Production Architecture Mode

Purpose:

- scalable codebase
- modular screens
- reusable components
- persistence systems
- future integrations
- maintainable engineering structure

Characteristics:

- /components
- /constants
- /storage
- /data
- /screens
- AsyncStorage persistence
- CI workflows
- PR workflows

Production architecture mode prioritizes:

- maintainability
- scalability
- future feature growth
- engineering discipline

NOT:

- instant Snack compatibility

---

# Important Engineering Rule

Do not aggressively refactor the Snack runtime.

Instead:

- stabilize Snack first
- validate behavior
- migrate architecture gradually
- preserve working demos

---

# Current Status

## Snack Runtime

Stable.

## Architecture Foundation

Established.

## Next Recommended Step

Begin extracting:

```text
HQScreen.js
```

while preserving:

- rendering stability
- navigation
- mobile layout
- demo usability
