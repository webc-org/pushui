import clsx from 'clsx'
import styles from './Dashboard.module.scss'
import type { DashboardNavTypes } from './Dashboard.types'

export function DashboardNav({
  ref,
  children,
  className,
  ...rest
}: DashboardNavTypes) {
  return (
    <nav ref={ref} className={clsx(styles.nav, className)} {...rest}>
      {children}
    </nav>
  )
}
