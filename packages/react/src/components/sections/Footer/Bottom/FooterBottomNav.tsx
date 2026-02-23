import clsx from 'clsx'
import styles from '../Footer.module.scss'
import type { FooterBottomNavTypes } from '../Footer.types'

export function FooterBottomNav({
  ref,
  children,
  className,
  ariaLabel = 'Legal navigation',
  ...rest
}: FooterBottomNavTypes) {
  return (
    <nav
      ref={ref}
      aria-label={ariaLabel}
      className={clsx(styles.bottomNav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
