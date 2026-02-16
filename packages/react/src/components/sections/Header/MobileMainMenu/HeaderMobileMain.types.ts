import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { ActionAppearance, ColorVariant } from 'types'

export type HeaderMobileMainMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderMobileMainHeadTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderMobileMainNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
  'aria-label'?: string
}

export type HeaderMobileMainDropdownTypes =
  ComponentPropsWithRef<'div'> & {
    children: ReactNode
    label: ReactNode
    baseId?: string
  }

export type HeaderMobileMainLinkTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
  children: ReactNode
  current?: boolean
  appearance?: ActionAppearance
  variant?: ColorVariant
}

export type HeaderMobileMainDropdownLinkTypes =
  ComponentPropsWithRef<'a'> & {
    asChild?: boolean
    children: ReactNode
    current?: boolean
  }
