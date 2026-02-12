import clsx from 'clsx'
import styles from '../Header.module.scss'
import type { MobileTopMenuLogoTypes } from '../Header.types'

export function MobileTopMenuLogo({
  ref,
  children,
  className,
  ...rest
}: MobileTopMenuLogoTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.mobileTopMenuLogo, className)}
      {...rest}
    >
      {children}
    </div>
  )
}
