# Slider

Range slider for numeric input with single or dual thumbs, marks, and value labels.

## Import

```tsx
import { Slider } from '@ui'
```

## Usage

### Basic

```tsx
<Slider aria-label="Volume" defaultValue={30} />
```

### Controlled

```tsx
const [value, setValue] = useState(50)

<Slider
  aria-label="Brightness"
  value={value}
  onChange={setValue}
/>
```

### Range Slider

```tsx
const [range, setRange] = useState<[number, number]>([20, 80])

<Slider
  range
  aria-label="Price range"
  value={range}
  onChange={setRange}
/>
```

### With Value Label

```tsx
<Slider
  aria-label="Volume"
  valueLabelDisplay="on"
/>

<Slider
  aria-label="Volume"
  valueLabelDisplay="auto"  // Shows on hover/drag
/>
```

### Custom Step

```tsx
<Slider
  aria-label="Temperature"
  min={0}
  max={100}
  step={5}
/>
```

### With Marks

```tsx
{/* Auto marks at each step */}
<Slider marks min={0} max={100} step={25} />

{/* Custom marks */}
<Slider
  marks={[
    { value: 0, label: '0°' },
    { value: 25, label: '25°' },
    { value: 50, label: '50°' },
    { value: 75, label: '75°' },
    { value: 100, label: '100°' },
  ]}
/>
```

### Vertical Orientation

```tsx
<Slider
  orientation="vertical"
  aria-label="Volume"
  style={{ height: 200 }}
/>
```

### Custom Format

```tsx
<Slider
  aria-label="Price"
  valueLabelDisplay="on"
  valueLabelFormat={(v) => `$${v}`}
/>
```

## Props

### Common Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number \| null` | `1` | Step increment (null = marks only) |
| `disabled` | `boolean` | `false` | Disable slider |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `size` | `'sm' \| 'md'` | `'md'` | Slider size |
| `track` | `'normal' \| 'inverted' \| false` | `'normal'` | Track display mode |
| `marks` | `boolean \| SliderMark[]` | `false` | Show marks |
| `valueLabelDisplay` | `'auto' \| 'on' \| 'off'` | `'off'` | Value label visibility |
| `valueLabelFormat` | `(value) => string` | - | Format value label |
| `getAriaValueText` | `(value) => string` | - | Accessible value text |
| `aria-label` | `string` | - | Accessible label |
| `aria-labelledby` | `string` | - | ID of labelling element |

### Single Slider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `range` | `false` | - | Single thumb mode |
| `value` | `number` | - | Controlled value |
| `defaultValue` | `number` | `min` | Initial value |
| `onChange` | `(value: number) => void` | - | Change handler |
| `onChangeCommitted` | `(value: number) => void` | - | Handler on release |

### Range Slider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `range` | `true` | - | Dual thumb mode |
| `value` | `[number, number]` | - | Controlled value |
| `defaultValue` | `[number, number]` | `[min, max]` | Initial value |
| `onChange` | `(value: [number, number]) => void` | - | Change handler |
| `onChangeCommitted` | `(value: [number, number]) => void` | - | Handler on release |
| `minDistance` | `number` | `0` | Min gap between thumbs |
| `disableSwap` | `boolean` | `false` | Prevent thumb swapping |

### SliderMark Type

```tsx
type SliderMark = {
  value: number
  label?: string
}
```

## Keyboard Navigation

- **Arrow Left/Down**: Decrease value
- **Arrow Right/Up**: Increase value
- **Shift + Arrow**: Large step (10% of range)
- **Home**: Set to minimum
- **End**: Set to maximum
- **Page Up/Down**: Large step

## Accessibility

- Uses `role="slider"` for each thumb
- `aria-valuemin`, `aria-valuemax`, `aria-valuenow`
- `aria-valuetext` for human-readable value
- Full keyboard support

## Common Patterns

### Price Range Filter

```tsx
<Slider
  range
  min={0}
  max={1000}
  value={priceRange}
  onChange={setPriceRange}
  valueLabelDisplay="on"
  valueLabelFormat={(v) => `$${v}`}
  marks={[
    { value: 0, label: '$0' },
    { value: 500, label: '$500' },
    { value: 1000, label: '$1000' },
  ]}
/>
```

### Volume Control

```tsx
<Slider
  aria-label="Volume"
  value={volume}
  onChange={setVolume}
  valueLabelDisplay="auto"
/>
```

## Strapi Integration

```tsx
<Slider
  min={field.min}
  max={field.max}
  step={field.step}
  value={formData[field.name]}
  onChange={(v) => updateField(field.name, v)}
/>
```
