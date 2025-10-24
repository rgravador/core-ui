import type { Meta, StoryObj } from '@storybook/react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../src/components/Tooltip';
import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithText: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span style={{ textDecoration: 'underline', cursor: 'help' }}>
          Hover over this text
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>Additional information appears here</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
          <svg width="20" height="20" viewBox="0 0 15 15" fill="none">
            <path
              d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 10.5C8.24992 10.9142 7.91413 11.25 7.49992 11.25C7.08571 11.25 6.74992 10.9142 6.74992 10.5C6.74992 10.0858 7.08571 9.75 7.49992 9.75C7.91413 9.75 8.24992 10.0858 8.24992 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 7.11464 8.21447 7.43986C7.97006 7.61413 7.74462 7.72124 7.58307 7.81307C7.50757 7.85359 7.44286 7.88863 7.39642 7.91528C7.39642 7.91528 7.39642 7.91528 7.39642 7.91528L7.39642 7.91528C7.39641 7.91528 7.39641 7.91528 7.39641 7.91528C7.04036 8.10929 6.74992 8.41727 6.74992 8.75C6.74992 9.02614 6.52606 9.25 6.24992 9.25C5.97378 9.25 5.74992 9.02614 5.74992 8.75C5.74992 7.91207 6.36001 7.31902 6.81754 7.07237C6.95313 7.00199 7.13826 6.89921 7.33682 6.78635C7.50003 6.68899 7.95003 6.43118 7.95003 6.25C7.95003 6.09426 7.8181 5.925 7.50003 5.925C7.18196 5.925 7.05003 6.09426 7.05003 6.25C7.05003 6.52614 6.82617 6.75 6.55003 6.75C6.27389 6.75 6.05003 6.52614 6.05003 6.25Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Help information</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const DifferentSides: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="secondary">Hover for details</Button>
      </TooltipTrigger>
      <TooltipContent style={{ maxWidth: '300px' }}>
        <p>
          This is a longer tooltip that contains more detailed information.
          It can wrap to multiple lines when the content is too long to fit on a single line.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const DelayedOpen: Story = {
  render: () => (
    <Tooltip delayDuration={1000}>
      <TooltipTrigger asChild>
        <Button variant="secondary">Delayed tooltip (1s)</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip appears after 1 second</p>
      </TooltipContent>
    </Tooltip>
  ),
};
