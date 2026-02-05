import { useState } from 'react'
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
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Whether one or multiple items can be expanded at once',
      table: {
        defaultValue: { summary: 'single' },
      },
    },
    collapsible: {
      control: 'boolean',
      description: 'When type="single", allows closing all items',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    defaultValue: {
      control: 'text',
      description: 'The initial expanded item(s)',
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

const faqItems = [
  {
    value: 'item-1',
    title: 'What is your return policy?',
    content:
      'We offer a 30-day return policy for all unused items in their original packaging. Simply contact our support team to initiate a return.',
  },
  {
    value: 'item-2',
    title: 'How long does shipping take?',
    content:
      'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery. International shipping may take longer depending on the destination.',
  },
  {
    value: 'item-3',
    title: 'Do you offer international shipping?',
    content:
      'Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. You can see the exact cost at checkout.',
  },
  {
    value: 'item-4',
    title: 'How can I track my order?',
    content:
      'Once your order ships, you will receive an email with a tracking number. You can use this number on our website or the carrier website to track your package.',
  },
]

export const Playground: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args}>
      {faqItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const Single: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1">
      {faqItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
  parameters: { controls: { disable: true } },
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={['item-1', 'item-3']}>
      {faqItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
  parameters: { controls: { disable: true } },
}

export const NonCollapsible: Story = {
  render: () => (
    <Accordion type="single" collapsible={false} defaultValue="item-1">
      {faqItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
  parameters: { controls: { disable: true } },
}

export const WithDisabledItem: Story = {
  render: () => (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Available Section</AccordionTrigger>
        <AccordionContent>This section is available.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Section</AccordionTrigger>
        <AccordionContent>This section is disabled.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another Available Section</AccordionTrigger>
        <AccordionContent>
          This section is also available.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: { controls: { disable: true } },
}

export const Controlled: Story = {
  render: function ControlledAccordion() {
    const [value, setValue] = useState<string>('item-1')

    return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Current value:</strong> {value || 'none'}
        </div>
        <Accordion
          type="single"
          value={value}
          onValueChange={(v) => setValue(v as string)}
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  },
  parameters: { controls: { disable: true } },
}

export const ControlledMultiple: Story = {
  render: function ControlledMultipleAccordion() {
    const [values, setValues] = useState<string[]>(['item-1'])

    return (
      <div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Expanded items:</strong> {values.join(', ') || 'none'}
        </div>
        <Accordion
          type="multiple"
          value={values}
          onValueChange={(v) => setValues(v as string[])}
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  },
  parameters: { controls: { disable: true } },
}
