import { useId, useMemo, useState } from 'react'
import clsx from 'clsx'
import { HeaderContext } from './HeaderContext'
import { useHeaderCustomStyles } from './useHeaderCustomStyles'
import { useHeaderMobileToggle } from './useHeaderMobileToggle'
import { useHeaderNavRegistry } from './useHeaderNavRegistry'
import { useHeaderScroll } from './useHeaderScroll'
import styles from './Header.module.scss'
import type { HeaderTypes } from './Header.types'

export function Header({
  ref,
  baseId,
  children,
  className,
  customStyles,
  themeOverlay,
  ...rest
}: HeaderTypes) {
  const generatedId = useId()
  const id = baseId || generatedId
  const mobileMenuId = `header-mobile-menu-${id}`
  const mobileToggleId = `header-mobile-toggle-${id}`
  const { registerNav, getNavCount } = useHeaderNavRegistry()
  const isScrolled = useHeaderScroll()
  const [isActive, setIsActive] = useState(false)
  const { isOpen, toggle } = useHeaderMobileToggle(mobileToggleId)
  const themeStyles = useHeaderCustomStyles(
    customStyles,
    themeOverlay,
    isScrolled,
    isActive
  )

  const value = useMemo(
    () => ({
      isOpen,
      toggle,
      mobileMenuId,
      mobileToggleId,
      registerNav,
      getNavCount,
      isScrolled,
      isActive,
      themeStyles,
      themeOverlay,
    }),
    [
      isOpen,
      mobileMenuId,
      mobileToggleId,
      toggle,
      registerNav,
      getNavCount,
      isScrolled,
      isActive,
      themeStyles,
      themeOverlay,
    ]
  )

  return (
    <HeaderContext.Provider value={value}>
      <header
        ref={ref}
        data-header-root
        className={clsx(styles.header, className)}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsActive(false)
          }
        }}
        {...rest}
      >
        {children}
      </header>
    </HeaderContext.Provider>
  )
}
