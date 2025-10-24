import React, { forwardRef } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import './Progress.css';

export interface ProgressProps extends ProgressPrimitive.ProgressProps {
  className?: string;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className = '', value, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={`cui-progress ${className}`}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="cui-progress__indicator"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
);

Progress.displayName = 'Progress';
