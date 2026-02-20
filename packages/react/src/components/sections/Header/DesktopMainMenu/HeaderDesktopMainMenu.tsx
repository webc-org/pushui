import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { useHeader } from '../HeaderContext'
import { useHeaderTheme } from '../useHeaderTheme'
import type { HeaderDesktopMainMenuTypes } from './HeaderDesktopMain.types'
import styles from './headerDesktopMain.module.scss'

export function HeaderDesktopMainMenu({
  ref,
  style,
  children,
  className,
  containerClassName,
  ...rest
}: HeaderDesktopMainMenuTypes) {
  const { isScrolled, themeStyles } = useHeader()
  const theme = useHeaderTheme()
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
      className={clsx(styles.menu, styles[theme], className)}
      {...rest}
    >
      <div className={clsx(styles.container, containerClassName)}>
        {children}
      </div>
    </div>
  )
}
