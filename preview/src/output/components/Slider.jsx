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
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"relative flex h-5 touch-none select-none items-center w-full","elements":{"track":"relative h-[3px] grow rounded-full bg-slate-200 dark:bg-slate-700","range":"absolute h-full rounded-full bg-slate-900 dark:bg-slate-400","thumb":"block size-5 rounded-[10px] shadow-[0_2px_10px] focus:outline-none bg-white border border-slate-200 hover:bg-slate-50 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"},"description":"Default slider variant."}}');
const getStyle = (elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


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
