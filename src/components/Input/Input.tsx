import React, { CSSProperties, forwardRef } from 'react';
import './Input.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  error?: string | boolean;
  label?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  sx?: Record<string, any>;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      error,
      label,
      helperText,
      leftIcon,
      rightIcon,
      className = '',
      style,
      sx,
      wrapperClassName = '',
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);
    const errorMessage = typeof error === 'string' ? error : undefined;

    const inputClasses = [
      'cui-input',
      `cui-input--${size}`,
      hasError && 'cui-input--error',
      leftIcon && 'cui-input--with-left-icon',
      rightIcon && 'cui-input--with-right-icon',
      disabled && 'cui-input--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const wrapperClasses = ['cui-input-wrapper', wrapperClassName].filter(Boolean).join(' ');

    const mergedStyle = {
      ...style,
      ...sx,
    };

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={inputId} className="cui-input-label">
            {label}
          </label>
        )}
        <div className="cui-input-container">
          {leftIcon && <span className="cui-input__icon-left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            style={mergedStyle}
            {...props}
          />
          {rightIcon && <span className="cui-input__icon-right">{rightIcon}</span>}
        </div>
        {errorMessage && (
          <span id={`${inputId}-error`} className="cui-input-error">
            {errorMessage}
          </span>
        )}
        {!errorMessage && helperText && (
          <span id={`${inputId}-helper`} className="cui-input-helper">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
