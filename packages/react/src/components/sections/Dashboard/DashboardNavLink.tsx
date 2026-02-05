import clsx from 'clsx'
import { Slot } from 'utils'
import styles from './Dashboard.module.scss'
import type { DashboardNavLinkTypes } from './Dashboard.types'

export function DashboardNavLink({
  ref,
  children,
  className,
  asChild,
  current,
  ...rest
}: DashboardNavLinkTypes) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      className={clsx(
        styles.navLink,
        current && styles.current,
        className
      )}
      aria-current={current ? 'page' : undefined}
      {...rest}
    >
      {children}
    </Comp>
  )
}
