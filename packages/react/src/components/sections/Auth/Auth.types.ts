import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { HeadingLevel } from 'base/Title'

export type AuthSectionTypes = ComponentPropsWithRef<'section'> & {
  children: ReactNode
}

export type AuthCardTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type AuthCardHeaderTypes = ComponentPropsWithRef<'div'> & {
  children?: ReactNode
}

export type AuthCardBodyTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type AuthCardFooterTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type AuthFormTypes = ComponentPropsWithRef<'form'> & {
  children: ReactNode
}

export type AuthLinkTypes = {
  asChild?: boolean
  children: ReactNode
  className?: string
  href?: string
}

export type AuthTitleTypes = {
  children: ReactNode
  className?: string
  level?: HeadingLevel
}

export type AuthMessageTypes = ComponentPropsWithRef<'div'> & {
  children?: ReactNode
  title: string
  message: string
  status?: 'success' | 'error' | 'info'
  footer?: ReactNode
}
