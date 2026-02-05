# InputNumber

Numeric input with increment/decrement buttons and min/max validation.

## Import

```tsx
import { InputNumber } from '@ui'
```

## Usage

### Basic

```tsx
const [count, setCount] = useState(0)

<InputNumber
  label="Quantity"
  value={count}
  onChange={setCount}
/>
```

### With Min/Max

```tsx
<InputNumber
  label="Quantity"
  value={quantity}
  onChange={setQuantity}
  min={1}
  max={100}
/>
```

### Custom Step

```tsx
<InputNumber
  label="Price"
  value={price}
  onChange={setPrice}
  step={0.01}
  min={0}
/>
```

### Disabled

```tsx
<InputNumber
  label="Quantity"
  value={10}
  disabled
/>
```

### Translated Labels

```tsx
<InputNumber
  label={t('form.quantity')}
  value={value}
  onChange={setValue}
  incrementLabel={t('form.increment')}
  decrementLabel={t('form.decrement')}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | - | Current value |
| `onChange` | `(value: number) => void` | - | Change handler |
| `label` | `string` | - | Field label |
| `min` | `number` | - | Minimum value |
| `max` | `number` | - | Maximum value |
| `step` | `number` | `1` | Increment/decrement step |
| `disabled` | `boolean` | `false` | Disable input |
| `incrementLabel` | `string` | `'Increment'` | Increment button label |
| `decrementLabel` | `string` | `'Decrement'` | Decrement button label |
| `inputClassName` | `string` | - | Class for input element |
| `labelClassName` | `string` | - | Class for label element |
| `className` | `string` | - | Class for wrapper |

## Behavior

- Increment/decrement buttons respect min/max limits
- Buttons auto-disable when limits reached
- Direct input also validates against min/max
- Supports keyboard input and button clicks

## Accessibility

- Label properly associated via `htmlFor`
- Buttons have descriptive `aria-label`
- Uses native `type="number"` input

## Common Patterns

### Product Quantity

```tsx
<InputNumber
  label="Quantity"
  value={cartItem.quantity}
  onChange={(qty) => updateCart(cartItem.id, qty)}
  min={1}
  max={cartItem.stock}
/>
```

### Settings with Steps

```tsx
<InputNumber
  label="Font Size (px)"
  value={fontSize}
  onChange={setFontSize}
  min={8}
  max={72}
  step={2}
/>
```

## Strapi Integration

```tsx
<InputNumber
  label={field.label}
  value={formData[field.name]}
  onChange={(v) => updateField(field.name, v)}
  min={field.min}
  max={field.max}
/>
```
