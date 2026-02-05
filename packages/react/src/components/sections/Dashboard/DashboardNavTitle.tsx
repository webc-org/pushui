import { Title, type TitleTypes } from 'base/Title'
import clsx from 'clsx'
import styles from './Dashboard.module.scss'

export function DashboardNavTitle({
  ref,
  level,
  children,
  className,
  ...rest
}: TitleTypes) {
  return (
    <Title
      ref={ref}
      level={level}
      className={clsx(styles.navTitle, className)}
      {...rest}
    >
      {children}
    </Title>
  )
}
