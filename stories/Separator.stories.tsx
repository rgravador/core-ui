import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '../src/components/Separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div style={{ width: '300px' }}>
      <div style={{ padding: '16px 0' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Section 1</h3>
        <p style={{ margin: '4px 0', fontSize: '12px', color: '#666' }}>
          Content for the first section
        </p>
      </div>
      <Separator {...args} />
      <div style={{ padding: '16px 0' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Section 2</h3>
        <p style={{ margin: '4px 0', fontSize: '12px', color: '#666' }}>
          Content for the second section
        </p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    decorative: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', height: '100px', alignItems: 'center', gap: '16px' }}>
      <div style={{ padding: '0 16px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Left</h3>
        <p style={{ margin: '4px 0', fontSize: '12px', color: '#666' }}>Left content</p>
      </div>
      <Separator {...args} />
      <div style={{ padding: '0 16px' }}>
        <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Right</h3>
        <p style={{ margin: '4px 0', fontSize: '12px', color: '#666' }}>Right content</p>
      </div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <div style={{ padding: '12px 16px' }}>Item 1</div>
      <Separator />
      <div style={{ padding: '12px 16px' }}>Item 2</div>
      <Separator />
      <div style={{ padding: '12px 16px' }}>Item 3</div>
      <Separator />
      <div style={{ padding: '12px 16px' }}>Item 4</div>
    </div>
  ),
};
