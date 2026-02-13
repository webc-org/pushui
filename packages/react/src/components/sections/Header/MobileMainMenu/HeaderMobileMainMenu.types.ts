import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { ActionAppearance, ColorVariant } from 'types'

export type HeaderMobileMainMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderMobileMainMenuHeadTypes =
  ComponentPropsWithRef<'div'> & {
    children: ReactNode
    'aria-label'?: string
  }

export type HeaderMobileMainMenuNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderMobileMainMenuDropdownTypes =
  ComponentPropsWithRef<'div'> & {
    children: ReactNode
    label: ReactNode
    baseId?: string
  }

export type HeaderMobileMainMenuLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
  appearance?: ActionAppearance
  variant?: ColorVariant
}

export type HeaderMobileMainMenuDropdownLinkTypes =
  ComponentPropsWithRef<'a'> & {
    asChild?: boolean
    children: ReactNode
    current?: boolean
  }
