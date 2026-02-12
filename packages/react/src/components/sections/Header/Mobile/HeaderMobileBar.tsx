import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { useHeader } from '../HeaderContext'
import styles from '../Header.module.scss'
import type { HeaderMobileBarTypes } from '../Header.types'

export function HeaderMobileBar({
  ref,
  children,
  className,
  bgColor,
  bgOpacity,
  style,
  ...rest
}: HeaderMobileBarTypes) {
  const { isScrolled } = useHeader()
  const opacity =
    bgOpacity !== undefined ? (isScrolled ? 1 : bgOpacity) : undefined

  return (
    <div
      ref={ref}
      className={clsx(styles.mobileBar, className)}
      style={
        {
          ...style,
          ...(bgColor && { '--header-main-bg': bgColor }),
          ...(opacity !== undefined && { '--bar-bg-opacity': opacity }),
        } as CSSProperties
      }
      {...rest}
    >
      {children}
    </div>
  )
}
