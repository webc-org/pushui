import type { ComponentProps, ReactNode, RefObject } from 'react'

// OPTIONS

export type OptionTypes = {
  value: string
  label: string
}

export type OptionListTypes = ComponentProps<'ul'> & {
  controlId: string
}

export type OptionListItemTypes = {
  option: OptionTypes
  index: number
  disabled?: boolean
  className?: string
}

// CHOICE

export type ChoiceListTypes = ComponentProps<'ul'> & {
  selectedOptions: OptionTypes[]
}

export type ChoiceListItemTypes = {
  option: OptionTypes
  onRemove: (option: OptionTypes) => void
  disabled?: boolean
}

export type ChoiceClearTypes = ComponentProps<'button'>

// SELECT

export type SelectActionsTypes = ComponentProps<'div'>

export type SelectPlaceholderTypes = ComponentProps<'span'>

export type SelectModalTypes = ComponentProps<'div'>

export type SelectRootTypes = Omit<ComponentProps<'div'>, 'onChange'> & {
  options: OptionTypes[]
  value: OptionTypes[]
  onChange: (values: OptionTypes[]) => void
  disabled?: boolean
  label?: string
  labelClassName?: string
  placeholder?: string
  flip?: boolean
  multiple?: boolean
  searchable?: boolean
  searchDebounce?: number
  onSearch?: (query: string) => void
  onLoadMore?: () => void
  hasMore?: boolean
  loading?: boolean
  children: ReactNode
  clearAllLabel?: string
  selectedOptionsLabel?: string
  removeLabel?: string
  searchLabel?: string
}

// CONTEXT

export type SelectContextTypes = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  toggleOption: (option: OptionTypes) => void
  updateMenuPosition: () => void
  clearAll: () => void
  menuPosition: {
    top: number
    left: number
    width: number
    flip: boolean
  }
  rootRef: RefObject<HTMLDivElement | null>
  menuRef: RefObject<HTMLDivElement | null>
  searchInputRef: RefObject<HTMLInputElement | null>
  choiceButtonRefs: RefObject<Map<string, HTMLButtonElement>>
  controlId: string
  value: OptionTypes[]
  options: OptionTypes[]
  filteredOptions: OptionTypes[]
  focusedIndex: number
  setFocusedIndex: (index: number) => void
  disabled?: boolean
  placeholder: string
  multiple?: boolean
  searchable?: boolean
  searchQuery: string
  setSearchQuery: (query: string) => void
  onLoadMore?: () => void
  hasMore?: boolean
  loading?: boolean
  clearAllLabel: string
  selectedOptionsLabel: string
  removeLabel: string
  searchLabel: string
}
