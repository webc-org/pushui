import type { ComponentPropsWithRef } from 'react'
import type { ColorVariant } from 'types'

export type NoteTypes = ComponentPropsWithRef<'div'> & {
  variant?: ColorVariant
}
