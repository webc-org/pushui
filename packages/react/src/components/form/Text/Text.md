# InputText

Basic text input with label support for text, email, URL, and phone inputs.

## Import

```tsx
import { InputText } from '@ui'
```

## Usage

### Basic

```tsx
<InputText label="Name" placeholder="Enter your name" />
```

### Input Types

```tsx
<InputText label="Name" type="text" />
<InputText label="Email" type="email" />
<InputText label="Website" type="url" />
<InputText label="Phone" type="tel" />
```

### Without Label

```tsx
<InputText aria-label="Search" placeholder="Search..." />
```

### With Validation

```tsx
<InputText
  label="Email"
  type="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Field label |
| `type` | `'text' \| 'email' \| 'url' \| 'tel'` | `'text'` | Input type |
| `placeholder` | `string` | - | Placeholder text |
| `disabled` | `boolean` | `false` | Disable input |
| `required` | `boolean` | `false` | Mark as required |
| `inputClassName` | `string` | - | Class for input element |
| `labelClassName` | `string` | - | Class for label element |
| `className` | `string` | - | Class for wrapper |
| `aria-label` | `string` | - | Accessible label (when no visible label) |

## Accessibility

- Label is automatically associated via `htmlFor`
- Uses `aria-label` when no visible label provided
- Supports native validation attributes

## Common Patterns

### Form Field

```tsx
<form onSubmit={handleSubmit}>
  <InputText
    label="Username"
    name="username"
    required
    autoComplete="username"
  />
  <Button type="submit">Submit</Button>
</form>
```

### With react-hook-form

```tsx
<InputText
  label="Email"
  type="email"
  {...register('email', { required: true })}
/>
```

## Strapi Integration

```tsx
<InputText
  label={field.label}
  type={field.type}
  placeholder={field.placeholder}
  required={field.required}
/>
```
