import type { ComponentPropsWithRef, ReactNode } from 'react'

export type DividerVariant = 'solid' | 'dashed' | 'dotted'
export type DividerSpacing = 1 | 2 | 3 | 4 | 5

export type DividerTypes = ComponentPropsWithRef<'hr'> & {
  /** Line style */
  variant?: DividerVariant
  /** Vertical spacing */
  spacing?: DividerSpacing
  /** Text to display in the middle of the divider */
  children?: ReactNode
  /** weather a line is visible or not */
  hidden?: boolean
}
