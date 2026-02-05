import type { ComponentPropsWithRef } from 'react'
import type { ColorVariant } from 'types'

export type BadgeTypes = ComponentPropsWithRef<'div'> & {
  variant?: ColorVariant
}
