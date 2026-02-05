import type { ComponentPropsWithRef, ReactNode } from 'react'

export type BreadcrumbItemData = {
  label: string
  href?: string
}

export type BreadcrumbTypes = ComponentPropsWithRef<'nav'> & {
  items: BreadcrumbItemData[]
  separator?: ReactNode
  renderLink?: (item: BreadcrumbItemData, children: ReactNode) => ReactNode
}
