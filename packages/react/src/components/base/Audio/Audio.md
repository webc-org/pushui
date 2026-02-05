# Audio

Accessible audio player with optional title, caption, and transcript link.

## Import

```tsx
import { Audio } from '@ui'
```

## Usage

### Basic

```tsx
<Audio src="/audio/podcast.mp3" />
```

### With Title and Caption

```tsx
<Audio
  src="/audio/episode-1.mp3"
  title="Episode 1: Getting Started"
  caption="Duration: 45 minutes"
/>
```

### With Transcript (Accessibility)

```tsx
<Audio
  src="/audio/interview.mp3"
  title="Interview with CEO"
  transcriptUrl="/transcripts/interview.txt"
  transcriptLabel="Read transcript"
/>
```

### Multiple Sources (Browser Compatibility)

```tsx
<Audio
  sources={[
    { src: '/audio/track.ogg', type: 'audio/ogg' },
    { src: '/audio/track.mp3', type: 'audio/mpeg' },
  ]}
  title="Background Music"
/>
```

### Custom Fallback

```tsx
<Audio
  src="/audio/clip.mp3"
  fallbackText="Audio not supported."
  fallbackLinkText="Download the audio file"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Audio source URL |
| `sources` | `AudioSource[]` | - | Multiple sources for browser compatibility |
| `title` | `ReactNode` | - | Title displayed above the player |
| `caption` | `ReactNode` | - | Caption displayed below the player |
| `transcriptUrl` | `string` | - | Link to transcript file |
| `transcriptLabel` | `string` | `'View transcript'` | Transcript link text |
| `controls` | `boolean` | `true` | Show audio controls |
| `fallback` | `ReactNode` | - | Custom fallback content |
| `fallbackText` | `string` | `"Your browser doesn't support HTML audio."` | Fallback text |
| `fallbackLinkText` | `string` | `'link to the audio'` | Fallback link text |
| `className` | `string` | - | Additional CSS class |

### AudioSource Type

```tsx
type AudioSource = {
  src: string   // URL to audio file
  type: string  // MIME type (e.g., 'audio/mpeg', 'audio/ogg')
}
```

## Accessibility

- Uses `<figure>` with `role="group"` when title/caption present
- `aria-labelledby` links to title
- `aria-describedby` links to caption
- Transcript link for deaf/hard-of-hearing users

## Strapi Integration

Map Strapi audio component:

```tsx
<Audio
  src={getMediaUrl(data.audio.url)}
  title={data.title}
  caption={data.caption}
  transcriptUrl={data.transcript?.url}
/>
```
