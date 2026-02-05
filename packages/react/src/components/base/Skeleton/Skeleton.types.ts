import type { ComponentPropsWithRef } from 'react'

export type SkeletonVariant = 'text' | 'circle' | 'rect'

export type SkeletonTypes = ComponentPropsWithRef<'div'> & {
  /** Shape variant */
  variant?: SkeletonVariant
  /** Width (CSS value) */
  width?: string | number
  /** Height (CSS value) */
  height?: string | number
  /** Disable animation */
  animation?: boolean
}
