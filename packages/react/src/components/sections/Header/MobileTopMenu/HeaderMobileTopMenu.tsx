import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { useHeader } from '../HeaderContext'
import type { HeaderMobileTopMenuTypes } from './HeaderMobileTopMenu.types'
import styles from './headerMobileTopMenu.module.scss'

export function HeaderMobileTopMenu({
  ref,
  children,
  className,
  containerClassName,
  style,
  ...rest
}: HeaderMobileTopMenuTypes) {
  const { isScrolled, textColor, mobile } = useHeader()
  const opacity = isScrolled ? '1' : mobile.top.bgOpacity

  return (
    <div
      ref={ref}
      style={
        {
          ...style,
          '--header-mobile-top-bg': mobile.top.bgColor,
          '--header-mobile-top-opacity': opacity,
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
