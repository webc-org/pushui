import clsx from 'clsx'
import styles from './Progress.module.scss'
import type { ProgressTypes } from './Progress.types'

export function Progress({
  ref,
  height,
  value = 0,
  max = 100,
  variant = 'primary',
  showLabel = false,
  indeterminate = false,
  label,
  className,
  ...rest
}: ProgressTypes) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={label}
      className={clsx(
        styles.progress,
        styles[`variant-${variant}`],
        indeterminate && styles.indeterminate,
        className
      )}
      style={{ ...(height ? { height } : {}) }}
      {...rest}
    >
      <div
        className={styles.bar}
        style={indeterminate ? undefined : { width: `${percentage}%` }}
      />
      {showLabel && !indeterminate && (
        <span className={styles.label}>{Math.round(percentage)}%</span>
      )}
    </div>
  )
}
