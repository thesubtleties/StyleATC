import * as React from 'react';
import classNames from 'classnames';
import { Slider } from 'radix-ui';

const SliderComponent = ({
  defaultValue = [50],
  max = 100,
  step = 1,
  variant = 'default',
  className = '',
  ariaLabel = 'Slider',
  ...props
}) => {
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <form>
      <Slider.Root
        className={classNames(
          'relative flex h-5 touch-none select-none items-center',
          getStyle('root'),
          className
        )}
        defaultValue={defaultValue}
        max={max}
        step={step}
        {...props}
      >
        <Slider.Track
          className={classNames(
            'relative h-[3px] grow rounded-full',
            getStyle('track')
          )}
        >
          <Slider.Range
            className={classNames(
              'absolute h-full rounded-full',
              getStyle('range')
            )}
          />
        </Slider.Track>
        <Slider.Thumb
          className={classNames(
            'block size-5 rounded-[10px] shadow-[0_2px_10px] focus:outline-none',
            getStyle('thumb')
          )}
          aria-label={ariaLabel}
        />
      </Slider.Root>
    </form>
  );
};

export default SliderComponent;
