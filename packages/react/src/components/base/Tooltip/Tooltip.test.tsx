import '@testing-library/jest-dom/vitest'

import userEvent from '@testing-library/user-event'
import { Button } from 'components'
import { render, screen, waitFor } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Tooltip } from './Tooltip'

describe('Tooltip', () => {
  it('renders children', () => {
    render(
      <Tooltip content="Help text">
        <Button>Hover me</Button>
      </Tooltip>
    )
    expect(
      screen.getByRole('button', { name: 'Hover me' })
    ).toBeInTheDocument()
  })

  it('shows tooltip on hover', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Help text" delay={0}>
        <Button>Hover me</Button>
      </Tooltip>
    )

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

    await user.hover(screen.getByRole('button'))

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
    expect(screen.getByText('Help text')).toBeInTheDocument()
  })

  it('hides tooltip on mouse leave', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Help text" delay={0}>
        <Button>Hover me</Button>
      </Tooltip>
    )

    await user.hover(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })

    await user.unhover(screen.getByRole('button'))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('shows tooltip on focus', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Help text" delay={0}>
        <Button>Focus me</Button>
      </Tooltip>
    )

    await user.tab()

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
  })

  it('applies position class', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Help text" position="bottom" delay={0}>
        <Button>Hover me</Button>
      </Tooltip>
    )

    await user.hover(screen.getByRole('button'))

    await waitFor(() => {
      expect(screen.getByRole('tooltip').className).toMatch(/bottom/)
    })
  })

  it('does not show when disabled', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Help text" delay={0} disabled>
        <Button>Hover me</Button>
      </Tooltip>
    )

    await user.hover(screen.getByRole('button'))

    // Wait a bit to ensure tooltip doesn't appear
    await new Promise((r) => setTimeout(r, 50))
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('sets aria-describedby when visible', async () => {
    const user = userEvent.setup()
    render(
      <Tooltip content="Help text" delay={0}>
        <Button>Hover me</Button>
      </Tooltip>
    )

    const trigger = screen.getByRole('button').parentElement!
    expect(trigger).not.toHaveAttribute('aria-describedby')

    await user.hover(screen.getByRole('button'))

    await waitFor(() => {
      const tooltip = screen.getByRole('tooltip')
      expect(trigger).toHaveAttribute('aria-describedby', tooltip.id)
    })
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(
      <Tooltip content="Help text" ref={ref}>
        <Button>Hover me</Button>
      </Tooltip>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
