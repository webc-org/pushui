# Carousel

Image/content carousel with navigation controls and dots indicator. Built on [embla-carousel-react](https://www.embla-carousel.com/).

## Import

```tsx
import {
  Carousel,
  CarouselContainer,
  CarouselSlide,
  CarouselControls,
  CarouselPrev,
  CarouselNext,
  CarouselDots
} from '@ui'
```

## Usage

### Basic

```tsx
<Carousel>
  <CarouselContainer>
    <CarouselSlide>
      <Image src="/slide1.jpg" alt="Slide 1" />
    </CarouselSlide>
    <CarouselSlide>
      <Image src="/slide2.jpg" alt="Slide 2" />
    </CarouselSlide>
    <CarouselSlide>
      <Image src="/slide3.jpg" alt="Slide 3" />
    </CarouselSlide>
  </CarouselContainer>
  <CarouselControls>
    <CarouselPrev />
    <CarouselNext />
  </CarouselControls>
</Carousel>
```

### Loop Mode

```tsx
<Carousel loop>
  <CarouselContainer>
    {/* slides */}
  </CarouselContainer>
  <CarouselControls>
    <CarouselPrev />
    <CarouselNext />
  </CarouselControls>
</Carousel>
```

### Multiple Visible Slides

```tsx
<Carousel slidesPerView={3} gap={2}>
  <CarouselContainer>
    {products.map(product => (
      <CarouselSlide key={product.id}>
        <Card>{/* product content */}</Card>
      </CarouselSlide>
    ))}
  </CarouselContainer>
  <CarouselControls>
    <CarouselPrev />
    <CarouselNext />
  </CarouselControls>
</Carousel>
```

### Free Scroll (No Snapping)

```tsx
<Carousel dragFree>
  <CarouselContainer>
    {/* slides */}
  </CarouselContainer>
</Carousel>
```

### Vertical Carousel

```tsx
<Carousel axis="y" style={{ height: '400px' }}>
  <CarouselContainer>
    {/* slides */}
  </CarouselContainer>
</Carousel>
```

### Custom Alignment

```tsx
<Carousel align="start">
  <CarouselContainer>
    {/* slides */}
  </CarouselContainer>
</Carousel>
```

### With Dots Only

```tsx
<Carousel loop>
  <CarouselContainer>
    {/* slides */}
  </CarouselContainer>
  <CarouselControls>
    <CarouselDots />
  </CarouselControls>
</Carousel>
```

## Components

### Carousel

Root container that provides context to child components.

#### Custom Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `slidesPerView` | `number` | `1` | Number of visible slides. Sets slide width via CSS so multiple slides show at once. |
| `gap` | `number` | `0` | Space between slides in rem units. Creates consistent gutters between slides. |

#### Embla Options

All [Embla Carousel options](https://www.embla-carousel.com/api/options/) are supported as props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `active` | `boolean` | `true` | Enables/disables the carousel. When `false`, all interactions are disabled. Useful for conditional activation. |
| `align` | `'start' \| 'center' \| 'end' \| number` | `'center'` | How slides align in the viewport. `'start'` aligns to left edge, `'center'` centers slides, `'end'` aligns to right edge. Use a number (0-1) for custom alignment. |
| `axis` | `'x' \| 'y'` | `'x'` | Scroll direction. `'x'` for horizontal, `'y'` for vertical. Vertical requires a fixed height on the carousel. |
| `breakpoints` | `object` | - | Responsive options. Keys are media queries, values are option objects. Example: `{ '(min-width: 768px)': { slidesToScroll: 2 } }` |
| `containScroll` | `'trimSnaps' \| 'keepSnaps' \| false` | `'trimSnaps'` | Prevents scrolling past edges. `'trimSnaps'` removes snap points that show empty space. `'keepSnaps'` keeps all snaps but limits scroll. `false` allows overscrolling. |
| `direction` | `'ltr' \| 'rtl'` | `'ltr'` | Scroll direction for RTL languages. Affects drag direction and button behavior. |
| `dragFree` | `boolean` | `false` | Allows free-form scrolling without snapping. Slides stop where released instead of snapping to positions. Good for browse-heavy UIs. |
| `dragThreshold` | `number` | `10` | Pixels to drag before scroll starts. Higher values prevent accidental drags. Lower values feel more responsive. |
| `duration` | `number` | `25` | Animation speed (lower = faster). Controls how fast slides animate when using buttons or dots. Does not affect drag momentum. |
| `inViewThreshold` | `number` | `0` | How much of a slide must be visible (0-1) to be considered "in view". Used by plugins and the `slidesInView` API. |
| `loop` | `boolean` | `false` | Infinite looping. When enabled, scrolling past the last slide wraps to the first. Prev/Next buttons never disable. |
| `skipSnaps` | `boolean` | `false` | Skip snap points when dragging quickly. Creates momentum-based scrolling that can skip multiple slides. |
| `slidesToScroll` | `number \| 'auto'` | `1` | How many slides to scroll per button click. `'auto'` scrolls by the number of visible slides. Use with `slidesPerView` for grouped scrolling. |
| `startIndex` | `number` | `0` | Initial slide (zero-indexed). Carousel starts at this slide without animation. |
| `watchDrag` | `boolean \| function` | `true` | Enable/disable drag interactions. Pass a function for conditional dragging. `false` makes carousel button/dot-only. |
| `watchResize` | `boolean \| function` | `true` | Reinitialize when container resizes. Recalculates slide positions. Disable for fixed-size carousels to improve performance. |
| `watchSlides` | `boolean \| function` | `true` | Reinitialize when slides are added/removed. Disable if slides are static to improve performance. |

### CarouselContainer

Wrapper for slides. Required.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class |

### CarouselSlide

Individual slide wrapper.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Slide content |
| `className` | `string` | - | Additional CSS class |

### CarouselControls

Container for navigation elements.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS class |

### CarouselPrev / CarouselNext

Navigation buttons. Auto-disabled at boundaries (unless `loop`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Previous/Next slide'` | Aria label for accessibility |
| `children` | `ReactNode` | Chevron icon | Custom button content |
| `className` | `string` | - | Additional CSS class |

### CarouselDots

Pagination dots indicator.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Go to slide'` | Aria label prefix for dots |
| `navigationLabel` | `string` | `'Slide navigation'` | Aria label for dots container |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- Live region announces current slide to screen readers
- Navigation buttons have proper `aria-label`
- Dots indicate current slide with `aria-current`
- Keyboard navigation supported

## Common Patterns

### Hero Carousel

```tsx
<Carousel loop>
  <CarouselContainer>
    {heroes.map(hero => (
      <CarouselSlide key={hero.id}>
        <Banner
          backgroundImage={hero.image}
          title={hero.title}
          subtitle={hero.subtitle}
        />
      </CarouselSlide>
    ))}
  </CarouselContainer>
  <CarouselControls>
    <CarouselDots />
  </CarouselControls>
</Carousel>
```

### Product Carousel

```tsx
<Carousel slidesPerView={4} gap={2} loop>
  <CarouselContainer>
    {products.map(product => (
      <CarouselSlide key={product.id}>
        <Card>
          <Image src={product.image} alt={product.name} />
          <CardBody>
            <Title level="h3">{product.name}</Title>
            <p>${product.price}</p>
          </CardBody>
        </Card>
      </CarouselSlide>
    ))}
  </CarouselContainer>
  <CarouselControls>
    <CarouselPrev />
    <CarouselNext />
  </CarouselControls>
</Carousel>
```

### Responsive Slides Per View

```tsx
<Carousel
  slidesPerView={1}
  breakpoints={{
    '(min-width: 640px)': { slidesToScroll: 2 },
    '(min-width: 1024px)': { slidesToScroll: 3 },
  }}
>
  {/* Note: For responsive slidesPerView, use CSS classes on slides */}
</Carousel>
```

## CSS Variables

The carousel exposes CSS variables for customization:

```css
.carousel {
  --carousel-slides-per-view: 1;
  --carousel-gap: 0rem;
}
```

These are set automatically via `slidesPerView` and `gap` props.
