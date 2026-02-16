import { type CSSProperties, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { getFocusableElements } from 'utils'
import { useHeader } from '../HeaderContext'
import type { HeaderMobileMainMenuTypes } from './HeaderMobileMain.types'
import styles from './headerMobileMain.module.scss'

export function HeaderMobileMainMenu({
  ref,
  children,
  className,
  containerClassName,
  'aria-label': ariaLabel = 'Mobile navigation',
  style,
  ...rest
}: HeaderMobileMainMenuTypes) {
  const { isOpen, mobileMenuId, textColor, mobile } = useHeader()

  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.inert = !isOpen
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    if (!menuRef?.current) return

    const focusableElements = getFocusableElements(menuRef.current)
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTabKey)

    return () => {
      document.removeEventListener('keydown', handleTabKey)
    }
  }, [isOpen])

  return (
    <div
      ref={menuRef}
      inert
      id={mobileMenuId}
      role="dialog"
      aria-label={ariaLabel}
      style={
        {
          ...style,
          '--header-mobile-main-bg': mobile.main.bgColor,
        } as CSSProperties
      }
      className={clsx(
        styles.menu,
        isOpen && styles.isOpen,
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
