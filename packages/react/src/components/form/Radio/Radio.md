# InputRadio

Radio button group for single selection from options.

## Import

```tsx
import { InputRadio } from '@ui'
```

## Usage

### Basic

```tsx
const [size, setSize] = useState('md')

<InputRadio
  label="Size"
  name="size"
  value={size}
  onChange={setSize}
  options={[
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ]}
/>
```

### Horizontal Layout

```tsx
<InputRadio
  label="Gender"
  name="gender"
  direction="horizontal"
  value={gender}
  onChange={setGender}
  options={[
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ]}
/>
```

### With Disabled Option

```tsx
<InputRadio
  label="Plan"
  name="plan"
  value={plan}
  onChange={setPlan}
  options={[
    { value: 'free', label: 'Free' },
    { value: 'pro', label: 'Pro' },
    { value: 'enterprise', label: 'Enterprise', disabled: true },
  ]}
/>
```

### All Disabled

```tsx
<InputRadio
  label="Option"
  name="option"
  disabled
  options={options}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Input name (groups radios) |
| `options` | `RadioOptionTypes[]` | **required** | Available options |
| `value` | `string` | - | Selected value |
| `onChange` | `(value: string) => void` | - | Change handler |
| `label` | `string` | - | Group label |
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction |
| `disabled` | `boolean` | `false` | Disable all options |
| `optionClassName` | `string` | - | Class for each option |
| `labelClassName` | `string` | - | Class for group label |
| `className` | `string` | - | Class for wrapper |

### RadioOptionTypes

```tsx
type RadioOptionTypes = {
  value: string      // Option value
  label: string      // Display text
  disabled?: boolean // Disable this option
}
```

## Accessibility

- Uses `role="radiogroup"` on container
- `aria-labelledby` links to group label
- Native radio inputs for keyboard navigation
- Arrow keys navigate between options

## Common Patterns

### Shipping Method

```tsx
<InputRadio
  label="Shipping Method"
  name="shipping"
  value={shipping}
  onChange={setShipping}
  options={[
    { value: 'standard', label: 'Standard (5-7 days)' },
    { value: 'express', label: 'Express (2-3 days)' },
    { value: 'overnight', label: 'Overnight' },
  ]}
/>
```

### Yes/No Question

```tsx
<InputRadio
  label="Newsletter subscription"
  name="newsletter"
  direction="horizontal"
  value={subscribe}
  onChange={setSubscribe}
  options={[
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ]}
/>
```

## Strapi Integration

```tsx
<InputRadio
  label={field.label}
  name={field.name}
  value={formData[field.name]}
  onChange={(v) => updateField(field.name, v)}
  options={field.options}
/>
```
