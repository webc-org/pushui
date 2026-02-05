# InputTextarea

Multi-line text input with optional character counter.

## Import

```tsx
import { InputTextarea } from '@ui'
```

## Usage

### Basic

```tsx
const [bio, setBio] = useState('')

<InputTextarea
  label="Bio"
  value={bio}
  onChange={setBio}
/>
```

### With Character Limit and Counter

```tsx
<InputTextarea
  label="Bio"
  value={bio}
  onChange={setBio}
  maxLength={500}
  showCount
/>
```

### Placeholder and Rows

```tsx
<InputTextarea
  label="Message"
  value={message}
  onChange={setMessage}
  placeholder="Write your message..."
  rows={6}
/>
```

### Disabled

```tsx
<InputTextarea
  label="Notes"
  value="Read-only content"
  disabled
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Current value |
| `onChange` | `(value: string) => void` | - | Change handler |
| `label` | `string` | - | Field label |
| `maxLength` | `number` | - | Maximum character limit |
| `showCount` | `boolean` | `false` | Show character counter |
| `rows` | `number` | - | Number of visible rows |
| `disabled` | `boolean` | `false` | Disable textarea |
| `placeholder` | `string` | - | Placeholder text |
| `textareaClassName` | `string` | - | Class for textarea element |
| `labelClassName` | `string` | - | Class for label element |
| `className` | `string` | - | Class for wrapper |

## Behavior

- Counter shows `current/max` characters
- Counter announces via `aria-live` at 90% capacity
- Native `maxLength` prevents exceeding limit

## Accessibility

- Label properly associated via `htmlFor`
- Character counter uses `aria-live="polite"` near limit
- `aria-atomic="true"` ensures full counter is announced

## Common Patterns

### Comment Form

```tsx
<InputTextarea
  label="Comment"
  value={comment}
  onChange={setComment}
  maxLength={1000}
  showCount
  placeholder="Write your comment..."
  rows={4}
/>
```

### Bio with Limit

```tsx
<InputTextarea
  label="About You"
  value={about}
  onChange={setAbout}
  maxLength={280}
  showCount
  placeholder="Tell us about yourself (max 280 characters)"
/>
```

## Strapi Integration

```tsx
<InputTextarea
  label={field.label}
  value={formData[field.name] || ''}
  onChange={(v) => updateField(field.name, v)}
  maxLength={field.maxLength}
  showCount={!!field.maxLength}
/>
```
