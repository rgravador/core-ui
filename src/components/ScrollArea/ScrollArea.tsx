import React, { forwardRef } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import './ScrollArea.css';

export interface ScrollAreaProps extends ScrollAreaPrimitive.ScrollAreaProps {
  className?: string;
}

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className = '', children, ...props }, ref) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={`cui-scroll-area ${className}`}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="cui-scroll-area__viewport">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
);

ScrollArea.displayName = 'ScrollArea';

export interface ScrollBarProps extends ScrollAreaPrimitive.ScrollAreaScrollbarProps {
  className?: string;
}

export const ScrollBar = forwardRef<HTMLDivElement, ScrollBarProps>(
  ({ className = '', orientation = 'vertical', ...props }, ref) => (
    <ScrollAreaPrimitive.Scrollbar
      ref={ref}
      orientation={orientation}
      className={`cui-scroll-area__scrollbar ${className}`}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb className="cui-scroll-area__thumb" />
    </ScrollAreaPrimitive.Scrollbar>
  )
);

ScrollBar.displayName = 'ScrollBar';
