import React, { forwardRef } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import './Slider.css';

export interface SliderProps extends SliderPrimitive.SliderProps {
  className?: string;
}

export const Slider = forwardRef<HTMLSpanElement, SliderProps>(
  ({ className = '', ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={`cui-slider ${className}`}
      {...props}
    >
      <SliderPrimitive.Track className="cui-slider__track">
        <SliderPrimitive.Range className="cui-slider__range" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="cui-slider__thumb" />
    </SliderPrimitive.Root>
  )
);

Slider.displayName = 'Slider';
