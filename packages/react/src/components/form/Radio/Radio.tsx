import { useId } from 'react'
import clsx from 'clsx'
import styles from './Radio.module.scss'
import type { InputRadioTypes } from './Radio.types'

export function InputRadio({
  value,
  onChange,
  options,
  name,
  label,
  ref,
  disabled,
  className,
  optionClassName,
  labelClassName,
  direction = 'vertical',
  ...rest
}: InputRadioTypes) {
  const id = useId()
  const labelId = `${id}-label`

  return (
    <div
      ref={ref}
      role="radiogroup"
      className={clsx(styles.wrapper, className)}
      aria-labelledby={label ? labelId : undefined}
    >
      {label && (
        <span
          id={labelId}
          className={clsx(styles.groupLabel, labelClassName)}
        >
          {label}
        </span>
      )}

      <div
        className={clsx(styles.options, styles[direction], {
          [styles.disabled]: disabled,
        })}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(styles.option, optionClassName, {
              [styles.disabled]: disabled || option.disabled,
            })}
          >
            <input
              {...rest}
              name={name}
              type="radio"
              value={option.value}
              className={styles.input}
              checked={value === option.value}
              disabled={disabled || option.disabled}
              onChange={() => onChange?.(option.value)}
            />
            <span className={styles.radio} aria-hidden />
            <span className={styles.label}>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
