import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import clsx from 'clsx'
import { Button } from 'components'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './Carousel.module.scss'
import type {
  CarouselContainerTypes,
  CarouselContextValue,
  CarouselControlsTypes,
  CarouselCSSProperties,
  CarouselDotsTypes,
  CarouselNextTypes,
  CarouselPrevTypes,
  CarouselSlideTypes,
  CarouselTypes,
} from './Carousel.types'

const CarouselContext = createContext<CarouselContextValue | null>(null)

function useCarouselContext() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error(
      'Carousel components must be used within a <Carousel> provider'
    )
  }
  return context
}

export function Carousel({
  ref,
  // Embla options
  active,
  align,
  axis,
  breakpoints,
  containScroll,
  container,
  direction,
  dragFree,
  dragThreshold,
  duration,
  inViewThreshold,
  loop,
  skipSnaps,
  slides,
  slidesToScroll,
  startIndex,
  watchDrag,
  watchResize,
  watchSlides,
  // Custom options
  slidesPerView,
  gap,
  // Rest
  className,
  style,
  children,
  ...props
}: CarouselTypes) {
  const options = useMemo(() => {
    const opts: Record<string, unknown> = {}
    if (active !== undefined) opts.active = active
    if (align !== undefined) opts.align = align
    if (axis !== undefined) opts.axis = axis
    if (breakpoints !== undefined) opts.breakpoints = breakpoints
    if (containScroll !== undefined) opts.containScroll = containScroll
    if (container !== undefined) opts.container = container
    if (direction !== undefined) opts.direction = direction
    if (dragFree !== undefined) opts.dragFree = dragFree
    if (dragThreshold !== undefined) opts.dragThreshold = dragThreshold
    if (duration !== undefined) opts.duration = duration
    if (inViewThreshold !== undefined)
      opts.inViewThreshold = inViewThreshold
    if (loop !== undefined) opts.loop = loop
    if (skipSnaps !== undefined) opts.skipSnaps = skipSnaps
    if (slides !== undefined) opts.slides = slides
    if (slidesToScroll !== undefined) opts.slidesToScroll = slidesToScroll
    if (startIndex !== undefined) opts.startIndex = startIndex
    if (watchDrag !== undefined) opts.watchDrag = watchDrag
    if (watchResize !== undefined) opts.watchResize = watchResize
    if (watchSlides !== undefined) opts.watchSlides = watchSlides
    return opts
  }, [
    active,
    align,
    axis,
    breakpoints,
    containScroll,
    container,
    direction,
    dragFree,
    dragThreshold,
    duration,
    inViewThreshold,
    loop,
    skipSnaps,
    slides,
    slidesToScroll,
    startIndex,
    watchDrag,
    watchResize,
    watchSlides,
  ])

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const contextValue = useMemo(
    () => ({
      selectedIndex,
      scrollSnaps,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      scrollTo,
    }),
    [
      selectedIndex,
      scrollSnaps,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      scrollTo,
    ]
  )

  const cssVariables: CarouselCSSProperties = {
    ...style,
    ...(slidesPerView && { '--carousel-slides-per-view': slidesPerView }),
    ...(gap && { '--carousel-gap': `${gap}rem` }),
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={clsx(styles.carousel, className)}
        style={cssVariables}
        {...props}
      >
        <div className={styles.viewport} ref={emblaRef}>
          {children}
        </div>
        {/* Visually hidden live region for screen readers */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          style={{
            position: 'absolute',
            width: '0.1rem',
            height: '0.1rem',
            padding: 0,
            margin: '-0.1rem',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          {`Slide ${selectedIndex + 1} of ${scrollSnaps.length}`}
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export function CarouselContainer({
  ref,
  className,
  children,
  ...props
}: CarouselContainerTypes) {
  return (
    <div
      ref={ref}
      className={clsx(styles.container, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CarouselSlide({
  ref,
  className,
  children,
  ...props
}: CarouselSlideTypes) {
  return (
    <div ref={ref} className={clsx(styles.slide, className)} {...props}>
      {children}
    </div>
  )
}

export function CarouselControls({
  ref,
  overlay,
  className,
  children,
  ...props
}: CarouselControlsTypes) {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.controls,
        overlay && styles.overlay,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CarouselPrev({
  ref,
  className,
  label,
  children,
  ...props
}: CarouselPrevTypes) {
  const { canScrollPrev, scrollPrev } = useCarouselContext()

  return (
    <Button
      ref={ref}
      type="button"
      className={clsx(styles.button, styles.prev, className)}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label={label || 'Previous slide'}
      {...props}
    >
      {children ?? <ChevronLeft size={20} aria-hidden />}
    </Button>
  )
}

export function CarouselNext({
  ref,
  className,
  label,
  children,
  ...props
}: CarouselNextTypes) {
  const { canScrollNext, scrollNext } = useCarouselContext()

  return (
    <Button
      ref={ref}
      type="button"
      className={clsx(styles.button, styles.next, className)}
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label={label || 'Next slide'}
      {...props}
    >
      {children ?? <ChevronRight size={20} aria-hidden />}
    </Button>
  )
}

export function CarouselDots({
  ref,
  className,
  label = 'Go to slide',
  navigationLabel = 'Slide navigation',
  ...props
}: CarouselDotsTypes) {
  const { selectedIndex, scrollSnaps, scrollTo } = useCarouselContext()

  return (
    <div
      ref={ref}
      className={clsx(styles.dots, className)}
      role="group"
      aria-label={navigationLabel}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <Button
          key={index}
          type="button"
          className={clsx(
            styles.dot,
            selectedIndex === index && styles.active
          )}
          onClick={() => scrollTo(index)}
          aria-current={selectedIndex === index || undefined}
          aria-label={`${label} ${index + 1}`}
        />
      ))}
    </div>
  )
}
