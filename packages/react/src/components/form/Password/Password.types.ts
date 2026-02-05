import type { ComponentPropsWithRef } from 'react'

export type InputPasswordTypes = Omit<
  ComponentPropsWithRef<'input'>,
  'type'
> & {
  label?: string
  inputClassName?: string
  labelClassName?: string
  showLabel?: string
  hideLabel?: string
}
