# Modal

Dialog overlay with focus trap, escape key handling, and body scroll lock. Uses context-based API.

## Import

```tsx
import { Modals, useModals } from '@ui'
```

## Setup

Wrap your app with the `Modals` provider:

```tsx
<Modals>
  <App />
</Modals>
```

## Usage

### Basic

```tsx
const { addModal } = useModals()

<Button onClick={() => addModal({
  title: 'Modal Title',
  children: <p>Modal content goes here.</p>
})}>
  Open Modal
</Button>
```

### With Custom Width

```tsx
addModal({
  title: 'Wide Modal',
  width: '800px',
  children: <p>Wide modal content.</p>
})
```

### Close on Backdrop Click

```tsx
addModal({
  title: 'Closeable Modal',
  closeOnBackdrop: true,
  children: <p>Click backdrop to close.</p>
})
```

### Auto-Close Duration

```tsx
addModal({
  title: 'Notification',
  duration: 3000,
  children: <p>This closes automatically.</p>
})
```

### Hide Close Button

```tsx
addModal({
  title: 'No Close Button',
  hideCloseButton: true,
  children: (
    <div>
      <p>Custom close handling.</p>
      <Button onClick={() => removeModal(id)}>Close</Button>
    </div>
  )
})
```

### Custom Close Label

```tsx
addModal({
  title: 'Modal',
  closeLabel: t('modal.close'),
  children: <p>Content</p>
})
```

## Props (ModalConfigTypes)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | - | Modal header content |
| `children` | `ReactNode` | **required** | Modal body content |
| `width` | `string` | - | Modal width (e.g., '500px', '50vw') |
| `closeOnBackdrop` | `boolean` | `false` | Close on backdrop click |
| `duration` | `number` | `Infinity` | Auto-close after ms |
| `closeLabel` | `string` | `'Close modal'` | Close button aria-label |
| `hideCloseButton` | `boolean` | `false` | Hide X close button |

## Hook API

### useModals()

Returns:

| Property | Type | Description |
|----------|------|-------------|
| `modals` | `ModalConfigTypes[]` | Current open modals |
| `addModal` | `(config) => void` | Open a new modal |
| `removeModal` | `(id) => void` | Close modal by ID |

## Behavior

- **Focus trap**: Tab cycles through focusable elements inside modal
- **Body scroll lock**: Prevents background scrolling when open
- **Focus restoration**: Returns focus to trigger element on close
- **Escape key**: Closes modal
- **Animation**: Fade in/out with scale transform

## Accessibility

- `role="dialog"` with `aria-modal="true"`
- Focus moves to modal on open
- Focus trapped within modal
- Escape key closes modal
- `aria-label` on close button
- Focus returns to trigger on close

## Common Patterns

### Confirmation Dialog

```tsx
const { addModal, removeModal } = useModals()

const handleDelete = () => {
  const id = Date.now()
  addModal({
    title: 'Confirm Delete',
    width: '400px',
    children: (
      <div>
        <p>Are you sure you want to delete this item?</p>
        <div className="flex justify-end g-2 mt-4">
          <Button appearance="ghost" onClick={() => removeModal(id)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => {
            deleteItem()
            removeModal(id)
          }}>
            Delete
          </Button>
        </div>
      </div>
    )
  })
}
```

### Form Modal

```tsx
addModal({
  title: 'Edit Profile',
  width: '500px',
  children: (
    <form onSubmit={handleSubmit}>
      <InputText label="Name" value={name} onChange={setName} />
      <InputTextarea label="Bio" value={bio} onChange={setBio} />
      <div className="flex justify-end g-2 mt-4">
        <Button appearance="ghost" onClick={handleClose}>Cancel</Button>
        <Button type="submit" variant="primary">Save</Button>
      </div>
    </form>
  )
})
```

### Image Lightbox

```tsx
addModal({
  width: '90vw',
  hideCloseButton: false,
  closeOnBackdrop: true,
  children: (
    <Image src={selectedImage.url} alt={selectedImage.alt} className="fit-contain" />
  )
})
```

## Strapi Integration

```tsx
const { addModal } = useModals()

const openModal = (data) => {
  addModal({
    title: data.title,
    width: data.width || '500px',
    children: (
      <>
        <RichText html={data.content} />
        {data.cta && (
          <div className="mt-4">
            <Button as="a" href={data.cta.url} variant="primary">
              {data.cta.label}
            </Button>
          </div>
        )}
      </>
    )
  })
}
```
