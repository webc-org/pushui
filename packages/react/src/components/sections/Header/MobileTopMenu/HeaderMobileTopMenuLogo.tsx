import clsx from 'clsx'
import type { HeaderMobileTopMenuLogoTypes } from './HeaderMobileTopMenu.types'
import styles from './headerMobileTopMenu.module.scss'

export function HeaderMobileTopMenuLogo({
  ref,
  children,
  className,
  ...rest
}: HeaderMobileTopMenuLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </div>
  )
}
