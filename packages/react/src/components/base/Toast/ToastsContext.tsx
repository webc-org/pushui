import { createContext, useContext } from 'react'
import type { ToastConfigTypes } from './Toast.types'

type ToastContextTypes = {
  toasts: ToastConfigTypes[]
  addToast: (options: ToastConfigTypes) => void
  removeToast: (id: number) => void
}

export const ToastsContext = createContext<ToastContextTypes | undefined>(
  undefined
)

export const useToasts = () => {
  const context = useContext(ToastsContext)

  if (!context) {
    throw new Error('useToasts must be used within Toasts')
  }

  return context
}
