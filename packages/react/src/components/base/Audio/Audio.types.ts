import type { ComponentPropsWithRef, ReactNode } from 'react'

export type AudioSource = {
  src: string
  type: string
}

export type AudioTypes = Omit<ComponentPropsWithRef<'audio'>, 'src'> & {
  /** Audio source URL (use sources for multiple formats) */
  src?: string
  /** Multiple audio sources for browser compatibility */
  sources?: AudioSource[]
  /** Title displayed above the audio player */
  title?: ReactNode
  /** Caption text displayed below the audio player */
  caption?: ReactNode
  /** Link to transcript for accessibility */
  transcriptUrl?: string
  /** Transcript link text */
  transcriptLabel?: string
  /** Fallback content for unsupported browsers */
  fallback?: ReactNode
  /** Fallback text for unsupported browsers */
  fallbackText?: string
  /** Link text for audio fallback */
  fallbackLinkText?: string
}
