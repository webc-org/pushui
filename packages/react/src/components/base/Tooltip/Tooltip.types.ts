import type { ComponentPropsWithRef, ReactNode } from 'react'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export type TooltipTypes = Omit<
  ComponentPropsWithRef<'div'>,
  'content'
> & {
  /** Tooltip content */
  content: ReactNode
  /** Position relative to trigger */
  position?: TooltipPosition
  /** Delay before showing (ms) */
  delay?: number
  /** Children element that triggers the tooltip */
  children: ReactNode
  /** Disable the tooltip */
  disabled?: boolean
}
