# Section

Page section wrapper with optional header for organizing content.

## Import

```tsx
import { Section, SectionHeader, SectionTitle } from '@ui'
```

## Usage

### Basic

```tsx
<Section className="pv-5">
  <Layout>
    <p>Section content goes here.</p>
  </Layout>
</Section>
```

### With Header

```tsx
<Section className="pv-5">
  <SectionHeader>
    <SectionTitle level="h2">Why Choose Us</SectionTitle>
  </SectionHeader>
  <Layout>
    <Grid col={3} gap="md">
      <Card>...</Card>
      <Card>...</Card>
      <Card>...</Card>
    </Grid>
  </Layout>
</Section>
```

### Centered Header

```tsx
<Section className="pv-5">
  <SectionHeader className="text-center">
    <SectionTitle level="h2">Our Services</SectionTitle>
    <p>Discover what we can do for you</p>
  </SectionHeader>
  <Layout>
    {/* content */}
  </Layout>
</Section>
```

### With Background

```tsx
<Section className="pv-5 bg-primary-3">
  <Layout>
    <SectionTitle level="h2">Featured</SectionTitle>
    {/* content */}
  </Layout>
</Section>
```

## Components

### Section

Main container element.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Section content |
| `className` | `string` | - | Additional CSS class |

### SectionHeader

Header container for title and description.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Header content |
| `className` | `string` | - | Additional CSS class |

### SectionTitle

Section heading with consistent styling.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | **required** | Heading level |
| `children` | `ReactNode` | - | Title text |
| `className` | `string` | - | Additional CSS class |

## Common Patterns

### Full-Width with Layout

```tsx
<Section className="pv-5">
  <Layout>
    <SectionHeader>
      <SectionTitle level="h2">Title</SectionTitle>
    </SectionHeader>
  </Layout>
  <Layout>
    <Grid col={4} gap="lg">
      {items.map(item => (
        <Card key={item.id}>...</Card>
      ))}
    </Grid>
  </Layout>
</Section>
```

### Alternating Backgrounds

```tsx
<Section className="pv-5">
  {/* Light section */}
</Section>
<Section className="pv-5 bg-default-3">
  {/* Gray section */}
</Section>
<Section className="pv-5">
  {/* Light section */}
</Section>
```

## Strapi Integration

```tsx
<Section className={clsx('pv-5', data.class)}>
  {data.title && (
    <SectionHeader className="text-center">
      <SectionTitle level="h2">{data.title}</SectionTitle>
      {data.subtitle && <p>{data.subtitle}</p>}
    </SectionHeader>
  )}
  <Layout>
    {/* Dynamic content */}
  </Layout>
</Section>
```
