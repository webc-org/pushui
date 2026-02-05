import clsx from 'clsx'
import styles from './Dashboard.module.scss'
import type { DashboardMainTypes } from './Dashboard.types'

export function DashboardMain({
  ref,
  children,
  className,
  ...rest
}: DashboardMainTypes) {
  return (
    <main ref={ref} className={clsx(styles.main, className)} {...rest}>
      {children}
    </main>
  )
}
