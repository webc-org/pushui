import type { ComponentPropsWithRef } from 'react'

export type SpinnerTypes = Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> & {
  width?: string
  borderWidth?: string
  label?: string
  /** When true, removes role="status" for use inside elements with aria-busy */
  inline?: boolean
}
