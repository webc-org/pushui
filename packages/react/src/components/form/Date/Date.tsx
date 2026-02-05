import { useCallback, useId, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { Button, Modal } from 'components'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Date.module.scss'
import type { InputDateTypes } from './Date.types'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay()
}

const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}

const isDateDisabled = (
  date: Date,
  minDate?: Date,
  maxDate?: Date
): boolean => {
  if (minDate) {
    const min = new Date(minDate)
    min.setHours(0, 0, 0, 0)
    if (date < min) return true
  }
  if (maxDate) {
    const max = new Date(maxDate)
    max.setHours(23, 59, 59, 999)
    if (date > max) return true
  }
  return false
}

const formatDate = (date: Date | null, format: string): string => {
  if (!date) return ''

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return format
    .replace('yyyy', String(year))
    .replace('MM', month)
    .replace('dd', day)
}

export function InputDate({
  selected,
  onChange,
  onBlur,
  ref,
  placeholder,
  dateFormat = 'yyyy-MM-dd',
  minDate,
  maxDate,
  disabled = false,
  label,
  className,
  months = MONTHS,
  daysShort = DAYS_SHORT,
  selectDateLabel = 'Select date',
  previousMonthLabel = 'Previous month',
  nextMonthLabel = 'Next month',
  cancelLabel = 'Cancel',
  applyLabel = 'Apply',
  ...rest
}: InputDateTypes) {
  const id = useId()
  const placeholderText = placeholder ?? selectDateLabel
  const [isOpen, setIsOpen] = useState(false)
  const [viewDate, setViewDate] = useState(() => selected || new Date())
  const [pendingDate, setPendingDate] = useState<Date | null>(null)

  const gridRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const applyButtonRef = useRef<HTMLButtonElement>(null)
  const hasInitialFocusRef = useRef(false)

  const today = useMemo(() => new Date(), [])

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDayOfMonth = getFirstDayOfMonth(year, month)

  const calendarDays = useMemo(() => {
    const days: (Date | null)[] = []

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }, [year, month, daysInMonth, firstDayOfMonth])

  const handleOpen = useCallback(() => {
    if (disabled) return
    setViewDate(selected || new Date())
    setPendingDate(selected)
    hasInitialFocusRef.current = false
    setIsOpen(true)
  }, [disabled, selected])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setPendingDate(null)
    setTimeout(() => triggerRef.current?.focus(), 0)
  }, [])

  const handleCancel = useCallback(() => {
    handleClose()
  }, [handleClose])

  const handleApply = useCallback(() => {
    if (pendingDate) {
      onChange(pendingDate)
    }
    handleClose()
  }, [pendingDate, onChange, handleClose])

  const handleSelectDate = useCallback(
    (date: Date) => {
      if (isDateDisabled(date, minDate, maxDate)) return
      setPendingDate(date)
    },
    [minDate, maxDate]
  )

  const handlePrevMonth = useCallback(() => {
    setViewDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    )
  }, [])

  const handleNextMonth = useCallback(() => {
    setViewDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    )
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, date: Date | null) => {
      if (!date) return

      const currentIndex = calendarDays.findIndex(
        (d) => d && isSameDay(d, date)
      )
      let newIndex = currentIndex
      let newDate: Date | null = null

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          newIndex = currentIndex - 1
          break
        case 'ArrowRight':
          e.preventDefault()
          newIndex = currentIndex + 1
          break
        case 'ArrowUp':
          e.preventDefault()
          newIndex = currentIndex - 7
          break
        case 'ArrowDown':
          e.preventDefault()
          newIndex = currentIndex + 7
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          handleSelectDate(date)
          return
        default:
          return
      }

      if (newIndex < firstDayOfMonth) {
        const prevMonthDays = getDaysInMonth(year, month - 1)
        const daysBack = firstDayOfMonth - newIndex
        newDate = new Date(year, month - 1, prevMonthDays - daysBack + 1)
        setViewDate(new Date(year, month - 1, 1))
      } else if (newIndex >= calendarDays.length) {
        const daysForward = newIndex - calendarDays.length + 1
        newDate = new Date(year, month + 1, daysForward)
        setViewDate(new Date(year, month + 1, 1))
      } else {
        newDate = calendarDays[newIndex]
      }

      if (newDate) {
        setTimeout(() => {
          const buttons = gridRef.current?.querySelectorAll(
            'button[data-date]'
          )
          buttons?.forEach((btn) => {
            if (btn.getAttribute('data-date') === newDate!.toISOString()) {
              ;(btn as HTMLButtonElement).focus()
            }
          })
        }, 0)
      }
    },
    [calendarDays, firstDayOfMonth, year, month, handleSelectDate]
  )

  const handleGridRef = useCallback((el: HTMLDivElement | null) => {
    gridRef.current = el
    if (el && !hasInitialFocusRef.current) {
      hasInitialFocusRef.current = true
      setTimeout(() => {
        const selectedBtn = el.querySelector(
          'button[data-selected="true"]'
        ) as HTMLButtonElement
        const todayBtn = el.querySelector(
          'button[data-today="true"]'
        ) as HTMLButtonElement
        const firstBtn = el.querySelector(
          'button[data-date]:not(:disabled)'
        ) as HTMLButtonElement

        ;(selectedBtn || todayBtn || firstBtn)?.focus()
      }, 50)
    }
  }, [])

  const displaySelected = pendingDate

  return (
    <div className={clsx(styles.wrapper, className)} {...rest}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          id={id}
          type="text"
          readOnly
          disabled={disabled}
          placeholder={placeholderText}
          value={formatDate(selected, dateFormat)}
          onClick={handleOpen}
          onBlur={onBlur}
          className={styles.input}
        />

        <Button
          type="button"
          ref={triggerRef}
          disabled={disabled}
          onClick={handleOpen}
          className={styles.trigger}
          aria-label={selectDateLabel}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          <Calendar size={18} aria-hidden />
        </Button>
      </div>

      {isOpen && (
        <Modal id={1} onRemove={handleCancel} hideCloseButton>
          <div className={styles.calendar}>
            <div className={styles.header}>
              <Button
                type="button"
                onClick={handlePrevMonth}
                className={styles.navButton}
                aria-label={previousMonthLabel}
              >
                <ChevronLeft size={18} aria-hidden />
              </Button>

              <span
                className={styles.monthYear}
                aria-live="polite"
                aria-atomic="true"
              >
                {months[month]} {year}
              </span>

              <Button
                type="button"
                onClick={handleNextMonth}
                className={styles.navButton}
                aria-label={nextMonthLabel}
              >
                <ChevronRight size={18} aria-hidden />
              </Button>
            </div>

            <div className={styles.weekdays} role="row">
              {daysShort.map((day) => (
                <span
                  key={day}
                  className={styles.weekday}
                  role="columnheader"
                >
                  {day}
                </span>
              ))}
            </div>

            <div
              ref={handleGridRef}
              className={styles.grid}
              role="grid"
              aria-label={`${months[month]} ${year}`}
            >
              {calendarDays.map((date, index) => {
                if (!date) {
                  return (
                    <span
                      key={`empty-${index}`}
                      className={styles.empty}
                      role="gridcell"
                    />
                  )
                }

                const isDisabled = isDateDisabled(date, minDate, maxDate)
                const isSelected =
                  displaySelected && isSameDay(date, displaySelected)
                const isToday = isSameDay(date, today)

                return (
                  <Button
                    key={date.toISOString()}
                    role="gridcell"
                    type="button"
                    data-date={date.toISOString()}
                    data-selected={isSelected}
                    data-today={isToday}
                    disabled={isDisabled}
                    onClick={() => handleSelectDate(date)}
                    onKeyDown={(e) => handleKeyDown(e, date)}
                    className={clsx(
                      styles.day,
                      isSelected && styles.selected,
                      isToday && !isSelected && styles.today
                    )}
                    aria-selected={isSelected || undefined}
                    aria-disabled={isDisabled || undefined}
                    tabIndex={
                      isSelected || (isToday && !displaySelected) ? 0 : -1
                    }
                  >
                    {date.getDate()}
                  </Button>
                )
              })}
            </div>

            <div className={styles.footer}>
              <Button
                type="button"
                appearance="button"
                variant="default"
                onClick={handleCancel}
                className={styles.footerButton}
              >
                {cancelLabel}
              </Button>

              <Button
                type="button"
                ref={applyButtonRef}
                onClick={handleApply}
                disabled={!pendingDate}
                appearance="button"
                variant="primary"
                className={styles.footerButton}
              >
                {applyLabel}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
