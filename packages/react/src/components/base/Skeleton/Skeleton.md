# Skeleton

Placeholder loading state for content that hasn't loaded yet.

## Import

```tsx
import { Skeleton } from '@ui'
```

## Usage

### Text Placeholder

```tsx
<Skeleton variant="text" />
<Skeleton variant="text" width="80%" />
<Skeleton variant="text" width={200} />
```

### Rectangle Placeholder

```tsx
<Skeleton variant="rect" width={300} height={200} />
<Skeleton variant="rect" width="100%" height={400} className="r-4" />
```

### Circle Placeholder

```tsx
<Skeleton variant="circle" width={48} height={48} />
<Skeleton variant="circle" width={64} height={64} />
```

### Without Animation

```tsx
<Skeleton variant="rect" animation={false} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'text' \| 'circle' \| 'rect'` | `'text'` | Shape type |
| `width` | `string \| number` | - | Width (px if number) |
| `height` | `string \| number` | - | Height (px if number) |
| `animation` | `boolean` | `true` | Enable shimmer animation |
| `className` | `string` | - | Additional CSS class |

## Variants

| Variant | Use Case |
|---------|----------|
| `text` | Single line of text |
| `rect` | Images, cards, containers |
| `circle` | Avatars, icons |

## Common Patterns

### Card Skeleton

```tsx
<Card>
  <Skeleton variant="rect" height={200} />
  <CardBody>
    <Skeleton variant="text" width="60%" />
    <Skeleton variant="text" />
    <Skeleton variant="text" width="80%" />
  </CardBody>
</Card>
```

### Avatar with Text

```tsx
<div className="flex items-center g-2">
  <Skeleton variant="circle" width={48} height={48} />
  <div>
    <Skeleton variant="text" width={120} />
    <Skeleton variant="text" width={80} />
  </div>
</div>
```

### Article Skeleton

```tsx
<article>
  <Skeleton variant="text" width="70%" height={32} />
  <Skeleton variant="text" width="40%" />
  <Skeleton variant="rect" height={300} className="r-4" />
  <Skeleton variant="text" />
  <Skeleton variant="text" />
  <Skeleton variant="text" width="90%" />
</article>
```

### Table Row Skeleton

```tsx
<TableRow>
  <TableCell><Skeleton variant="text" /></TableCell>
  <TableCell><Skeleton variant="text" /></TableCell>
  <TableCell><Skeleton variant="text" width="60%" /></TableCell>
</TableRow>
```

## Strapi Integration

```tsx
{isLoading ? (
  <Skeleton variant="rect" height={400} />
) : (
  <Image src={data.image.url} alt={data.title} />
)}
```
