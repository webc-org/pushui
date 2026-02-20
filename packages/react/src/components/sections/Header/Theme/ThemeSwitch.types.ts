import type { SwitchTypes } from 'components/form'

export type ThemeSwitchTypes = Omit<
  SwitchTypes,
  'checked' | 'defaultChecked' | 'onChange'
>
