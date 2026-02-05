import clsx from 'clsx'
import styles from './Divider.module.scss'
import type { DividerTypes } from './Divider.types'

export function Divider({
  ref,
  variant = 'solid',
  spacing,
  className,
  children,
  hidden,
  ...rest
}: DividerTypes) {
  if (children) {
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={clsx(
          styles.dividerWithText,
          hidden && styles.hidden,
          styles[`spacing-${spacing}`],
          className
        )}
        {...rest}
      >
        <hr
          className={clsx(styles.divider, styles[`variant-${variant}`])}
        />
        <span className={styles.dividerText}>{children}</span>
        <hr
          className={clsx(styles.divider, styles[`variant-${variant}`])}
        />
      </div>
    )
  }

  return (
    <hr
      ref={ref}
      className={clsx(
        styles.divider,
        hidden && styles.hidden,
        styles[`variant-${variant}`],
        styles[`spacing-${spacing}`],
        className
      )}
      {...rest}
    />
  )
}
