import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { useHeader } from '../HeaderContext'
import styles from '../Header.module.scss'
import type { MobileTopMenuTypes } from '../Header.types'

export function MobileTopMenu({
  ref,
  children,
  className,
  bgColor = 'var(--color-white)',
  bgOpacity = '1',
  textColor: textColorProp,
  containerClassName,
  style,
  ...rest
}: MobileTopMenuTypes) {
  const { isScrolled, textColor: contextTextColor } = useHeader()
  const textColor = textColorProp ?? contextTextColor
  const opacity = isScrolled ? '1' : bgOpacity
  const customStyles = {
    ...style,
    '--header-mobile-bg': bgColor,
    '--header-mobile-opacity': opacity,
  } as CSSProperties

  return (
    <div
      ref={ref}
      style={customStyles}
      className={clsx(
        styles.mobileTopMenu,
        textColor === 'dark' && styles.textDark,
        textColor === 'light' && styles.textLight,
        className
      )}
      {...rest}
    >
      <div
        className={clsx(styles.mobileTopMenuContainer, containerClassName)}
      >
        {children}
      </div>
    </div>
  )
}
