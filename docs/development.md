# Development

## Commands

### Root (monorepo)

```bash
pnpm dev           # Run Storybook (apps/storybook-react)
pnpm build         # Build all packages (via turborepo)
pnpm test          # Run all tests
pnpm lint          # Biome + Stylelint
pnpm clean         # Clean all dist folders
pnpm pushui "msg"  # Lint, test, build, storybook, version bump, commit, push
```

### Package-specific

```bash
pnpm --filter @pushui/react build     # Build React package
pnpm --filter @pushui/react test      # Test React package
pnpm --filter @pushui/react dev       # Watch mode
pnpm --filter @pushui/styles build    # Build styles package
```

## Dependencies

| Package                | Purpose                       |
|------------------------|-------------------------------|
| `clsx`                 | Conditional className utility |
| `embla-carousel`       | Carousel core                 |
| `embla-carousel-react` | Carousel React bindings       |
| `lucide-react`         | Icon set                      |

## Package Exports

```typescript
// Components
import { Button, Header, Select } from '@pushui/react'

// CSS (import once at app root)
import '@pushui/react/styles.css'

// Or use standalone styles package
import '@pushui/styles'
```

## SSR Compatibility

Compatible with Next.js, Remix, Gatsby. Uses `useId()` for stable hydration.

### Next.js

Rename imports to avoid conflicts:

```tsx
import { Image as BaseImage, Link as BaseLink } from '@pushui/react'
import Image from 'next/image'
import Link from 'next/link'
```

## Turborepo

The monorepo uses Turborepo for build orchestration:

- `@pushui/react` depends on `@pushui/styles` for SCSS mixins
- Build order is automatic based on dependencies
- Builds are cached for speed

```bash
# Force rebuild without cache
pnpm build --force
```
