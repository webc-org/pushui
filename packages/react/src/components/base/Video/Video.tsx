import { useId } from 'react'
import clsx from 'clsx'
import styles from './Video.module.scss'
import type { VideoTypes } from './Video.types'

export function Video({
  ref,
  src,
  sources,
  tracks,
  poster,
  caption,
  fallback,
  fallbackText = "Your browser doesn't support HTML video.",
  fallbackLinkText = 'link to the video',
  className,
  controls = true,
  ...rest
}: VideoTypes) {
  const captionId = useId()

  const videoClass = clsx(styles.video, !caption && className)

  const video = (
    <video
      ref={ref}
      src={!sources?.length ? src : undefined}
      poster={poster}
      controls={controls}
      className={videoClass}
      {...rest}
    >
      {sources?.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}

      {tracks?.map((track) => (
        <track
          key={`${track.src}-${track.srclang}`}
          src={track.src}
          kind={track.kind}
          srcLang={track.srclang}
          label={track.label}
          default={track.default}
        />
      ))}

      {fallback || (
        <p>
          {fallbackText}
          {src && (
            <>
              {' '}
              <a href={src}>{fallbackLinkText}</a>
            </>
          )}
        </p>
      )}
    </video>
  )

  if (caption) {
    return (
      <figure
        role="group"
        aria-labelledby={captionId}
        className={className}
      >
        {video}

        <figcaption id={captionId} className={styles.caption}>
          {caption}
        </figcaption>
      </figure>
    )
  }

  return video
}
