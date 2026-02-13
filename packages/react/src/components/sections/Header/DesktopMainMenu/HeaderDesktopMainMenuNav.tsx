import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import type { HeaderDesktopMainMenuNavTypes } from './HeaderDesktopMainMenu.types'
import styles from './headerDesktopMainMenu.module.scss'

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
      className={clsx(styles.headerDesktopMainNav, className)}
      {...rest}
    >
      {children}
    </nav>
  )
}
