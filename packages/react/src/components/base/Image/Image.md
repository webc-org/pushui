# Image

Responsive image with optional caption. Styling via utility classes.

## Import

```tsx
import { Image } from '@ui'
```

## Usage

### Basic

```tsx
<Image src="/photo.jpg" alt="Description of image" />
```

### With Caption

```tsx
<Image
  src="/photo.jpg"
  alt="Sunset over mountains"
  caption="Photo by John Doe"
/>
```

### Object Fit (utility classes)

```tsx
<Image src="/photo.jpg" alt="Photo" className="fit-cover" />
<Image src="/photo.jpg" alt="Photo" className="fit-contain" />
<Image src="/photo.jpg" alt="Photo" className="fit-fill" />
<Image src="/photo.jpg" alt="Photo" className="fit-none" />
<Image src="/photo.jpg" alt="Photo" className="fit-scale-down" />
```

### Object Position (utility classes)

```tsx
<Image src="/photo.jpg" alt="Photo" className="fit-cover obj-center" />
<Image src="/photo.jpg" alt="Photo" className="fit-cover obj-top" />
<Image src="/photo.jpg" alt="Photo" className="fit-cover obj-bottom-right" />
```

### Aspect Ratio (utility classes)

```tsx
<Image src="/photo.jpg" alt="Photo" className="fit-cover aspect-video" />
<Image src="/photo.jpg" alt="Photo" className="fit-cover aspect-square" />
<Image src="/photo.jpg" alt="Photo" className="fit-cover aspect-4-3" />
```

### Border Radius (utility classes)

```tsx
<Image src="/photo.jpg" alt="Photo" className="r-none" />
<Image src="/photo.jpg" alt="Photo" className="r-3" />
<Image src="/photo.jpg" alt="Photo" className="r-full" />
```

### With Next.js Image (asChild)

```tsx
import NextImage from 'next/image'

<Image alt="Photo" asChild>
  <NextImage src="/photo.jpg" width={800} height={600} />
</Image>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `alt` | `string` | **required** | Alt text for accessibility |
| `caption` | `ReactNode` | - | Caption below image |
| `asChild` | `boolean` | `false` | Render as child element (slot pattern) |
| `className` | `string` | - | Additional CSS classes (use utility classes) |

## Utility Classes

| Class | Property |
|-------|----------|
| `fit-cover` | object-fit: cover |
| `fit-contain` | object-fit: contain |
| `fit-fill` | object-fit: fill |
| `fit-none` | object-fit: none |
| `fit-scale-down` | object-fit: scale-down |
| `obj-center` | object-position: center |
| `obj-top` | object-position: top |
| `obj-bottom` | object-position: bottom |
| `obj-left` | object-position: left |
| `obj-right` | object-position: right |
| `obj-top-left` | object-position: top left |
| `obj-top-right` | object-position: top right |
| `obj-bottom-left` | object-position: bottom left |
| `obj-bottom-right` | object-position: bottom right |
| `aspect-square` | aspect-ratio: 1 / 1 |
| `aspect-video` | aspect-ratio: 16 / 9 |
| `aspect-4-3` | aspect-ratio: 4 / 3 |
| `aspect-3-2` | aspect-ratio: 3 / 2 |
| `r-1` to `r-7` | border-radius |
| `r-full` | border-radius: 9999px |
| `r-none` | border-radius: 0 |

## Accessibility

- `alt` is required
- When caption present, wraps in `<figure>` with `role="group"`
- `aria-labelledby` links to `<figcaption>`

## Strapi Integration

```tsx
<Image
  src={getMediaUrl(data.image.url)}
  alt={data.image.alternativeText || data.title}
  caption={data.caption}
  className={clsx(
    data.fit && `fit-${data.fit}`,
    data.position && `obj-${data.position}`,
    data.aspectRatio && `aspect-${data.aspectRatio}`,
    data.radius && `r-${data.radius}`
  )}
/>
```
