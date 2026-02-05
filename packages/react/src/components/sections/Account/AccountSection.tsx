import clsx from 'clsx'
import styles from './Account.module.scss'
import type { AccountSectionTypes } from './Account.types'

export function AccountSection({
  ref,
  children,
  className,
  ...rest
}: AccountSectionTypes) {
  return (
    <div ref={ref} className={clsx(styles.section, className)} {...rest}>
      {children}
    </div>
  )
}
