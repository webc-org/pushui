import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderMobileMainMenuDropdownLinkTypes } from './HeaderMobileMain.types'
import styles from './headerMobileMain.module.scss'

export function HeaderMobileMainMenuDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderMobileMainMenuDropdownLinkTypes) {
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
