import type { ComponentPropsWithRef, ReactNode } from 'react'

export type PageTypes = ComponentPropsWithRef<'div'> & {
  children?: ReactNode
}
