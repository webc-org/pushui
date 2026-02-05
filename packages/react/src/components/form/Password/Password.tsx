import { useId, useState } from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { Eye, EyeOff } from 'lucide-react'
import styles from './Password.module.scss'
import type { InputPasswordTypes } from './Password.types'

export function InputPassword({
  label,
  ref,
  disabled,
  className,
  inputClassName,
  labelClassName,
  showLabel = 'Show',
  hideLabel = 'Hide',
  'aria-label': ariaLabel,
  ...rest
}: InputPasswordTypes) {
  const id = useId()
  const [showPassword, setShowPassword] = useState(false)
  const toggleId = `${id}-toggle`

  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          {...rest}
          ref={ref}
          id={label ? id : undefined}
          type={showPassword ? 'text' : 'password'}
          disabled={disabled}
          aria-label={!label ? ariaLabel : undefined}
          className={clsx(styles.input, inputClassName)}
        />

        <Button
          type="button"
          id={toggleId}
          disabled={disabled}
          className={styles.toggleButton}
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? hideLabel : showLabel}
          aria-pressed={showPassword}
        >
          {showPassword ? (
            <EyeOff size={18} aria-hidden />
          ) : (
            <Eye size={18} aria-hidden />
          )}
        </Button>
      </div>
    </div>
  )
}
