import clsx from 'clsx'
import { Slot, useTheme } from 'utils'
import type { HeaderMobileMainLinkTypes } from './HeaderMobileMain.types'
import styles from './headerMobileMain.module.scss'

export function HeaderMobileMainLink({
  asChild,
  children,
  className,
  current,
  appearance,
  variant,
  ...props
}: HeaderMobileMainLinkTypes) {
  const Comp = asChild ? Slot : 'a'
  const { theme } = useTheme()
  const contrast = theme === 'dark'

  return (
    <Comp
      className={clsx(
        styles.link,
        current && styles.current,
        appearance && styles[`appearance-${appearance}`],
        variant && styles[`variant-${variant}`],
        contrast && styles.contrast,
        className
      )}
      aria-current={current ? 'page' : undefined}
      {...props}
    >
      {children}
    </Comp>
  )
}
