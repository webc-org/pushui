import type { ReactNode } from 'react'

export type ToastConfigTypes = {
  id?: number
  children?: ReactNode
  duration?: number
  closeLabel?: string
}

export type ToastTypes = ToastConfigTypes & {
  onRemove: (id: number) => void
}
