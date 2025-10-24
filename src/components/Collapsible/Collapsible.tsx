import React, { forwardRef } from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import './Collapsible.css';

export const Collapsible = CollapsiblePrimitive.Root;

export interface CollapsibleTriggerProps extends CollapsiblePrimitive.CollapsibleTriggerProps {
  className?: string;
}

export const CollapsibleTrigger = forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ className = '', ...props }, ref) => (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      className={`cui-collapsible__trigger ${className}`}
      {...props}
    />
  )
);

CollapsibleTrigger.displayName = 'CollapsibleTrigger';

export interface CollapsibleContentProps extends CollapsiblePrimitive.CollapsibleContentProps {
  className?: string;
}

export const CollapsibleContent = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ className = '', ...props }, ref) => (
    <CollapsiblePrimitive.Content
      ref={ref}
      className={`cui-collapsible__content ${className}`}
      {...props}
    />
  )
);

CollapsibleContent.displayName = 'CollapsibleContent';
