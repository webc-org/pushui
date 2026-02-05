# Spinner

Animated loading indicator for async operations.

## Import

```tsx
import { Spinner } from '@ui'
```

## Usage

### Basic

```tsx
<Spinner />
```

### Custom Size

```tsx
<Spinner width="1.5rem" borderWidth="0.15rem" />
<Spinner width="2rem" borderWidth="0.2rem" />
<Spinner width="3rem" borderWidth="0.25rem" />
```

### Custom Label

```tsx
<Spinner label="Saving..." />
<Spinner label="Loading content" />
```

### Inline (Inside Buttons)

```tsx
<Button disabled>
  <Spinner width="1.5rem" borderWidth="0.15rem" inline /> Submitting...
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `'2rem'` | Width and height |
| `borderWidth` | `string` | `'0.2rem'` | Border thickness |
| `label` | `string` | `'Loading'` | Accessible label |
| `inline` | `boolean` | `false` | Remove role for inline use |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- Uses `role="status"` to announce loading to screen readers
- `aria-label` provides description
- When `inline={true}`, removes role (parent should have `aria-busy`)

## Common Patterns

### Full Page Loading

```tsx
<div className="flex items-center justify-center" style={{ minHeight: '50vh' }}>
  <Spinner width="3rem" borderWidth="0.25rem" label="Loading page content" />
</div>
```

### Button Loading State

```tsx
<Button disabled={isLoading}>
  {isLoading ? (
    <>
      <Spinner width="1.5rem" borderWidth="0.15rem" inline /> Processing...
    </>
  ) : (
    'Submit'
  )}
</Button>
```

### Section Loading

```tsx
{isLoading ? (
  <div className="flex items-center justify-center pv-5">
    <Spinner />
  </div>
) : (
  <Grid>{items.map(...)}</Grid>
)}
```

### With Text

```tsx
<div className="flex flex-col items-center g-2">
  <Spinner width="3rem" borderWidth="0.25rem" />
  <p>Loading your dashboard...</p>
</div>
```

## Strapi Integration

```tsx
{isLoading && <Spinner label={t('loading')} />}
```
