# Toast

Notification system for displaying temporary messages via context.

## Import

```tsx
import { Toasts, useToasts } from '@ui'
```

## Setup

Wrap your app with the `Toasts` provider:

```tsx
// _app.tsx or layout.tsx
import { Toasts } from '@ui'

function App({ children }) {
  return (
    <Toasts>
      {children}
    </Toasts>
  )
}
```

## Usage

### Basic Toast

```tsx
function MyComponent() {
  const { addToast } = useToasts()

  const showToast = () => {
    addToast({
      children: <p>Changes saved successfully!</p>
    })
  }

  return <Button onClick={showToast}>Save</Button>
}
```

### Custom Duration

```tsx
addToast({
  children: <p>Quick message</p>,
  duration: 3000,  // 3 seconds
})

addToast({
  children: <p>This stays until dismissed</p>,
  duration: Infinity,
})
```

### Rich Content

```tsx
addToast({
  children: (
    <div>
      <Title level="h4">Success!</Title>
      <p>Your order has been placed.</p>
      <Link href="/orders">View order</Link>
    </div>
  ),
})
```

### Translated Close Label

```tsx
addToast({
  children: <p>Saved!</p>,
  closeLabel: t('notifications.close'),
})
```

## Components

### Toasts (Provider)

Context provider that manages toast state.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **required** | App content |

### useToasts (Hook)

Returns toast context methods.

```tsx
const { toasts, addToast, removeToast } = useToasts()
```

| Method | Type | Description |
|--------|------|-------------|
| `toasts` | `ToastConfigTypes[]` | Current toasts |
| `addToast` | `(config) => void` | Add a toast |
| `removeToast` | `(id) => void` | Remove toast by id |

### ToastConfigTypes

```tsx
type ToastConfigTypes = {
  id?: number           // Auto-generated
  children?: ReactNode  // Toast content
  duration?: number     // Auto-close time (default: 10000ms)
  closeLabel?: string   // Close button label (default: 'Close notification')
}
```

## Behavior

- Toasts appear in bottom-right corner
- Auto-dismiss after `duration` (default 10s)
- Manual dismiss via close button
- Entrance/exit animations
- Focus management for accessibility

## Accessibility

- `role="status"` announces to screen readers
- `aria-live="polite"` for non-intrusive announcements
- Focus trap within toasts container
- New toasts receive focus automatically
- Close button has accessible label

## Common Patterns

### Success/Error Toasts

```tsx
const { addToast } = useToasts()

// Success
addToast({
  children: (
    <Note variant="success">
      <p>Profile updated successfully!</p>
    </Note>
  ),
})

// Error
addToast({
  children: (
    <Note variant="danger">
      <p>Failed to save. Please try again.</p>
    </Note>
  ),
  duration: Infinity,  // Keep until dismissed
})
```

### Form Submission

```tsx
async function handleSubmit(data) {
  try {
    await submitForm(data)
    addToast({ children: <p>Form submitted!</p> })
  } catch (error) {
    addToast({
      children: <p>Submission failed: {error.message}</p>,
      duration: Infinity,
    })
  }
}
```

## Strapi Integration

```tsx
const { addToast } = useToasts()

addToast({
  children: <p>{t('toast.saved')}</p>,
  closeLabel: t('toast.close'),
})
```
