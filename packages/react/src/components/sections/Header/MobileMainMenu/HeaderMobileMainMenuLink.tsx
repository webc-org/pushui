import clsx from 'clsx'
import { Slot } from 'utils'
import styles from '../Header.module.scss'
import type { HeaderMobileMainMenuLinkTypes } from './HeaderMobileMainMenu.types'

export function HeaderMobileMainMenuLink({
  asChild,
  children,
  className,
  current,
  appearance,
  variant,
  ...props
}: HeaderMobileMainMenuLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  return (
    <Comp
      className={clsx(
        styles.headerMobileMainMenuLink,
        current && styles.current,
        appearance && styles[`appearance-${appearance}`],
        variant && styles[`variant-${variant}`],
        className
      )}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {children}
    </Comp>
  )
}
