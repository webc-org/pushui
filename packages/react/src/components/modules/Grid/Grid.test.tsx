import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Grid } from './Grid'
import { GridItem } from './GridItem'

describe('Grid', () => {
  it('renders with children', () => {
    render(
      <Grid data-testid="grid">
        <div>Item 1</div>
      </Grid>
    )
    expect(screen.getByTestId('grid')).toBeInTheDocument()
    expect(screen.getByTestId('grid')).toHaveTextContent('Item 1')
  })

  it('applies col class', () => {
    render(
      <Grid data-testid="grid" col={3}>
        <div>Content</div>
      </Grid>
    )
    expect(screen.getByTestId('grid').className).toMatch(/grid--3/)
  })

  it('applies gap class', () => {
    render(
      <Grid data-testid="grid" gap={4}>
        <div>Content</div>
      </Grid>
    )
    expect(screen.getByTestId('grid').className).toMatch(/grid--gap-4/)
  })

  it('applies custom className', () => {
    render(
      <Grid data-testid="grid" className="custom-grid">
        <div>Content</div>
      </Grid>
    )
    expect(screen.getByTestId('grid')).toHaveClass('custom-grid')
  })
})

describe('GridItem', () => {
  it('renders with children', () => {
    render(
      <GridItem data-testid="item">
        <div>Item Content</div>
      </GridItem>
    )
    expect(screen.getByTestId('item')).toBeInTheDocument()
    expect(screen.getByTestId('item')).toHaveTextContent('Item Content')
  })

  it('applies col class', () => {
    render(
      <GridItem data-testid="item" col={2}>
        <div>Content</div>
      </GridItem>
    )
    expect(screen.getByTestId('item').className).toMatch(/gridItem-2/)
  })

  it('applies row class', () => {
    render(
      <GridItem data-testid="item" row={2}>
        <div>Content</div>
      </GridItem>
    )
    expect(screen.getByTestId('item').className).toMatch(/gridItem--row-2/)
  })

  it('applies custom className', () => {
    render(
      <GridItem data-testid="item" className="custom-item">
        <div>Content</div>
      </GridItem>
    )
    expect(screen.getByTestId('item')).toHaveClass('custom-item')
  })
})
