import { Title } from 'base/Title'
import clsx from 'clsx'
import styles from './Account.module.scss'
import type { AccountTitleTypes } from './Account.types'

export function AccountTitle({
  children,
  className,
  level = 'h2',
}: AccountTitleTypes) {
  return (
    <Title level={level} className={clsx(styles.title, className)}>
      {children}
    </Title>
  )
}
