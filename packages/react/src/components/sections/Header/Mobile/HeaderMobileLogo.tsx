import clsx from 'clsx'
import styles from '../Header.module.scss'
import type { HeaderMobileLogoTypes } from '../Header.types'

export function HeaderMobileLogo({
  ref,
  children,
  className,
  ...rest
}: HeaderMobileLogoTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.mobileLogo, className)}
      {...rest}
    >
      {children}
    </div>
  )
}
