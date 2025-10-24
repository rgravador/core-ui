import React, { forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import './Accordion.css';

export interface AccordionProps extends AccordionPrimitive.AccordionSingleProps {
  className?: string;
}

export interface AccordionMultipleProps extends AccordionPrimitive.AccordionMultipleProps {
  className?: string;
}

export const Accordion = forwardRef<
  HTMLDivElement,
  AccordionProps | AccordionMultipleProps
>(({ className = '', ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={`cui-accordion ${className}`}
    {...props}
  />
));

Accordion.displayName = 'Accordion';

export interface AccordionItemProps extends AccordionPrimitive.AccordionItemProps {
  className?: string;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className = '', ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={`cui-accordion__item ${className}`}
      {...props}
    />
  )
);

AccordionItem.displayName = 'AccordionItem';

export interface AccordionTriggerProps extends AccordionPrimitive.AccordionTriggerProps {
  className?: string;
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className = '', children, ...props }, ref) => (
    <AccordionPrimitive.Header className="cui-accordion__header">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={`cui-accordion__trigger ${className}`}
        {...props}
      >
        {children}
        <svg
          className="cui-accordion__chevron"
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
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);

AccordionTrigger.displayName = 'AccordionTrigger';

export interface AccordionContentProps extends AccordionPrimitive.AccordionContentProps {
  className?: string;
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className = '', children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={`cui-accordion__content ${className}`}
      {...props}
    >
      <div className="cui-accordion__content-text">{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = 'AccordionContent';
