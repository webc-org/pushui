import clsx from 'clsx'
import { Button } from 'components/form'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'utils'
import { useHeaderTheme } from '../useHeaderTheme'
import styles from './ThemeToggle.module.scss'
import type { ThemeToggleTypes } from './ThemeToggle.types'

export function ThemeToggle({
  size = 25,
  className,
  ref,
  ...rest
}: ThemeToggleTypes) {
  const { theme, setTheme } = useTheme()
  const headerTheme = useHeaderTheme()
  const isDark = theme === 'dark'
  const isContrast = headerTheme ? headerTheme === 'dark' : isDark

  return (
    <Button
      ref={ref}
      type="button"
      appearance="icon"
      variant="primary"
      contrast={isContrast}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={clsx(styles.toggle, className)}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      {...rest}
    >
      {isDark ? (
        <Sun size={size} aria-hidden />
      ) : (
        <Moon size={size} aria-hidden />
      )}
    </Button>
  )
}
