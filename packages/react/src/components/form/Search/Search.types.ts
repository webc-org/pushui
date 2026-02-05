import type { ComponentPropsWithRef, ReactNode } from 'react'

export type SearchResultTypes = {
  id: string | number
  label: string
  [key: string]: unknown
}

export type InputSearchTypes = Omit<
  ComponentPropsWithRef<'input'>,
  'type' | 'onChange' | 'results' | 'onSelect'
> & {
  label?: string
  inputClassName?: string
  labelClassName?: string

  // Mode
  mode?: 'redirect' | 'dropdown'

  // Redirect mode
  action?: string
  method?: 'get' | 'post'
  paramName?: string

  // Dropdown mode
  results?: SearchResultTypes[]
  onSearch?: (query: string) => void
  onSelect?: (result: SearchResultTypes) => void
  onLoadMore?: () => void
  hasMore?: boolean
  loading?: boolean
  searchDebounce?: number
  minChars?: number
  renderResult?: (result: SearchResultTypes) => ReactNode
  noResultsText?: string
  flip?: boolean

  // Common
  value?: string
  onChange?: (value: string) => void
  clearLabel?: string
}
