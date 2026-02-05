import type { ComponentPropsWithRef } from 'react'
import type { ColorVariant, FontSizes } from 'types'

export type AvatarTypes = Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> & {
  src?: string
  alt?: string
  name?: string
  width?: string
  fontSize?: FontSizes
  variant?: ColorVariant
  defaultLabel?: string
}
