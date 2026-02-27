import { useRef } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modals } from 'components/modules'
import { GdprProvider, useGdpr } from './GdprContext'

const meta: Meta = {
  title: 'Modules/Gdpr',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Modals>
        <Story />
      </Modals>
    ),
  ],
}

export default meta
type Story = StoryObj

const GdprControls = () => {
  const { consent, hasConsented } = useGdpr()
  return (
    <pre className="fs-3 mt-2">
      {JSON.stringify({ hasConsented, consent }, null, 2)}
    </pre>
  )
}

const Variants = () => {
  const storageKey = useRef(`GDPR_${Math.random()}`).current
  return (
    <GdprProvider
      storageKey={storageKey}
      autoOpen={true}
      termsUrl="/terms"
      privacyPolicyUrl="/privacy"
    >
      <GdprControls />
    </GdprProvider>
  )
}

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}
