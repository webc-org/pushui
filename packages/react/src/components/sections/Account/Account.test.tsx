import '@testing-library/jest-dom/vitest'

import { render, screen } from 'utils/Test'
import { describe, expect, it } from 'vitest'
import {
  AccountCard,
  AccountCardBody,
  AccountCardHeader,
  AccountForm,
  AccountSection,
  AccountTitle,
} from './index'

describe('AccountCard', () => {
  it('renders with header and body', () => {
    render(
      <AccountCard>
        <AccountCardHeader>
          <AccountTitle>Profile</AccountTitle>
          <p>Edit your profile</p>
        </AccountCardHeader>
        <AccountCardBody>Content</AccountCardBody>
      </AccountCard>
    )
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Edit your profile')).toBeInTheDocument()
  })
})

describe('AccountTitle', () => {
  it('renders with custom className', () => {
    render(<AccountTitle className="custom-class">Title</AccountTitle>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })
})

describe('Account integration', () => {
  it('renders complete account layout', () => {
    render(
      <AccountSection>
        <AccountCard>
          <AccountCardHeader>
            <AccountTitle>Profile</AccountTitle>
            <p>Edit your profile</p>
          </AccountCardHeader>
          <AccountCardBody>
            <AccountForm>
              <input type="text" placeholder="Username" />
              <button type="submit">Save</button>
            </AccountForm>
          </AccountCardBody>
        </AccountCard>
      </AccountSection>
    )

    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Edit your profile')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Save' })
    ).toBeInTheDocument()
  })
})
