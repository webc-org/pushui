import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { HeadingLevel } from 'base/Title'

export type AccountSectionTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type AccountCardTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type AccountCardHeaderTypes = ComponentPropsWithRef<'div'> & {
  children?: ReactNode
}

export type AccountCardBodyTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type AccountCardFooterTypes = ComponentPropsWithRef<'div'> & {
  children: ReactNode
}

export type AccountFormTypes = ComponentPropsWithRef<'form'> & {
  children: ReactNode
}

export type AccountTitleTypes = {
  children: ReactNode
  className?: string
  level?: HeadingLevel
}
