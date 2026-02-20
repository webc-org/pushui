import clsx from 'clsx'
import { Search } from 'lucide-react'
import { useModals } from 'modules/Modal/ModalsContext'
import { useHeaderTheme } from '../useHeaderTheme'
import styles from './HeaderSearch.module.scss'
import type { HeaderSearchTypes } from './HeaderSearch.types'

export function HeaderSearch({
  children,
  triggerLabel = 'Search',
  modalTitle,
  width,
  className,
}: HeaderSearchTypes) {
  const { addModal } = useModals()
  const theme = useHeaderTheme()

  const openModal = () => {
    addModal({
      title: modalTitle,
      children,
      width,
      closeOnBackdrop: true,
    })
  }

  return (
    <div className={styles[theme]}>
      <button
        type="button"
        className={clsx(styles.trigger, className)}
        onClick={openModal}
        aria-label={triggerLabel}
      >
        <Search size={20} aria-hidden="true" />
      </button>
    </div>
  )
}
