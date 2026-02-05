import type { ComponentProps, Ref } from 'react'

export type RadioOptionTypes = {
  value: string
  label: string
  disabled?: boolean
}

export type InputRadioTypes = Omit<
  ComponentProps<'input'>,
  'onChange' | 'value' | 'ref'
> & {
  value?: string
  onChange?: (value: string) => void
  ref?: Ref<HTMLDivElement>
  options: RadioOptionTypes[]
  name: string
  label?: string
  optionClassName?: string
  labelClassName?: string
  direction?: 'vertical' | 'horizontal'
}
