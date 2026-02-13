import type { ComponentPropsWithRef, ReactNode } from 'react'

export type HeaderTextColor = 'light' | 'dark' | undefined

export type HeaderBarBg = {
  bgColor: string
  bgOpacity: string
}

export type HeaderTypes = ComponentPropsWithRef<'header'> & {
  children: ReactNode
  baseId?: string
  isOverlay?: boolean
  textColor?: HeaderTextColor
  desktop?: Partial<{
    top: Partial<HeaderBarBg>
    main: Partial<HeaderBarBg>
  }>
  mobile?: Partial<{
    top: Partial<HeaderBarBg>
    main: Partial<HeaderBarBg>
  }>
}

export type HeaderDesktopTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderMobileTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderNavTypes = 'main' | 'top' | 'mobile'

export type HeaderContextTypes = {
  isOpen: boolean
  toggle: () => void
  mobileMenuId: string
  mobileToggleId: string
  registerNav: (type: HeaderNavTypes) => number
  getNavCount: (type: HeaderNavTypes) => number
  isScrolled: boolean
  isOverlay: boolean
  textColor: HeaderTextColor
  desktop: { top: HeaderBarBg; main: HeaderBarBg }
  mobile: { top: HeaderBarBg; main: HeaderBarBg }
}
