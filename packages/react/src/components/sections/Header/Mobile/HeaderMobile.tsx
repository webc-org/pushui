import clsx from 'clsx'
import styles from '../Header.module.scss'
import type { HeaderMobileTypes } from '../Header.types'

export function HeaderMobile({
  ref,
  children,
  className,
  ...rest
}: HeaderMobileTypes) {
  return (
    <div ref={ref} className={clsx(styles.mobile, className)} {...rest}>
      {children}
    </div>
  )
}
