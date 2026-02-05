# Grid

Responsive grid layout with flexible columns and gap options.

## Import

```tsx
import { Grid, GridItem } from '@ui'
```

## Usage

### Basic

```tsx
<Grid col={3} gap={3}>
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Grid>
```

### Responsive Columns

```tsx
<Grid col={1} colSM={2} colMD={3} colLG={4} gap={3}>
  {items.map(item => (
    <Card key={item.id}>{item.title}</Card>
  ))}
</Grid>
```

### Responsive Gap

```tsx
<Grid col={3} gap={2} gapMD={3} gapLG={4}>
  {/* content */}
</Grid>
```

### Masonry Layout

```tsx
<Grid col={3} gap={3} masonry>
  {images.map(img => (
    <Image key={img.id} src={img.url} alt={img.alt} />
  ))}
</Grid>
```

### With GridItem

```tsx
<Grid col={4} gap={3}>
  <GridItem col={2}>
    <Card>Spans 2 columns</Card>
  </GridItem>
  <GridItem>
    <Card>Normal</Card>
  </GridItem>
  <GridItem>
    <Card>Normal</Card>
  </GridItem>
</Grid>
```

## Props

### Grid

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `col` | `number` | - | Number of columns |
| `colXS` | `number` | - | Columns at XS breakpoint |
| `colSM` | `number` | - | Columns at SM breakpoint (768px) |
| `colMD` | `number` | - | Columns at MD breakpoint (1024px) |
| `colLG` | `number` | - | Columns at LG breakpoint (1200px) |
| `colXL` | `number` | - | Columns at XL breakpoint (1400px) |
| `gap` | `GapSize` | - | Gap between items |
| `gapXS-gapXL` | `GapSize` | - | Responsive gap |
| `masonry` | `boolean` | `false` | Enable masonry layout |
| `className` | `string` | - | Additional CSS class |

### GridItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `col` | `number` | - | Column span |
| `colXS-colXL` | `number` | - | Responsive column span |
| `row` | `number` | - | Row span |
| `rowXS-rowXL` | `number` | - | Responsive row span |
| `className` | `string` | - | Additional CSS class |

### GapSize

```tsx
type GapSize = 0 | 1 | 2 | 3 | 4 | 5
```

| Gap | Value |
|-----|-------|
| `0` | 0 |
| `1` | 0.5rem |
| `2` | 1rem |
| `3` | 1.5rem |
| `4` | 2rem |
| `5` | 3rem |

## Common Patterns

### Product Grid

```tsx
<Grid col={1} colSM={2} colMD={3} colLG={4} gap={3}>
  {products.map(product => (
    <Card key={product.id}>
      <Image src={product.image} alt={product.name} />
      <CardBody>
        <Title level="h3">{product.name}</Title>
        <p>${product.price}</p>
      </CardBody>
    </Card>
  ))}
</Grid>
```

### Feature Cards

```tsx
<Section className="pv-5">
  <Layout>
    <Grid col={1} colMD={3} gap={4}>
      <Card className="text-center p-4">
        <Icon name="rocket" />
        <Title level="h3">Fast</Title>
        <p>Lightning quick performance</p>
      </Card>
      {/* more cards */}
    </Grid>
  </Layout>
</Section>
```

### Mixed Sizes

```tsx
<Grid col={4} gap={3}>
  <GridItem col={2} row={2}>
    <Card className="h-full">Featured</Card>
  </GridItem>
  <GridItem><Card>Small 1</Card></GridItem>
  <GridItem><Card>Small 2</Card></GridItem>
  <GridItem><Card>Small 3</Card></GridItem>
  <GridItem><Card>Small 4</Card></GridItem>
</Grid>
```

## Strapi Integration

```tsx
<Grid
  col={1}
  colSM={2}
  colMD={data.columns || 3}
  gap={data.gap || 3}
>
  {data.cards.map(card => (
    <Card key={card.id}>
      {/* card content */}
    </Card>
  ))}
</Grid>
```
