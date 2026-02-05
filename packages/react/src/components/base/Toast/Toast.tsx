import { useEffect, useEffectEvent, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { X } from 'lucide-react'
import styles from './Toast.module.scss'
import type { ToastTypes } from './Toast.types'

export function Toast({
  id,
  children,
  duration = 10000,
  onRemove,
  closeLabel = 'Close notification',
}: ToastTypes) {
  const [active, setActive] = useState(false)
  const [removing, setRemoving] = useState(false)

  const handleRemove = useEffectEvent(() => {
    setRemoving(true)
    setTimeout(() => {
      id && onRemove(id)
    }, 200)
  })

  // Activation animation (small delay ensures CSS transition triggers)
  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 10)
    return () => clearTimeout(timer)
  }, [])

  // Auto-close duration
  useEffect(() => {
    if (duration === Infinity) return

    const timer = setTimeout(handleRemove, duration)
    return () => clearTimeout(timer)
  }, [duration])

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={clsx(
        styles.toast,
        active && styles.active,
        removing && styles.removing
      )}
    >
      <div className={styles.container}>{children}</div>

      <Button
        type="button"
        title={closeLabel}
        onClick={handleRemove}
        aria-label={closeLabel}
        className={styles.close}
      >
        <X size={18} aria-hidden />
      </Button>
    </div>
  )
}
