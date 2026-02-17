import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { useTheme } from 'utils'
import { useHeader } from '../HeaderContext'
import type { HeaderMobileTopMenuTypes } from './HeaderMobileTop.types'
import styles from './headerMobileTop.module.scss'

export function HeaderMobileTopMenu({
  ref,
  children,
  className,
  containerClassName,
  style,
  ...rest
}: HeaderMobileTopMenuTypes) {
  const { isScrolled, themeStyles } = useHeader()
  const { theme } = useTheme()
  const mobileTopStyles = themeStyles.mobile.top

  // BACKGROUND
  const background = mobileTopStyles.bgColor

  // OPACITY
  const opacity = isScrolled ? '1' : mobileTopStyles.bgOpacity

  // SHADOW
  const hasShadow = isScrolled || opacity === '1'
  const shadow = hasShadow ? 'var(--shadow-1)' : 'none'

  return (
    <div
      ref={ref}
      style={
        {
          ...style,
          '--header-mobile-top-bg': background,
          '--header-mobile-top-shadow': shadow,
          '--header-mobile-top-opacity': opacity,
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
