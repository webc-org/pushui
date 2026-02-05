import type { Meta, StoryObj } from '@storybook/react'
import { Title } from 'base/Title'
import { PageRoot } from './Page'

const meta: Meta<typeof PageRoot> = {
  title: 'Sections/Page',
  component: PageRoot,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'grey',
      values: [{ name: 'grey', value: 'var(--color-grey-6)' }],
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'Page content',
    },
  },
}

export default meta
type Story = StoryObj<typeof PageRoot>

export const Playground: Story = {
  render: () => (
    <PageRoot
      style={{ minHeight: '100vh', background: 'var(--color-grey-6)' }}
    >
      <header
        style={{ padding: '2rem', background: 'var(--color-white)' }}
      >
        <Title>Header</Title>
      </header>

      <main style={{ flex: 1, padding: '2rem' }}>
        <Title level="h2">Main Content</Title>
        <p style={{ marginTop: '1rem' }}>
          This is the main content area that fills the available space.
        </p>
      </main>

      <footer
        style={{ padding: '2rem', background: 'var(--color-grey-5)' }}
      >
        <p>Footer</p>
      </footer>
    </PageRoot>
  ),
}

export const Simple: Story = {
  render: () => (
    <PageRoot style={{ minHeight: '50vh', padding: '2rem' }}>
      <Title>Simple Page</Title>
      <p style={{ marginTop: '1rem' }}>Page content goes here.</p>
    </PageRoot>
  ),
}

export const WithStickyFooter: Story = {
  render: () => (
    <PageRoot style={{ minHeight: '100vh' }}>
      <header
        style={{
          padding: '2rem',
          background: 'var(--color-primary-2)',
          color: 'white',
        }}
      >
        <Title>Site Header</Title>
      </header>

      <main style={{ flex: 1, padding: '2rem' }}>
        <Title level="h2">Content Area</Title>
        <p style={{ marginTop: '1rem' }}>
          The footer will stick to the bottom even with minimal content.
        </p>
      </main>

      <footer
        style={{
          padding: '2rem',
          background: 'var(--color-grey-5)',
          textAlign: 'center',
        }}
      >
        <p>© 2024 Company Name. All rights reserved.</p>
      </footer>
    </PageRoot>
  ),
}

export const NestedLayout: Story = {
  render: () => (
    <PageRoot style={{ minHeight: '100vh' }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <aside
          style={{
            width: '25rem',
            padding: '2rem',
            background: 'var(--color-grey-6)',
          }}
        >
          <Title level="h3">Sidebar</Title>
          <nav style={{ marginTop: '1rem' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>Link 1</li>
              <li style={{ marginBottom: '0.5rem' }}>Link 2</li>
              <li style={{ marginBottom: '0.5rem' }}>Link 3</li>
            </ul>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: '2rem' }}>
          <Title level="h2">Main Content</Title>
          <p style={{ marginTop: '1rem' }}>
            Page with sidebar layout using flex container.
          </p>
        </main>
      </div>
    </PageRoot>
  ),
}
