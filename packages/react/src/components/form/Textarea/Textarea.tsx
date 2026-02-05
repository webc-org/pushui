import { useId } from 'react'
import clsx from 'clsx'
import styles from './Textarea.module.scss'
import type { InputTextareaTypes } from './Textarea.types'

export function InputTextarea({
  value,
  label,
  ref,
  onChange,
  disabled,
  maxLength,
  className,
  labelClassName,
  textareaClassName,
  showCount = false,
  ...rest
}: InputTextareaTypes) {
  const id = useId()

  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}

      <textarea
        {...rest}
        ref={ref}
        id={id}
        value={value ?? ''}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        maxLength={maxLength}
        className={clsx(styles.textarea, textareaClassName)}
      />

      {showCount && maxLength && (
        <div className={styles.footer}>
          <span
            className={styles.count}
            aria-live={
              value && value.length >= maxLength * 0.9 ? 'polite' : 'off'
            }
            aria-atomic="true"
          >
            {value?.length ?? 0}/{maxLength}
          </span>
        </div>
      )}
    </div>
  )
}
