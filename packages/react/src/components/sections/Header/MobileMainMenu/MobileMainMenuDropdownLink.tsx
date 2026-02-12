import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { MobileMainMenuDropdownLinkTypes } from '../Header.types'

export function MobileMainMenuDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: MobileMainMenuDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.mobileMainMenuDropdownLink,
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
