import React, { forwardRef } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import './RadioGroup.css';

export interface RadioGroupProps extends RadioGroupPrimitive.RadioGroupProps {
  className?: string;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className = '', ...props }, ref) => (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={`cui-radio-group ${className}`}
      {...props}
    />
  )
);

RadioGroup.displayName = 'RadioGroup';

export interface RadioGroupItemProps extends RadioGroupPrimitive.RadioGroupItemProps {
  className?: string;
}

export const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ className = '', ...props }, ref) => (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={`cui-radio-group__item ${className}`}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="cui-radio-group__indicator" />
    </RadioGroupPrimitive.Item>
  )
);

RadioGroupItem.displayName = 'RadioGroupItem';
