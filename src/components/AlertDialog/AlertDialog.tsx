import React, { forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import './AlertDialog.css';

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export interface AlertDialogPortalProps extends AlertDialogPrimitive.AlertDialogPortalProps {
  className?: string;
}

export const AlertDialogPortal = AlertDialogPrimitive.Portal;

export interface AlertDialogOverlayProps extends AlertDialogPrimitive.AlertDialogOverlayProps {
  className?: string;
}

export const AlertDialogOverlay = forwardRef<HTMLDivElement, AlertDialogOverlayProps>(
  ({ className = '', ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
      ref={ref}
      className={`cui-alert-dialog__overlay ${className}`}
      {...props}
    />
  )
);

AlertDialogOverlay.displayName = 'AlertDialogOverlay';

export interface AlertDialogContentProps extends AlertDialogPrimitive.AlertDialogContentProps {
  className?: string;
}

export const AlertDialogContent = forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ className = '', ...props }, ref) => (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={`cui-alert-dialog__content ${className}`}
        {...props}
      />
    </AlertDialogPortal>
  )
);

AlertDialogContent.displayName = 'AlertDialogContent';

export interface AlertDialogTitleProps extends AlertDialogPrimitive.AlertDialogTitleProps {
  className?: string;
}

export const AlertDialogTitle = forwardRef<HTMLHeadingElement, AlertDialogTitleProps>(
  ({ className = '', ...props }, ref) => (
    <AlertDialogPrimitive.Title
      ref={ref}
      className={`cui-alert-dialog__title ${className}`}
      {...props}
    />
  )
);

AlertDialogTitle.displayName = 'AlertDialogTitle';

export interface AlertDialogDescriptionProps extends AlertDialogPrimitive.AlertDialogDescriptionProps {
  className?: string;
}

export const AlertDialogDescription = forwardRef<HTMLParagraphElement, AlertDialogDescriptionProps>(
  ({ className = '', ...props }, ref) => (
    <AlertDialogPrimitive.Description
      ref={ref}
      className={`cui-alert-dialog__description ${className}`}
      {...props}
    />
  )
);

AlertDialogDescription.displayName = 'AlertDialogDescription';

export interface AlertDialogActionProps extends AlertDialogPrimitive.AlertDialogActionProps {
  className?: string;
}

export const AlertDialogAction = forwardRef<HTMLButtonElement, AlertDialogActionProps>(
  ({ className = '', ...props }, ref) => (
    <AlertDialogPrimitive.Action
      ref={ref}
      className={`cui-alert-dialog__action ${className}`}
      {...props}
    />
  )
);

AlertDialogAction.displayName = 'AlertDialogAction';

export interface AlertDialogCancelProps extends AlertDialogPrimitive.AlertDialogCancelProps {
  className?: string;
}

export const AlertDialogCancel = forwardRef<HTMLButtonElement, AlertDialogCancelProps>(
  ({ className = '', ...props }, ref) => (
    <AlertDialogPrimitive.Cancel
      ref={ref}
      className={`cui-alert-dialog__cancel ${className}`}
      {...props}
    />
  )
);

AlertDialogCancel.displayName = 'AlertDialogCancel';
