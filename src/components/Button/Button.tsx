import React, { CSSProperties, forwardRef } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  sx?: Record<string, any>;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      style,
      sx,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      'cui-button',
      `cui-button--${variant}`,
      `cui-button--${size}`,
      isLoading && 'cui-button--loading',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const mergedStyle = {
      ...style,
      ...sx,
    };

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        style={mergedStyle}
        {...props}
      >
        {isLoading && (
          <span className="cui-button__spinner" aria-label="Loading">
            <svg className="cui-button__spinner-icon" viewBox="0 0 24 24">
              <circle
                className="cui-button__spinner-circle"
                cx="12"
                cy="12"
                r="10"
                fill="none"
                strokeWidth="3"
              />
            </svg>
          </span>
        )}
        {!isLoading && leftIcon && <span className="cui-button__icon-left">{leftIcon}</span>}
        {children && <span className="cui-button__content">{children}</span>}
        {!isLoading && rightIcon && <span className="cui-button__icon-right">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
