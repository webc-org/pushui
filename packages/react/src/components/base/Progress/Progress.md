# Progress

Progress bar for displaying completion status or indeterminate loading states.

## Import

```tsx
import { Progress } from '@ui'
```

## Usage

### Basic

```tsx
<Progress value={75} />
```

### With Label

```tsx
<Progress value={75} showLabel />
{/* Displays: 75% */}
```

### Custom Max Value

```tsx
<Progress value={3} max={10} showLabel />
{/* Displays: 30% */}
```

### Custom Height

```tsx
<Progress value={50} height="0.25rem" />
<Progress value={50} height="0.5rem" />
<Progress value={50} height="1rem" />
```

### Variants

```tsx
<Progress value={25} variant="primary" />
<Progress value={50} variant="success" />
<Progress value={75} variant="warning" />
<Progress value={90} variant="danger" />
```

### Indeterminate (Loading)

```tsx
<Progress indeterminate />
<Progress indeterminate variant="primary" />
```

### With Accessible Label

```tsx
<Progress value={65} label="Upload progress" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Current value |
| `max` | `number` | `100` | Maximum value |
| `variant` | `ColorVariant` | `'primary'` | Color theme |
| `height` | `string` | `'0.5rem'` | Bar height |
| `showLabel` | `boolean` | `false` | Show percentage text |
| `indeterminate` | `boolean` | `false` | Animated loading state |
| `label` | `string` | - | Accessible label |
| `className` | `string` | - | Additional CSS class |

## Accessibility

- Uses `role="progressbar"`
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax` for value
- `aria-label` for description
- Indeterminate mode omits `aria-valuenow`

## Common Patterns

### File Upload Progress

```tsx
<Progress
  value={uploadProgress}
  variant={uploadProgress === 100 ? 'success' : 'primary'}
  showLabel
  label="File upload progress"
/>
```

### Step Progress

```tsx
<Progress
  value={currentStep}
  max={totalSteps}
  showLabel
  label={`Step ${currentStep} of ${totalSteps}`}
/>
```

### Loading State

```tsx
{isLoading ? (
  <Progress indeterminate variant="primary" />
) : (
  <Progress value={100} variant="success" />
)}
```

## Strapi Integration

```tsx
<Progress
  value={data.progress}
  max={data.total}
  variant={data.status === 'complete' ? 'success' : 'primary'}
  showLabel
/>
```
