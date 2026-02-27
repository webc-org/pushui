import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Base/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number', description: 'Current page' },
    totalPages: { control: 'number', description: 'Total pages' },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last buttons',
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show prev/next buttons',
    },
    siblingCount: {
      control: 'number',
      description: 'Sibling pages count',
    },
    disabled: { control: 'boolean', description: 'Disable all buttons' },
  },
  args: { currentPage: 5, totalPages: 10 },
}

export default meta
type Story = StoryObj<typeof Pagination>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Pagination currentPage={1} totalPages={10} />
    <Pagination currentPage={5} totalPages={10} />
    <Pagination currentPage={10} totalPages={10} />
    <Pagination currentPage={5} totalPages={10} showFirstLast />
    <Pagination currentPage={5} totalPages={10} showPrevNext={false} />
    <Pagination currentPage={10} totalPages={20} siblingCount={2} />
    <Pagination currentPage={5} totalPages={10} disabled />
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
