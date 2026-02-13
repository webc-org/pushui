import type { ComponentPropsWithRef, ReactNode } from 'react'

export type HeaderMobileTopMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  containerClassName?: string
}

export type HeaderMobileTopMenuLogoTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderMobileTopMenuToggleTypes = Omit<
  ComponentPropsWithRef<'button'>,
  'children'
> & {
  label?: string
  closeLabel?: string
  menuLabel?: string
}
