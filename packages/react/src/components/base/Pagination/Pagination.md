# Pagination

Page navigation with smart ellipsis, boundary controls, and full i18n support.

## Import

```tsx
import { Pagination } from '@ui'
```

## Usage

### Basic

```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={setPage}
/>
```

### With URL-based Navigation

```tsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  getPageHref={(page) => `/blog?page=${page}`}
/>
```

### With Next.js Link

```tsx
import NextLink from 'next/link'

<Pagination
  currentPage={page}
  totalPages={total}
  renderLink={(page, children) => (
    <NextLink href={`/posts?page=${page}`}>{children}</NextLink>
  )}
/>
```

### Show First/Last Buttons

```tsx
<Pagination
  currentPage={5}
  totalPages={20}
  showFirstLast={true}
  showPrevNext={true}
/>
```

### Custom Sibling/Boundary Count

```tsx
<Pagination
  currentPage={10}
  totalPages={50}
  siblingCount={2}   {/* Show 2 pages on each side of current */}
  boundaryCount={2}  {/* Show 2 pages at start and end */}
/>
{/* Result: 1 2 ... 8 9 10 11 12 ... 49 50 */}
```

### Translated Labels

```tsx
<Pagination
  currentPage={page}
  totalPages={total}
  onPageChange={setPage}
  aria-label={t('pagination.label')}
  firstPageLabel={t('pagination.first')}
  previousPageLabel={t('pagination.previous')}
  nextPageLabel={t('pagination.next')}
  lastPageLabel={t('pagination.last')}
  pageLabel={(p) => t('pagination.page', { page: p })}
/>
```

### Disabled State

```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  disabled={isLoading}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | **required** | Active page number |
| `totalPages` | `number` | **required** | Total number of pages |
| `onPageChange` | `(page: number) => void` | - | Page change callback |
| `getPageHref` | `(page: number) => string` | `?page=${page}` | URL generator |
| `renderLink` | `(page, children) => ReactNode` | - | Custom link renderer |
| `siblingCount` | `number` | `1` | Pages shown beside current |
| `boundaryCount` | `number` | `1` | Pages shown at start/end |
| `showFirstLast` | `boolean` | `false` | Show first/last buttons |
| `showPrevNext` | `boolean` | `true` | Show prev/next buttons |
| `disabled` | `boolean` | `false` | Disable all controls |
| `aria-label` | `string` | `'Pagination'` | Nav aria-label |
| `firstPageLabel` | `string` | `'First page'` | First button label |
| `previousPageLabel` | `string` | `'Previous page'` | Previous button label |
| `nextPageLabel` | `string` | `'Next page'` | Next button label |
| `lastPageLabel` | `string` | `'Last page'` | Last button label |
| `pageLabel` | `(page) => string` | `'Page ${page}'` | Page number label |
| `className` | `string` | - | Additional CSS class |

## Behavior

- Returns `null` if `totalPages <= 1`
- Smart ellipsis based on sibling/boundary counts
- Current page is not clickable
- Prev disabled on first page, next disabled on last page

## Accessibility

- Uses `<nav>` with `aria-label`
- `aria-current="page"` on current page
- `aria-disabled` for disabled states
- All buttons have descriptive labels

## Strapi Integration

```tsx
<Pagination
  currentPage={meta.pagination.page}
  totalPages={meta.pagination.pageCount}
  onPageChange={(page) => router.push(`?page=${page}`)}
/>
```
