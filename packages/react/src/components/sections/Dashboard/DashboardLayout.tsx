import clsx from 'clsx'
import styles from './Dashboard.module.scss'
import type { DashboardLayoutTypes } from './Dashboard.types'

export function DashboardLayout({
  ref,
  children,
  className,
  ...rest
}: DashboardLayoutTypes) {
  return (
    <div ref={ref} className={clsx(styles.layout, className)} {...rest}>
      {children}
    </div>
  )
}
