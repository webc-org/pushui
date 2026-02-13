import clsx from 'clsx'
import { Slot } from 'utils'
import styles from './HeaderDesktopTop.module.scss'
import type { HeaderDesktopTopMenuDropdownLinkTypes } from './HeaderDesktopTopMenu.types'

export function HeaderDesktopTopMenuDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderDesktopTopMenuDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      role="menuitem"
      className={clsx(styles.link, current && styles.current, className)}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {children}
    </Comp>
  )
}
