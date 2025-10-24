import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../src/components/HoverCard';
import { Avatar, AvatarImage, AvatarFallback } from '../src/components/Avatar';

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="#"
          style={{
            textDecoration: 'underline',
            cursor: 'pointer',
            color: '#6366f1',
          }}
        >
          Hover over me
        </a>
      </HoverCardTrigger>
      <HoverCardContent style={{ width: '300px' }}>
        <div style={{ padding: '12px' }}>
          <p style={{ margin: 0, fontSize: '14px' }}>
            This is a hover card with additional information.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="#"
          style={{
            textDecoration: 'none',
            color: '#6366f1',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          @johndoe
        </a>
      </HoverCardTrigger>
      <HoverCardContent style={{ width: '320px' }}>
        <div style={{ display: 'flex', gap: '16px', padding: '16px' }}>
          <Avatar style={{ width: '60px', height: '60px' }}>
            <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&fit=crop" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: 600 }}>
              John Doe
            </h4>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>
              @johndoe
            </p>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5' }}>
              Full-stack developer passionate about building great user experiences.
              Love working with React and TypeScript.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '12px', fontSize: '14px' }}>
              <span><strong>1,234</strong> Following</span>
              <span><strong>5,678</strong> Followers</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ProductInfo: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          MacBook Pro
          <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
            <path
              d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892Z"
              stroke="currentColor"
            />
            <path
              d="M7.5 5V7.5M7.5 10H7.51"
              stroke="currentColor"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </HoverCardTrigger>
      <HoverCardContent style={{ width: '350px' }}>
        <div style={{ padding: '16px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>
            MacBook Pro 16-inch
          </h4>
          <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
            <p style={{ margin: '0 0 8px 0' }}>
              The most powerful MacBook Pro ever with M2 Pro or M2 Max chip.
            </p>
            <ul style={{ margin: '0', paddingLeft: '20px' }}>
              <li>Up to 22 hours battery life</li>
              <li>Liquid Retina XDR display</li>
              <li>1080p FaceTime HD camera</li>
              <li>Six-speaker sound system</li>
            </ul>
            <p style={{ margin: '12px 0 0 0', fontWeight: 600, fontSize: '18px', color: '#000' }}>
              Starting at $2,499
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const DifferentSides: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Top</button>
        </HoverCardTrigger>
        <HoverCardContent side="top" style={{ width: '200px', padding: '12px' }}>
          <p style={{ margin: 0 }}>Hover card on top</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Bottom</button>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" style={{ width: '200px', padding: '12px' }}>
          <p style={{ margin: 0 }}>Hover card on bottom</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};
