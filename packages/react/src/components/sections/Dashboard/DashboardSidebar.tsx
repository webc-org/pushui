import clsx from 'clsx'
import styles from './Dashboard.module.scss'
import type { DashboardSidebarTypes } from './Dashboard.types'

export function DashboardSidebar({
  ref,
  children,
  className,
  ...rest
}: DashboardSidebarTypes) {
  return (
    <aside ref={ref} className={clsx(styles.sidebar, className)} {...rest}>
      {children}
    </aside>
  )
}
