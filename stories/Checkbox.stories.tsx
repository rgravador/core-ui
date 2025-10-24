import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../src/components/Checkbox';
import { Label } from '../src/components/Label';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Checkbox id="marketing" defaultChecked />
        <Label htmlFor="marketing">Marketing emails</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Checkbox id="security" defaultChecked />
        <Label htmlFor="security">Security updates</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter">Newsletter</Label>
      </div>
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Checkbox id="indeterminate" checked="indeterminate" />
        <Label htmlFor="indeterminate">Indeterminate state</Label>
      </div>
    );
  },
};
