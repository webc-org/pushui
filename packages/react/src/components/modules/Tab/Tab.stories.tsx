import type { Meta, StoryObj } from '@storybook/react'
import { Tab, TabButton, TabList, TabPanel, TabPanels } from './Tab'

const meta: Meta<typeof Tab> = {
  title: 'Modules/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The default active tab value',
    },
  },
  args: {
    defaultValue: 'tab1',
  },
}

export default meta
type Story = StoryObj<typeof Tab>

export const Playground: Story = {
  render: (args) => (
    <Tab {...args}>
      <TabList>
        <TabButton value="tab1">Tab 1</TabButton>
        <TabButton value="tab2">Tab 2</TabButton>
        <TabButton value="tab3">Tab 3</TabButton>
      </TabList>
      <TabPanels>
        <TabPanel value="tab1">Content for tab 1</TabPanel>
        <TabPanel value="tab2">Content for tab 2</TabPanel>
        <TabPanel value="tab3">Content for tab 3</TabPanel>
      </TabPanels>
    </Tab>
  ),
  args: {
    defaultValue: 'tab1',
  },
}

export const ButtonAppearance: Story = {
  render: () => (
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
        <TabPanel value="tab1">Content for tab 1</TabPanel>
        <TabPanel value="tab2">Content for tab 2</TabPanel>
        <TabPanel value="tab3">Content for tab 3</TabPanel>
      </TabPanels>
    </Tab>
  ),
}
