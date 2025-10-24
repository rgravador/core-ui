import React, { forwardRef } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import './Popover.css';

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;

export interface PopoverContentProps extends PopoverPrimitive.PopoverContentProps {
  className?: string;
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className = '', ...props }, ref) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        className={`cui-popover__content ${className}`}
        sideOffset={5}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);

PopoverContent.displayName = 'PopoverContent';
