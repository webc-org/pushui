import type { ComponentPropsWithRef, ReactNode } from 'react'

export type PageRootTypes = ComponentPropsWithRef<'div'> & {
  children?: ReactNode
}
