import type { Meta, StoryObj } from '@storybook/react'
import { Title } from 'base/Title'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
  title: 'Sections/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof Page>

const Variants = () => (
  <Page style={{ minHeight: '100vh', background: 'var(--theme-bg-2)' }}>
    <header style={{ padding: '2rem', background: 'var(--theme-bg)' }}>
      <Title>Header</Title>
    </header>
    <main style={{ flex: 1, padding: '2rem' }}>
      <Title level="h2">Main Content</Title>
      <p style={{ marginTop: '1rem' }}>
        This is the main content area that fills the available space.
      </p>
    </main>
    <footer style={{ padding: '2rem', background: 'var(--theme-bg)' }}>
      <p>Footer</p>
    </footer>
  </Page>
)

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}
