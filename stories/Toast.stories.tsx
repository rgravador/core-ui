import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastAction, ToastClose } from '../src/components/Toast';
import { Button } from '../src/components/Button';
import { useState } from 'react';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Toast</Button>
        <Toast open={open} onOpenChange={setOpen}>
          <ToastTitle>Notification</ToastTitle>
          <ToastDescription>This is a simple toast notification</ToastDescription>
          <ToastClose />
        </Toast>
      </>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Toast with Action</Button>
        <Toast open={open} onOpenChange={setOpen}>
          <ToastTitle>Update Available</ToastTitle>
          <ToastDescription>A new version is available. Update now?</ToastDescription>
          <ToastAction altText="Update" asChild>
            <Button size="sm" style={{ marginTop: '8px' }}>Update</Button>
          </ToastAction>
          <ToastClose />
        </Toast>
      </>
    );
  },
};

export const Success: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Success Toast</Button>
        <Toast open={open} onOpenChange={setOpen} style={{ borderLeft: '4px solid #10b981' }}>
          <ToastTitle>Success</ToastTitle>
          <ToastDescription>Your changes have been saved successfully.</ToastDescription>
          <ToastClose />
        </Toast>
      </>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>Show Error Toast</Button>
        <Toast open={open} onOpenChange={setOpen} style={{ borderLeft: '4px solid #ef4444' }}>
          <ToastTitle>Error</ToastTitle>
          <ToastDescription>Something went wrong. Please try again.</ToastDescription>
          <ToastClose />
        </Toast>
      </>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Show Warning Toast</Button>
        <Toast open={open} onOpenChange={setOpen} style={{ borderLeft: '4px solid #f59e0b' }}>
          <ToastTitle>Warning</ToastTitle>
          <ToastDescription>Your session will expire in 5 minutes.</ToastDescription>
          <ToastClose />
        </Toast>
      </>
    );
  },
};
