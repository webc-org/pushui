# Testing

Tests focus on **meaningful behavior**, not implementation details.

## What is Tested

- Accessibility: aria-label, aria-current, roles
- Props that affect rendered output (title, subtitle, status)
- Conditional rendering (null returns, different outputs)
- Polymorphic patterns (asChild behavior)
- Integration tests for compound components

## Running Tests

```bash
# All packages
pnpm test

# React package only
pnpm --filter @yop/react test

# Watch mode
pnpm --filter @yop/react test:watch
```

## Test File Pattern

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.test.tsx   # Tests here
└── ...
```

## Test Setup

Tests use Vitest with jsdom environment. Setup file at `packages/react/vitest.setup.ts`:

```typescript
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
  cleanup()
})
```
