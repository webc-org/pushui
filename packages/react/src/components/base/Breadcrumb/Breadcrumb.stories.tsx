import type { Meta, StoryObj } from '@storybook/react'
import { Slash } from 'lucide-react'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Base/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: { control: false, description: 'Breadcrumb items array' },
    separator: { control: false, description: 'Custom separator element' },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Breadcrumb
      items={[{ label: 'Home', href: '/' }, { label: 'Page' }]}
    />
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Category', href: '/products/category' },
        { label: 'Item' },
      ]}
    />
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Article' },
      ]}
      separator={<Slash size={14} />}
    />
    <Breadcrumb
      items={[
        { label: 'Home', href: '/' },
        { label: 'Category', href: '/category' },
        { label: 'Sub-category', href: '/category/sub' },
        { label: 'Section', href: '/category/sub/section' },
        { label: 'A very long article title' },
      ]}
    />
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
