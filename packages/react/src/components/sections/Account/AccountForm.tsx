import clsx from 'clsx'
import styles from './Account.module.scss'
import type { AccountFormTypes } from './Account.types'

export function AccountForm({
  ref,
  children,
  className,
  ...rest
}: AccountFormTypes) {
  return (
    <form ref={ref} className={clsx(styles.form, className)} {...rest}>
      {children}
    </form>
  )
}
