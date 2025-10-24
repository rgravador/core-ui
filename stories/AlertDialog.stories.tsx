import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from '../src/components/AlertDialog';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="danger">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent style={{ maxWidth: '450px' }}>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialogDescription>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
          <AlertDialogCancel asChild>
            <Button variant="secondary">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="danger">Delete Account</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Continue</Button>
      </AlertDialogTrigger>
      <AlertDialogContent style={{ maxWidth: '450px' }}>
        <AlertDialogTitle>Continue with this action?</AlertDialogTitle>
        <AlertDialogDescription>
          You are about to perform an important action. Please confirm that you want to proceed.
        </AlertDialogDescription>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
          <AlertDialogCancel asChild>
            <Button variant="secondary">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Continue</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const Warning: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="danger">Clear Data</Button>
      </AlertDialogTrigger>
      <AlertDialogContent style={{ maxWidth: '500px' }}>
        <AlertDialogTitle>Warning: Data Loss</AlertDialogTitle>
        <AlertDialogDescription>
          <p style={{ margin: '0 0 12px 0' }}>
            This will permanently delete all your data including:
          </p>
          <ul style={{ margin: '0 0 12px 0', paddingLeft: '20px' }}>
            <li>All projects and files</li>
            <li>User preferences and settings</li>
            <li>Collaboration history</li>
            <li>Saved templates</li>
          </ul>
          <p style={{ margin: 0, fontWeight: 600 }}>
            This action cannot be undone!
          </p>
        </AlertDialogDescription>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
          <AlertDialogCancel asChild>
            <Button variant="secondary">Keep Data</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="danger">Clear All Data</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const SaveChanges: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Close Editor</Button>
      </AlertDialogTrigger>
      <AlertDialogContent style={{ maxWidth: '450px' }}>
        <AlertDialogTitle>Save changes?</AlertDialogTitle>
        <AlertDialogDescription>
          You have unsaved changes. Would you like to save them before closing?
        </AlertDialogDescription>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
          <AlertDialogCancel asChild>
            <Button variant="secondary">Don't Save</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button>Save Changes</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
