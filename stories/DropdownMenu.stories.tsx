import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '../src/components/DropdownMenu';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>New File</DropdownMenuItem>
        <DropdownMenuItem>New Folder</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent style={{ minWidth: '200px' }}>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Team</DropdownMenuLabel>
        <DropdownMenuItem>Invite users</DropdownMenuItem>
        <DropdownMenuItem>New Team</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '6px' }}>
            <circle cx="7.5" cy="2.5" r="1" fill="currentColor" />
            <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
            <circle cx="7.5" cy="12.5" r="1" fill="currentColor" />
          </svg>
          More
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent style={{ minWidth: '200px' }}>
        <DropdownMenuItem>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '8px' }}>
            <path d="M7.5 11C9.433 11 11 9.433 11 7.5C11 5.567 9.433 4 7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11Z" stroke="currentColor" fill="none"/>
          </svg>
          View
        </DropdownMenuItem>
        <DropdownMenuItem>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '8px' }}>
            <path d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77509 3.50251 8.89229L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10768 11.4975C6.22488 11.4474 6.33165 11.3754 6.42161 11.2854L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645Z" fill="currentColor"/>
          </svg>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '8px' }}>
            <path d="M5 3C4.44772 3 4 3.44772 4 4V11C4 11.5523 4.44772 12 5 12H10C10.5523 12 11 11.5523 11 11V4C11 3.44772 10.5523 3 10 3H5Z" stroke="currentColor" fill="none"/>
          </svg>
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem style={{ color: '#ef4444' }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: '8px' }}>
            <path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4H3.5C3.22386 4 3 3.77614 3 3.5Z" fill="currentColor"/>
          </svg>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const UserMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#6366f1',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          JD
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" style={{ minWidth: '220px' }}>
        <DropdownMenuLabel>
          <div>
            <div style={{ fontWeight: 600 }}>John Doe</div>
            <div style={{ fontSize: '12px', color: '#666', fontWeight: 'normal' }}>
              john@example.com
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">File</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>New File</DropdownMenuItem>
        <DropdownMenuItem>Open</DropdownMenuItem>
        <DropdownMenuItem disabled>Save (No changes)</DropdownMenuItem>
        <DropdownMenuItem>Save As...</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Export (Premium)</DropdownMenuItem>
        <DropdownMenuItem>Print</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
