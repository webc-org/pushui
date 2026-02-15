import clsx from 'clsx'
import type { HeaderMobileMainMenuHeadTypes } from './HeaderMobileMain.types'
import styles from './headerMobileMain.module.scss'

export function HeaderMobileMainMenuHead({
  ref,
  className,
  children,
  ...rest
}: HeaderMobileMainMenuHeadTypes) {
  return (
    <div ref={ref} className={clsx(styles.head, className)} {...rest}>
      {children}
    </div>
  )
}
