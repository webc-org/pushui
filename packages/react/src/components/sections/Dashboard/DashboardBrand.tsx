import clsx from 'clsx'
import styles from './Dashboard.module.scss'
import type { DashboardBrandTypes } from './Dashboard.types'

export function DashboardBrand({
  ref,
  children,
  className,
  ...rest
}: DashboardBrandTypes) {
  return (
    <div ref={ref} className={clsx(styles.brand, className)} {...rest}>
      {children}
    </div>
  )
}
