import type { ComponentPropsWithRef } from 'react'
import type { TitleTypes } from 'base/Title/Title.types'
import type { HorizontalAlign, VerticalAlign } from 'types'

/** @deprecated Use HorizontalAlign instead */
export type HorizontalAlignTypes = HorizontalAlign
/** @deprecated Use VerticalAlign instead */
export type VerticalAlignTypes = VerticalAlign
/** @deprecated Use HorizontalAlign instead */
export type BannerTextAlignTypes = HorizontalAlign

export type BannerOverlay = 'none' | 'light' | 'dark'
export type BannerTextColor = 'light' | 'dark'

/** @deprecated Use BannerOverlay instead */
export type BannerOverlayTypes = BannerOverlay
/** @deprecated Use BannerTextColor instead */
export type BannerTextColorTypes = BannerTextColor

export type BannerBackgroundVideo = {
  src: string
  poster?: string
}

export type BannerTypes = ComponentPropsWithRef<'div'> & {
  backgroundImage?: string
  backgroundVideo?: BannerBackgroundVideo
  backgroundColor?: string
  horizontalAlign?: HorizontalAlign
  verticalAlign?: VerticalAlign
  minHeight?: string
  overlay?: BannerOverlay
}

export type BannerContentTypes = ComponentPropsWithRef<'div'> & {
  maxWidth?: string
  textAlign?: HorizontalAlign
  textColor?: BannerTextColor
}

export type BannerTitleTypes = TitleTypes

export type BannerSubtitleTypes = ComponentPropsWithRef<'p'>

export type BannerBodyTypes = ComponentPropsWithRef<'div'>

export type BannerActionsTypes = ComponentPropsWithRef<'div'>
