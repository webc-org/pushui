import clsx from 'clsx'
import styles from '../Header.module.scss'
import type { MobileMainMenuTopTypes } from '../Header.types'

export function MobileMainMenuTop({
  ref,
  className,
  children,
  ...rest
}: MobileMainMenuTopTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.mobileMainMenuTop, className)}
      {...rest}
    >
      {children}
    </div>
  )
}
