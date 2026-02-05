# Button

Interactive button with multiple appearances, loading states, and color variants.

## Import

```tsx
import { Button } from '@ui'
```

## Usage

### Basic

```tsx
<Button>Click me</Button>
```

### Using Title as Content

```tsx
<Button title="Submit" />
{/* Renders: <button title="Submit">Submit</button> */}
```

### Appearances

```tsx
<Button appearance="button" variant="primary">Solid</Button>
<Button appearance="outline" variant="primary">Outline</Button>
<Button appearance="ghost" variant="primary">Ghost</Button>
<Button appearance="link" variant="primary">Link</Button>
```

### Color Variants

```tsx
<Button appearance="button" variant="default">Default</Button>
<Button appearance="button" variant="primary">Primary</Button>
<Button appearance="button" variant="secondary">Secondary</Button>
<Button appearance="button" variant="success">Success</Button>
<Button appearance="button" variant="danger">Danger</Button>
<Button appearance="button" variant="warning">Warning</Button>
<Button appearance="button" variant="info">Info</Button>
```

### Loading State

```tsx
<Button loading>Submitting...</Button>
<Button loading disabled>Processing</Button>
```

### Contrast Mode (Dark Backgrounds)

```tsx
<Banner overlay="dark">
  <Button appearance="button" variant="primary" contrast>
    Get Started
  </Button>
</Banner>
```

### Button Types

```tsx
<Button type="button">Button (default)</Button>
<Button type="submit">Submit Form</Button>
<Button type="reset">Reset Form</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `appearance` | `ActionAppearance` | - | Visual style |
| `variant` | `ColorVariant` | - | Color theme |
| `contrast` | `boolean` | `false` | Light colors for dark backgrounds |
| `loading` | `boolean` | `false` | Show loading spinner |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |
| `disabled` | `boolean` | `false` | Disable button |
| `title` | `string` | - | Title (also used as content if no children) |
| `children` | `ReactNode` | - | Button content |
| `className` | `string` | - | Additional CSS class |

### ActionAppearance

```tsx
type ActionAppearance = 'button' | 'outline' | 'ghost' | 'link'
```

### ColorVariant

```tsx
type ColorVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
```

## Loading Behavior

- Shows inline spinner
- Automatically disables button
- Sets `aria-busy="true"`

## Accessibility

- Uses native `<button>` element
- `aria-busy` during loading state
- Proper disabled state handling

## Common Patterns

### Form Submit Button

```tsx
<form onSubmit={handleSubmit}>
  {/* form fields */}
  <Button type="submit" appearance="button" variant="primary" loading={isSubmitting}>
    {isSubmitting ? 'Saving...' : 'Save'}
  </Button>
</form>
```

### Icon Button

```tsx
<Button title="Delete" appearance="ghost">
  <TrashIcon size={18} />
</Button>
```

### Button Group

```tsx
<div className="flex g-2">
  <Button appearance="outline">Cancel</Button>
  <Button appearance="button" variant="primary">Confirm</Button>
</div>
```

## Strapi Integration

```tsx
<Button
  appearance={data.appearance}
  variant={data.variant}
  onClick={handleAction}
>
  {data.label}
</Button>
```
