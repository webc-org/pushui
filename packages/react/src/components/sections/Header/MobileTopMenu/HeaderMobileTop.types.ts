import type { ComponentPropsWithRef, ReactNode } from 'react'

export type HeaderMobileTopMenuTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
  containerClassName?: string
}

export type HeaderMobileTopLogoTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type HeaderMobileTopToggleTypes = Omit<
  ComponentPropsWithRef<'button'>,
  'children'
> & {
  label?: string
  closeLabel?: string
  menuLabel?: string
}
