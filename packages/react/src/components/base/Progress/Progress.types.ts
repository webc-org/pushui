import type { ComponentPropsWithRef } from 'react'
import type { ColorVariant } from 'types'

export type ProgressTypes = Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> & {
  value?: number
  max?: number
  variant?: ColorVariant
  height?: string
  showLabel?: boolean
  indeterminate?: boolean
  label?: string
}
