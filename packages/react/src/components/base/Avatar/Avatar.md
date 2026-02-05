# Avatar

User avatar with image display and automatic fallback to initials or icon.

## Import

```tsx
import { Avatar } from '@ui'
```

## Usage

### With Image

```tsx
<Avatar src="/photos/john.jpg" alt="John Doe" />
```

### With Name (Initials Fallback)

```tsx
<Avatar name="John Doe" />
// Displays "JD"

<Avatar name="Alice" />
// Displays "A"
```

### Image with Fallback

```tsx
<Avatar src="/photos/user.jpg" name="John Doe" />
// Shows image, falls back to "JD" on error
```

### Custom Sizes

```tsx
<Avatar src="/photo.jpg" width="2.4rem" fontSize={1} />
<Avatar src="/photo.jpg" width="3.2rem" fontSize={2} />
<Avatar src="/photo.jpg" width="4.8rem" fontSize={4} />
<Avatar src="/photo.jpg" width="6.4rem" fontSize={6} />
```

### Color Variants

```tsx
<Avatar name="John Doe" variant="primary" />
<Avatar name="Jane Smith" variant="success" />
<Avatar name="Bob Wilson" variant="danger" />
```

### Default Icon Fallback

```tsx
<Avatar />
// Shows User icon when no src or name provided
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image URL |
| `alt` | `string` | `''` | Alt text for image |
| `name` | `string` | - | Name used to generate initials fallback |
| `width` | `string` | `'3.2rem'` | Avatar size (aspect-ratio: 1) |
| `fontSize` | `1-9` | `2` | Font size scale (maps to `--font-size-{n}`) |
| `variant` | `ColorVariant` | `'default'` | Background color for fallback |
| `defaultLabel` | `string` | `'Avatar'` | Default aria-label when no alt or name |
| `className` | `string` | - | Additional CSS class |

## Fallback Priority

1. **Image** - Shows if `src` provided and loads successfully
2. **Initials** - Shows if `name` provided (extracts first and last initials)
3. **Icon** - Shows User icon as final fallback

## Initials Logic

- Single word: First letter (e.g., "Alice" → "A")
- Multiple words: First + last initials (e.g., "John Doe" → "JD")
- Always uppercase

## Accessibility

- Uses `role="img"` for semantic meaning
- `aria-label` set from `alt`, `name`, or `defaultLabel` (in priority order)
- Icon fallback has `aria-hidden` to prevent redundant announcements

## Strapi Integration

```tsx
<Avatar
  src={getMediaUrl(data.avatar?.url)}
  name={data.username}
  width="4.8rem"
  fontSize={4}
/>
```
