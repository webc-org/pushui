import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import type { HeaderDesktopMainMenuNavTypes } from './HeaderDesktopMainMenu.types'
import styles from './headerDesktopMain.module.scss'

export function HeaderDesktopMainMenuNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderDesktopMainMenuNavTypes) {
  const label = useHeaderNavLabel('main', ariaLabel)

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
