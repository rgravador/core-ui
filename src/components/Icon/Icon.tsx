import React, { forwardRef } from 'react';
import * as RadixIcons from '@radix-ui/react-icons';
import './Icon.css';

export type IconName = keyof typeof RadixIcons;

export interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName;
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      name,
      size = 15,
      color,
      className = '',
      ...props
    },
    ref
  ) => {
    const IconComponent = RadixIcons[name] as React.ForwardRefExoticComponent<any>;

    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in @radix-ui/react-icons`);
      return null;
    }

    const classes = ['cui-icon', className].filter(Boolean).join(' ');

    return (
      <IconComponent
        ref={ref}
        className={classes}
        width={size}
        height={size}
        color={color}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';
