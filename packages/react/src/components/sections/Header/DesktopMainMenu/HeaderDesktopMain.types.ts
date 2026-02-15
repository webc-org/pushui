import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react'
import type { ActionAppearance, ColorVariant } from 'types'

export type HeaderDesktopMainMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  containerClassName?: string
}

export type HeaderDesktopMainMenuLogoTypes =
  ComponentPropsWithRef<'div'> & {
    children: ReactNode
  }

export type HeaderDesktopMainMenuNavTypes =
  ComponentPropsWithRef<'nav'> & {
    children: ReactNode
    'aria-label'?: string
  }

export type HeaderDesktopMainMenuDropdownTypes =
  ComponentPropsWithRef<'div'> & {
    children: ReactNode
    label: ReactNode
    href?: string
    as?: ElementType
    mega?: boolean
    current?: boolean
  }

export type HeaderDesktopMainMenuLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
  appearance?: ActionAppearance
  variant?: ColorVariant
  contrast?: boolean
}

export type HeaderDesktopMainMenuDropdownLinkTypes =
  ComponentPropsWithRef<'a'> & {
    asChild?: boolean
    children: ReactNode
    current?: boolean
  }
