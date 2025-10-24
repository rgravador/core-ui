import React, { forwardRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import './Tabs.css';

export interface TabsProps extends TabsPrimitive.TabsProps {
  className?: string;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className = '', ...props }, ref) => (
    <TabsPrimitive.Root
      ref={ref}
      className={`cui-tabs ${className}`}
      {...props}
    />
  )
);

Tabs.displayName = 'Tabs';

export interface TabsListProps extends TabsPrimitive.TabsListProps {
  className?: string;
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className = '', ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={`cui-tabs__list ${className}`}
      {...props}
    />
  )
);

TabsList.displayName = 'TabsList';

export interface TabsTriggerProps extends TabsPrimitive.TabsTriggerProps {
  className?: string;
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className = '', ...props }, ref) => (
    <TabsPrimitive.Trigger
      ref={ref}
      className={`cui-tabs__trigger ${className}`}
      {...props}
    />
  )
);

TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps extends TabsPrimitive.TabsContentProps {
  className?: string;
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className = '', ...props }, ref) => (
    <TabsPrimitive.Content
      ref={ref}
      className={`cui-tabs__content ${className}`}
      {...props}
    />
  )
);

TabsContent.displayName = 'TabsContent';
