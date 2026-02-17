import clsx from 'clsx'
import { useHeaderNavLabel } from '../useHeaderNavLabel'
import type { HeaderDesktopTopNavTypes } from './HeaderDesktopTop.types'
import styles from './headerDesktopTop.module.scss'

export function HeaderDesktopTopNav({
  ref,
  children,
  className,
  'aria-label': ariaLabel,
  ...rest
}: HeaderDesktopTopNavTypes) {
  const label = useHeaderNavLabel('desktopTop', ariaLabel)

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
