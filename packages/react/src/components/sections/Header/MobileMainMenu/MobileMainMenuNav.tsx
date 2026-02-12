import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import styles from '../Header.module.scss'
import type { MobileMainMenuNavTypes } from '../Header.types'

export function MobileMainMenuNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: MobileMainMenuNavTypes) {
  const label = useHeaderNavLabel('mobile', ariaLabel)

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={clsx(styles.mobileMainMenuNav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
