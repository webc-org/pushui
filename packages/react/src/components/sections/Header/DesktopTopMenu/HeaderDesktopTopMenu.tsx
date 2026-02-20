import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { useHeader } from '../HeaderContext'
import { useHeaderTheme } from '../useHeaderTheme'
import type { HeaderDesktopTopMenuTypes } from './HeaderDesktopTop.types'
import styles from './headerDesktopTop.module.scss'

export function HeaderDesktopTopMenu({
  ref,
  children,
  className,
  containerClassName,
  style,
  ...rest
}: HeaderDesktopTopMenuTypes) {
  const { isScrolled, themeStyles } = useHeader()
  const theme = useHeaderTheme()
  const desktopTopStyles = themeStyles.desktop.top

  // BACKGROUND
  const background = desktopTopStyles.bgColor

  // OPACITY
  const opacity = isScrolled ? '1' : desktopTopStyles.bgOpacity

  return (
    <div
      ref={ref}
      style={
        {
          ...style,
          '--header-desktop-top-bg': background,
          '--header-desktop-top-opacity': opacity,
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
