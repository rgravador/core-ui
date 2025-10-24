import React, { forwardRef } from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import './Menubar.css';

export interface MenubarProps extends MenubarPrimitive.MenubarProps {
  className?: string;
}

export const Menubar = forwardRef<HTMLDivElement, MenubarProps>(
  ({ className = '', ...props }, ref) => (
    <MenubarPrimitive.Root
      ref={ref}
      className={`cui-menubar ${className}`}
      {...props}
    />
  )
);

Menubar.displayName = 'Menubar';

export const MenubarMenu = MenubarPrimitive.Menu;
export const MenubarTrigger = forwardRef<
  HTMLButtonElement,
  MenubarPrimitive.MenubarTriggerProps
>(({ className = '', ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={`cui-menubar__trigger ${className}`}
    {...props}
  />
));

MenubarTrigger.displayName = 'MenubarTrigger';

export const MenubarContent = forwardRef<
  HTMLDivElement,
  MenubarPrimitive.MenubarContentProps
>(({ className = '', ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      className={`cui-menubar__content ${className}`}
      align="start"
      sideOffset={5}
      {...props}
    />
  </MenubarPrimitive.Portal>
));

MenubarContent.displayName = 'MenubarContent';

export const MenubarItem = forwardRef<
  HTMLDivElement,
  MenubarPrimitive.MenubarItemProps
>(({ className = '', ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={`cui-menubar__item ${className}`}
    {...props}
  />
));

MenubarItem.displayName = 'MenubarItem';

export const MenubarSeparator = forwardRef<
  HTMLDivElement,
  MenubarPrimitive.MenubarSeparatorProps
>(({ className = '', ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={`cui-menubar__separator ${className}`}
    {...props}
  />
));

MenubarSeparator.displayName = 'MenubarSeparator';
