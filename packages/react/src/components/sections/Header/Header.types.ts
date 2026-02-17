import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { ThemeTypes } from 'utils'

export type HeaderTextColor = 'light' | 'dark' | undefined

export type HeaderCustomStylesTypes = {
  desktop?: {
    top?: {
      light?: {
        bgColor?: string
        bgOpacity?: string
      }
      dark?: {
        bgColor?: string
        bgOpacity?: string
      }
    }
    main?: {
      light?: {
        bgColor?: string
        bgOpacity?: string
      }
      dark?: {
        bgColor?: string
        bgOpacity?: string
      }
    }
  }
  mobile?: {
    top?: {
      light?: {
        bgColor?: string
        bgOpacity?: string
      }
      dark?: {
        bgColor?: string
        bgOpacity?: string
      }
    }
    main?: {
      light?: {
        bgColor?: string
      }
      dark?: {
        bgColor?: string
      }
    }
  }
}

export type HeaderThemeStylesTypes = {
  desktop: {
    top: {
      bgColor: string
      bgOpacity: string
    }
    main: {
      bgColor: string
      bgOpacity: string
      shadow: string
    }
  }
  mobile: {
    top: {
      bgColor: string
      bgOpacity: string
    }
    main: {
      bgColor: string
    }
  }
}

export type HeaderTypes = ComponentPropsWithRef<'header'> & {
  children: ReactNode
  baseId?: string
  theme?: ThemeTypes
  customStyles?: HeaderCustomStylesTypes
}

export type HeaderDesktopTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderMobileTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderNavTypes = 'desktopTop' | 'desktopMain' | 'mobileMain'

export type HeaderContextTypes = {
  isOpen: boolean
  toggle: () => void
  mobileMenuId: string
  mobileToggleId: string
  registerNav: (type: HeaderNavTypes) => number
  getNavCount: (type: HeaderNavTypes) => number
  isScrolled: boolean
  themeStyles: HeaderThemeStylesTypes
}
