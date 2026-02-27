import React from 'react'
import type { Preview, Decorator } from '@storybook/react-vite'
import { ThemeProvider } from '../../../packages/react/src/utils'
import '../../../packages/styles/styles/index.scss'
import './preview.css'
import 'highlight.js/styles/github-dark.css'

const withTheme: Decorator = (Story, context) => {
  const theme = (context.parameters.theme ?? context.globals.theme ?? 'light') as string
  const fullscreen = context.parameters.layout === 'fullscreen'

  return (
    <ThemeProvider defaultTheme={theme}>
      <div
        className={theme}
        style={{
          backgroundColor: theme === 'dark' ? 'var(--color-grey-1)' : 'var(--color-grey-8)',
          color: 'var(--theme-text)',
          minHeight: '100%',
          padding: fullscreen ? '0' : '4rem',
        }}
      >
        <Story />
      </div>
    </ThemeProvider>
  )
}

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
