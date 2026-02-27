import type { Meta, StoryObj } from '@storybook/react'
import { Title } from 'base/Title'
import { Button } from 'form/Button'
import { Card, CardBody, CardFooter, CardHeader } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Modules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
  },
}

export default meta
type Story = StoryObj<typeof Card>

const cardStyles = {
  width: '33.5rem',
  borderRadius: '.5rem',
  border: '.1rem solid var(--theme-border)',
}
const ph = { padding: '1rem 1rem 0 1rem' }
const pb = { padding: '1rem' }
const pf = { padding: '0 1rem 1rem 1rem' }

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <Card style={cardStyles}>
      <CardBody style={pb}>Body only card.</CardBody>
    </Card>
    <Card style={cardStyles}>
      <CardHeader style={ph}>
        <Title level="h3">With Header</Title>
      </CardHeader>
      <CardBody style={pb}>Card with header and body.</CardBody>
    </Card>
    <Card style={cardStyles}>
      <CardHeader style={ph}>
        <Title level="h3">Complete Card</Title>
      </CardHeader>
      <CardBody style={pb}>Card with header, body, and footer.</CardBody>
      <CardFooter style={pf}>
        <Button variant="primary" appearance="button">
          Save
        </Button>
      </CardFooter>
    </Card>
  </div>
)

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}
