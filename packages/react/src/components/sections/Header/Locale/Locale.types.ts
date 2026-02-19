export type LocaleItem = {
  code: string
  label: string
}

export type LocaleTypes = {
  locales: LocaleItem[]
  current: string
  onChange: (code: string) => void
  mode?: 'dropdown' | 'modal'
  device?: 'desktop' | 'mobile'
  section?: 'top' | 'main'
  triggerLabel?: string
  modalTitle?: string
  className?: string
}
