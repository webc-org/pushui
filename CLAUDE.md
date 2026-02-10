# CLAUDE.md

React component library with TypeScript and SCSS Modules. Components use English defaults with props for translated strings. [Demo](https://webc-org.github.io/pushui/)

## Quick Reference

| Category      | Count | Examples |
|---------------|-------|----------|
| base/         | 21    | Avatar, Badge, Pagination, Toast |
| form/         | 13    | Button, Date, Search, Select |
| modules/      | 9     | Carousel, Gdpr, Modal, Tab, Table |
| sections/     | 6     | Header, Footer, Auth, Page |

## Commands

```bash
pnpm dev           # Storybook
pnpm build         # Build library
pnpm test          # Tests (watch)
pnpm lint          # Biome + Stylelint
pnpm pushui "msg"  # Lint, test, build, storybook, version bump, commit, push
```

When user says **"pushui"**, generate a concise commit message from staged changes and run `pnpm pushui "<message>"`.

## Documentation

| Doc | Contents |
|-----|----------|
| [docs/architecture.md](docs/architecture.md) | Project structure, file patterns, TypeScript patterns, adding components |
| [docs/components.md](docs/components.md) | All components with usage examples |
| [docs/styling.md](docs/styling.md) | CSS variables, theming, color variants |
| [docs/i18n.md](docs/i18n.md) | Translatable props by component |
| [docs/testing.md](docs/testing.md) | Testing guidelines |
| [docs/development.md](docs/development.md) | Commands, release workflow, SSR |

## Communication Style

- Short status updates, not paragraphs
- One line per action during batch work
- Tables over lists, lists over prose
