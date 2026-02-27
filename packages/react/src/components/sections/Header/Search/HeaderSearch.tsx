import clsx from 'clsx'
import { InputSearch } from 'form/Search/Search'
import { Search } from 'lucide-react'
import { useModals } from 'modules/Modal/ModalsContext'
import styles from './HeaderSearch.module.scss'
import type { HeaderSearchTypes } from './HeaderSearch.types'

export function HeaderSearch({
  className,
  modalTitle = 'Search',
  triggerLabel = 'Search',
  onSearch,
  onSelect,
  results = [],
  loading,
  noResultsText,
  renderResult,
}: HeaderSearchTypes) {
  const { addModal } = useModals()

  const openModal = () => {
    addModal({
      title: modalTitle,
      children: (
        <InputSearch
          mode="dropdown"
          inline
          onSearch={onSearch}
          onSelect={onSelect}
          results={results}
          loading={loading}
          noResultsText={noResultsText}
          renderResult={renderResult}
        />
      ),
      width: '56rem',
      position: 'top',
      closeOnBackdrop: true,
    })
  }

  return (
    <button
      type="button"
      className={clsx(styles.trigger, className)}
      onClick={openModal}
      aria-label={triggerLabel}
    >
      <Search size={24} aria-hidden="true" />
    </button>
  )
}
