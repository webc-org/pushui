# InputPassword

Password input with show/hide toggle button.

## Import

```tsx
import { InputPassword } from '@ui'
```

## Usage

### Basic

```tsx
<InputPassword label="Password" />
```

### Without Label

```tsx
<InputPassword aria-label="Password" placeholder="Enter password" />
```

### Custom Toggle Labels

```tsx
<InputPassword
  label="Password"
  showLabel="Show password"
  hideLabel="Hide password"
/>
```

### Disabled

```tsx
<InputPassword label="Password" disabled />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Field label |
| `showLabel` | `string` | `'Show'` | Show password button label |
| `hideLabel` | `string` | `'Hide'` | Hide password button label |
| `disabled` | `boolean` | `false` | Disable input |
| `placeholder` | `string` | - | Placeholder text |
| `inputClassName` | `string` | - | Class for input element |
| `labelClassName` | `string` | - | Class for label element |
| `className` | `string` | - | Class for wrapper |
| `aria-label` | `string` | - | Accessible label (when no visible label) |

## Behavior

- Toggle button switches between `password` and `text` input type
- Icons change between Eye and EyeOff
- Button has `aria-pressed` for toggle state

## Accessibility

- Label properly associated via `htmlFor`
- Toggle button has descriptive `aria-label`
- `aria-pressed` indicates current state
- Icons are `aria-hidden`

## Common Patterns

### Login Form

```tsx
<form onSubmit={handleSubmit}>
  <InputText label="Email" type="email" name="email" />
  <InputPassword
    label="Password"
    name="password"
    autoComplete="current-password"
  />
  <Button type="submit">Sign In</Button>
</form>
```

### Registration with Confirmation

```tsx
<InputPassword
  label="Password"
  name="password"
  autoComplete="new-password"
/>
<InputPassword
  label="Confirm Password"
  name="confirmPassword"
  autoComplete="new-password"
/>
```

## Strapi Integration

```tsx
<InputPassword
  label={t('auth.password')}
  showLabel={t('auth.showPassword')}
  hideLabel={t('auth.hidePassword')}
/>
```
