import clsx from 'clsx'
import type { HeaderMobileTopLogoTypes } from './HeaderMobileTop.types'
import styles from './headerMobileTop.module.scss'

export function HeaderMobileTopLogo({
  ref,
  children,
  className,
  ...rest
}: HeaderMobileTopLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.logo, className)} {...rest}>
      {children}
    </div>
  )
}
