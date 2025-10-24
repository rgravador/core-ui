import React, { forwardRef } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import './Separator.css';

export interface SeparatorProps extends SeparatorPrimitive.SeparatorProps {
  className?: string;
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className = '', ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      className={`cui-separator ${className}`}
      {...props}
    />
  )
);

Separator.displayName = 'Separator';
