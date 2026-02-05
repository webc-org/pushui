import type { Meta, StoryObj } from '@storybook/react'
import { Title } from 'base/Title'
import { Button } from 'form/Button'
import { Card, CardBody, CardFooter, CardHeader } from './Card'

const cardStyles = {
  width: '33.5rem',
  borderRadius: '.5rem',
  border: '.1rem solid var(--color-grey-6)',
}

const cardHeaderStyles = {
  padding: '1rem 1rem 0 1rem',
}

const cardBodyStyles = {
  padding: '1rem',
}

const cardFooterStyles = {
  padding: '0 1rem 1rem 1rem',
}

const meta: Meta<typeof Card> = {
  title: 'Modules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'Card content (CardHeader, CardBody, CardFooter)',
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Playground: Story = {
  render: () => (
    <Card style={cardStyles}>
      <CardHeader style={cardHeaderStyles}>
        <Title level="h3">Card Title</Title>
      </CardHeader>
      <CardBody style={cardBodyStyles}>
        This is the card body content. You can put any content here.
      </CardBody>
      <CardFooter style={cardFooterStyles}>
        <Button variant="primary" appearance="button">
          Action
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const Basic: Story = {
  render: () => (
    <Card style={cardStyles}>
      <CardBody style={cardBodyStyles}>
        Basic card with body content.
      </CardBody>
    </Card>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Card style={cardStyles}>
      <CardHeader style={cardHeaderStyles}>
        <Title level="h3">Card Title</Title>
      </CardHeader>
      <CardBody style={cardBodyStyles}>
        Card with header and body.
      </CardBody>
    </Card>
  ),
}

export const Complete: Story = {
  render: () => (
    <Card style={cardStyles}>
      <CardHeader style={cardHeaderStyles}>
        <Title level="h3">Complete Card</Title>
      </CardHeader>
      <CardBody style={cardBodyStyles}>
        Card with header, body, and footer.
      </CardBody>
      <CardFooter style={cardFooterStyles}>
        <Button variant="primary" appearance="button">
          Save
        </Button>
      </CardFooter>
    </Card>
  ),
}
