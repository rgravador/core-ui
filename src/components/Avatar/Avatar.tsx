import React, { forwardRef } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import './Avatar.css';

export interface AvatarProps extends AvatarPrimitive.AvatarProps {
  className?: string;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className = '', ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={`cui-avatar ${className}`}
      {...props}
    />
  )
);

Avatar.displayName = 'Avatar';

export interface AvatarImageProps extends AvatarPrimitive.AvatarImageProps {
  className?: string;
}

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className = '', ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      className={`cui-avatar__image ${className}`}
      {...props}
    />
  )
);

AvatarImage.displayName = 'AvatarImage';

export interface AvatarFallbackProps extends AvatarPrimitive.AvatarFallbackProps {
  className?: string;
}

export const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className = '', ...props }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={`cui-avatar__fallback ${className}`}
      {...props}
    />
  )
);

AvatarFallback.displayName = 'AvatarFallback';
