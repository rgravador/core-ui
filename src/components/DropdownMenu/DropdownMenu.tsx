import React, { forwardRef } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import './DropdownMenu.css';

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export interface DropdownMenuContentProps extends DropdownMenuPrimitive.DropdownMenuContentProps {
  className?: string;
}

export const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className = '', ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        className={`cui-dropdown-menu__content ${className}`}
        sideOffset={5}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
);

DropdownMenuContent.displayName = 'DropdownMenuContent';

export interface DropdownMenuItemProps extends DropdownMenuPrimitive.DropdownMenuItemProps {
  className?: string;
}

export const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ className = '', ...props }, ref) => (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={`cui-dropdown-menu__item ${className}`}
      {...props}
    />
  )
);

DropdownMenuItem.displayName = 'DropdownMenuItem';

export interface DropdownMenuLabelProps extends DropdownMenuPrimitive.DropdownMenuLabelProps {
  className?: string;
}

export const DropdownMenuLabel = forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ className = '', ...props }, ref) => (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={`cui-dropdown-menu__label ${className}`}
      {...props}
    />
  )
);

DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export interface DropdownMenuSeparatorProps extends DropdownMenuPrimitive.DropdownMenuSeparatorProps {
  className?: string;
}

export const DropdownMenuSeparator = forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>(
  ({ className = '', ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={`cui-dropdown-menu__separator ${className}`}
      {...props}
    />
  )
);

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';
