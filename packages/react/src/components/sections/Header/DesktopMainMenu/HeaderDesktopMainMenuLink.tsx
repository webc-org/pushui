import clsx from 'clsx'
import { Slot } from 'utils'
import type { HeaderDesktopMainMenuLinkTypes } from './HeaderDesktopMainMenu.types'
import styles from './headerDesktopMainMenu.module.scss'

export function HeaderDesktopMainMenuLink({
  asChild,
  children,
  className,
  current,
  appearance,
  variant,
  ...props
}: HeaderDesktopMainMenuLinkTypes) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      className={clsx(
        styles.link,
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
