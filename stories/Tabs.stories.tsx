import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../src/components/Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Account</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            Make changes to your account here. Click save when you're done.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Password</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            Change your password here. After saving, you'll be logged out.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>Settings</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
            Manage your application settings and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '6px' }}>
            <path d="M7.5 0.5L0.5 5.5V14.5H14.5V5.5L7.5 0.5Z" stroke="currentColor" fill="none"/>
          </svg>
          Overview
        </TabsTrigger>
        <TabsTrigger value="analytics">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '6px' }}>
            <path d="M0.5 14.5V7.5H4.5V14.5H0.5ZM5.5 14.5V0.5H9.5V14.5H5.5ZM10.5 14.5V4.5H14.5V14.5H10.5Z" stroke="currentColor" fill="none"/>
          </svg>
          Analytics
        </TabsTrigger>
        <TabsTrigger value="reports">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '6px' }}>
            <path d="M3.5 2.5H11.5V12.5H3.5V2.5Z" stroke="currentColor" fill="none"/>
          </svg>
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div style={{ padding: '16px' }}>Overview content</div>
      </TabsContent>
      <TabsContent value="analytics">
        <div style={{ padding: '16px' }}>Analytics content</div>
      </TabsContent>
      <TabsContent value="reports">
        <div style={{ padding: '16px' }}>Reports content</div>
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Active</TabsTrigger>
        <TabsTrigger value="tab2" disabled>Disabled</TabsTrigger>
        <TabsTrigger value="tab3">Active</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div style={{ padding: '16px' }}>First tab content</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div style={{ padding: '16px' }}>Third tab content</div>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalOrientation: Story = {
  render: () => (
    <Tabs defaultValue="tab1" orientation="vertical" style={{ display: 'flex', gap: '16px' }}>
      <TabsList style={{ flexDirection: 'column', width: '120px' }}>
        <TabsTrigger value="tab1" style={{ width: '100%' }}>General</TabsTrigger>
        <TabsTrigger value="tab2" style={{ width: '100%' }}>Security</TabsTrigger>
        <TabsTrigger value="tab3" style={{ width: '100%' }}>Notifications</TabsTrigger>
        <TabsTrigger value="tab4" style={{ width: '100%' }}>Advanced</TabsTrigger>
      </TabsList>
      <div style={{ flex: 1 }}>
        <TabsContent value="tab1">
          <div style={{ padding: '16px' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>General Settings</h3>
            <p style={{ margin: 0, color: '#666' }}>Configure general application settings.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div style={{ padding: '16px' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Security Settings</h3>
            <p style={{ margin: 0, color: '#666' }}>Manage your security preferences.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div style={{ padding: '16px' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Notification Settings</h3>
            <p style={{ margin: 0, color: '#666' }}>Control your notification preferences.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab4">
          <div style={{ padding: '16px' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Advanced Settings</h3>
            <p style={{ margin: 0, color: '#666' }}>Configure advanced options.</p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
};
