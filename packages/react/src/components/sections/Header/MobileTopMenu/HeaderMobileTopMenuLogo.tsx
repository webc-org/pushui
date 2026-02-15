import clsx from 'clsx'
import type { HeaderMobileTopMenuLogoTypes } from './HeaderMobileTop.types'
import styles from './headerMobileTop.module.scss'

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
