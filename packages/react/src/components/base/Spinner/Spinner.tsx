import clsx from 'clsx'
import styles from './Spinner.module.scss'
import type { SpinnerTypes } from './Spinner.types'

export function Spinner({
  ref,
  className,
  width,
  borderWidth,
  label = 'Loading',
  inline = false,
  style,
  ...rest
}: SpinnerTypes) {
  return (
    <div
      ref={ref}
      role={inline ? undefined : 'status'}
      aria-label={inline ? undefined : label}
      aria-hidden={inline || undefined}
      className={clsx(styles.spinner, className)}
      style={{
        ...(width ? { width } : {}),
        ...(borderWidth ? { borderWidth } : {}),
        ...style,
      }}
      {...rest}
    />
  )
}
