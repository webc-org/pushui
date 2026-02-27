import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardBody } from '../Card'
import { Grid } from './Grid'
import { GridItem } from './GridItem'
import type { GapSize } from './Grid.types'

const meta: Meta<typeof Grid> = {
  title: 'Modules/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    col: { control: { type: 'number', min: 1, max: 12 } },
    gap: { control: 'select', options: [0, 1, 2, 3, 4, 5] as GapSize[] },
    masonry: { control: 'boolean' },
    colXS: { control: { type: 'number', min: 1, max: 12 } },
    colSM: { control: { type: 'number', min: 1, max: 12 } },
    colMD: { control: { type: 'number', min: 1, max: 12 } },
    colLG: { control: { type: 'number', min: 1, max: 12 } },
  },
  args: { col: 3, gap: 2, masonry: false },
}

export default meta
type Story = StoryObj<typeof Grid>

const gridBg = { background: 'var(--theme-bg-2)', padding: '1rem' }
const cp = { padding: '1rem' }

const masonryItems = [
  { id: 1, height: '12rem', label: 'Short' },
  { id: 2, height: '20rem', label: 'Tall' },
  { id: 3, height: '15rem', label: 'Medium' },
  { id: 4, height: '10rem', label: 'Tiny' },
  { id: 5, height: '18rem', label: 'Large' },
  { id: 6, height: '14rem', label: 'Medium' },
  { id: 7, height: '22rem', label: 'Extra Tall' },
  { id: 8, height: '11rem', label: 'Small' },
  { id: 9, height: '16rem', label: 'Medium' },
]

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <p style={{ marginBottom: '0.5rem' }}>4 columns with col span</p>
      <Grid col={4} gap={2} style={gridBg}>
        <GridItem col={2}>
          <Card style={cp}>
            <CardBody>Span 2</CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card style={cp}>
            <CardBody>1</CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card style={cp}>
            <CardBody>1</CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
    <div>
      <p style={{ marginBottom: '0.5rem' }}>Masonry (3 columns)</p>
      <Grid masonry col={3} gap={2} style={gridBg}>
        {masonryItems.map((item) => (
          <Card key={item.id} style={{ ...cp, height: item.height }}>
            <CardBody>
              <strong>{item.id}</strong>
              <br />
              {item.label}
            </CardBody>
          </Card>
        ))}
      </Grid>
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
