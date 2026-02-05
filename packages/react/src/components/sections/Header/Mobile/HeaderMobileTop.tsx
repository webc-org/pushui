import clsx from 'clsx'
import styles from '../Header.module.scss'
import type { HeaderMobileTopTypes } from '../Header.types'

export function HeaderMobileTop({
  ref,
  className,
  children,
  ...rest
}: HeaderMobileTopTypes) {
  return (
    <div ref={ref} className={clsx(styles.mobileTop, className)} {...rest}>
      {children}
    </div>
  )
}
