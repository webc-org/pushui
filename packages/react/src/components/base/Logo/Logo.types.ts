import type { ComponentPropsWithRef } from 'react'

export type LogoTypes = ComponentPropsWithRef<'a'> & {
  asChild?: boolean
}
