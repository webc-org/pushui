# Note

Contextual message box for alerts, warnings, tips, and information.

## Import

```tsx
import { Note, NoteTitle } from '@ui'
```

## Usage

### Basic

```tsx
<Note>
  <p>This is an informational note.</p>
</Note>
```

### With Title

```tsx
<Note variant="warning">
  <NoteTitle level="h3">Warning</NoteTitle>
  <p>This action cannot be undone.</p>
</Note>
```

### Variants

```tsx
<Note variant="default">
  <NoteTitle level="h4">Note</NoteTitle>
  <p>General information.</p>
</Note>

<Note variant="info">
  <NoteTitle level="h4">Info</NoteTitle>
  <p>Helpful information for the user.</p>
</Note>

<Note variant="success">
  <NoteTitle level="h4">Success</NoteTitle>
  <p>Operation completed successfully.</p>
</Note>

<Note variant="warning">
  <NoteTitle level="h4">Warning</NoteTitle>
  <p>Proceed with caution.</p>
</Note>

<Note variant="danger">
  <NoteTitle level="h4">Error</NoteTitle>
  <p>Something went wrong.</p>
</Note>
```

### Rich Content

```tsx
<Note variant="info">
  <NoteTitle level="h3">Before you continue</NoteTitle>
  <p>Please ensure you have:</p>
  <ul>
    <li>Saved your work</li>
    <li>Backed up important files</li>
  </ul>
</Note>
```

## Components

### Note

Container for the message.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ColorVariant` | `'default'` | Color theme |
| `children` | `ReactNode` | - | Note content |
| `className` | `string` | - | Additional CSS class |

### NoteTitle

Heading within the note.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | **required** | Heading level |
| `children` | `ReactNode` | - | Title text |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- Uses `role="note"` for semantic meaning
- NoteTitle uses proper heading semantics

## Common Use Cases

| Variant | Use Case |
|---------|----------|
| `default` | General notes, neutral information |
| `info` | Tips, help text, additional context |
| `success` | Confirmation, completed actions |
| `warning` | Caution, important notices |
| `danger` | Errors, critical warnings |

## Strapi Integration

```tsx
<Note variant={data.type}>
  {data.title && <NoteTitle level="h4">{data.title}</NoteTitle>}
  <RichText html={data.content} />
</Note>
```
