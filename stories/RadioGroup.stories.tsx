import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '../src/components/RadioGroup';
import { Label } from '../src/components/Label';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1">Option 1</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <RadioGroupItem value="option-2" id="r2" />
        <Label htmlFor="r2">Option 2</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <RadioGroupItem value="option-3" id="r3" />
        <Label htmlFor="r3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="small" orientation="horizontal" style={{ gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <RadioGroupItem value="small" id="size-s" />
        <Label htmlFor="size-s">Small</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <RadioGroupItem value="medium" id="size-m" />
        <Label htmlFor="size-m">Medium</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <RadioGroupItem value="large" id="size-l" />
        <Label htmlFor="size-l">Large</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" disabled>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <RadioGroupItem value="option-1" id="d1" />
        <Label htmlFor="d1">Option 1</Label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <RadioGroupItem value="option-2" id="d2" />
        <Label htmlFor="d2">Option 2</Label>
      </div>
    </RadioGroup>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 600 }}>
          Notification Method
        </h3>
        <RadioGroup defaultValue="email">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <RadioGroupItem value="email" id="notify-email" />
            <div>
              <Label htmlFor="notify-email" style={{ fontWeight: 500 }}>
                Email
              </Label>
              <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#666' }}>
                Get notified via email
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <RadioGroupItem value="sms" id="notify-sms" />
            <div>
              <Label htmlFor="notify-sms" style={{ fontWeight: 500 }}>
                SMS
              </Label>
              <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#666' }}>
                Get notified via text message
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <RadioGroupItem value="push" id="notify-push" />
            <div>
              <Label htmlFor="notify-push" style={{ fontWeight: 500 }}>
                Push notification
              </Label>
              <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#666' }}>
                Get notified via push notification
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};
