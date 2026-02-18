import type { SwitchTypes } from '../../../components/form/Switch/Switch.types'

export type ThemeSwitchTypes = Omit<
  SwitchTypes,
  'checked' | 'defaultChecked' | 'onChange'
>
