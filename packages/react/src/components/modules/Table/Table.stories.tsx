import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRow,
} from './Table'

const meta: Meta<typeof Table> = {
  title: 'Modules/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    striped: {
      control: 'boolean',
      description: 'Adds striped rows',
    },
    hoverable: {
      control: 'boolean',
      description: 'Adds hover effect on rows',
    },
    compact: {
      control: 'boolean',
      description: 'Makes the table more compact',
    },
    bordered: {
      control: 'boolean',
      description: 'Adds border to all cells',
    },
  },
  args: {
    striped: true,
    hoverable: false,
    compact: false,
    bordered: true,
  },
}

export default meta
type Story = StoryObj<typeof Table>

const sampleData = [
  {
    id: 1,
    name: 'Alice Martin',
    email: 'alice@example.com',
    role: 'Admin',
  },
  { id: 2, name: 'Bob Dupont', email: 'bob@example.com', role: 'User' },
  {
    id: 3,
    name: 'Claire Bernard',
    email: 'claire@example.com',
    role: 'Editor',
  },
  { id: 4, name: 'David Leroy', email: 'david@example.com', role: 'User' },
  { id: 5, name: 'Emma Petit', email: 'emma@example.com', role: 'Admin' },
]

export const Playground: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Basic: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: { controls: { disable: true } },
}

export const WithCaption: Story = {
  render: () => (
    <Table>
      <TableCaption>List of team members</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.slice(0, 3).map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: { controls: { disable: true } },
}

export const CaptionBottom: Story = {
  render: () => (
    <Table>
      <TableCaption position="bottom">
        Source: Company directory
      </TableCaption>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.slice(0, 3).map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: { controls: { disable: true } },
}

export const Hoverable: Story = {
  render: () => (
    <Table hoverable>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: { controls: { disable: true } },
}

export const Compact: Story = {
  render: () => (
    <Table compact>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: { controls: { disable: true } },
}

export const NoBorders: Story = {
  render: () => (
    <Table bordered={false}>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: { controls: { disable: true } },
}

export const NoStripes: Story = {
  render: () => (
    <Table striped={false}>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: { controls: { disable: true } },
}

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell>Quantity</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell>10</TableCell>
          <TableCell>€50.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell>5</TableCell>
          <TableCell>€75.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget C</TableCell>
          <TableCell>20</TableCell>
          <TableCell>€30.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFoot>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>35</TableCell>
          <TableCell>€155.00</TableCell>
        </TableRow>
      </TableFoot>
    </Table>
  ),
  parameters: { controls: { disable: true } },
}

export const FullFeatured: Story = {
  render: () => (
    <Table hoverable compact>
      <TableCaption>Q4 2024 Sales Report</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Month</TableHeaderCell>
          <TableHeaderCell>Sales</TableHeaderCell>
          <TableHeaderCell>Revenue</TableHeaderCell>
          <TableHeaderCell>Growth</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>October</TableCell>
          <TableCell>1,234</TableCell>
          <TableCell>€45,000</TableCell>
          <TableCell>+12%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>November</TableCell>
          <TableCell>1,456</TableCell>
          <TableCell>€52,000</TableCell>
          <TableCell>+15%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>December</TableCell>
          <TableCell>1,890</TableCell>
          <TableCell>€68,000</TableCell>
          <TableCell>+31%</TableCell>
        </TableRow>
      </TableBody>
      <TableFoot>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>4,580</TableCell>
          <TableCell>€165,000</TableCell>
          <TableCell>+19% avg</TableCell>
        </TableRow>
      </TableFoot>
    </Table>
  ),
  parameters: { controls: { disable: true } },
}
