# Banner

Hero section with background image/video, overlay, and content positioning.

## Import

```tsx
import {
  Banner,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
  BannerBody,
  BannerActions,
} from '@ui'
```

## Usage

### Basic with Background Image

```tsx
<Banner
  backgroundImage="/hero.jpg"
  overlay="dark"
  minHeight="50rem"
>
  <BannerContent textColor="light" textAlign="center">
    <BannerTitle>Welcome</BannerTitle>
    <BannerSubtitle>Build something amazing</BannerSubtitle>
  </BannerContent>
</Banner>
```

### With Video Background

```tsx
<Banner
  backgroundVideo={{
    src: '/hero-video.mp4',
    poster: '/hero-poster.jpg',
  }}
  overlay="dark"
>
  <BannerContent textColor="light">
    <BannerTitle>Welcome</BannerTitle>
  </BannerContent>
</Banner>
```

### With CTA Buttons

```tsx
<Banner backgroundImage="/hero.jpg" overlay="dark">
  <BannerContent textColor="light" textAlign="center">
    <BannerTitle>Get Started Today</BannerTitle>
    <BannerSubtitle>Join thousands of happy customers</BannerSubtitle>
    <BannerActions>
      <Link href="/signup" appearance="button" variant="primary" contrast>
        Sign Up Free
      </Link>
      <Link href="/demo" appearance="outline" contrast>
        Watch Demo
      </Link>
    </BannerActions>
  </BannerContent>
</Banner>
```

### Content Alignment

```tsx
<Banner
  backgroundImage="/bg.jpg"
  horizontalAlign="left"
  verticalAlign="center"
>
  <BannerContent textAlign="left" maxWidth="600px">
    <BannerTitle>Left Aligned</BannerTitle>
  </BannerContent>
</Banner>
```

### Solid Background Color

```tsx
<Banner backgroundColor="var(--color-primary-2)" minHeight="30rem">
  <BannerContent textColor="light" textAlign="center">
    <BannerTitle>Color Background</BannerTitle>
  </BannerContent>
</Banner>
```

## Components

### Banner

Main container.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `backgroundImage` | `string` | - | Image URL |
| `backgroundVideo` | `{ src, poster? }` | - | Video background |
| `backgroundColor` | `string` | - | CSS color |
| `overlay` | `'none' \| 'light' \| 'dark'` | `'none'` | Overlay layer |
| `minHeight` | `string` | `'40rem'` | Minimum height |
| `horizontalAlign` | `'left' \| 'center' \| 'right'` | `'left'` | Content position |
| `verticalAlign` | `'top' \| 'center' \| 'bottom'` | `'center'` | Content position |

### BannerContent

Content wrapper.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `textColor` | `'light' \| 'dark'` | `'dark'` | Text color scheme |
| `textAlign` | `'left' \| 'center' \| 'right'` | - | Text alignment |
| `maxWidth` | `string` | - | Content max width |

### BannerTitle

Main heading (uses Title component).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'h1'-'h6'` | `'h1'` | Heading level |

### BannerSubtitle

Secondary text.

### BannerBody

Body text paragraph.

### BannerActions

Container for CTA buttons.

## Overlay Usage

| Overlay | Use Case |
|---------|----------|
| `none` | Light images or solid colors |
| `light` | Dark images with dark text |
| `dark` | Light images with light text |

## Strapi Integration

```tsx
<Banner
  backgroundImage={getMediaUrl(data.image.url)}
  overlay={data.overlay}
  minHeight={data.minHeight}
  horizontalAlign={data.horizontalAlign}
  verticalAlign={data.verticalAlign}
>
  <BannerContent textColor={data.textColor} textAlign={data.textAlign}>
    {data.title && <BannerTitle>{data.title}</BannerTitle>}
    {data.subtitle && <BannerSubtitle>{data.subtitle}</BannerSubtitle>}
    {data.actions?.length > 0 && (
      <BannerActions>
        {data.actions.map((action) => (
          <Link key={action.id} href={action.url} {...action.style}>
            {action.label}
          </Link>
        ))}
      </BannerActions>
    )}
  </BannerContent>
</Banner>
```
