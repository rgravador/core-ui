import React, { forwardRef } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import './Tooltip.css';

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export interface TooltipContentProps extends TooltipPrimitive.TooltipContentProps {
  className?: string;
}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className = '', ...props }, ref) => (
    <TooltipPrimitive.Content
      ref={ref}
      className={`cui-tooltip__content ${className}`}
      sideOffset={5}
      {...props}
    />
  )
);

TooltipContent.displayName = 'TooltipContent';
