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
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'grey',
      values: [{ name: 'grey', value: 'var(--color-grey-6)' }],
    },
  },
}

export default meta
type Story = StoryObj

export const Login: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Login</AuthTitle>
          <p>Sign in to your account</p>
        </AuthCardHeader>

        <Divider spacing={1} hidden />

        <AuthCardBody>
          <AuthForm>
            <InputText
              name="identifier"
              label="Email or username"
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

          <Divider spacing={2}>or</Divider>

          <AuthForm>
            <Button variant="default" appearance="button">
              Continue with Google
            </Button>
            <Button variant="secondary" appearance="button">
              Continue with GitHub
            </Button>
          </AuthForm>
        </AuthCardBody>

        <Divider spacing={2} hidden />

        <AuthCardFooter>
          <AuthLink href="/forgot-password">
            Forgot your password?
          </AuthLink>

          <AuthLink href="/signup">
            Don&apos;t have an account? Sign up
          </AuthLink>

          <AuthLink href="/">Back to Home Page</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const Signup: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Signup</AuthTitle>
          <p>Create your account</p>
        </AuthCardHeader>

        <Divider spacing={2} hidden />

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
            <Note variant="danger">
              Password must be at least 8 characters and include a number
              and special character.
            </Note>
            <InputPassword
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Enter your password"
            />
            <Button type="submit" variant="primary" appearance="button">
              Create Account
            </Button>
            <Note variant="success">
              Account created successfully! Please check your email to
              verify your account.
            </Note>
          </AuthForm>

          <Divider spacing={2}>or</Divider>

          <AuthForm>
            <Button variant="default" appearance="button">
              Continue with Google
            </Button>
            <Button variant="secondary" appearance="button">
              Continue with GitHub
            </Button>
          </AuthForm>
        </AuthCardBody>

        <Divider spacing={2} hidden />

        <AuthCardFooter>
          <AuthLink href="/login">
            Already have an account? Sign in
          </AuthLink>
          <AuthLink href="/">Back to Home Page</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const ForgotPassword: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Forgot Password</AuthTitle>
          <p>Enter your email to receive a reset link</p>
        </AuthCardHeader>

        <Divider spacing={2} hidden />

        <AuthCardBody>
          <AuthForm>
            <InputText
              name="email"
              label="Email"
              placeholder="email@example.com"
            />
            <Button type="submit" variant="primary" appearance="button">
              Send Reset Link
            </Button>
          </AuthForm>
        </AuthCardBody>

        <Divider spacing={2} hidden />

        <AuthCardFooter>
          <AuthLink href="/login">Back to sign in</AuthLink>
          <AuthLink href="/">Back to Home Page</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const ResetPassword: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Reset Password</AuthTitle>
          <p>Enter your new password</p>
        </AuthCardHeader>

        <Divider spacing={2} hidden />

        <AuthCardBody>
          <AuthForm>
            <InputPassword
              name="password"
              label="New Password"
              placeholder="Enter your new password"
            />
            <InputPassword
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm your new password"
            />
            <Button type="submit" variant="primary" appearance="button">
              Reset Password
            </Button>
          </AuthForm>
        </AuthCardBody>

        <Divider spacing={2} hidden />

        <AuthCardFooter>
          <AuthLink href="/login">Back to sign in</AuthLink>
          <AuthLink href="/">Back to Home Page</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const EmailSent: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Check your email</AuthTitle>
        </AuthCardHeader>

        <Divider spacing={2} hidden />

        <AuthCardBody>
          <Note variant="success">
            We've sent a password reset link to your email address. Please
            check your inbox and follow the instructions.
          </Note>
          <Link
            variant="default"
            appearance="button"
            href="/forgot-password"
          >
            Resend email
          </Link>
        </AuthCardBody>

        <Divider spacing={2} hidden />

        <AuthCardFooter>
          <AuthLink href="/">Back to Home Page</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const VerifyEmailLoading: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Verifying your email...</AuthTitle>
        </AuthCardHeader>

        <Divider spacing={2} hidden />

        <AuthCardBody>
          <Note variant="warning">
            Please wait while we verify your email address. This may take a
            few seconds. Do not close this page.
          </Note>
        </AuthCardBody>

        <Divider spacing={2} hidden />

        <AuthCardFooter>
          <AuthLink href="/">Back to Home Page</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const VerifyEmailSuccess: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Email verified</AuthTitle>
        </AuthCardHeader>

        <Divider spacing={2} hidden />

        <AuthCardBody>
          <Note variant="success">
            Your email has been successfully verified. You can now sign in
            to your account.
          </Note>

          <Link variant="primary" appearance="button" href="/login">
            Sign in
          </Link>
        </AuthCardBody>

        <Divider spacing={2} hidden />

        <AuthCardFooter>
          <AuthLink href="/">Back to Home Page</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}

export const VerifyEmailError: Story = {
  render: () => (
    <AuthSection>
      <AuthCard>
        <AuthCardHeader>
          <AuthTitle>Verification failed</AuthTitle>
        </AuthCardHeader>

        <Divider spacing={2} hidden />

        <AuthCardBody>
          <Note variant="danger">
            The verification link is invalid or has expired. Please request
            a new verification email.
          </Note>
          <Link href="/reset" variant="default" appearance="button">
            Request new verification
          </Link>
        </AuthCardBody>

        <Divider spacing={2} hidden />

        <AuthCardFooter>
          <AuthLink href="/login">Back to Sign in</AuthLink>
        </AuthCardFooter>
      </AuthCard>
    </AuthSection>
  ),
}
