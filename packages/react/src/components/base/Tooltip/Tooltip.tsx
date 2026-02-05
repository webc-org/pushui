import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import styles from './Tooltip.module.scss'
import type { TooltipPosition, TooltipTypes } from './Tooltip.types'

const getAdjustedPosition = (
  tooltipEl: HTMLElement,
  _wrapperEl: HTMLElement,
  preferredPosition: TooltipPosition
): { position: TooltipPosition; offsetX: number } => {
  const tooltipRect = tooltipEl.getBoundingClientRect()
  const padding = 8 // Min distance from viewport edge

  let position = preferredPosition
  let offsetX = 0

  // Check vertical overflow and flip if needed
  if (position === 'top' && tooltipRect.top < padding) {
    position = 'bottom'
  } else if (
    position === 'bottom' &&
    tooltipRect.bottom > window.innerHeight - padding
  ) {
    position = 'top'
  }

  // Check horizontal overflow and flip if needed
  if (position === 'left' && tooltipRect.left < padding) {
    position = 'right'
  } else if (
    position === 'right' &&
    tooltipRect.right > window.innerWidth - padding
  ) {
    position = 'left'
  }

  // For top/bottom positions, check horizontal overflow and shift
  if (position === 'top' || position === 'bottom') {
    if (tooltipRect.left < padding) {
      offsetX = padding - tooltipRect.left
    } else if (tooltipRect.right > window.innerWidth - padding) {
      offsetX = window.innerWidth - padding - tooltipRect.right
    }
  }

  // For left/right positions, we don't shift vertically (could add if needed)

  return { position, offsetX }
}

export function Tooltip({
  ref,
  content,
  position: preferredPosition = 'top',
  delay = 200,
  children,
  disabled = false,
  className,
  ...rest
}: TooltipTypes) {
  const id = useId()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [adjustedPosition, setAdjustedPosition] =
    useState(preferredPosition)
  const [offsetX, setOffsetX] = useState(0)

  const showTooltip = () => {
    if (disabled) return
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsVisible(false)
    setAdjustedPosition(preferredPosition)
    setOffsetX(0)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Adjust position after tooltip is rendered
  useLayoutEffect(() => {
    if (isVisible && tooltipRef.current && wrapperRef.current) {
      const { position, offsetX: newOffsetX } = getAdjustedPosition(
        tooltipRef.current,
        wrapperRef.current,
        preferredPosition
      )
      setAdjustedPosition(position)
      setOffsetX(newOffsetX)
    }
  }, [isVisible, preferredPosition])

  // Merge refs
  const setWrapperRef = (el: HTMLDivElement | null) => {
    wrapperRef.current = el
    if (typeof ref === 'function') {
      ref(el)
    } else if (ref) {
      ref.current = el
    }
  }

  return (
    <div
      ref={setWrapperRef}
      className={clsx(styles.wrapper, className)}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      {...rest}
    >
      <div aria-describedby={isVisible ? id : undefined}>{children}</div>

      {isVisible && (
        <div
          ref={tooltipRef}
          id={id}
          role="tooltip"
          className={clsx(styles.tooltip, styles[adjustedPosition])}
          style={
            offsetX
              ? { transform: `translateX(calc(-50% + ${offsetX}px))` }
              : undefined
          }
        >
          {content}
          <span
            className={styles.arrow}
            style={
              offsetX
                ? { transform: `translateX(calc(-50% - ${offsetX}px))` }
                : undefined
            }
            aria-hidden
          />
        </div>
      )}
    </div>
  )
}
