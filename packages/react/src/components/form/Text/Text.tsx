import { useId } from 'react'
import clsx from 'clsx'
import styles from './Text.module.scss'
import type { InputTextTypes } from './Text.types'

export function InputText({
  label,
  ref,
  className,
  inputClassName,
  labelClassName,
  type = 'text',
  'aria-label': ariaLabel,
  ...rest
}: InputTextTypes) {
  const id = useId()

  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        id={label ? id : undefined}
        aria-label={!label ? ariaLabel : undefined}
        className={clsx(styles.input, inputClassName)}
        {...rest}
      />
    </div>
  )
}
