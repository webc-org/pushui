import { Switch } from '../../../components/form/Switch/Switch'
import { useTheme } from '../ThemeContext'
import type { ThemeSwitchTypes } from './ThemeSwitch.types'

export function ThemeSwitch({
  label = 'Dark mode',
  ...rest
}: ThemeSwitchTypes) {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      label={label}
      checked={theme === 'dark'}
      onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      {...rest}
    />
  )
}
