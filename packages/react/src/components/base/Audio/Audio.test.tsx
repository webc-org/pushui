import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Audio } from './Audio'

describe('Audio', () => {
  it('renders audio element', () => {
    render(<Audio src="test.mp3" data-testid="audio" />)
    expect(screen.getByTestId('audio')).toBeInTheDocument()
  })

  it('renders with controls by default', () => {
    render(<Audio src="test.mp3" data-testid="audio" />)
    expect(screen.getByTestId('audio')).toHaveAttribute('controls')
  })

  it('renders without controls when disabled', () => {
    render(<Audio src="test.mp3" controls={false} data-testid="audio" />)
    expect(screen.getByTestId('audio')).not.toHaveAttribute('controls')
  })

  it('renders with title', () => {
    render(<Audio src="test.mp3" title="Audio Title" />)
    expect(screen.getByRole('group')).toBeInTheDocument()
    expect(screen.getByText('Audio Title')).toBeInTheDocument()
  })

  it('renders with caption', () => {
    render(<Audio src="test.mp3" caption="Audio caption" />)
    expect(screen.getByRole('group')).toBeInTheDocument()
    expect(screen.getByText('Audio caption')).toBeInTheDocument()
  })

  it('renders with title and caption', () => {
    render(<Audio src="test.mp3" title="Title" caption="Caption" />)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Caption')).toBeInTheDocument()
  })

  it('renders transcript link', () => {
    render(<Audio src="test.mp3" transcriptUrl="/transcript.txt" />)
    const link = screen.getByText('View transcript')
    expect(link).toHaveAttribute('href', '/transcript.txt')
  })

  it('renders custom transcript label', () => {
    render(
      <Audio
        src="test.mp3"
        transcriptUrl="/transcript.txt"
        transcriptLabel="Lire la transcription"
      />
    )
    expect(screen.getByText('Lire la transcription')).toBeInTheDocument()
  })

  it('renders multiple sources', () => {
    render(
      <Audio
        sources={[
          { src: 'audio.mp3', type: 'audio/mp3' },
          { src: 'audio.ogg', type: 'audio/ogg' },
        ]}
        data-testid="audio"
      />
    )
    const audio = screen.getByTestId('audio')
    const sources = audio.querySelectorAll('source')
    expect(sources).toHaveLength(2)
    expect(sources[0]).toHaveAttribute('src', 'audio.mp3')
    expect(sources[0]).toHaveAttribute('type', 'audio/mp3')
  })

  it('renders fallback content', () => {
    render(<Audio src="test.mp3" fallback={<p>Custom fallback</p>} />)
    expect(screen.getByText('Custom fallback')).toBeInTheDocument()
  })

  it('renders default fallback with link', () => {
    render(<Audio src="test.mp3" />)
    expect(screen.getByText('link to the audio')).toHaveAttribute(
      'href',
      'test.mp3'
    )
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Audio ref={ref} src="test.mp3" />)
    expect(ref.current).toBeInstanceOf(HTMLAudioElement)
  })
})
