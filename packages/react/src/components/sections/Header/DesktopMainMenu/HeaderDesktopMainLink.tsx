import clsx from 'clsx'
import { Slot } from 'utils'
import { useHeader } from '../HeaderContext'
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
  const { theme } = useHeader()
  const Comp = asChild ? Slot : 'a'
  const contrast = theme !== 'light'

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
