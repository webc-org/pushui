import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { MobileMainMenuLinkTypes } from '../Header.types'

export function MobileMainMenuLink({
  asChild,
  children,
  className,
  current,
  ...props
}: MobileMainMenuLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.mobileMainMenuLink,
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
