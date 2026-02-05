# Divider

Visual separator for content sections with optional text label.

## Import

```tsx
import { Divider } from '@ui'
```

## Usage

### Basic

```tsx
<Divider />
```

### Line Variants

```tsx
<Divider variant="solid" />
<Divider variant="dashed" />
<Divider variant="dotted" />
```

### With Spacing

```tsx
<Divider spacing={1} />  {/* 0.5rem vertical margin */}
<Divider spacing={2} />  {/* 1rem */}
<Divider spacing={3} />  {/* 2rem */}
<Divider spacing={4} />  {/* 3rem */}
<Divider spacing={5} />  {/* 4rem */}
```

### Spacing Only (Hidden Line)

```tsx
<Divider spacing={3} hidden />
{/* Creates vertical space without visible line */}
```

### With Text

```tsx
<Divider>or</Divider>
<Divider>Section Break</Divider>
```

### Combined

```tsx
<Divider variant="dashed" spacing={2}>
  Continue Reading
</Divider>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` | Line style |
| `spacing` | `1 \| 2 \| 3 \| 4 \| 5` | - | Vertical margin using spacing scale |
| `hidden` | `boolean` | `false` | Hide line (spacing-only mode) |
| `children` | `ReactNode` | - | Text displayed centered on line |
| `className` | `string` | - | Additional CSS class |

## Behavior

- Without children: renders as `<hr>`
- With children: renders as `<div>` with two `<hr>` elements and centered text
- `hidden` prop creates invisible spacer

## Common Patterns

### Form Section Separator

```tsx
<fieldset>
  {/* Personal info fields */}
</fieldset>
<Divider spacing={3}>Payment Details</Divider>
<fieldset>
  {/* Payment fields */}
</fieldset>
```

### Alternative Action Separator

```tsx
<Button variant="primary">Sign in with Email</Button>
<Divider spacing={2}>or</Divider>
<Button variant="secondary">Sign in with Google</Button>
```

## Strapi Integration

```tsx
{data.showDivider && (
  <Divider
    spacing={data.spacing}
    variant={data.style}
  >
    {data.label}
  </Divider>
)}
```
