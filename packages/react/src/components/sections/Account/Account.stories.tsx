import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from 'base/Avatar'
import { Note } from 'base/Note'
import { Divider } from 'components/base'
import { Button } from 'form/Button'
import { InputFile } from 'form/File'
import { InputPassword } from 'form/Password'
import { InputText } from 'form/Text'
import {
  DashboardMainHeader,
  DashboardMainTitle,
} from 'sections/Dashboard'
import {
  AccountCard,
  AccountCardBody,
  AccountCardHeader,
  AccountForm,
  AccountSection,
  AccountTitle,
} from './index'

const meta: Meta = {
  title: 'Sections/Account',
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

export const AccountPage: Story = {
  render: () => (
    <AccountSection>
      <DashboardMainHeader>
        <DashboardMainTitle>Account</DashboardMainTitle>
        <p>Manage your account settings</p>
        <Avatar
          name="johndoe"
          width="6rem"
          fontSize={6}
          variant="primary"
        />
      </DashboardMainHeader>

      <AccountCard>
        <AccountCardHeader>
          <AccountTitle>Profile</AccountTitle>
          <p>Update your personal information</p>
        </AccountCardHeader>

        <Divider hidden spacing={2} />

        <AccountCardBody>
          <AccountForm>
            <InputText
              name="username"
              label="Username"
              placeholder="Enter your username"
              defaultValue="johndoe"
            />
            <Note variant="danger">An username error message</Note>
            <InputText
              name="email"
              label="Email"
              placeholder="email@example.com"
              defaultValue="john@example.com"
            />
            <Button type="submit" variant="primary" appearance="button">
              Save Changes
            </Button>
          </AccountForm>

          <Note variant="danger">A submit form error message</Note>
          <Note variant="success">A submit form success message</Note>
        </AccountCardBody>
      </AccountCard>

      <AccountCard>
        <AccountCardHeader>
          <AccountTitle>Avatar</AccountTitle>
          <p>Upload a profile picture</p>
        </AccountCardHeader>

        <Divider hidden spacing={2} />

        <AccountCardBody>
          <AccountForm>
            <InputFile
              name="avatar"
              accept="image/*"
              buttonText="Change Avatar"
            />
          </AccountForm>

          <Note variant="danger">A submit form error message</Note>
        </AccountCardBody>
      </AccountCard>

      <AccountCard>
        <AccountCardHeader>
          <AccountTitle>Security</AccountTitle>
          <p>Change your password</p>
        </AccountCardHeader>

        <Divider hidden spacing={2} />

        <AccountCardBody>
          <AccountForm>
            <InputPassword
              name="currentPassword"
              label="Current Password"
              placeholder="Enter your current password"
            />
            <InputPassword
              name="newPassword"
              label="New Password"
              placeholder="Enter your new password"
            />
            <InputPassword
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm your new password"
            />
            <Button type="submit" variant="primary" appearance="button">
              Update Password
            </Button>
          </AccountForm>

          <Note variant="success">A submit form success message</Note>
        </AccountCardBody>
      </AccountCard>
    </AccountSection>
  ),
}
