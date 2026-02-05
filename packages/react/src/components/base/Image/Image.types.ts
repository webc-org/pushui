import type { ComponentPropsWithRef, ReactNode } from 'react'

export type ImageTypes = Omit<ComponentPropsWithRef<'img'>, 'alt'> & {
  alt: string
  caption?: ReactNode
  asChild?: boolean
}
