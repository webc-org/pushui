import { useCallback, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { useHeader } from '../HeaderContext'
import styles from '../Header.module.scss'
import type { HeaderMobileMenuTypes } from '../Header.types'

export function HeaderMobileMenu({
  ref,
  children,
  className,
  'aria-label': ariaLabel = 'Mobile navigation',
  ...rest
}: HeaderMobileMenuTypes) {
  const { isOpen, mobileMenuId } = useHeader()
  const menuRef = useRef<HTMLElement | null>(null)

  const setMenuRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      node.setAttribute('inert', '')
    }
    menuRef.current = node
  }, [])

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        menuRef.current.removeAttribute('inert')
      } else {
        menuRef.current.setAttribute('inert', '')
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const menu = menuRef.current
    if (!menu) return

    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
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
      ref={setMenuRef}
      id={mobileMenuId}
      role="dialog"
      aria-label={ariaLabel}
      className={clsx(
        styles.mobileMenu,
        isOpen && styles.mobileMenuOpen,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
