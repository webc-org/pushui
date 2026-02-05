import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Toast } from './Toast'
import { ToastsContext } from './ToastsContext'
import styles from './Toast.module.scss'
import type { ToastConfigTypes } from './Toast.types'

export function Toasts({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastConfigTypes[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const addToast = useCallback((options: ToastConfigTypes) => {
    setToasts((prev) => [...prev, { ...options, id: Date.now() }])
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((v) => id !== v.id))
  }, [])

  const value = useMemo(
    () => ({ toasts, addToast, removeToast }),
    [toasts, addToast, removeToast]
  )

  // Focus trap for toasts
  useEffect(() => {
    if (toasts.length === 0) return

    const container = containerRef.current
    if (!container) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusableElements = container.querySelectorAll<HTMLElement>(
        'button:not([disabled])'
      )
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      // Check if focus is within the toasts container
      if (!container.contains(document.activeElement)) return

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [toasts.length])

  // Focus first toast when a new one is added
  useEffect(() => {
    if (toasts.length === 0) return

    const container = containerRef.current
    if (!container) return

    // Small delay to ensure the toast is rendered
    const timer = setTimeout(() => {
      const lastToast = container.querySelector<HTMLElement>(
        '[role="status"]:last-child button'
      )
      lastToast?.focus()
    }, 50)

    return () => clearTimeout(timer)
  }, [toasts.length])

  return (
    <ToastsContext.Provider value={value}>
      {children}

      <div ref={containerRef} className={styles.toasts}>
        {toasts.map((toast) => (
          <Toast {...toast} key={toast.id} onRemove={removeToast} />
        ))}
      </div>
    </ToastsContext.Provider>
  )
}
