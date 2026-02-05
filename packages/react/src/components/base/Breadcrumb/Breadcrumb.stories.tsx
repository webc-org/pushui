import type { Meta, StoryObj } from '@storybook/react'
import { Slash } from 'lucide-react'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Base/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: {
    items: [
      { label: 'Accueil', href: '/' },
      { label: 'Produits', href: '/products' },
      { label: 'Catégorie', href: '/products/category' },
      { label: 'Article' },
    ],
  },
}

export const TwoItems: Story = {
  args: {
    items: [{ label: 'Accueil', href: '/' }, { label: 'Contact' }],
  },
}

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Accueil', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Article' },
    ],
    separator: <Slash size={14} />,
  },
}

export const TextSeparator: Story = {
  args: {
    items: [
      { label: 'Accueil', href: '/' },
      { label: 'Produits', href: '/products' },
      { label: 'Détail' },
    ],
    separator: '/',
  },
}

export const LongBreadcrumb: Story = {
  args: {
    items: [
      { label: 'Accueil', href: '/' },
      { label: 'Catégorie principale', href: '/category' },
      { label: 'Sous-catégorie', href: '/category/sub' },
      { label: 'Section', href: '/category/sub/section' },
      { label: 'Article avec un titre très long' },
    ],
  },
}
