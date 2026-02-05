import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import {
  AuthCard,
  AuthCardBody,
  AuthCardFooter,
  AuthCardHeader,
  AuthForm,
  AuthLink,
  AuthSection,
  AuthTitle,
} from './index'

describe('AuthCard', () => {
  it('renders with header and body', () => {
    render(
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Sign In</AuthTitle>
          <p>Welcome back</p>
        </AuthCardHeader>
        <AuthCardBody>Content</AuthCardBody>
      </AuthCard>
    )
    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Welcome back')).toBeInTheDocument()
  })

  it('renders footer when provided', () => {
    render(
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Title</AuthTitle>
        </AuthCardHeader>
        <AuthCardBody>Body</AuthCardBody>
        <AuthCardFooter>
          <span>Footer</span>
        </AuthCardFooter>
      </AuthCard>
    )
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})

describe('AuthTitle', () => {
  it('renders with custom className', () => {
    render(<AuthTitle className="text-success-2">Success Title</AuthTitle>)
    expect(screen.getByText('Success Title')).toBeInTheDocument()
  })
})

describe('AuthLink', () => {
  it('supports asChild pattern', () => {
    render(
      <AuthLink asChild>
        <button type="button">Button Link</button>
      </AuthLink>
    )
    expect(
      screen.getByRole('button', { name: 'Button Link' })
    ).toBeInTheDocument()
  })
})

describe('Auth integration', () => {
  it('renders complete auth layout', () => {
    render(
      <AuthSection>
        <AuthCard>
          <AuthCardHeader>
            <AuthTitle>Sign In</AuthTitle>
            <p>Welcome back</p>
          </AuthCardHeader>
          <AuthCardBody>
            <AuthForm>
              <input type="email" placeholder="Email" />
              <button type="submit">Submit</button>
            </AuthForm>
          </AuthCardBody>
          <AuthCardFooter>
            <AuthLink href="/signup">Create account</AuthLink>
          </AuthCardFooter>
        </AuthCard>
      </AuthSection>
    )

    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Welcome back')).toBeInTheDocument()
    expect(screen.getByText('Create account')).toBeInTheDocument()
  })
})
