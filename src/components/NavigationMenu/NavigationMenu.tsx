import React, { forwardRef } from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import './NavigationMenu.css';

export interface NavigationMenuProps extends NavigationMenuPrimitive.NavigationMenuProps {
  className?: string;
}

export const NavigationMenu = forwardRef<HTMLElement, NavigationMenuProps>(
  ({ className = '', ...props }, ref) => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={`cui-navigation-menu ${className}`}
      {...props}
    />
  )
);

NavigationMenu.displayName = 'NavigationMenu';

export const NavigationMenuList = forwardRef<
  HTMLUListElement,
  NavigationMenuPrimitive.NavigationMenuListProps
>(({ className = '', ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={`cui-navigation-menu__list ${className}`}
    {...props}
  />
));

NavigationMenuList.displayName = 'NavigationMenuList';

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const NavigationMenuTrigger = forwardRef<
  HTMLButtonElement,
  NavigationMenuPrimitive.NavigationMenuTriggerProps
>(({ className = '', ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={`cui-navigation-menu__trigger ${className}`}
    {...props}
  />
));

NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

export const NavigationMenuContent = forwardRef<
  HTMLDivElement,
  NavigationMenuPrimitive.NavigationMenuContentProps
>(({ className = '', ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={`cui-navigation-menu__content ${className}`}
    {...props}
  />
));

NavigationMenuContent.displayName = 'NavigationMenuContent';

export const NavigationMenuLink = forwardRef<
  HTMLAnchorElement,
  NavigationMenuPrimitive.NavigationMenuLinkProps
>(({ className = '', ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    className={`cui-navigation-menu__link ${className}`}
    {...props}
  />
));

NavigationMenuLink.displayName = 'NavigationMenuLink';
