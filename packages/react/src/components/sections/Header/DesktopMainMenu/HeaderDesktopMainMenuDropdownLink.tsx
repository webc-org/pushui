import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderDesktopMainMenuDropdownLinkTypes } from './HeaderDesktopMainMenu.types'
import styles from './headerDesktopMain.module.scss'

export function HeaderDesktopMainMenuDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderDesktopMainMenuDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      role="menuitem"
      className={clsx(
        styles.dropdownLink,
        current && styles.current,
        className
      )}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {children}
    </Comp>
  )
}
