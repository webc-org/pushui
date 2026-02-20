import clsx from 'clsx'
import { Switch } from 'components/form'
import { useTheme } from 'utils'
import styles from './ThemeSwitch.module.scss'
import type { ThemeSwitchTypes } from './ThemeSwitch.types'

export function ThemeSwitch({
  label = 'Dark mode',
  ...rest
}: ThemeSwitchTypes) {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <Switch
      label={label}
      labelClassName={clsx(styles.label, isDark ? styles.contrast : '')}
      checked={isDark}
      onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      {...rest}
    />
  )
}
