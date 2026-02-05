import type { ComponentPropsWithRef } from 'react'

export type InputTextareaTypes = Omit<
  ComponentPropsWithRef<'textarea'>,
  'onChange' | 'value'
> & {
  value?: string
  onChange?: (value: string) => void
  label?: string
  textareaClassName?: string
  labelClassName?: string
  showCount?: boolean
}
