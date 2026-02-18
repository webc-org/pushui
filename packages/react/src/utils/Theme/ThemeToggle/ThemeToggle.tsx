import clsx from 'clsx'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../../../components/form/Button/Button'
import { useTheme } from '../ThemeContext'
import styles from './ThemeToggle.module.scss'
import type { ThemeToggleTypes } from './ThemeToggle.types'

export function ThemeToggle({
  size = 25,
  className,
  ref,
  ...rest
}: ThemeToggleTypes) {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Button
      ref={ref}
      type="button"
      contrast={isDark}
      appearance="icon"
      variant="primary"
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
