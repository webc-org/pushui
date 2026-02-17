import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'
import type { ActionAppearance, ColorVariant } from 'types'

export type HeaderDesktopMainMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  containerClassName?: string
}

export type HeaderDesktopMainLogoTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderDesktopMainNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderDesktopMainDropdownTypes =
  ComponentPropsWithRef<'div'> & {
    children: ReactNode
    label: ReactNode
    href?: string
    as?: ElementType
    mega?: boolean
    current?: boolean
  }

export type HeaderDesktopMainLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
  appearance?: ActionAppearance
  variant?: ColorVariant
}

export type HeaderDesktopMainDropdownLinkTypes =
  ComponentPropsWithRef<'a'> & {
    asChild?: boolean
    children: ReactNode
    current?: boolean
  }
