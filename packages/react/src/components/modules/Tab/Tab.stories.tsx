import type { Meta, StoryObj } from '@storybook/react'
import { Tab, TabButton, TabList, TabPanel, TabPanels } from './Tab'

const meta: Meta<typeof Tab> = {
  title: 'Modules/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: 'text' },
  },
  args: { defaultValue: 'tab1' },
}

export default meta
type Story = StoryObj<typeof Tab>

const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Tab defaultValue="tab1">
      <TabList>
        <TabButton value="tab1">Tab 1</TabButton>
        <TabButton value="tab2">Tab 2</TabButton>
        <TabButton value="tab3">Tab 3</TabButton>
      </TabList>
      <TabPanels>
        <TabPanel value="tab1">Default appearance</TabPanel>
        <TabPanel value="tab2">Content 2</TabPanel>
        <TabPanel value="tab3">Content 3</TabPanel>
      </TabPanels>
    </Tab>
    <Tab defaultValue="tab1">
      <TabList>
        <TabButton value="tab1" variant="primary" appearance="button">
          Tab 1
        </TabButton>
        <TabButton value="tab2" variant="primary" appearance="button">
          Tab 2
        </TabButton>
        <TabButton value="tab3" variant="primary" appearance="button">
          Tab 3
        </TabButton>
      </TabList>
      <TabPanels>
        <TabPanel value="tab1">Button appearance</TabPanel>
        <TabPanel value="tab2">Content 2</TabPanel>
        <TabPanel value="tab3">Content 3</TabPanel>
      </TabPanels>
    </Tab>
  </div>
)

export const Light: Story = {
  parameters: { theme: 'light' },
  render: () => <Variants />,
}

export const Dark: Story = {
  parameters: { theme: 'dark' },
  render: () => <Variants />,
}
