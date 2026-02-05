import clsx from 'clsx'
import styles from '../Header.module.scss'
import type { HeaderMainLogoTypes } from '../Header.types'

export function HeaderMainLogo({
  ref,
  children,
  className,
  ...rest
}: HeaderMainLogoTypes) {
  return (
    <div ref={ref} className={clsx(styles.mainLogo, className)} {...rest}>
      {children}
    </div>
  )
}
