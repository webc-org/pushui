# Iframe

Responsive iframe embed. Use utility classes for aspect ratio.

## Import

```tsx
import { Iframe } from '@ui'
```

## Usage

### YouTube Embed

```tsx
<Iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Video Title"
  className="aspect-video"
/>
```

### Aspect Ratios (utility classes)

```tsx
<Iframe src={url} title="Video" className="aspect-video" />
<Iframe src={url} title="Video" className="aspect-4-3" />
<Iframe src={url} title="Video" className="aspect-square" />
```

### Vimeo Embed

```tsx
<Iframe
  src="https://player.vimeo.com/video/123456789"
  title="Vimeo Video"
  className="aspect-video"
/>
```

### Map Embed

```tsx
<Iframe
  src="https://www.google.com/maps/embed?pb=..."
  title="Office Location"
  className="aspect-4-3"
/>
```

### Without Fullscreen

```tsx
<Iframe
  src={url}
  title="Embedded Content"
  allowFullScreen={false}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | **required** | Source URL |
| `title` | `string` | **required** | Accessible title |
| `allowFullScreen` | `boolean` | `true` | Allow fullscreen mode |
| `loading` | `'lazy' \| 'eager'` | `'lazy'` | Loading behavior |
| `className` | `string` | - | Additional CSS classes (use utility classes) |

## Accessibility

- `title` is required for screen readers
- Describes embedded content purpose

## Strapi Integration

```tsx
<Iframe
  src={data.embedUrl}
  title={data.title}
  className={data.aspectRatio ? `aspect-${data.aspectRatio}` : 'aspect-video'}
/>
```
