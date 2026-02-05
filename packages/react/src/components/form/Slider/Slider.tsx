import { useCallback, useId, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './Slider.module.scss'
import type { SliderMark, SliderTypes } from './Slider.types'

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

function roundToStep(value: number, step: number, min: number): number {
  const nearest = Math.round((value - min) / step) * step + min
  // Fix floating point issues
  const decimals = step.toString().split('.')[1]?.length || 0
  return Number(nearest.toFixed(decimals))
}

function valueToPercent(value: number, min: number, max: number): number {
  return ((value - min) / (max - min)) * 100
}

function percentToValue(
  percent: number,
  min: number,
  max: number
): number {
  return (percent / 100) * (max - min) + min
}

export function Slider(props: SliderTypes) {
  const {
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    orientation = 'horizontal',
    size = 'md',
    track = 'normal',
    marks = false,
    valueLabelDisplay = 'off',
    valueLabelFormat,
    getAriaValueText,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    className,
    ...rest
  } = props

  const isRange = props.range === true
  const minDistance = isRange ? (props.minDistance ?? 0) : 0
  const disableSwap = isRange ? (props.disableSwap ?? false) : false

  // Internal state
  const [internalValue, setInternalValue] = useState<
    number | [number, number]
  >(() => {
    if (props.defaultValue !== undefined) return props.defaultValue
    return isRange ? [min, max] : min
  })

  const [activeThumb, setActiveThumb] = useState<number | null>(null)
  const [hoveredThumb, setHoveredThumb] = useState<number | null>(null)

  const id = useId()
  const trackRef = useRef<HTMLDivElement>(null)

  // Controlled vs uncontrolled
  const value = props.value !== undefined ? props.value : internalValue
  const values = useMemo<number[]>(
    () => (isRange ? (value as [number, number]) : [value as number]),
    [isRange, value]
  )

  // Generate marks array
  const marksArray = useMemo<SliderMark[]>(() => {
    if (!marks) return []
    if (Array.isArray(marks)) return marks
    if (step === null) return []

    const result: SliderMark[] = []
    for (let v = min; v <= max; v = roundToStep(v + step, step, min)) {
      result.push({ value: v })
      if (result.length > 1000) break // Safety limit
    }
    return result
  }, [marks, min, max, step])

  // Get value from position
  const getValueFromPosition = useCallback(
    (clientX: number, clientY: number): number => {
      if (!trackRef.current) return min

      const rect = trackRef.current.getBoundingClientRect()
      let percent: number

      if (orientation === 'vertical') {
        percent = ((rect.bottom - clientY) / rect.height) * 100
      } else {
        percent = ((clientX - rect.left) / rect.width) * 100
      }

      percent = clamp(percent, 0, 100)
      let newValue = percentToValue(percent, min, max)

      // Snap to step or marks
      if (step === null && marksArray.length > 0) {
        // Find closest mark
        let closest = marksArray[0].value
        let closestDiff = Math.abs(newValue - closest)
        for (const mark of marksArray) {
          const diff = Math.abs(newValue - mark.value)
          if (diff < closestDiff) {
            closest = mark.value
            closestDiff = diff
          }
        }
        newValue = closest
      } else if (step !== null) {
        newValue = roundToStep(newValue, step, min)
      }

      return clamp(newValue, min, max)
    },
    [min, max, step, orientation, marksArray]
  )

  // Update value
  const updateValue = useCallback(
    (newValue: number, thumbIndex: number) => {
      if (disabled) return

      if (isRange) {
        const currentValues = values as [number, number]
        const newValues: [number, number] = [...currentValues]

        // Apply min distance constraint
        if (thumbIndex === 0) {
          const maxAllowed = currentValues[1] - minDistance
          newValues[0] = clamp(newValue, min, maxAllowed)
        } else {
          const minAllowed = currentValues[0] + minDistance
          newValues[1] = clamp(newValue, minAllowed, max)
        }

        // Handle swap if not disabled
        if (!disableSwap && newValues[0] > newValues[1]) {
          newValues.reverse()
          setActiveThumb(thumbIndex === 0 ? 1 : 0)
        }

        if (props.value === undefined) {
          setInternalValue(newValues)
        }
        ;(
          props as { onChange?: (v: [number, number]) => void }
        ).onChange?.(newValues)
      } else {
        const clampedValue = clamp(newValue, min, max)
        if (props.value === undefined) {
          setInternalValue(clampedValue)
        }
        ;(props as { onChange?: (v: number) => void }).onChange?.(
          clampedValue
        )
      }
    },
    [disabled, isRange, values, min, max, minDistance, disableSwap, props]
  )

  // Commit value (on release)
  const commitValue = useCallback(
    (overrideValue?: number | [number, number]) => {
      const valueToCommit = overrideValue ?? (isRange ? values : values[0])
      if (isRange) {
        ;(
          props as { onChangeCommitted?: (v: [number, number]) => void }
        ).onChangeCommitted?.(valueToCommit as [number, number])
      } else {
        ;(
          props as { onChangeCommitted?: (v: number) => void }
        ).onChangeCommitted?.(valueToCommit as number)
      }
    },
    [isRange, values, props]
  )

  // Find closest thumb for a position
  const findClosestThumb = useCallback(
    (newValue: number): number => {
      if (!isRange) return 0

      const [v0, v1] = values as [number, number]
      const dist0 = Math.abs(newValue - v0)
      const dist1 = Math.abs(newValue - v1)

      if (dist0 < dist1) return 0
      if (dist1 < dist0) return 1
      // If equal distance, choose based on direction
      return newValue < v0 ? 0 : 1
    },
    [isRange, values]
  )

  // Mouse/touch handlers
  const handlePointerDown = useCallback(
    (e: React.PointerEvent, thumbIndex?: number) => {
      if (disabled) return
      e.preventDefault()

      const newValue = getValueFromPosition(e.clientX, e.clientY)
      const thumb = thumbIndex ?? findClosestThumb(newValue)

      setActiveThumb(thumb)
      updateValue(newValue, thumb)

      // Capture pointer for drag
      ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    },
    [disabled, getValueFromPosition, findClosestThumb, updateValue]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (activeThumb === null || disabled) return

      const newValue = getValueFromPosition(e.clientX, e.clientY)
      updateValue(newValue, activeThumb)
    },
    [activeThumb, disabled, getValueFromPosition, updateValue]
  )

  const handlePointerUp = useCallback(() => {
    if (activeThumb !== null) {
      commitValue()
      setActiveThumb(null)
    }
  }, [activeThumb, commitValue])

  // Keyboard handler
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, thumbIndex: number) => {
      if (disabled) return

      const currentValue = values[thumbIndex]
      const stepSize = step ?? 1
      const largeStep = (max - min) / 10

      let newValue = currentValue

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          e.preventDefault()
          newValue = e.shiftKey
            ? currentValue + largeStep
            : currentValue + stepSize
          break
        case 'ArrowLeft':
        case 'ArrowDown':
          e.preventDefault()
          newValue = e.shiftKey
            ? currentValue - largeStep
            : currentValue - stepSize
          break
        case 'Home':
          e.preventDefault()
          newValue = min
          break
        case 'End':
          e.preventDefault()
          newValue = max
          break
        case 'PageUp':
          e.preventDefault()
          newValue = currentValue + largeStep
          break
        case 'PageDown':
          e.preventDefault()
          newValue = currentValue - largeStep
          break
        default:
          return
      }

      if (step !== null) {
        newValue = roundToStep(newValue, stepSize, min)
      }
      newValue = clamp(newValue, min, max)

      updateValue(newValue, thumbIndex)

      // Compute the value to commit (for range sliders, build the full tuple)
      if (isRange) {
        const newValues: [number, number] = [
          ...(values as [number, number]),
        ]
        newValues[thumbIndex] = newValue
        commitValue(newValues)
      } else {
        commitValue(newValue)
      }
    },
    [disabled, values, step, min, max, updateValue, commitValue, isRange]
  )

  // Format value for display
  const formatValue = useCallback(
    (v: number): string => {
      if (valueLabelFormat) return valueLabelFormat(v)
      return v.toString()
    },
    [valueLabelFormat]
  )

  // Get aria value text
  const getValueText = useCallback(
    (v: number): string => {
      if (getAriaValueText) return getAriaValueText(v)
      return formatValue(v)
    },
    [getAriaValueText, formatValue]
  )

  // Calculate track styles
  const trackStyle = useMemo(() => {
    if (track === false) return {}

    const isVertical = orientation === 'vertical'
    const [v0, v1] = isRange
      ? (values as [number, number])
      : [min, values[0] as number]

    const start = valueToPercent(v0, min, max)
    const end = valueToPercent(v1, min, max)

    if (track === 'inverted') {
      if (isRange) {
        // For range, inverted means outside the range
        return isVertical
          ? { bottom: `${start}%`, top: `${100 - end}%` }
          : { left: `${start}%`, right: `${100 - end}%` }
      }
      return isVertical
        ? { bottom: `${end}%`, height: `${100 - end}%` }
        : { left: `${end}%`, width: `${100 - end}%` }
    }

    // Normal track
    if (isRange) {
      return isVertical
        ? { bottom: `${start}%`, height: `${end - start}%` }
        : { left: `${start}%`, width: `${end - start}%` }
    }
    return isVertical
      ? { bottom: '0', height: `${end}%` }
      : { left: '0', width: `${end}%` }
  }, [track, orientation, isRange, values, min, max])

  // Render thumb
  const renderThumb = (thumbValue: number, thumbIndex: number) => {
    const percent = valueToPercent(thumbValue, min, max)
    const isActive = activeThumb === thumbIndex
    const isHovered = hoveredThumb === thumbIndex
    const showLabel =
      valueLabelDisplay === 'on' ||
      (valueLabelDisplay === 'auto' && (isActive || isHovered))

    const thumbStyle =
      orientation === 'vertical'
        ? { bottom: `${percent}%` }
        : { left: `${percent}%` }

    return (
      <div
        key={thumbIndex}
        role="slider"
        tabIndex={disabled ? -1 : 0}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={thumbValue}
        aria-valuetext={getValueText(thumbValue)}
        aria-disabled={disabled || undefined}
        aria-orientation={orientation}
        className={clsx(styles.thumb, isActive && styles.active)}
        style={thumbStyle}
        onPointerDown={(e) => handlePointerDown(e, thumbIndex)}
        onKeyDown={(e) => handleKeyDown(e, thumbIndex)}
        onMouseEnter={() => setHoveredThumb(thumbIndex)}
        onMouseLeave={() => setHoveredThumb(null)}
        data-testid={`slider-thumb-${thumbIndex}`}
      >
        {showLabel && (
          <div className={styles.valueLabel}>
            {formatValue(thumbValue)}
          </div>
        )}
      </div>
    )
  }

  // Render marks
  const renderMarks = () => {
    if (marksArray.length === 0) return null

    return (
      <div className={styles.marks}>
        {marksArray.map((mark) => {
          const percent = valueToPercent(mark.value, min, max)
          const isActive = isRange
            ? mark.value >= (values as [number, number])[0] &&
              mark.value <= (values as [number, number])[1]
            : mark.value <= (values[0] as number)

          const markStyle =
            orientation === 'vertical'
              ? { bottom: `${percent}%` }
              : { left: `${percent}%` }

          return (
            <div
              key={mark.value}
              className={clsx(
                styles.mark,
                isActive && track !== false && styles.markActive
              )}
              style={markStyle}
            >
              <span className={styles.markDot} />
              {mark.label && (
                <span className={styles.markLabel}>{mark.label}</span>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div
      className={clsx(
        styles.slider,
        styles[orientation],
        styles[size],
        disabled && styles.disabled,
        track === false && styles.noTrack,
        className
      )}
      data-testid="slider"
    >
      <div
        ref={trackRef}
        className={styles.rail}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {track !== false && (
          <div
            className={clsx(
              styles.track,
              track === 'inverted' && styles.inverted
            )}
            style={trackStyle}
          />
        )}
        {renderMarks()}
        {isRange
          ? (values as [number, number]).map((v, i) => renderThumb(v, i))
          : renderThumb(values[0] as number, 0)}
      </div>

      {/* Hidden inputs for form submission */}
      {isRange ? (
        <>
          <input
            type="hidden"
            name={`${rest.name ?? id}-min`}
            value={(values as [number, number])[0]}
          />
          <input
            type="hidden"
            name={`${rest.name ?? id}-max`}
            value={(values as [number, number])[1]}
          />
        </>
      ) : (
        <input type="hidden" name={rest.name ?? id} value={values[0]} />
      )}
    </div>
  )
}
