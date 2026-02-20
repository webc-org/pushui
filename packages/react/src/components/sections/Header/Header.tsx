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
  const [isHovered, setIsHovered] = useState(false)
  const { isOpen, toggle } = useHeaderMobileToggle(mobileToggleId)
  const themeStyles = useHeaderCustomStyles(
    customStyles,
    themeOverlay,
    isScrolled,
    isHovered
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
      isHovered,
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
      isHovered,
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...rest}
      >
        {children}
      </header>
    </HeaderContext.Provider>
  )
}
