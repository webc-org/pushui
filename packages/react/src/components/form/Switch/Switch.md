# Switch

Toggle switch for boolean settings with controlled/uncontrolled modes.

## Import

```tsx
import { Switch } from '@ui'
```

## Usage

### Basic

```tsx
<Switch label="Dark mode" />
```

### Controlled

```tsx
const [enabled, setEnabled] = useState(false)

<Switch
  label="Notifications"
  checked={enabled}
  onChange={setEnabled}
/>
```

### Uncontrolled with Default

```tsx
<Switch
  label="Remember me"
  defaultChecked={true}
/>
```

### Disabled

```tsx
<Switch label="Feature disabled" disabled />
<Switch label="Feature enabled" disabled defaultChecked />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Switch label text |
| `checked` | `boolean` | - | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Initial state (uncontrolled) |
| `onChange` | `(checked: boolean) => void` | - | Change handler |
| `disabled` | `boolean` | `false` | Disable switch |
| `labelClassName` | `string` | - | Class for label text |
| `className` | `string` | - | Class for wrapper |

## Controlled vs Uncontrolled

**Controlled**: Pass `checked` and `onChange` to manage state externally.

```tsx
<Switch checked={value} onChange={setValue} />
```

**Uncontrolled**: Use `defaultChecked` for initial state.

```tsx
<Switch defaultChecked={true} />
```

## Accessibility

- Uses `role="switch"` for proper semantics
- `aria-checked` reflects current state
- Label properly associated via `htmlFor`
- Keyboard accessible (Space toggles)

## Switch vs Checkbox

Use Switch for:
- On/off settings that take immediate effect
- Preferences and toggles

Use Checkbox for:
- Form fields that submit together
- Multi-select options
- Terms/consent agreements

## Common Patterns

### Settings Panel

```tsx
<div className="flex flex-col g-3">
  <Switch
    label="Email notifications"
    checked={settings.emailNotifications}
    onChange={(v) => updateSetting('emailNotifications', v)}
  />
  <Switch
    label="Push notifications"
    checked={settings.pushNotifications}
    onChange={(v) => updateSetting('pushNotifications', v)}
  />
  <Switch
    label="Dark mode"
    checked={settings.darkMode}
    onChange={(v) => updateSetting('darkMode', v)}
  />
</div>
```

### Feature Toggle

```tsx
<Switch
  label="Enable beta features"
  checked={betaEnabled}
  onChange={setBetaEnabled}
/>
```

## Strapi Integration

```tsx
<Switch
  label={field.label}
  checked={formData[field.name]}
  onChange={(v) => updateField(field.name, v)}
/>
```
