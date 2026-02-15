import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import type { HeaderMobileMainMenuNavTypes } from './HeaderMobileMain.types'
import styles from './headerMobileMain.module.scss'

export function HeaderMobileMainMenuNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderMobileMainMenuNavTypes) {
  const label = useHeaderNavLabel('mobile', ariaLabel)

  return (
    <nav
      ref={ref}
      aria-label={label}
      className={clsx(styles.nav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
