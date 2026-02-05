import { useContext, useEffect } from 'react'
import '@testing-library/jest-dom/vitest'

import { act, fireEvent, render, screen } from 'utils/Test'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Modals } from './Modals'
import { ModalsContext } from './ModalsContext'

describe('Modals', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => {
    act(() => vi.runOnlyPendingTimers())
    vi.useRealTimers()
  })

  it('renders children', () => {
    render(
      <Modals>
        <div data-testid="child">Child Content</div>
      </Modals>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('adds and displays a modal', async () => {
    const TestComponent = () => {
      const { addModal } = useContext(ModalsContext)!
      useEffect(() => {
        addModal({
          title: 'Test Modal',
          children: <span data-testid="modal-body">Modal Body</span>,
        })
      }, [addModal])
      return null
    }

    render(
      <Modals>
        <TestComponent />
      </Modals>
    )
    await act(async () => vi.advanceTimersByTime(150))

    const modal = document.querySelector('[role="dialog"]')
    expect(modal).toBeInTheDocument()
    expect(modal).toHaveTextContent('Test Modal')
    expect(screen.getByTestId('modal-body')).toBeInTheDocument()
  })

  it('closes modal on close button click', async () => {
    const TestComponent = () => {
      const { addModal } = useContext(ModalsContext)!
      useEffect(() => {
        addModal({ title: 'Close Test', children: <span>Body</span> })
      }, [addModal])
      return null
    }

    render(
      <Modals>
        <TestComponent />
      </Modals>
    )
    await act(async () => vi.advanceTimersByTime(150))

    const modal = document.querySelector('[role="dialog"]')
    expect(modal).toBeInTheDocument()

    const closeButton = modal?.querySelector('button')
    fireEvent.click(closeButton!)
    await act(async () => vi.advanceTimersByTime(500))

    expect(
      document.querySelector('[role="dialog"]')
    ).not.toBeInTheDocument()
  })

  it('closes modal on Escape key', async () => {
    const TestComponent = () => {
      const { addModal } = useContext(ModalsContext)!
      useEffect(() => {
        addModal({ title: 'Escape Test', children: <span>Body</span> })
      }, [addModal])
      return null
    }

    render(
      <Modals>
        <TestComponent />
      </Modals>
    )
    await act(async () => vi.advanceTimersByTime(150))

    fireEvent.keyDown(document, { key: 'Escape' })
    await act(async () => vi.advanceTimersByTime(500))

    expect(
      document.querySelector('[role="dialog"]')
    ).not.toBeInTheDocument()
  })
})
