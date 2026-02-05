# Badge

Status indicator labels for highlighting state or categories.

## Import

```tsx
import { Badge } from '@ui'
```

## Usage

### Basic

```tsx
<Badge>Default</Badge>
```

### Variants

```tsx
<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Expired</Badge>
<Badge variant="info">Beta</Badge>
<Badge variant="secondary">Draft</Badge>
```

### With Other Components

```tsx
<Title level="h2">
  Notifications <Badge variant="danger">3</Badge>
</Title>

<Card>
  <CardHeader>
    <Title level="h3">Order #1234</Title>
    <Badge variant="success">Shipped</Badge>
  </CardHeader>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ColorVariant` | `'default'` | Color theme |
| `children` | `ReactNode` | - | Badge content |
| `className` | `string` | - | Additional CSS class |

### ColorVariant

```tsx
type ColorVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
```

## Styling

Badges use the color system CSS variables:
- Background: `--color-{variant}-3` (light shade)
- Text: `--color-{variant}-1` (dark shade)

## Strapi Integration

```tsx
<Badge variant={data.status === 'active' ? 'success' : 'default'}>
  {data.status}
</Badge>
```
