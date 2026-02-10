# Push UI

Multi-framework UI component library with shared design system.

[Live Storybook Demo](https://webc-org.github.io/pushui/)

## Packages

| Package | Description | Status |
|---------|-------------|--------|
| `@pushui/styles` | Shared SCSS design system, CSS variables, utility classes | Ready |
| `@pushui/react` | React component library (49 components) | Ready |
| `@pushui/svelte` | Svelte component library | Planned |
| `@pushui/vue` | Vue component library | Planned |
| `@pushui/angular` | Angular component library | Planned |

## Installation

```bash
# React
pnpm add @pushui/react

# Styles only
pnpm add @pushui/styles
```

## Usage

```tsx
import { Button, Header, Select } from '@pushui/react'
import '@pushui/react/styles.css'
```

## Components (49)

| Category | Count | Examples |
|----------|-------|---------|
| base/    | 21    | Avatar, Badge, Pagination, Toast |
| form/    | 13    | Button, Date, Search, Select |
| modules/ | 9     | Carousel, Gdpr, Modal, Tab, Table |
| sections/| 6     | Header, Footer, Auth, Page |

[Full component catalog](docs/components.md)

## Key Features

- **Lightweight**: Minimal dependencies (clsx, embla-carousel-react, lucide-react)
- **Accessible**: WCAG AA, keyboard navigation, ARIA attributes
- **Type-safe**: Full TypeScript with `ComponentPropsWithRef` patterns
- **Customizable**: CSS variables for theming
- **SSR Compatible**: Works with Next.js, Remix, Gatsby

## Documentation

| Doc | Contents |
|-----|----------|
| [docs/architecture.md](docs/architecture.md) | Monorepo structure, file patterns, adding components |
| [docs/components.md](docs/components.md) | Component catalog (base, form, modules, sections) |
| [docs/styling.md](docs/styling.md) | CSS variables, utility classes, theming |
| [docs/i18n.md](docs/i18n.md) | Translation keys by component |
| [docs/testing.md](docs/testing.md) | Test guidelines |
| [docs/development.md](docs/development.md) | Commands, release workflow, SSR |

## Development

```bash
pnpm install
pnpm dev             # Start Storybook
pnpm build           # Build library
pnpm test            # Run tests
pnpm pushui "msg"    # Lint, test, build, storybook, version bump, commit, push
```

## License

MIT
