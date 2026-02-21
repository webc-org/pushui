import type { ReactNode } from 'react'
import type { SearchResultTypes } from 'form/Search/Search.types'

export type HeaderSearchTypes = {
  triggerLabel?: string
  modalTitle?: ReactNode
  width?: string
  className?: string
  // Dropdown
  onSearch?: (query: string) => void
  onSelect?: (result: SearchResultTypes) => void
  results?: SearchResultTypes[]
  loading?: boolean
  noResultsText?: string
  renderResult?: (result: SearchResultTypes) => ReactNode
}
