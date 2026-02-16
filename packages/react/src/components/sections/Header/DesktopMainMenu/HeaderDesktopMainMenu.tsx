import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { useHeader } from '../HeaderContext'
import type { HeaderDesktopMainMenuTypes } from './HeaderDesktopMain.types'
import styles from './headerDesktopMain.module.scss'

export function HeaderDesktopMainMenu({
  ref,
  children,
  className,
  containerClassName,
  style,
  ...rest
}: HeaderDesktopMainMenuTypes) {
  const { isScrolled, textColor, desktop } = useHeader()
  const opacity = isScrolled ? '1' : desktop.main.bgOpacity
  const shadow = isScrolled || opacity === '1' ? 'var(--shadow-1)' : 'none'

  return (
    <div
      ref={ref}
      style={
        {
          ...style,
          '--header-desktop-main-bg': desktop.main.bgColor,
          '--header-desktop-main-shadow': shadow,
          '--header-desktop-main-opacity': opacity,
        } as CSSProperties
      }
      className={clsx(
        styles.menu,
        textColor === 'dark' && styles.textDark,
        textColor === 'light' && styles.textLight,
        className
      )}
      {...rest}
    >
      <div className={clsx(styles.container, containerClassName)}>
        {children}
      </div>
    </div>
  )
}
