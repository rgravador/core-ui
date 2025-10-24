import React, { forwardRef } from 'react';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import './Toolbar.css';

export interface ToolbarProps extends ToolbarPrimitive.ToolbarProps {
  className?: string;
}

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className = '', ...props }, ref) => (
    <ToolbarPrimitive.Root
      ref={ref}
      className={`cui-toolbar ${className}`}
      {...props}
    />
  )
);

Toolbar.displayName = 'Toolbar';

export interface ToolbarButtonProps extends ToolbarPrimitive.ToolbarButtonProps {
  className?: string;
}

export const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  ({ className = '', ...props }, ref) => (
    <ToolbarPrimitive.Button
      ref={ref}
      className={`cui-toolbar__button ${className}`}
      {...props}
    />
  )
);

ToolbarButton.displayName = 'ToolbarButton';

export interface ToolbarSeparatorProps extends ToolbarPrimitive.ToolbarSeparatorProps {
  className?: string;
}

export const ToolbarSeparator = forwardRef<HTMLDivElement, ToolbarSeparatorProps>(
  ({ className = '', ...props }, ref) => (
    <ToolbarPrimitive.Separator
      ref={ref}
      className={`cui-toolbar__separator ${className}`}
      {...props}
    />
  )
);

ToolbarSeparator.displayName = 'ToolbarSeparator';

export interface ToolbarLinkProps extends ToolbarPrimitive.ToolbarLinkProps {
  className?: string;
}

export const ToolbarLink = forwardRef<HTMLAnchorElement, ToolbarLinkProps>(
  ({ className = '', ...props }, ref) => (
    <ToolbarPrimitive.Link
      ref={ref}
      className={`cui-toolbar__link ${className}`}
      {...props}
    />
  )
);

ToolbarLink.displayName = 'ToolbarLink';

export const ToolbarToggleGroup = ToolbarPrimitive.ToggleGroup;

export interface ToolbarToggleItemProps extends ToolbarPrimitive.ToolbarToggleItemProps {
  className?: string;
}

export const ToolbarToggleItem = forwardRef<HTMLButtonElement, ToolbarToggleItemProps>(
  ({ className = '', ...props }, ref) => (
    <ToolbarPrimitive.ToggleItem
      ref={ref}
      className={`cui-toolbar__toggle-item ${className}`}
      {...props}
    />
  )
);

ToolbarToggleItem.displayName = 'ToolbarToggleItem';
