import type { ComponentPropsWithRef, ReactNode } from 'react'

export type PaginationTypes = Omit<
  ComponentPropsWithRef<'nav'>,
  'onChange'
> & {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
  getPageHref?: (page: number) => string
  renderLink?: (page: number, children: ReactNode) => ReactNode
  siblingCount?: number
  boundaryCount?: number
  showFirstLast?: boolean
  showPrevNext?: boolean
  disabled?: boolean
  firstPageLabel?: string
  previousPageLabel?: string
  nextPageLabel?: string
  lastPageLabel?: string
  pageLabel?: (page: number) => string
}
