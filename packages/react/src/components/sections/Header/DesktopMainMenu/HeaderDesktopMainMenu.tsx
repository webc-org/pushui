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
  const { isScrolled, textColor, theme, themeStyles } = useHeader()
  const desktopMainStyles = themeStyles.desktop.main

  // BACKGROUND
  const background = desktopMainStyles.bgColor

  // OPACITY
  const opacity = isScrolled ? '1' : desktopMainStyles.bgOpacity

  // SHADOW
  const hasShadow = isScrolled || opacity === '1'
  const shadow = hasShadow ? desktopMainStyles.shadow : 'none'

  return (
    <div
      ref={ref}
      style={
        {
          ...style,
          '--header-desktop-main-bg': background,
          '--header-desktop-main-shadow': shadow,
          '--header-desktop-main-opacity': opacity,
        } as CSSProperties
      }
      className={clsx(
        styles.menu,
        styles[theme],
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
