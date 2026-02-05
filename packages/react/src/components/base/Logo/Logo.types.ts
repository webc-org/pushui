import type { ComponentPropsWithRef, ReactNode } from 'react'

export type LogoTypes = ComponentPropsWithRef<'a'> & {
  children: ReactNode
  asChild?: boolean
}

export type LogoFallbackTypes = ComponentPropsWithRef<'div'>
