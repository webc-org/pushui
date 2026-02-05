import type { ComponentPropsWithRef, ReactNode } from 'react'

export type FooterTypes = ComponentPropsWithRef<'footer'>

export type FooterMainTypes = ComponentPropsWithRef<'div'> & {
  brand?: ReactNode
}

export type FooterMainLogoTypes = ComponentPropsWithRef<'div'>

export type FooterMainMenuTypes = ComponentPropsWithRef<'div'>

export type FooterMainNavTypes = ComponentPropsWithRef<'nav'> & {
  title?: string
  'aria-label'?: string
}

export type FooterMainLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  current?: boolean
}

export type FooterBottomTypes = ComponentPropsWithRef<'div'> & {
  copyright?: string
}

export type FooterBottomNavTypes = ComponentPropsWithRef<'nav'> & {
  'aria-label'?: string
}

export type FooterBottomLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  current?: boolean
}
