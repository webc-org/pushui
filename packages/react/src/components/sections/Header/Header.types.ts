import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'

export type HeaderTextColor = 'light' | 'dark' | undefined

export type HeaderTypes = ComponentPropsWithRef<'header'> & {
  children: ReactNode
  baseId?: string
  isOverlay?: boolean
  textColor?: HeaderTextColor
}

export type TopMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  containerClassName?: string
  bgColor?: string
  bgOpacity?: string
  textColor?: HeaderTextColor
}

export type TopMenuNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type TopMenuDropdownTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  label: ReactNode
  href?: string
  as?: ElementType
  current?: boolean
}

export type MainMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  containerClassName?: string
  bgColor?: string
  bgOpacity?: string
  textColor?: HeaderTextColor
}

export type MainMenuLogoTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type MainMenuNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type MainMenuDropdownTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  label: ReactNode
  href?: string
  as?: ElementType
  mega?: boolean
  current?: boolean
}

export type HeaderMobileRootTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type MobileTopMenuLogoTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type MobileTopMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  bgColor?: string
  bgOpacity?: string
  textColor?: HeaderTextColor
  containerClassName?: string
}

export type MobileTopMenuToggleTypes = Omit<
  ComponentPropsWithRef<'button'>,
  'children'
> & {
  label?: string
  closeLabel?: string
  menuLabel?: string
}

export type MobileMainMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  'aria-label'?: string
  bgColor?: string
  textColor?: HeaderTextColor
}

export type MobileMainMenuTopTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  'aria-label'?: string
}

export type MobileMainMenuNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type MobileMainMenuDropdownTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  label: ReactNode
  baseId?: string
}

export type TopMenuLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}

export type TopMenuDropdownLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}

export type MainMenuLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
  icon?: boolean
}

export type MainMenuDropdownLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}

export type MobileMainMenuLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
}

export type MobileMainMenuDropdownLinkTypes =
  ComponentPropsWithRef<'a'> & {
    asChild?: boolean
    children: ReactNode
    current?: boolean
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
}
