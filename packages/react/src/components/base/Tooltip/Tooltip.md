# Tooltip

Hover/focus hint with automatic positioning and viewport-aware adjustments.

## Import

```tsx
import { Tooltip } from '@ui'
```

## Usage

### Basic

```tsx
<Tooltip content="This is helpful information">
  <Button>Hover me</Button>
</Tooltip>
```

### Positions

```tsx
<Tooltip content="Top tooltip" position="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Bottom tooltip" position="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Left tooltip" position="left">
  <Button>Left</Button>
</Tooltip>

<Tooltip content="Right tooltip" position="right">
  <Button>Right</Button>
</Tooltip>
```

### Custom Delay

```tsx
<Tooltip content="Quick" delay={0}>
  <span>Instant</span>
</Tooltip>

<Tooltip content="Slow" delay={500}>
  <span>Half second delay</span>
</Tooltip>
```

### Disabled Tooltip

```tsx
<Tooltip content="Won't show" disabled>
  <Button>No tooltip</Button>
</Tooltip>
```

### Rich Content

```tsx
<Tooltip
  content={
    <div>
      <strong>Keyboard shortcut</strong>
      <br />
      Ctrl + S
    </div>
  }
>
  <Button>Save</Button>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `ReactNode` | **required** | Tooltip content |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Preferred position |
| `delay` | `number` | `200` | Show delay in ms |
| `disabled` | `boolean` | `false` | Disable tooltip |
| `children` | `ReactNode` | **required** | Trigger element |
| `className` | `string` | - | Additional CSS class |

## Behavior

- Shows on hover and focus
- Hides on mouse leave and blur
- Auto-adjusts position if overflowing viewport
- Arrow points to trigger element
- Horizontal shift when near viewport edges

## Position Adjustment

Tooltip automatically flips:
- `top` → `bottom` if no room above
- `bottom` → `top` if no room below
- `left` → `right` if no room left
- `right` → `left` if no room right

## Accessibility

- Uses `role="tooltip"`
- `aria-describedby` links trigger to tooltip
- Supports keyboard focus
- Arrow is `aria-hidden`

## Common Patterns

### Icon Button with Tooltip

```tsx
<Tooltip content="Delete item">
  <Button aria-label="Delete">
    <TrashIcon />
  </Button>
</Tooltip>
```

### Form Field Help

```tsx
<label>
  Password
  <Tooltip content="Must be at least 8 characters">
    <HelpCircle size={16} />
  </Tooltip>
</label>
```

### Truncated Text

```tsx
<Tooltip content={fullText}>
  <span className="truncate">{fullText}</span>
</Tooltip>
```

## Strapi Integration

```tsx
<Tooltip content={data.helpText}>
  <Button>{data.label}</Button>
</Tooltip>
```
