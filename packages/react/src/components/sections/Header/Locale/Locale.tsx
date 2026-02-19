import { LocaleDropdown } from './LocaleDropdown'
import { LocaleModal } from './LocaleModal'
import type { LocaleTypes } from './Locale.types'

export function Locale({
  mode = 'dropdown',
  section = 'top',
  ...props
}: LocaleTypes) {
  return mode === 'modal' ? (
    <LocaleModal {...props} mode={mode} section={section} />
  ) : (
    <LocaleDropdown {...props} mode={mode} section={section} />
  )
}
