import * as React from 'react';
import { Progress } from 'radix-ui';
import classNames from 'classnames';

/* INJECT_VARIANT_STYLING_LOGIC */

const ProgressComponent = ({
  value = 0,
  variant = 'default',
  className = '',
  indicatorClassName = '',
  ...props
}) => {
  return (
    <Progress.Root
      className={classNames(
        'relative h-[25px] w-full overflow-hidden rounded-full',
        getStyle(variant, 'root'),
        className
      )}
      style={{
        // Fix overflow clipping in Safari
        transform: 'translateZ(0)',
      }}
      value={value}
      {...props}
    >
      <Progress.Indicator
        className={classNames(
          'ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full transition-transform duration-[660ms]',
          getStyle(variant, 'indicator'),
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressComponent;
