import type { CSSProperties } from 'react'
import clsx from 'clsx'
import { useHeader } from '../HeaderContext'
import styles from '../Header.module.scss'
import type { HeaderTopTypes } from '../Header.types'

export function HeaderTop({
  ref,
  children,
  className,
  containerClassName,
  bgColor,
  bgOpacity,
  style,
  ...rest
}: HeaderTopTypes) {
  const { isScrolled } = useHeader()
  const opacity =
    bgOpacity !== undefined ? (isScrolled ? 1 : bgOpacity) : undefined

  return (
    <div
      ref={ref}
      className={clsx(styles.topBar, className)}
      style={
        {
          ...style,
          ...(bgColor && { '--header-top-bg': bgColor }),
          ...(opacity !== undefined && { '--bar-bg-opacity': opacity }),
        } as CSSProperties
      }
      {...rest}
    >
      <div className={clsx(styles.topContainer, containerClassName)}>
        {children}
      </div>
    </div>
  )
}
