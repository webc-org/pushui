import type { ComponentPropsWithRef } from 'react'
import type { ActionAppearance, ColorVariant } from 'types'

/** @deprecated Use ActionAppearance instead */
export type ButtonAppearance = ActionAppearance

export type ButtonTypes = ComponentPropsWithRef<'button'> & {
  variant?: ColorVariant
  appearance?: ActionAppearance
  contrast?: boolean
  loading?: boolean
}
