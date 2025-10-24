import React, { forwardRef } from 'react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import './ContextMenu.css';

export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuPortal = ContextMenuPrimitive.Portal;
export const ContextMenuGroup = ContextMenuPrimitive.Group;
export const ContextMenuSub = ContextMenuPrimitive.Sub;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

export interface ContextMenuContentProps extends ContextMenuPrimitive.ContextMenuContentProps {
  className?: string;
}

export const ContextMenuContent = forwardRef<HTMLDivElement, ContextMenuContentProps>(
  ({ className = '', ...props }, ref) => (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        ref={ref}
        className={`cui-context-menu__content ${className}`}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
);

ContextMenuContent.displayName = 'ContextMenuContent';

export interface ContextMenuItemProps extends ContextMenuPrimitive.ContextMenuItemProps {
  className?: string;
}

export const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  ({ className = '', ...props }, ref) => (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={`cui-context-menu__item ${className}`}
      {...props}
    />
  )
);

ContextMenuItem.displayName = 'ContextMenuItem';

export interface ContextMenuLabelProps extends ContextMenuPrimitive.ContextMenuLabelProps {
  className?: string;
}

export const ContextMenuLabel = forwardRef<HTMLDivElement, ContextMenuLabelProps>(
  ({ className = '', ...props }, ref) => (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={`cui-context-menu__label ${className}`}
      {...props}
    />
  )
);

ContextMenuLabel.displayName = 'ContextMenuLabel';

export interface ContextMenuSeparatorProps extends ContextMenuPrimitive.ContextMenuSeparatorProps {
  className?: string;
}

export const ContextMenuSeparator = forwardRef<HTMLDivElement, ContextMenuSeparatorProps>(
  ({ className = '', ...props }, ref) => (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={`cui-context-menu__separator ${className}`}
      {...props}
    />
  )
);

ContextMenuSeparator.displayName = 'ContextMenuSeparator';
