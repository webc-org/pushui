# Layout

Content container with max-width constraint and horizontal padding for consistent page layouts.

## Import

```tsx
import { Layout } from '@ui'
```

## Usage

### Basic

```tsx
<Layout>
  <Title level="h1">Page Title</Title>
  <p>Content is centered and constrained to max-width.</p>
</Layout>
```

### Within Sections

```tsx
<Section className="pv-5">
  <Layout>
    <Title level="h2">Section Title</Title>
    <Grid col={3} gap="md">
      {/* Cards or content */}
    </Grid>
  </Layout>
</Section>
```

### Full Page Layout

```tsx
<main>
  <Layout>
    <article>
      <Title level="h1">{page.title}</Title>
      <RichText html={page.content} />
    </article>
  </Layout>
</main>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to contain |
| `className` | `string` | - | Additional CSS class |

## Styling

Uses CSS variable for max-width:
- `--container-max-width` - Override in your CSS to change max-width

Default styles:
```scss
.layout {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 100%;
  padding: 0 2rem;
  width: var(--container-max-width);
}
```

## Customizing

Override the container width in your CSS:

```css
:root {
  --container-max-width: 1200px;
}
```

## Common Patterns

### Header with Layout

```tsx
<HeaderRoot>
  <HeaderMain>
    <Layout className="flex-row items-center justify-between">
      <HeaderMainLogo>Logo</HeaderMainLogo>
      <HeaderMainNav>...</HeaderMainNav>
    </Layout>
  </HeaderMain>
</HeaderRoot>
```

### Nested Layouts

```tsx
<Section>
  <Layout>
    <SectionHeader>...</SectionHeader>
  </Layout>
  <Layout>
    <Grid>...</Grid>
  </Layout>
</Section>
```

## Strapi Integration

```tsx
<Layout>
  <RichText html={data.content} />
</Layout>
```
