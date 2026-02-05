import type { ComponentPropsWithRef } from 'react'
import type { ActionAppearance, ColorVariant } from 'types'

/** @deprecated Use ActionAppearance instead */
export type LinkAppearance = ActionAppearance

export type LinkTypes = ComponentPropsWithRef<'a'> & {
  disabled?: boolean
  variant?: ColorVariant
  appearance?: ActionAppearance
  contrast?: boolean
  asChild?: boolean
}
