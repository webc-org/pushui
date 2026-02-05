# Styles

CSS utilities, mixins, and design tokens.

## File Structure

```
styles/
  root.scss              CSS variables (colors, typography, spacing)
  index.scss             Entry point (imports base + utils)
  base/                  Global element styles
    reset.scss           CSS reset, base elements, heading sizes, .sr-only
    layout.scss          Body layout, header padding
  utils/                 Utility classes (emitted globally)
    align.scss           Flexbox and text alignment
    aspect.scss          Aspect ratio utilities
    fit.scss             Object-fit utilities
    object.scss          Object-position utilities
    border.scss          Border utilities
    color.scss           Background and text color
    display.scss         Display utilities
    font.scss            Font size, weight, text transform
    opacity.scss         Opacity utilities
    overflow.scss        Overflow utilities
    position.scss        Position utilities
    radius.scss          Border radius utilities
    size.scss            Width and height utilities
    spacing.scss         Margin, padding, gap (incl. zero + auto)
  mixins/                Consumed via @use in components
    action.scss          Button/link mixins
    anim.scss            Animation mixins
    color.scss           Color variant mixin
    form.scss            Form input mixins
    mq.scss              Media query mixins
    typo.scss            Typography mixins
```

---

## CSS Variables

### Colors

```css
/* Base */
--color-black
--color-black-50, --color-black-20, --color-black-10
--color-white
--color-white-50, --color-white-20, --color-white-10

/* Grey scale (1=dark, 7=light) */
--color-grey-1  /* #333 */
--color-grey-2  /* #666 */
--color-grey-3  /* #737373 */
--color-grey-4  /* #949494 */
--color-grey-5  /* #DDD */
--color-grey-6  /* #EEE */
--color-grey-7  /* #F5F5F5 */

/* Color variants: default, primary, secondary, success, danger, warning, info */
--color-{variant}-1        /* dark (hover, text on light) */
--color-{variant}-2        /* base (main color) */
--color-{variant}-3        /* light (background) */
--color-{variant}-contrast /* vibrant (for dark backgrounds) */
```

### Typography

```css
/* Font sizes */
--font-size-1  /* 1rem */
--font-size-2  /* 1.2rem */
--font-size-3  /* 1.4rem */
--font-size-4  /* 1.6rem (base) */
--font-size-5  /* 1.8rem */
--font-size-6  /* 2rem */
--font-size-7  /* 3rem */
--font-size-8  /* 4rem */
--font-size-9  /* 6rem */

/* Line height */
--line-height-heading  /* 1.2 */
--line-height-default  /* 1.4 */

/* Font weight */
--font-weight-body     /* 400 */
--font-weight-button   /* 600 */
--font-weight-strong   /* 600 */
--font-weight-heading  /* 800 */

/* Font family */
--site-font
```

### Spacing

```css
--spacing-1  /* 0.5rem */
--spacing-2  /* 1rem */
--spacing-3  /* 2rem */
--spacing-4  /* 3rem */
--spacing-5  /* 4rem */
--spacing-6  /* 5rem */
--spacing-7  /* 6rem */
--spacing-8  /* 8rem */
--spacing-9  /* 10rem */
```

### Layout

```css
--screen-max-width     /* 168rem */
--container-max-width  /* 120rem */
--height-mobile-menu   /* 6rem */
--height-main-menu     /* 6rem */
--height-top-menu      /* 3rem */
```

### Body Classes (layout.scss)

| Class | Description |
|-------|-------------|
| `with-mobile-nav` | Adds mobile header padding-top |
| `with-main-nav` | Adds main nav padding-top (desktop) |
| `with-top-nav` | Adds top bar padding-top (desktop) |
| `header-transparent` | Removes header padding-top for transparent overlay |
| `freeze` | Locks body scroll |

### Border Radius

```css
--radius-1  /* 0.2rem */
--radius-2  /* 0.4rem */
--radius-3  /* 0.6rem */
--radius-4  /* 0.8rem */
--radius-5  /* 1rem */
--radius-6  /* 1.5rem */
--radius-7  /* 2rem */
```

### Z-Index

```css
--z-index-1  /* 100 */
--z-index-2  /* 200 */
--z-index-3  /* 300 */
--z-index-4  /* 400 */
--z-index-5  /* 500 */
--z-index-6  /* 600 */
```

### Transitions

```css
--transition-default  /* 0.2s ease */
```

---

## Utility Classes

### Spacing

Pattern: `{property}{direction?}-{breakpoint?}-{size}`

| Property | Description |
|----------|-------------|
| `m` | margin |
| `p` | padding |
| `g` | gap |

| Direction | Description |
|-----------|-------------|
| `t` | top |
| `r` | right |
| `b` | bottom |
| `l` | left |
| `v` | vertical (top + bottom) |
| `h` | horizontal (left + right) |

| Size | Value |
|------|-------|
| `0` | 0 |
| `1` | 0.5rem |
| `2` | 1rem |
| `3` | 2rem |
| `4` | 3rem |
| `5` | 4rem |
| `6` | 5rem |
| `7` | 6rem |
| `8` | 8rem |
| `9` | 10rem |

| Special | Description |
|---------|-------------|
| `m-auto` | margin: auto |
| `mh-auto` | margin left + right: auto (centering) |
| `mv-auto` | margin top + bottom: auto |
| `mt-auto`, `mr-auto`, `mb-auto`, `ml-auto` | directional auto |

| Breakpoint | Width |
|------------|-------|
| `sm` | ≥768px |
| `md` | ≥1024px |
| `lg` | ≥1200px |
| `xl` | ≥1400px |

```html
<!-- Base -->
<div class="m-3">margin all sides</div>
<div class="mt-2">margin top</div>
<div class="pv-4">padding vertical</div>
<div class="ph-3">padding horizontal</div>
<div class="g-2">gap</div>

<!-- Zero -->
<div class="m-0">no margin</div>
<div class="p-0">no padding</div>
<div class="mt-0">no margin top</div>

<!-- Auto -->
<div class="mh-auto">centered block</div>
<div class="ml-auto">push right</div>

<!-- Responsive -->
<div class="p-2 p-md-4 p-lg-5">responsive padding</div>
<div class="mt-2 mt-lg-4">responsive margin top</div>
<div class="g-2 g-md-3">responsive gap</div>
<div class="m-2 m-md-0">margin on mobile, none on desktop</div>
<div class="mh-auto mh-md-0">centered on mobile, reset on desktop</div>
```

### Display

Pattern: `d-{breakpoint?}-{value}`

| Class | Value |
|-------|-------|
| `d-none` | none |
| `d-block` | block |
| `d-flex` | flex |
| `d-grid` | grid |
| `d-inline` | inline |
| `d-inline-block` | inline-block |
| `d-inline-flex` | inline-flex |

All values support responsive breakpoints (sm, md, lg, xl).

```html
<!-- Hide/show -->
<div class="d-none d-md-block">hidden on mobile, visible on desktop</div>
<div class="d-block d-lg-none">visible on mobile, hidden on large</div>

<!-- Responsive flex -->
<div class="d-none d-md-flex">flex on desktop only</div>
```

### Font Size

Pattern: `fs-{breakpoint?}-{size}`

| Size | Value |
|------|-------|
| `1` | 1rem |
| `2` | 1.2rem |
| `3` | 1.4rem |
| `4` | 1.6rem (base) |
| `5` | 1.8rem |
| `6` | 2rem |
| `7` | 3rem |
| `8` | 4rem |
| `9` | 6rem |

**Default heading sizes** (applied globally to h1-h6 tags):

| Tag | Size |
|-----|------|
| `h1` | fs-8 (4rem) |
| `h2` | fs-7 (3rem) |
| `h3` | fs-6 (2rem) |
| `h4` | fs-5 (1.8rem) |
| `h5` | fs-4 (1.6rem) |
| `h6` | fs-3 (1.4rem) |

```html
<!-- Base -->
<h2 class="fs-8">Large heading</h2>
<p class="fs-5">Larger text</p>

<!-- Responsive -->
<h1 class="fs-6 fs-md-8 fs-lg-9">Small on mobile, huge on desktop</h1>

<!-- SEO vs visual: h2 tag for SEO, fs-8 for h1 visual size -->
<h2 class="fs-8">Looks like h1, semantically h2</h2>
```

### Font Weight

| Class | Value |
|-------|-------|
| `fw-body` | 400 |
| `fw-button` | 600 |
| `fw-strong` | 600 |
| `fw-heading` | 800 |

```html
<p class="fw-strong">Bold text</p>
<span class="fw-heading">Extra bold</span>
```

### Text Transform

| Class | Property |
|-------|----------|
| `text-uppercase` | text-transform: uppercase |
| `text-lowercase` | text-transform: lowercase |
| `text-capitalize` | text-transform: capitalize |
| `text-nowrap` | white-space: nowrap |
| `text-truncate` | overflow: hidden + text-overflow: ellipsis + nowrap |

```html
<span class="text-uppercase">uppercased</span>
<p class="text-truncate">Long text that gets cut off with ellipsis...</p>
```

### Alignment

Pattern: `{property}-{breakpoint?}-{value}`

#### Text Align

```html
<p class="text-left">Left aligned</p>
<p class="text-center">Centered</p>
<p class="text-right">Right aligned</p>

<!-- Responsive -->
<p class="text-center text-md-left">Center on mobile, left on desktop</p>
```

#### Flexbox

```html
<!-- Direction -->
<div class="flex-row">row</div>
<div class="flex-col">column</div>
<div class="flex-row-reverse">row reverse</div>
<div class="flex-col-reverse">column reverse</div>

<!-- Responsive direction -->
<div class="flex-col flex-md-row">column on mobile, row on desktop</div>

<!-- Justify content -->
<div class="justify-start">flex-start</div>
<div class="justify-center">center</div>
<div class="justify-end">flex-end</div>
<div class="justify-between">space-between</div>
<div class="justify-around">space-around</div>
<div class="justify-evenly">space-evenly</div>

<!-- Responsive justify -->
<div class="justify-center justify-md-between">center on mobile, between on desktop</div>

<!-- Align items -->
<div class="items-start">flex-start</div>
<div class="items-center">center</div>
<div class="items-end">flex-end</div>
<div class="items-stretch">stretch</div>
<div class="items-baseline">baseline</div>

<!-- Responsive items -->
<div class="items-center items-md-start">center on mobile, start on desktop</div>

<!-- Align self -->
<div class="self-start">flex-start</div>
<div class="self-center">center</div>
<div class="self-end">flex-end</div>

<!-- Responsive self -->
<div class="self-center self-lg-end">center on mobile, end on large</div>

<!-- Wrap -->
<div class="flex-wrap">wrap</div>
<div class="flex-nowrap">nowrap</div>

<!-- Responsive wrap -->
<div class="flex-wrap flex-md-nowrap">wrap on mobile, nowrap on desktop</div>
```

### Colors

#### Background

```html
<!-- Variants -->
<div class="bg-primary-1">dark primary</div>
<div class="bg-primary-2">base primary</div>
<div class="bg-primary-3">light primary</div>
<div class="bg-primary-contrast">contrast primary</div>

<!-- Grey -->
<div class="bg-grey-1">dark grey</div>
<div class="bg-grey-7">light grey</div>

<!-- Black/White -->
<div class="bg-black">black</div>
<div class="bg-white">white</div>
```

#### Text

```html
<!-- Variants -->
<p class="text-primary-1">dark primary</p>
<p class="text-primary-2">base primary</p>
<p class="text-danger-2">danger</p>
<p class="text-success-2">success</p>

<!-- Grey -->
<p class="text-grey-2">muted text</p>

<!-- Black/White -->
<p class="text-black">black</p>
<p class="text-white">white</p>
```

### Border

| Class | Description |
|-------|-------------|
| `b` | border all sides (grey-4) |
| `b-t`, `b-r`, `b-b`, `b-l` | directional border (grey-4) |
| `b-none` | remove border |
| `b-{variant}-{level}` | colored border (e.g. `b-primary-2`) |
| `b-grey-{1-7}` | grey border |
| `b-black`, `b-white` | black/white border |

### Border Radius

| Class | Value |
|-------|-------|
| `r-1` through `r-7` | `--radius-1` through `--radius-7` |
| `r-full` | 9999px (circle) |
| `r-none` | 0 |

### Overflow

| Class | Property |
|-------|----------|
| `overflow-hidden` | overflow: hidden |
| `overflow-auto` | overflow: auto |
| `overflow-scroll` | overflow: scroll |
| `overflow-x-auto` | overflow-x: auto |
| `overflow-x-hidden` | overflow-x: hidden |
| `overflow-y-auto` | overflow-y: auto |
| `overflow-y-hidden` | overflow-y: hidden |

### Size

| Class | Property |
|-------|----------|
| `w-full` | width: 100% |
| `w-auto` | width: auto |
| `h-full` | height: 100% |
| `h-auto` | height: auto |
| `h-screen` | height: 100vh (100dvh where supported) |
| `min-h-screen` | min-height: 100vh (100dvh where supported) |

### Position

| Class | Property |
|-------|----------|
| `relative` | position: relative |
| `absolute` | position: absolute |
| `fixed` | position: fixed |
| `sticky` | position: sticky |
| `static` | position: static |

### Opacity

Pattern: `opacity-{0-10}`

| Class | Value |
|-------|-------|
| `opacity-0` | 0 |
| `opacity-1` | 0.1 |
| `opacity-2` | 0.2 |
| ... | ... |
| `opacity-5` | 0.5 |
| ... | ... |
| `opacity-10` | 1 |

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

```html
<button>
  <svg>...</svg>
  <span class="sr-only">Close menu</span>
</button>
```

---

## Mixins

Import mixins in SCSS modules:

```scss
@use 'styles/mixins/mq' as *;
@use 'styles/mixins/typo' as *;
@use 'styles/mixins/form' as *;
@use 'styles/mixins/action' as *;
@use 'styles/mixins/anim' as *;
@use 'styles/mixins/color' as *;
```

### Media Queries

```scss
@use 'styles/mixins/mq' as *;

.component {
  padding: 1rem;

  @include mq-xs { /* ≥480px */ }
  @include mq-sm { /* ≥768px */ }
  @include mq-md { /* ≥1024px */ }
  @include mq-lg { /* ≥1200px */ }
  @include mq-xl { /* ≥1400px */ }
}
```

### Typography

```scss
@use 'styles/mixins/typo' as *;

.heading {
  @include base-heading;
}

.link {
  @include base-link;
}

.paragraph {
  @include base-paragraph;
}

.code-block {
  @include base-code-block;
}

.code-inline {
  @include base-code-inline;
}

.keyboard {
  @include base-keyboard;
}

.note {
  @include base-note;
}

.blockquote {
  @include base-blockquote;
}

.caption {
  @include base-caption;
}

.table {
  @include base-table;
}

.hr {
  @include base-hr;
}

.mark {
  @include base-mark;
}

.rich-text {
  @include base-list;
}
```

### Form

```scss
@use 'styles/mixins/form' as *;

.field {
  @include form-wrapper;
}

.label {
  @include form-label;
}

.input {
  @include form-input;
}

.disabled {
  @include form-disabled;
}

.spinner {
  @include form-spinner;
}
```

### Action (Button/Link)

```scss
@use 'styles/mixins/action' as *;

.button {
  @include action-base;
  @include action-appearances;
  @include action-variants;
  @include action-disabled;
}

.close-button {
  @include action-close;
}
```

### Animation

```scss
@use 'styles/mixins/anim' as *;

.fade {
  @include anim-fade;
}

.scale {
  @include anim-scale;
}

.slide-up {
  @include anim-slide-up;
}
```

Animation classes use `.active` and `.removing` states:

```html
<div class="fade">hidden</div>
<div class="fade active">visible</div>
<div class="fade removing">fading out</div>
```

### Color Variants

```scss
@use 'styles/mixins/color' as *;

.alert {
  @include color-variants('variant-');
}
```

Generates classes for all variants:
- `.variant-default`
- `.variant-primary`
- `.variant-secondary`
- `.variant-success`
- `.variant-danger`
- `.variant-warning`
- `.variant-info`

---

## Common Patterns

### Responsive Layout

```html
<div class="d-flex flex-col flex-md-row g-3 g-lg-4">
  <div class="p-3 p-md-4">Sidebar</div>
  <div class="p-3 p-md-4">Content</div>
</div>
```

### Centered Card

```html
<div class="d-flex justify-center items-center p-4">
  <div class="bg-white p-4 r-3">Card content</div>
</div>
```

### Section Spacing

```html
<section class="pv-4 pv-lg-5">
  <div class="text-center mb-4">
    <h2>Section Title</h2>
  </div>
  <div class="g-3">Content</div>
</section>
```

### Status Colors

```html
<span class="text-success-2">Success message</span>
<span class="text-danger-2">Error message</span>
<span class="text-warning-2">Warning message</span>
<div class="bg-info-3 p-3">Info box</div>
```

### Hide on Mobile

```html
<nav class="d-none d-md-flex g-2">Desktop nav</nav>
<button class="d-block d-md-none">Mobile menu</button>
```

### Truncated Text

```html
<p class="text-truncate" style="max-width: 200px">
  Very long text that will be cut off with an ellipsis
</p>
```

### Accessible Icon Button

```html
<button>
  <svg>...</svg>
  <span class="sr-only">Delete item</span>
</button>
```
