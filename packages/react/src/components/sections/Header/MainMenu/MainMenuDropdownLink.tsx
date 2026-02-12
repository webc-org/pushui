import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { MainMenuDropdownLinkTypes } from '../Header.types'

export function MainMenuDropdownLink({
  asChild,
  children,
  className,
  current,
  ...props
}: MainMenuDropdownLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.mainDropdownLink,
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
