import type { ComponentPropsWithRef, CSSProperties } from 'react'
import type { EmblaOptionsType } from 'embla-carousel'

export type CarouselContextValue = {
  selectedIndex: number
  scrollSnaps: number[]
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
}

export type CarouselOptions = {
  /** Enables active state (default: true) */
  active?: EmblaOptionsType['active']
  /** Align slides within viewport: 'start' | 'center' | 'end' | number (default: 'center') */
  align?: EmblaOptionsType['align']
  /** Scroll axis: 'x' | 'y' (default: 'x') */
  axis?: EmblaOptionsType['axis']
  /** Responsive breakpoints with options */
  breakpoints?: EmblaOptionsType['breakpoints']
  /** Contain scroll to prevent empty space: 'trimSnaps' | 'keepSnaps' | false (default: 'trimSnaps') */
  containScroll?: EmblaOptionsType['containScroll']
  /** Custom container selector */
  container?: EmblaOptionsType['container']
  /** Scroll direction: 'ltr' | 'rtl' (default: 'ltr') */
  direction?: EmblaOptionsType['direction']
  /** Enable free scrolling without snapping (default: false) */
  dragFree?: EmblaOptionsType['dragFree']
  /** Drag threshold in pixels before scrolling starts (default: 10) */
  dragThreshold?: EmblaOptionsType['dragThreshold']
  /** Scroll animation duration in ms (default: 25) */
  duration?: EmblaOptionsType['duration']
  /** Threshold for slide in-view detection: 0-1 (default: 0) */
  inViewThreshold?: EmblaOptionsType['inViewThreshold']
  /** Enable infinite looping (default: false) */
  loop?: EmblaOptionsType['loop']
  /** Skip snaps when dragging aggressively (default: false) */
  skipSnaps?: EmblaOptionsType['skipSnaps']
  /** Custom slides selector */
  slides?: EmblaOptionsType['slides']
  /** Number of slides to scroll per interaction: number | 'auto' (default: 1) */
  slidesToScroll?: EmblaOptionsType['slidesToScroll']
  /** Starting slide index (default: 0) */
  startIndex?: EmblaOptionsType['startIndex']
  /** Enable/disable drag interactions (default: true) */
  watchDrag?: EmblaOptionsType['watchDrag']
  /** Reinitialize on container resize (default: true) */
  watchResize?: EmblaOptionsType['watchResize']
  /** Reinitialize when slides change (default: true) */
  watchSlides?: EmblaOptionsType['watchSlides']
}

export type CarouselTypes = ComponentPropsWithRef<'div'> &
  CarouselOptions & {
    /** Number of slides visible at once (sets slide width via CSS) */
    slidesPerView?: number
    /** Gap between slides in rem */
    gap?: number
  }

export interface CarouselCSSProperties extends CSSProperties {
  '--carousel-slides-per-view'?: number
  '--carousel-gap'?: string
}

export type CarouselContainerTypes = ComponentPropsWithRef<'div'>

export type CarouselSlideTypes = ComponentPropsWithRef<'div'>

export type CarouselControlsTypes = ComponentPropsWithRef<'div'> & {
  /** Position arrows overlaying the carousel left/right */
  overlay?: boolean
}

export type CarouselPrevTypes = ComponentPropsWithRef<'button'> & {
  label?: string
}

export type CarouselNextTypes = ComponentPropsWithRef<'button'> & {
  label?: string
}

export type CarouselDotsTypes = ComponentPropsWithRef<'div'> & {
  label?: string
  navigationLabel?: string
}
