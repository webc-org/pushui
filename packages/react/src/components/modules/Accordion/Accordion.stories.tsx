import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Modules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['single', 'multiple'] },
    collapsible: { control: 'boolean' },
    defaultValue: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

const faqItems = [
  {
    value: 'item-1',
    title: 'What is your return policy?',
    content:
      'We offer a 30-day return policy for all unused items in their original packaging.',
  },
  {
    value: 'item-2',
    title: 'How long does shipping take?',
    content:
      'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery.',
  },
  {
    value: 'item-3',
    title: 'Do you offer international shipping?',
    content:
      'Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.',
  },
  {
    value: 'item-4',
    title: 'How can I track my order?',
    content:
      'Once your order ships, you will receive an email with a tracking number.',
  },
]

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <p style={{ marginBottom: '1rem' }}>Single (item 1 open)</p>
      <Accordion type="single" defaultValue="item-1">
        {faqItems.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    <div>
      <p style={{ marginBottom: '1rem' }}>Multiple (items 1 & 3 open)</p>
      <Accordion type="multiple" defaultValue={['item-1', 'item-3']}>
        {faqItems.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    <div>
      <p style={{ marginBottom: '1rem' }}>With disabled item</p>
      <Accordion type="single">
        <AccordionItem value="a1">
          <AccordionTrigger>Available section</AccordionTrigger>
          <AccordionContent>This section is available.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="a2" disabled>
          <AccordionTrigger>Disabled section</AccordionTrigger>
          <AccordionContent>This is disabled.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="a3">
          <AccordionTrigger>Another available section</AccordionTrigger>
          <AccordionContent>
            This section is also available.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
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
