import React, { forwardRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import './Label.css';

export interface LabelProps extends LabelPrimitive.LabelProps {
  className?: string;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={`cui-label ${className}`}
      {...props}
    />
  )
);

Label.displayName = 'Label';
