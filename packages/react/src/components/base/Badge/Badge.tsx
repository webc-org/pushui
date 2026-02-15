import clsx from 'clsx'
import styles from './Badge.module.scss'
import type { BadgeTypes } from './Badge.types'

export function Badge({
  ref,
  children,
  className,
  variant,
  ...rest
}: BadgeTypes) {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.badge,
        variant && styles[`variant-${variant}`],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
