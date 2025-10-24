import React, { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import './Select.css';

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export interface SelectTriggerProps extends SelectPrimitive.SelectTriggerProps {
  className?: string;
}

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className = '', children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={`cui-select__trigger ${className}`}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="cui-select__icon">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
            fill="currentColor"
          />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
);

SelectTrigger.displayName = 'SelectTrigger';

export interface SelectContentProps extends SelectPrimitive.SelectContentProps {
  className?: string;
}

export const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className = '', children, ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={`cui-select__content ${className}`}
        position="popper"
        {...props}
      >
        <SelectPrimitive.Viewport className="cui-select__viewport">
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);

SelectContent.displayName = 'SelectContent';

export interface SelectItemProps extends SelectPrimitive.SelectItemProps {
  className?: string;
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className = '', children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={`cui-select__item ${className}`}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="cui-select__item-indicator">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
);

SelectItem.displayName = 'SelectItem';

export interface SelectLabelProps extends SelectPrimitive.SelectLabelProps {
  className?: string;
}

export const SelectLabel = forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ className = '', ...props }, ref) => (
    <SelectPrimitive.Label
      ref={ref}
      className={`cui-select__label ${className}`}
      {...props}
    />
  )
);

SelectLabel.displayName = 'SelectLabel';

export interface SelectSeparatorProps extends SelectPrimitive.SelectSeparatorProps {
  className?: string;
}

export const SelectSeparator = forwardRef<HTMLDivElement, SelectSeparatorProps>(
  ({ className = '', ...props }, ref) => (
    <SelectPrimitive.Separator
      ref={ref}
      className={`cui-select__separator ${className}`}
      {...props}
    />
  )
);

SelectSeparator.displayName = 'SelectSeparator';
