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
    striped: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    compact: { control: 'boolean' },
    bordered: { control: 'boolean' },
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

const DataHead = () => (
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
    </TableRow>
  </TableHead>
)

const DataRows = () => (
  <>
    {sampleData.map((row) => (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.role}</TableCell>
      </TableRow>
    ))}
  </>
)

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Table>
      <TableCaption>With caption (top)</TableCaption>
      <DataHead />
      <TableBody>
        <DataRows />
      </TableBody>
    </Table>
    <Table hoverable>
      <DataHead />
      <TableBody>
        <DataRows />
      </TableBody>
    </Table>
    <Table compact striped bordered={false}>
      <DataHead />
      <TableBody>
        <DataRows />
      </TableBody>
    </Table>
    <Table hoverable compact>
      <TableCaption>Q4 Sales Report</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Month</TableHeaderCell>
          <TableHeaderCell>Sales</TableHeaderCell>
          <TableHeaderCell>Revenue</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>October</TableCell>
          <TableCell>1,234</TableCell>
          <TableCell>€45,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>November</TableCell>
          <TableCell>1,456</TableCell>
          <TableCell>€52,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>December</TableCell>
          <TableCell>1,890</TableCell>
          <TableCell>€68,000</TableCell>
        </TableRow>
      </TableBody>
      <TableFoot>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>4,580</TableCell>
          <TableCell>€165,000</TableCell>
        </TableRow>
      </TableFoot>
    </Table>
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
