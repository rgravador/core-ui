import React, { forwardRef } from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import './HoverCard.css';

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export interface HoverCardContentProps extends HoverCardPrimitive.HoverCardContentProps {
  className?: string;
}

export const HoverCardContent = forwardRef<HTMLDivElement, HoverCardContentProps>(
  ({ className = '', ...props }, ref) => (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        ref={ref}
        className={`cui-hover-card__content ${className}`}
        sideOffset={5}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
);

HoverCardContent.displayName = 'HoverCardContent';
