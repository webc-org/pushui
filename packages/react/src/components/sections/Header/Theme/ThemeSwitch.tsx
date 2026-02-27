import { Switch } from 'components/form'
import { useTheme } from 'utils'
import styles from './ThemeSwitch.module.scss'
import type { ThemeSwitchTypes } from './ThemeSwitch.types'

export function ThemeSwitch({
  label = 'Dark mode',
  ...rest
}: ThemeSwitchTypes) {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      label={label}
      labelClassName={styles.label}
      checked={theme === 'dark'}
      onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      {...rest}
    />
  )
}
