# Checkbox

Checkbox input with label support and controlled/uncontrolled modes.

## Import

```tsx
import { Checkbox } from '@ui'
```

## Usage

### Basic

```tsx
<Checkbox label="Accept terms and conditions" />
```

### Controlled

```tsx
const [accepted, setAccepted] = useState(false)

<Checkbox
  label="I agree"
  checked={accepted}
  onChange={setAccepted}
/>
```

### Uncontrolled with Default

```tsx
<Checkbox
  label="Subscribe to newsletter"
  defaultChecked={true}
/>
```

### Without Label

```tsx
<Checkbox aria-label="Select row" />
```

### Disabled

```tsx
<Checkbox label="Disabled option" disabled />
<Checkbox label="Disabled checked" disabled defaultChecked />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Checkbox label text |
| `checked` | `boolean` | - | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Initial checked state (uncontrolled) |
| `onChange` | `(checked: boolean) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Disable checkbox |
| `labelClassName` | `string` | - | Class for label text |
| `className` | `string` | - | Class for wrapper |

## Controlled vs Uncontrolled

**Controlled**: Pass `checked` and `onChange` to manage state externally.

```tsx
<Checkbox checked={value} onChange={setValue} />
```

**Uncontrolled**: Use `defaultChecked` for initial state, component manages state internally.

```tsx
<Checkbox defaultChecked={true} />
```

## Accessibility

- Uses native `<input type="checkbox">`
- Label is properly associated via `htmlFor`
- Supports keyboard navigation (Space and Enter)
- Visual check icon has `aria-hidden`

## Common Patterns

### Terms Agreement

```tsx
const [agreed, setAgreed] = useState(false)

<Checkbox
  label="I agree to the terms of service"
  checked={agreed}
  onChange={setAgreed}
/>
<Button disabled={!agreed}>Continue</Button>
```

### Checkbox List

```tsx
const [selected, setSelected] = useState<string[]>([])

const toggle = (id: string) => {
  setSelected(prev =>
    prev.includes(id)
      ? prev.filter(x => x !== id)
      : [...prev, id]
  )
}

{options.map(opt => (
  <Checkbox
    key={opt.id}
    label={opt.label}
    checked={selected.includes(opt.id)}
    onChange={() => toggle(opt.id)}
  />
))}
```

### Select All

```tsx
<Checkbox
  label="Select all"
  checked={allSelected}
  onChange={toggleAll}
/>
```

## Strapi Integration

```tsx
<Checkbox
  label={data.label}
  checked={formState[data.name]}
  onChange={(v) => setFormState({ ...formState, [data.name]: v })}
/>
```
