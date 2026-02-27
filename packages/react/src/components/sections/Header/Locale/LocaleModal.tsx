import { useCallback, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'form/Button'
import {
  OptionList,
  OptionListItem,
  SelectActions,
  SelectBox,
  SelectModal,
  SelectPlaceholder,
  SelectRoot,
  SelectSearch,
  SelectTrigger,
  useSelectContext,
} from 'form/Select'
import type { OptionTypes } from 'form/Select/Select.types'
import { Globe } from 'lucide-react'
import { useModals } from 'modules/Modal/ModalsContext'
import type { LocaleTypes } from './Locale.types'
import styles from './LocaleModal.module.scss'

function LocaleOptionList() {
  const { filteredOptions, controlId } = useSelectContext()
  return (
    <OptionList controlId={controlId}>
      {filteredOptions.map((opt, i) => (
        <OptionListItem key={opt.value} option={opt} index={i} />
      ))}
    </OptionList>
  )
}

type LocaleModalContentTypes = {
  options: OptionTypes[]
  current: string
  onApply: (code: string) => void
  onCancel: () => void
  applyLabel?: string
  cancelLabel?: string
  languageLabel?: string
  currencyLabel?: string
}

function LocaleModalContent({
  options,
  current,
  onApply,
  onCancel,
  applyLabel = 'Apply',
  cancelLabel = 'Cancel',
  // currencyLabel = 'Select Currency',
  languageLabel = 'Select Language',
}: LocaleModalContentTypes) {
  const [selected, setSelected] = useState(
    options.filter((o) => o.value === current)
  )

  const apply = useCallback(() => {
    const opt = selected[0]
    if (opt) onApply(opt.value)
  }, [selected, onApply])

  return (
    <div className={styles.modalContent}>
      <SelectRoot
        placeholder={languageLabel}
        options={options}
        value={selected}
        searchable
        inline
        onChange={(values: OptionTypes[]) => {
          if (values[0]) setSelected(values)
        }}
      >
        <SelectBox>
          <SelectSearch />
          <SelectPlaceholder />
          <SelectActions>
            <SelectTrigger />
          </SelectActions>
        </SelectBox>
        <SelectModal>
          <LocaleOptionList />
        </SelectModal>
      </SelectRoot>

      <div className={styles.modalActions}>
        <Button
          className={styles.button}
          variant="primary"
          appearance="button"
          onClick={apply}
        >
          {applyLabel}
        </Button>
        <Button
          className={styles.button}
          variant="secondary"
          appearance="button"
          onClick={onCancel}
        >
          {cancelLabel}
        </Button>
      </div>
    </div>
  )
}

export function LocaleModal({
  locales,
  current,
  onChange,
  triggerLabel,
  modalTitle,
  applyLabel,
  cancelLabel,
  className,
}: LocaleTypes) {
  const { addModal, removeModal } = useModals()

  const openModal = () => {
    const id = Date.now()
    const options = locales.map((l) => ({ value: l.code, label: l.label }))

    addModal({
      id,
      title: modalTitle ?? 'Select language',
      children: (
        <LocaleModalContent
          options={options}
          current={current}
          applyLabel={applyLabel}
          cancelLabel={cancelLabel}
          onApply={(code) => {
            onChange(code)
            removeModal(id)
          }}
          onCancel={() => removeModal(id)}
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
      className={clsx(styles.modalTrigger, className)}
      onClick={openModal}
      aria-label={triggerLabel ?? 'Select language'}
    >
      <Globe size={20} aria-hidden="true" />
    </button>
  )
}
