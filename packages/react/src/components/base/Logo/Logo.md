# Logo

Site logo wrapper with link behavior and fallback support.

## Import

```tsx
import { Logo, LogoFallback } from '@ui'
```

## Usage

### Basic with Image

```tsx
<Logo href="/">
  <img src="/logo.svg" alt="Company Name" />
</Logo>
```

### With Next.js Link

```tsx
import NextLink from 'next/link'
import NextImage from 'next/image'

<Logo asChild>
  <NextLink href="/">
    <NextImage src="/logo.svg" alt="Company" width={120} height={40} />
  </NextLink>
</Logo>
```

### Text Logo

```tsx
<Logo href="/">
  <span>Company Name</span>
</Logo>
```

### Logo Fallback (Loading State)

```tsx
<LogoFallback>
  <Skeleton width={120} height={40} />
</LogoFallback>
```

## Components

### Logo

Wrapper for the site logo, typically used with a link.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | - | Link destination |
| `asChild` | `boolean` | `false` | Render as child element (slot pattern) |
| `children` | `ReactNode` | **required** | Logo content |
| `className` | `string` | - | Additional CSS class |

### LogoFallback

Placeholder for logo during loading states.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Fallback content |
| `className` | `string` | - | Additional CSS class |

## Common Patterns

### In Header

```tsx
<HeaderRoot>
  <HeaderMain>
    <HeaderMainLogo>
      <Logo href="/">
        <img src="/logo.svg" alt="Company" />
      </Logo>
    </HeaderMainLogo>
  </HeaderMain>
</HeaderRoot>
```

### Responsive Logo

```tsx
<Logo href="/">
  <picture>
    <source media="(min-width: 768px)" srcSet="/logo-full.svg" />
    <img src="/logo-icon.svg" alt="Company" />
  </picture>
</Logo>
```

## Strapi Integration

```tsx
<Logo href="/">
  <img
    src={getMediaUrl(data.brand.logo.url)}
    alt={data.brand.name}
  />
</Logo>
```
