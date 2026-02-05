# Title

Semantic heading component with consistent typography.

## Import

```tsx
import { Title } from '@ui'
```

## Usage

### Basic

```tsx
<Title level="h1">Page Title</Title>
<Title level="h2">Section Title</Title>
<Title level="h3">Subsection</Title>
```

### All Levels

```tsx
<Title level="h1">Heading 1</Title>
<Title level="h2">Heading 2</Title>
<Title level="h3">Heading 3</Title>
<Title level="h4">Heading 4</Title>
<Title level="h5">Heading 5</Title>
<Title level="h6">Heading 6</Title>
```

### With Additional Styles

```tsx
<Title level="h1" className="text-center">
  Centered Title
</Title>

<Title level="h2" className="mb-3">
  Title with Margin
</Title>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `'h1'` | Heading level |
| `children` | `ReactNode` | - | Title text |
| `className` | `string` | - | Additional CSS class |

## Semantic Usage

Choose heading levels based on document structure, not visual appearance:

```tsx
{/* Page structure */}
<Title level="h1">Page Title</Title>

<section>
  <Title level="h2">Main Section</Title>

  <article>
    <Title level="h3">Article Title</Title>
    <Title level="h4">Article Subsection</Title>
  </article>
</section>
```

## Common Patterns

### With Badge

```tsx
<Title level="h2">
  Notifications <Badge variant="danger">3</Badge>
</Title>
```

### In Cards

```tsx
<Card>
  <CardHeader>
    <Title level="h3">Card Title</Title>
  </CardHeader>
  <CardBody>
    {/* content */}
  </CardBody>
</Card>
```

### Section Headers

```tsx
<SectionHeader>
  <SectionTitle level="h2">Our Services</SectionTitle>
</SectionHeader>
```

## Accessibility

- Uses semantic HTML heading elements (h1-h6)
- Maintains proper heading hierarchy for screen readers
- Each page should have exactly one h1

## Strapi Integration

```tsx
<Title level={data.headingLevel || 'h2'}>
  {data.title}
</Title>
```
