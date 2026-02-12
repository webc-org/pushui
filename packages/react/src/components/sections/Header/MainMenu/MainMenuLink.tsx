import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { MainMenuLinkTypes } from '../Header.types'

export function MainMenuLink({
  asChild,
  children,
  className,
  current,
  icon,
  ...props
}: MainMenuLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.mainLink,
        icon && styles.icon,
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
