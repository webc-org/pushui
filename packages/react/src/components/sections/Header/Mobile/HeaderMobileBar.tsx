import clsx from 'clsx'
import styles from '../Header.module.scss'
import type { HeaderMobileBarTypes } from '../Header.types'

export function HeaderMobileBar({
  ref,
  children,
  className,
  ...rest
}: HeaderMobileBarTypes) {
  return (
    <div ref={ref} className={clsx(styles.mobileBar, className)} {...rest}>
      {children}
    </div>
  )
}
