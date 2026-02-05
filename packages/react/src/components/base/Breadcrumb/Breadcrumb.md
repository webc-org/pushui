# Breadcrumb

Navigation trail showing the current page location within a hierarchy.

## Import

```tsx
import { Breadcrumb } from '@ui'
```

## Usage

### Basic

```tsx
<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Shoes' },
  ]}
/>
```

### With Next.js Link

```tsx
import NextLink from 'next/link'

<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Article Title' },
  ]}
  renderLink={(item, children) => (
    <NextLink href={item.href!}>{children}</NextLink>
  )}
/>
```

### Custom Separator

```tsx
<Breadcrumb
  items={items}
  separator="/"
/>

<Breadcrumb
  items={items}
  separator={<span>›</span>}
/>
```

### Custom Aria Label

```tsx
<Breadcrumb
  items={items}
  aria-label="Page navigation"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItemData[]` | **required** | Array of breadcrumb items |
| `separator` | `ReactNode` | `<ChevronRight />` | Separator between items |
| `renderLink` | `(item, children) => ReactNode` | - | Custom link renderer |
| `aria-label` | `string` | `'Breadcrumb'` | Accessible label for nav |
| `className` | `string` | - | Additional CSS class |

### BreadcrumbItemData

```tsx
type BreadcrumbItemData = {
  label: string   // Display text
  href?: string   // Link URL (optional for last item)
}
```

## Behavior

- Last item displays as text with `aria-current="page"`
- Other items render as links with separators
- Default separator is ChevronRight icon

## Accessibility

- Uses `<nav>` element with `aria-label`
- Ordered list (`<ol>`) for semantic structure
- `aria-current="page"` on current page
- Separators have `aria-hidden="true"`

## Strapi Integration

```tsx
<Breadcrumb
  items={[
    { label: t('home'), href: '/' },
    ...data.breadcrumbs.map(crumb => ({
      label: crumb.title,
      href: crumb.slug,
    })),
    { label: data.title },
  ]}
/>
```
