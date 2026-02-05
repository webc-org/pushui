import type { ComponentProps } from 'react'

export type SliderMark = {
  value: number
  label?: string
}

export type SliderOrientation = 'horizontal' | 'vertical'

export type SliderSize = 'sm' | 'md'

export type SliderTrack = 'normal' | 'inverted' | false

export type SliderValueLabelDisplay = 'auto' | 'on' | 'off'

export type SliderBaseTypes = Omit<
  ComponentProps<'input'>,
  'value' | 'defaultValue' | 'onChange' | 'size' | 'step'
> & {
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
  /** Step increment. Set to null to only allow values from marks */
  step?: number | null
  /** Whether the slider is disabled */
  disabled?: boolean
  /** Orientation of the slider */
  orientation?: SliderOrientation
  /** Size variant */
  size?: SliderSize
  /** Track display mode */
  track?: SliderTrack
  /** Show marks on the slider. True for automatic marks at each step, or array for custom marks */
  marks?: boolean | SliderMark[]
  /** Value label display mode */
  valueLabelDisplay?: SliderValueLabelDisplay
  /** Format the value label */
  valueLabelFormat?: (value: number) => string
  /** Get aria value text for accessibility */
  getAriaValueText?: (value: number) => string
  /** Label for accessibility */
  'aria-label'?: string
  /** ID of element that labels the slider */
  'aria-labelledby'?: string
  /** Custom class name */
  className?: string
}

export type SliderSingleTypes = SliderBaseTypes & {
  /** Whether this is a range slider */
  range?: false
  /** Current value (controlled) */
  value?: number
  /** Default value (uncontrolled) */
  defaultValue?: number
  /** Callback when value changes */
  onChange?: (value: number) => void
  /** Callback when value change is committed (on mouse up / touch end) */
  onChangeCommitted?: (value: number) => void
}

export type SliderRangeTypes = SliderBaseTypes & {
  /** Whether this is a range slider */
  range: true
  /** Current value (controlled) */
  value?: [number, number]
  /** Default value (uncontrolled) */
  defaultValue?: [number, number]
  /** Callback when value changes */
  onChange?: (value: [number, number]) => void
  /** Callback when value change is committed (on mouse up / touch end) */
  onChangeCommitted?: (value: [number, number]) => void
  /** Minimum distance between the two thumbs */
  minDistance?: number
  /** Disable swapping thumbs when they meet */
  disableSwap?: boolean
}

export type SliderTypes = SliderSingleTypes | SliderRangeTypes
