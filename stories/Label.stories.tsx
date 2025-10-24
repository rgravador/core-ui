import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../src/components/Label';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email address',
  },
};

export const WithInput: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Label htmlFor="email">Email address</Label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        style={{
          padding: '8px 12px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  ),
};

export const Required: Story = {
  args: {
    children: (
      <>
        Username <span style={{ color: 'red' }}>*</span>
      </>
    ),
  },
};

export const Disabled: Story = {
  render: () => (
    <Label style={{ opacity: 0.5, cursor: 'not-allowed' }}>
      Disabled field
    </Label>
  ),
};
