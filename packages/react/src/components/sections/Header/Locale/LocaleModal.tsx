import clsx from 'clsx'
import { Globe } from 'lucide-react'
import { Grid } from 'modules/Grid'
import { useModals } from 'modules/Modal/ModalsContext'
import { useTheme } from 'utils'
import type { LocaleTypes } from './Locale.types'
import styles from './LocaleModal.module.scss'

export function LocaleModal({
  locales,
  current,
  onChange,
  triggerLabel,
  modalTitle,
  className,
}: LocaleTypes) {
  const { addModal, removeModal } = useModals()
  const { theme } = useTheme()

  const openModal = () => {
    const id = Date.now()
    addModal({
      id,
      title: modalTitle ?? 'Select language',
      children: (
        <Grid col={2} gap={0}>
          {locales.map((locale) => (
            <button
              key={locale.code}
              type="button"
              className={clsx(
                styles.modalButton,
                locale.code === current && styles.active
              )}
              onClick={() => {
                onChange(locale.code)
                removeModal(id)
              }}
            >
              {locale.label}
            </button>
          ))}
        </Grid>
      ),
    })
  }

  return (
    <div className={styles[theme]}>
      <button
        type="button"
        className={clsx(styles.modalTrigger, className)}
        onClick={openModal}
        aria-label={triggerLabel ?? 'Select language'}
      >
        <Globe size={20} aria-hidden="true" />
      </button>
    </div>
  )
}
