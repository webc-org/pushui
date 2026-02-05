import { type ReactNode, useCallback, useMemo, useState } from 'react'
import { Modal } from './Modal'
import { ModalsContext } from './ModalsContext'
import styles from './Modal.module.scss'
import type { ModalConfigTypes } from './Modal.types'

export function Modals({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<ModalConfigTypes[]>([])

  const addModal = useCallback((options: ModalConfigTypes) => {
    setModals((prev) => [...prev, { ...options, id: Date.now() }])
  }, [])

  const removeModal = useCallback((id: number) => {
    setModals((prev) => [...prev.filter((v) => id !== v.id)])
  }, [])

  const value = useMemo(
    () => ({ modals, addModal, removeModal }),
    [modals, addModal, removeModal]
  )

  return (
    <ModalsContext.Provider value={value}>
      {children}

      <div className={styles.modals}>
        {modals.map((modal) => (
          <Modal {...modal} key={modal.id} onRemove={removeModal} />
        ))}
      </div>
    </ModalsContext.Provider>
  )
}
