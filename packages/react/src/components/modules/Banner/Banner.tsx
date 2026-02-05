import clsx from 'clsx'
import { Title } from 'components'
import styles from './Banner.module.scss'
import type {
  BannerActionsTypes,
  BannerBodyTypes,
  BannerContentTypes,
  BannerSubtitleTypes,
  BannerTitleTypes,
  BannerTypes,
} from './Banner.types'

export function Banner({
  ref,
  backgroundImage,
  backgroundVideo,
  backgroundColor,
  overlay = 'none',
  minHeight = '40rem',
  className,
  style,
  children,
  horizontalAlign = 'left',
  verticalAlign = 'center',
  ...props
}: BannerTypes) {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.banner,
        overlay !== 'none' && styles[`overlay-${overlay}`],
        className
      )}
      style={{
        ...style,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor,
        minHeight,
      }}
      {...props}
    >
      {backgroundVideo && (
        <video
          className={styles.backgroundMedia}
          src={backgroundVideo.src}
          poster={backgroundVideo.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      <div
        className={clsx(
          styles.container,
          styles[`horizontal-align-${horizontalAlign}`],
          styles[`vertical-align-${verticalAlign}`]
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function BannerContent({
  ref,
  textAlign,
  textColor = 'dark',
  maxWidth,
  className,
  style,
  children,
  ...props
}: BannerContentTypes) {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.content,
        styles[`text-${textColor}`],
        textAlign && styles[`text-align-${textAlign}`],
        className
      )}
      style={{ ...style, maxWidth }}
      {...props}
    >
      {children}
    </div>
  )
}

export function BannerTitle({
  level = 'h1',
  className,
  children,
  ...props
}: BannerTitleTypes) {
  return (
    <Title
      level={level}
      className={clsx(styles.title, className)}
      {...props}
    >
      {children}
    </Title>
  )
}

export function BannerSubtitle({
  ref,
  className,
  children,
  ...props
}: BannerSubtitleTypes) {
  return (
    <p ref={ref} className={clsx(styles.subtitle, className)} {...props}>
      {children}
    </p>
  )
}

export function BannerBody({
  ref,
  className,
  children,
  ...props
}: BannerBodyTypes) {
  return (
    <div ref={ref} className={clsx(styles.body, className)} {...props}>
      {children}
    </div>
  )
}

export function BannerActions({
  ref,
  className,
  children,
  ...props
}: BannerActionsTypes) {
  return (
    <div ref={ref} className={clsx(styles.actions, className)} {...props}>
      {children}
    </div>
  )
}
