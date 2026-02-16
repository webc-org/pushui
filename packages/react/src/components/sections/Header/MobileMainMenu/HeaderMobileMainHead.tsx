import clsx from 'clsx'
import type { HeaderMobileMainHeadTypes } from './HeaderMobileMain.types'
import styles from './headerMobileMain.module.scss'

export function HeaderMobileMainHead({
  ref,
  className,
  children,
  ...rest
}: HeaderMobileMainHeadTypes) {
  return (
    <div ref={ref} className={clsx(styles.head, className)} {...rest}>
      {children}
    </div>
  )
}
