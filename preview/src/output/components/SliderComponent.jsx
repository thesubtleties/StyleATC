import * as React from 'react';
import classNames from 'classnames';
import { Slider } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"relative flex w-full touch-none select-none items-center","elements":{"track":"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary-foreground/20","range":"absolute h-full bg-primary","thumb":"block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"},"description":"Default slider variant."},"ocean":{"root":"relative flex w-full touch-none select-none items-center relative flex w-full touch-none select-none items-center","elements":{"track":"relative h-2 w-full overflow-hidden rounded-full bg-oceanfoam/30","range":"absolute h-full bg-gradient-to-r from-primary to-deepocean","thumb":"block h-5 w-5 rounded-full border-2 border-primary bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"},"description":"Ocean-themed slider with gradient track and smooth animations"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const SliderComponent = ({
  defaultValue = [50],
  max = 100,
  step = 1,
  variant = 'default',
  className = '',
  ariaLabel = 'Slider',
  ...props
}) => {
  return (
    <form>
      <Slider.Root
        className={classNames(
          'relative flex h-5 touch-none select-none items-center',
          getStyle(variant, 'root'),
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
            getStyle(variant, 'track')
          )}
        >
          <Slider.Range
            className={classNames(
              'absolute h-full rounded-full',
              getStyle(variant, 'range')
            )}
          />
        </Slider.Track>
        <Slider.Thumb
          className={classNames(
            'block size-5 rounded-[10px] shadow-[0_2px_10px] focus:outline-none',
            getStyle(variant, 'thumb')
          )}
          aria-label={ariaLabel}
        />
      </Slider.Root>
    </form>
  );
};

export default SliderComponent;
