import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('applies custom dimensions', () => {
    render(<Skeleton width={200} height={100} data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({
      width: '200px',
      height: '100px',
    })
  })

  it('accepts percentage width', () => {
    render(<Skeleton width="50%" data-testid="skeleton" />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '50%' })
  })
})
