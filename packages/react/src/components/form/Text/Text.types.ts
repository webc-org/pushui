import type { ComponentPropsWithRef } from 'react'

export type InputTextTypes = Omit<
  ComponentPropsWithRef<'input'>,
  'type'
> & {
  type?: 'text' | 'email' | 'url' | 'tel'
  label?: string
  inputClassName?: string
  labelClassName?: string
}
