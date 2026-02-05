import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { HeaderMobileDropdownLinkTypes } from '../Header.types'

export function HeaderMobileDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: HeaderMobileDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.mobileDropdownLink,
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
