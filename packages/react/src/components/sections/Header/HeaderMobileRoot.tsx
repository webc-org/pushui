import clsx from 'clsx'
import styles from './Header.module.scss'
import type { HeaderMobileRootTypes } from './Header.types'

export function HeaderMobileRoot({
  ref,
  children,
  className,
  ...rest
}: HeaderMobileRootTypes) {
  return (
    <div ref={ref} className={clsx(styles.mobile, className)} {...rest}>
      {children}
    </div>
  )
}
