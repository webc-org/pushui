import type { ComponentPropsWithRef } from 'react'

export type InputNumberTypes = Omit<
  ComponentPropsWithRef<'input'>,
  'onChange' | 'value' | 'step' | 'min' | 'max'
> & {
  value?: number
  step?: number
  min?: number
  max?: number
  onChange?: (value: number) => void
  label?: string
  inputClassName?: string
  labelClassName?: string
  incrementLabel?: string
  decrementLabel?: string
}
