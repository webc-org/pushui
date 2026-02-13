import clsx from 'clsx'
import styles from '../Header.module.scss'
import type { HeaderMobileMainMenuHeadTypes } from './HeaderMobileMainMenu.types'

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
