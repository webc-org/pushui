import { Title } from 'base/Title'
import clsx from 'clsx'
import styles from '../Footer.module.scss'
import type { FooterMainNavTypes } from '../Footer.types'

export function FooterMainNav({
  ref,
  children,
  className,
  title,
  'aria-label': ariaLabel,
  ...rest
}: FooterMainNavTypes) {
  return (
    <nav
      ref={ref}
      aria-label={ariaLabel || title || 'Footer navigation'}
      className={clsx(styles.mainNav, className)}
      {...rest}
    >
      {title && (
        <Title level="h3" className={styles.mainNavTitle}>
          {title}
        </Title>
      )}
      {children}
    </nav>
  )
}
