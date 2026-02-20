import clsx from 'clsx'
import { Switch } from 'components/form'
import { useTheme } from 'utils'
import { useHeaderTheme } from '../useHeaderTheme'
import styles from './ThemeSwitch.module.scss'
import type { ThemeSwitchTypes } from './ThemeSwitch.types'

export function ThemeSwitch({
  label = 'Dark mode',
  ...rest
}: ThemeSwitchTypes) {
  const { theme, setTheme } = useTheme()
  const headerTheme = useHeaderTheme()

  const isDark = theme === 'dark'
  const isContrast = headerTheme ? headerTheme === 'dark' : isDark

  return (
    <Switch
      label={label}
      labelClassName={clsx(
        styles.label,
        isContrast ? styles.contrast : ''
      )}
      checked={isDark}
      onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      {...rest}
    />
  )
}
