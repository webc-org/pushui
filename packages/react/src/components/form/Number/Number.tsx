import { useId } from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import { ChevronDown, ChevronUp } from 'lucide-react'
import styles from './Number.module.scss'
import type { InputNumberTypes } from './Number.types'

export function InputNumber({
  value,
  onChange,
  ref,
  min,
  max,
  step = 1,
  disabled,
  className,
  inputClassName,
  labelClassName,
  label,
  incrementLabel = 'Increment',
  decrementLabel = 'Decrement',
  ...rest
}: InputNumberTypes) {
  const id = useId()
  const current = value ?? 0
  const canIncrement = max === undefined || current + step <= max
  const canDecrement = min === undefined || current - step >= min

  const increment = () =>
    !disabled && canIncrement && onChange?.(current + step)
  const decrement = () =>
    !disabled && canDecrement && onChange?.(current - step)

  return (
    <div
      className={clsx(styles.wrapper, className, {
        [styles.disabled]: disabled,
      })}
    >
      {label && (
        <label htmlFor={id} className={clsx(styles.label, labelClassName)}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          {...rest}
          ref={ref}
          id={id}
          type="number"
          value={value ?? ''}
          onChange={(e) => onChange?.(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={clsx(styles.input, inputClassName)}
        />

        <div className={styles.nav}>
          <Button
            type="button"
            className={clsx(styles.button, styles.increment)}
            onClick={increment}
            disabled={disabled || !canIncrement}
            title={incrementLabel}
            aria-label={incrementLabel}
          >
            <ChevronUp size={14} aria-hidden />
          </Button>

          <Button
            type="button"
            className={clsx(styles.button, styles.decrement)}
            onClick={decrement}
            disabled={disabled || !canDecrement}
            title={decrementLabel}
            aria-label={decrementLabel}
          >
            <ChevronDown size={14} aria-hidden />
          </Button>
        </div>
      </div>
    </div>
  )
}
