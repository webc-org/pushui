import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { useHeader } from '../HeaderContext'
import styles from '../Header.module.scss'
import type { HeaderMainTypes } from '../Header.types'

export function HeaderMain({
  ref,
  children,
  className,
  containerClassName,
  bgColor = 'var(--color-white)',
  bgOpacity = '1',
  textColor: textColorProp,
  style,
  ...rest
}: HeaderMainTypes) {
  const { isScrolled, textColor: contextTextColor } = useHeader()
  const textColor = textColorProp ?? contextTextColor
  const opacity = isScrolled ? '1' : bgOpacity
  const shadow = isScrolled || opacity === '1' ? 'var(--shadow-1)' : 'none'
  const customStyles = {
    ...style,
    '--header-main-bg': bgColor,
    '--header-main-shadow': shadow,
    '--header-main-opacity': opacity,
  } as CSSProperties

  return (
    <div
      ref={ref}
      style={customStyles}
      className={clsx(
        styles.mainBar,
        textColor === 'dark' && styles.textDark,
        textColor === 'light' && styles.textLight,
        className
      )}
      {...rest}
    >
      <div className={clsx(styles.mainContainer, containerClassName)}>
        {children}
      </div>
    </div>
  )
}
