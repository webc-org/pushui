# Link

Navigation anchor with multiple appearance styles and button-like variants.

## Import

```tsx
import { Link } from '@ui'
```

## Usage

### Basic

```tsx
<Link href="/about">About Us</Link>
```

### Using Title as Content

```tsx
<Link href="/contact" title="Contact Us" />
{/* Renders: <a href="/contact" title="Contact Us">Contact Us</a> */}
```

### Button Appearance

```tsx
<Link href="/signup" appearance="button" variant="primary">
  Sign Up
</Link>
<Link href="/learn-more" appearance="outline" variant="secondary">
  Learn More
</Link>
<Link href="/docs" appearance="ghost">
  Documentation
</Link>
```

### Color Variants

```tsx
<Link href="/" variant="primary">Primary</Link>
<Link href="/" variant="success">Success</Link>
<Link href="/" variant="danger">Danger</Link>
```

### Contrast Mode (Dark Backgrounds)

```tsx
<Banner overlay="dark">
  <Link href="/" appearance="button" variant="primary" contrast>
    Get Started
  </Link>
</Banner>
```

### Disabled State

```tsx
<Link href="/locked" disabled>
  Premium Content
</Link>
```

### With Next.js Link (asChild)

```tsx
import NextLink from 'next/link'

<Link asChild appearance="button" variant="primary">
  <NextLink href="/dashboard">Dashboard</NextLink>
</Link>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | - | Link URL |
| `title` | `string` | - | Link title (also used as content if no children) |
| `appearance` | `ActionAppearance` | - | Visual style |
| `variant` | `ColorVariant` | - | Color theme |
| `contrast` | `boolean` | `false` | Light colors for dark backgrounds |
| `disabled` | `boolean` | `false` | Disable link interaction |
| `asChild` | `boolean` | `false` | Render as child element (slot pattern) |
| `children` | `ReactNode` | - | Link content |
| `className` | `string` | - | Additional CSS class |

### ActionAppearance

```tsx
type ActionAppearance = 'button' | 'outline' | 'ghost' | 'link'
```

### ColorVariant

```tsx
type ColorVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
```

## Disabled Behavior

- `href` removed to prevent navigation
- `aria-disabled="true"` for accessibility
- `tabIndex={-1}` removes from tab order
- Click events prevented

## Accessibility

- Uses native `<a>` element
- Proper disabled state handling
- Title attribute for additional context

## Strapi Integration

```tsx
<Link
  href={data.url}
  appearance={data.appearance}
  variant={data.variant}
>
  {data.label}
</Link>
```
