import type { ComponentPropsWithRef, ReactNode } from 'react'

export type DashboardLayoutTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type DashboardSidebarTypes = ComponentPropsWithRef<'aside'> & {
  children: ReactNode
}

export type DashboardBrandTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type DashboardMainTypes = ComponentPropsWithRef<'main'> & {
  children: ReactNode
}

export type DashboardHeaderTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type DashboardTitleTypes = ComponentPropsWithRef<'h1'> & {
  children: ReactNode
}

export type DashboardNavTypes = ComponentPropsWithRef<'nav'> & {
  children: ReactNode
}

export type DashboardNavLinkTypes = ComponentPropsWithRef<'a'> & {
  children: ReactNode
  asChild?: boolean
  current?: boolean
}
