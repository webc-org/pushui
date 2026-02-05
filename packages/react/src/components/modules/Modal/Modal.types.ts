import type { ReactNode } from 'react'

export type ModalConfigTypes = {
  id?: number
  title?: ReactNode
  children: ReactNode
  width?: string
  closeOnBackdrop?: boolean
  duration?: number
  closeLabel?: string
  hideCloseButton?: boolean
}

export type ModalTypes = ModalConfigTypes & {
  onRemove: (id: number) => void
}
