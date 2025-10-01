# auth0-actions-types

[![Typings up to date with docs](https://github.com/makbol/auth0-actions-types/actions/workflows/check-docs.yml/badge.svg?branch=main)](https://github.com/makbol/auth0-actions-types/actions/workflows/check-docs.yml)

TypeScript type definitions for Auth0 Actions runtime and event objects. Forked conceptually from
the unmaintained ecosystem packages; focuses on correctness, currency, and CI enforced quality.

### Why this exists

Other similar packages on npm are stale or abandoned. This package commits to:

- Regular updates tracking Auth0 platform changes
- Stronger type safety and stricter nullability

### Install

```bash
npm install auth0-actions-types
# or
pnpm add auth0-actions-types
# or
yarn add auth0-actions-types
```

### Quick usage

```typescript
import type { PostLoginEvent, PostLoginAPI } from 'auth0-actions-types'

export const onExecutePostLogin = async (
  event: PostLoginEvent,
  api: PostLoginAPI
) => {
  // Your action code here
}
```

### Contributing

See something wrong, missing, or outdated? Please open an issue. Any issue or pull request is welcomed—small typo fixes,
new fields, clarifications, or larger refactors. This package exists to stay maintained, and community feedback is key.

### Credits

Most initial structures and inspiration derived
from: [@felixcolaci/auth0-actions-type-definitions](https://www.npmjs.com/package/@felixcolaci/auth0-actions-type-definitions).
Full credit to the original author. This project started by refactoring, extending, and cleaning those definitions for
ongoing maintenance.

### Disclaimer

Not an official Auth0 package. Best efforts to stay accurate; always validate against live platform behavior.
