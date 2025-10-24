import React, { forwardRef } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import './Switch.css';

export interface SwitchProps extends SwitchPrimitive.SwitchProps {
  className?: string;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className = '', ...props }, ref) => (
    <SwitchPrimitive.Root
      ref={ref}
      className={`cui-switch ${className}`}
      {...props}
    >
      <SwitchPrimitive.Thumb className="cui-switch__thumb" />
    </SwitchPrimitive.Root>
  )
);

Switch.displayName = 'Switch';
