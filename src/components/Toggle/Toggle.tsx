import React, { forwardRef } from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import './Toggle.css';

export interface ToggleProps extends TogglePrimitive.ToggleProps {
  className?: string;
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className = '', ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={`cui-toggle ${className}`}
      {...props}
    />
  )
);

Toggle.displayName = 'Toggle';
