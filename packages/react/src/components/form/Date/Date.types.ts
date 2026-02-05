import type { ComponentProps, Ref } from 'react'

export type InputDateTypes = Omit<
  ComponentProps<'div'>,
  'onChange' | 'ref'
> & {
  selected: Date | null
  onChange: (date: Date | null) => void
  onBlur?: () => void
  ref?: Ref<HTMLInputElement>
  placeholder?: string
  dateFormat?: string
  minDate?: Date
  maxDate?: Date
  disabled?: boolean
  label?: string
  months?: string[]
  daysShort?: string[]
  selectDateLabel?: string
  previousMonthLabel?: string
  nextMonthLabel?: string
  cancelLabel?: string
  applyLabel?: string
}
