import { Title } from 'base/Title'
import clsx from 'clsx'
import styles from './Auth.module.scss'
import type { AuthTitleTypes } from './Auth.types'

export function AuthTitle({
  level,
  children,
  className,
  ...rest
}: AuthTitleTypes) {
  return (
    <Title
      level={level}
      className={clsx(styles.title, className)}
      {...rest}
    >
      {children}
    </Title>
  )
}
