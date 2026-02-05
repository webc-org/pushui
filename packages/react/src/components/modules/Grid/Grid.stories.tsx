import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardBody } from '../Card'
import { Grid } from './Grid'
import { GridItem } from './GridItem'
import type { GapSize } from './Grid.types'

const gapSizes: GapSize[] = [0, 1, 2, 3, 4, 5]

const gridStyles = {
  background: 'var(--color-grey-6)',
  padding: '1rem',
}

const cardStyles = {
  padding: '1rem',
}

const meta: Meta<typeof Grid> = {
  title: 'Modules/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    col: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of columns',
      table: {
        defaultValue: { summary: '1' },
      },
    },
    gap: {
      control: 'select',
      options: gapSizes,
      description: 'Gap size between grid items',
      table: {
        defaultValue: { summary: '0' },
      },
    },
    masonry: {
      control: 'boolean',
      description: 'Enable masonry layout',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    colXS: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Columns at XS breakpoint',
    },
    colSM: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Columns at SM breakpoint',
    },
    colMD: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Columns at MD breakpoint',
    },
    colLG: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Columns at LG breakpoint',
    },
    colXL: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Columns at XL breakpoint',
    },
  },
  args: {
    col: 3,
    gap: 2,
    masonry: false,
  },
}

export default meta
type Story = StoryObj<typeof Grid>

export const Playground: Story = {
  render: (args) => (
    <Grid {...args} style={gridStyles}>
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <GridItem key={n}>
          <Card style={cardStyles}>
            <CardBody>{n}</CardBody>
          </Card>
        </GridItem>
      ))}
    </Grid>
  ),
  args: {
    col: 3,
    gap: 2,
  },
}

export const TwoColumns: Story = {
  render: () => (
    <Grid col={2} gap={4} style={gridStyles}>
      <GridItem>
        <Card style={cardStyles}>
          <CardBody>Left</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card style={cardStyles}>
          <CardBody>Right</CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

export const WithColSpan: Story = {
  render: () => (
    <Grid col={4} gap={2} style={gridStyles}>
      <GridItem col={2}>
        <Card style={cardStyles}>
          <CardBody>Span 2</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card style={cardStyles}>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
      <GridItem>
        <Card style={cardStyles}>
          <CardBody>1</CardBody>
        </Card>
      </GridItem>
    </Grid>
  ),
}

export const GapSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {gapSizes.map((size) => (
        <div key={size}>
          <p style={{ marginBottom: '0.5rem' }}>Gap: {size}</p>
          <Grid col={4} gap={size} style={gridStyles}>
            {[1, 2, 3, 4].map((n) => (
              <GridItem key={n}>
                <Card style={cardStyles}>
                  <CardBody>{n}</CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
}

// Sample data with varying heights for masonry demo
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
  { id: 10, height: '13rem', label: 'Short' },
  { id: 11, height: '19rem', label: 'Tall' },
  { id: 12, height: '12rem', label: 'Short' },
]

export const Masonry: Story = {
  render: () => (
    <Grid masonry col={3} gap={2} style={gridStyles}>
      {masonryItems.map((item) => (
        <Card key={item.id} style={{ ...cardStyles, height: item.height }}>
          <CardBody>
            <strong>{item.id}</strong>
            <br />
            {item.label}
          </CardBody>
        </Card>
      ))}
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Masonry layout using CSS columns. Items flow vertically first, then horizontally.',
      },
    },
  },
}

export const MasonryFourColumns: Story = {
  render: () => (
    <Grid masonry col={4} gap={4} style={gridStyles}>
      {masonryItems.map((item) => (
        <Card key={item.id} style={{ ...cardStyles, height: item.height }}>
          <CardBody>
            <strong>{item.id}</strong>
            <br />
            {item.label}
          </CardBody>
        </Card>
      ))}
    </Grid>
  ),
}

export const MasonryResponsive: Story = {
  render: () => (
    <Grid
      masonry
      col={1}
      colSM={2}
      colMD={3}
      colLG={4}
      gap={2}
      style={gridStyles}
    >
      {masonryItems.map((item) => (
        <Card key={item.id} style={{ ...cardStyles, height: item.height }}>
          <CardBody>
            <strong>{item.id}</strong>
            <br />
            {item.label}
          </CardBody>
        </Card>
      ))}
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Responsive masonry: 1 column on mobile, 2 on SM, 3 on MD, 4 on LG.',
      },
    },
  },
}

export const MasonryWithImages: Story = {
  render: () => (
    <Grid masonry col={3} gap={2} style={gridStyles}>
      {[
        { id: 1, height: 300 },
        { id: 2, height: 200 },
        { id: 3, height: 350 },
        { id: 4, height: 250 },
        { id: 5, height: 180 },
        { id: 6, height: 320 },
        { id: 7, height: 220 },
        { id: 8, height: 280 },
        { id: 9, height: 190 },
      ].map((item) => (
        <Card key={item.id} style={{ overflow: 'hidden' }}>
          <img
            src={`https://picsum.photos/400/${item.height}?random=${item.id}`}
            alt={`Sample ${item.id}`}
            style={{ width: '100%', display: 'block' }}
          />
        </Card>
      ))}
    </Grid>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Masonry layout with images of varying heights - perfect for galleries.',
      },
    },
  },
}
