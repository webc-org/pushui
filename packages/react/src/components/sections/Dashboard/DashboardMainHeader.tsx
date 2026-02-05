import clsx from 'clsx'
import styles from './Dashboard.module.scss'
import type { DashboardHeaderTypes } from './Dashboard.types'

export function DashboardMainHeader({
  ref,
  children,
  className,
  ...rest
}: DashboardHeaderTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.mainHeader, className)}
      {...rest}
    >
      {children}
    </div>
  )
}
