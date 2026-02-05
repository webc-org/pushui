import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import '@testing-library/jest-dom/vitest'

// Cleanup after each test to prevent memory leaks and hanging processes
afterEach(() => {
  cleanup()
})
