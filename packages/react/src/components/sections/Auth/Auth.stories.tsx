import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from 'base/Divider'
import { Link } from 'base/Link'
import { Note } from 'base/Note'
import { Button } from 'form/Button'
import { InputPassword } from 'form/Password'
import { InputText } from 'form/Text'
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

const meta: Meta = {
  title: 'Sections/Auth',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

const Variants = () => (
  <AuthSection style={{ padding: '4rem' }}>
    <AuthCard>
      <AuthCardHeader>
        <AuthTitle>Login</AuthTitle>
      </AuthCardHeader>
      <Divider spacing={1} hidden />
      <AuthCardBody>
        <AuthForm>
          <InputText
            name="email"
            label="Email"
            placeholder="email@example.com"
          />
          <InputPassword
            name="password"
            label="Password"
            placeholder="••••••••"
          />
          <Button type="submit" variant="primary" appearance="button">
            Sign In
          </Button>
        </AuthForm>
      </AuthCardBody>
      <Divider spacing={2} hidden />
      <AuthCardFooter>
        <AuthLink href="/signup">Create account</AuthLink>
      </AuthCardFooter>
    </AuthCard>

    <AuthCard>
      <AuthCardHeader>
        <AuthTitle>Signup</AuthTitle>
      </AuthCardHeader>
      <Divider spacing={1} hidden />
      <AuthCardBody>
        <AuthForm>
          <InputText
            name="username"
            label="Username"
            placeholder="Enter your username"
          />
          <InputText
            name="email"
            type="email"
            label="Email"
            placeholder="email@example.com"
          />
          <InputPassword
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button type="submit" variant="primary" appearance="button">
            Create Account
          </Button>
        </AuthForm>
      </AuthCardBody>
      <Divider spacing={2} hidden />
      <AuthCardFooter>
        <AuthLink href="/login">Already have an account?</AuthLink>
      </AuthCardFooter>
    </AuthCard>

    <AuthCard>
      <AuthCardHeader>
        <AuthTitle>Email Verified</AuthTitle>
      </AuthCardHeader>
      <Divider spacing={1} hidden />
      <AuthCardBody>
        <Note variant="success">
          Your email has been successfully verified. You can now sign in.
        </Note>
        <Link variant="primary" appearance="button" href="/login">
          Sign in
        </Link>
      </AuthCardBody>
      <Divider spacing={2} hidden />
      <AuthCardFooter>
        <AuthLink href="/">Back to Home</AuthLink>
      </AuthCardFooter>
    </AuthCard>
  </AuthSection>
)

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}
