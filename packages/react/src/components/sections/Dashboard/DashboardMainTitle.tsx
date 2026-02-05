import { Title } from 'base/Title'
import clsx from 'clsx'
import styles from './Dashboard.module.scss'
import type { DashboardTitleTypes } from './Dashboard.types'

export function DashboardMainTitle({
  ref,
  children,
  className,
  ...rest
}: DashboardTitleTypes) {
  return (
    <Title
      ref={ref}
      className={clsx(styles.mainTitle, className)}
      {...rest}
    >
      {children}
    </Title>
  )
}
