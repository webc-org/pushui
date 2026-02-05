# Styling

Quick reference for CSS utilities and theming.

## CSS Variables

### Colors

| Variable | Description |
|----------|-------------|
| `--color-{variant}-1` | Dark (hover state) |
| `--color-{variant}-2` | Base color |
| `--color-{variant}-3` | Light (background) |
| `--color-{variant}-contrast` | For dark backgrounds |
| `--color-grey-1` to `--color-grey-7` | Grey scale (1=dark, 7=light) |
| `--color-black`, `--color-white` | Black and white |

Variants: `default`, `primary`, `secondary`, `success`, `danger`, `warning`, `info`

### Spacing

| Variable | Value |
|----------|-------|
| `--spacing-1` | 0.5rem |
| `--spacing-2` | 1rem |
| `--spacing-3` | 2rem |
| `--spacing-4` | 3rem |
| `--spacing-5` | 4rem |
| `--spacing-6` | 5rem |
| `--spacing-7` | 6rem |
| `--spacing-8` | 8rem |
| `--spacing-9` | 10rem |

### Typography

| Variable | Value |
|----------|-------|
| `--font-size-1` to `--font-size-9` | 1rem to 6rem |
| `--font-weight-body` | 400 |
| `--font-weight-button` | 600 |
| `--font-weight-strong` | 600 |
| `--font-weight-heading` | 800 |

### Layout

| Variable | Value |
|----------|-------|
| `--container-max-width` | 120rem |
| `--height-mobile-menu` | 6rem |
| `--height-main-menu` | 6rem |
| `--height-top-menu` | 3rem |
| `--radius-1` to `--radius-7` | 0.2rem to 2rem |
| `--z-index-1` to `--z-index-6` | 100-600 |

### Body Classes

| Class | Description |
|-------|-------------|
| `with-mobile-nav` | Adds mobile header padding-top |
| `with-main-nav` | Adds main nav padding-top (desktop) |
| `with-top-nav` | Adds top bar padding-top (desktop) |
| `header-transparent` | Removes header padding-top for transparent overlay |
| `freeze` | Locks body scroll (used by modal/mobile menu) |

## Utility Classes

### Spacing

Pattern: `{property}{direction?}-{breakpoint?}-{size}`

```html
<!-- Margin -->
<div class="m-3">all sides</div>
<div class="mt-2">top</div>
<div class="mv-4">vertical</div>
<div class="mh-3">horizontal</div>

<!-- Padding -->
<div class="p-3">all sides</div>
<div class="pt-2">top</div>
<div class="pv-4">vertical</div>

<!-- Gap -->
<div class="g-2">gap</div>

<!-- Zero -->
<div class="m-0">no margin</div>
<div class="p-0">no padding</div>

<!-- Auto -->
<div class="mh-auto">centered block</div>
<div class="ml-auto">push right</div>

<!-- Responsive -->
<div class="p-2 p-md-4 p-lg-5">responsive</div>
<div class="m-2 m-md-0">margin on mobile, none on desktop</div>
```

| Direction | Props |
|-----------|-------|
| `t/r/b/l` | top/right/bottom/left |
| `v` | top + bottom |
| `h` | left + right |

| Size | Value |
|------|-------|
| `0` | 0 |
| `1`-`9` | 0.5rem to 10rem |
| `auto` | auto (margin only) |

| Breakpoint | Width |
|------------|-------|
| `sm` | >=768px |
| `md` | >=1024px |
| `lg` | >=1200px |
| `xl` | >=1400px |

### Display

Pattern: `d-{breakpoint?}-{value}`

```html
<div class="d-none d-md-block">hidden on mobile</div>
<div class="d-block d-lg-none">hidden on large</div>
<div class="d-none d-md-flex">flex on desktop only</div>
```

| Class | Values |
|-------|--------|
| `d-{value}` | none, block, flex, grid, inline, inline-block, inline-flex |

All values support responsive breakpoints.

### Alignment

```html
<!-- Text -->
<p class="text-center">centered</p>
<p class="text-left text-md-center">responsive</p>

<!-- Flexbox -->
<div class="flex-col flex-md-row">direction</div>
<div class="justify-center">justify</div>
<div class="items-center">align</div>
<div class="flex-wrap">wrap</div>
```

| Class | Values |
|-------|--------|
| `text-{align}` | left, center, right |
| `justify-{value}` | start, center, end, between, around, evenly |
| `items-{value}` | start, center, end, stretch, baseline |
| `self-{value}` | start, center, end, stretch, baseline |
| `flex-{dir}` | row, col, row-reverse, col-reverse |

### Colors

```html
<!-- Background -->
<div class="bg-primary-2">primary</div>
<div class="bg-grey-6">light grey</div>
<div class="bg-white">white</div>

<!-- Text -->
<p class="text-primary-2">primary</p>
<p class="text-grey-2">muted</p>
<p class="text-danger-2">error</p>
```

### Font

```html
<!-- Size (responsive) -->
<h1 class="fs-6 fs-md-8 fs-lg-9">responsive heading</h1>

<!-- Weight -->
<p class="fw-strong">bold</p>
<span class="fw-heading">extra bold</span>

<!-- Transform -->
<span class="text-uppercase">uppercased</span>
<span class="text-capitalize">capitalized</span>
<p class="text-truncate">truncated with ellipsis...</p>
<span class="text-nowrap">no wrap</span>
```

| Class | Values |
|-------|--------|
| `fs-{breakpoint?}-{1-9}` | font size (responsive) |
| `fw-{weight}` | body, button, strong, heading |
| `text-uppercase/lowercase/capitalize` | text transform |
| `text-nowrap` | white-space: nowrap |
| `text-truncate` | ellipsis overflow |

### Border & Radius

```html
<div class="b">default border</div>
<div class="b-t">top border</div>
<div class="b-primary-2">colored border</div>
<div class="r-3">rounded</div>
<div class="r-full">circle</div>
```

### Overflow

| Class | Property |
|-------|----------|
| `overflow-hidden` | overflow: hidden |
| `overflow-auto` | overflow: auto |
| `overflow-x-auto`, `overflow-y-auto` | axis overflow |
| `overflow-x-hidden`, `overflow-y-hidden` | axis hidden |

### Size

| Class | Property |
|-------|----------|
| `w-full`, `w-auto` | width: 100% / auto |
| `h-full`, `h-auto` | height: 100% / auto |
| `h-screen`, `min-h-screen` | viewport height (dvh with fallback) |

### Position

| Class | Property |
|-------|----------|
| `relative`, `absolute`, `fixed`, `sticky`, `static` | position |

### Opacity

| Class | Value |
|-------|-------|
| `opacity-0` to `opacity-10` | 0 to 1 (steps of 0.1) |

### Aspect Ratio

| Class | Value |
|-------|-------|
| `aspect-square` | 1 / 1 |
| `aspect-video` | 16 / 9 |
| `aspect-4-3` | 4 / 3 |
| `aspect-3-2` | 3 / 2 |

### Object Fit

| Class | Property |
|-------|----------|
| `fit-cover` | object-fit: cover |
| `fit-contain` | object-fit: contain |
| `fit-fill` | object-fit: fill |
| `fit-none` | object-fit: none |
| `fit-scale-down` | object-fit: scale-down |

### Object Position

| Class | Property |
|-------|----------|
| `obj-center` | object-position: center |
| `obj-top` | object-position: top |
| `obj-bottom` | object-position: bottom |
| `obj-left` | object-position: left |
| `obj-right` | object-position: right |
| `obj-top-left` | object-position: top left |
| `obj-top-right` | object-position: top right |
| `obj-bottom-left` | object-position: bottom left |
| `obj-bottom-right` | object-position: bottom right |

### Accessibility

| Class | Description |
|-------|-------------|
| `sr-only` | Visually hidden, accessible to screen readers |

## Theming

Override CSS variables:

```css
:root {
  --color-primary-1: #002f5f;
  --color-primary-2: #06c;
  --color-primary-3: #cce0ff;
  --color-primary-contrast: #60a5fa;
}
```

## Contrast Mode

For dark backgrounds:

```tsx
<Button contrast appearance="button">Light button</Button>
<Spinner contrast />
```

## Import

```tsx
// React package includes styles
import '@yop/react/styles.css'

// Or standalone styles
import '@yop/styles'
```
