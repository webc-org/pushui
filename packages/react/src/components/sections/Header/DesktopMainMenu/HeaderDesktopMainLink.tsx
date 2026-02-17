import clsx from 'clsx'
import { Slot, useTheme } from 'utils'
import type { HeaderDesktopMainLinkTypes } from './HeaderDesktopMain.types'
import styles from './headerDesktopMain.module.scss'

export function HeaderDesktopMainLink({
  asChild,
  children,
  className,
  current,
  appearance,
  variant,
  ...props
}: HeaderDesktopMainLinkTypes) {
  const { theme } = useTheme()
  const Comp = asChild ? Slot : 'a'
  const contrast = theme === 'dark'

  return (
    <Comp
      className={clsx(
        styles.link,
        appearance && styles[`appearance-${appearance}`],
        variant && styles[`variant-${variant}`],
        contrast && styles.contrast,
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
