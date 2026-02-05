import type { ComponentProps, Ref } from 'react'

export type CheckboxTypes = Omit<
  ComponentProps<'label'>,
  'onChange' | 'ref'
> & {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  ref?: Ref<HTMLInputElement>
  label?: string
  labelClassName?: string
  disabled?: boolean
}
