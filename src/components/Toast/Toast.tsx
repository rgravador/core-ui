import React, { forwardRef } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import './Toast.css';

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = forwardRef<
  HTMLOListElement,
  ToastPrimitive.ToastViewportProps
>((props, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className="cui-toast__viewport"
    {...props}
  />
));

ToastViewport.displayName = 'ToastViewport';

export interface ToastProps extends ToastPrimitive.ToastProps {
  className?: string;
}

export const Toast = forwardRef<HTMLLIElement, ToastProps>(
  ({ className = '', ...props }, ref) => (
    <ToastPrimitive.Root
      ref={ref}
      className={`cui-toast ${className}`}
      {...props}
    />
  )
);

Toast.displayName = 'Toast';

export interface ToastTitleProps extends ToastPrimitive.ToastTitleProps {
  className?: string;
}

export const ToastTitle = forwardRef<HTMLDivElement, ToastTitleProps>(
  ({ className = '', ...props }, ref) => (
    <ToastPrimitive.Title
      ref={ref}
      className={`cui-toast__title ${className}`}
      {...props}
    />
  )
);

ToastTitle.displayName = 'ToastTitle';

export interface ToastDescriptionProps extends ToastPrimitive.ToastDescriptionProps {
  className?: string;
}

export const ToastDescription = forwardRef<HTMLDivElement, ToastDescriptionProps>(
  ({ className = '', ...props }, ref) => (
    <ToastPrimitive.Description
      ref={ref}
      className={`cui-toast__description ${className}`}
      {...props}
    />
  )
);

ToastDescription.displayName = 'ToastDescription';

export interface ToastActionProps extends ToastPrimitive.ToastActionProps {
  className?: string;
}

export const ToastAction = forwardRef<HTMLButtonElement, ToastActionProps>(
  ({ className = '', ...props }, ref) => (
    <ToastPrimitive.Action
      ref={ref}
      className={`cui-toast__action ${className}`}
      {...props}
    />
  )
);

ToastAction.displayName = 'ToastAction';

export const ToastClose = forwardRef<
  HTMLButtonElement,
  ToastPrimitive.ToastCloseProps
>((props, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className="cui-toast__close"
    {...props}
  />
));

ToastClose.displayName = 'ToastClose';
