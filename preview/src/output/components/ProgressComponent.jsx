import * as React from 'react';
import { Progress } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"relative h-2 w-full overflow-hidden rounded-full bg-secondary-foreground/20","elements":{"indicator":"h-full w-full flex-1 bg-primary transition-all"},"description":"Default progress variant."},"ocean":{"root":"relative h-2 w-full overflow-hidden rounded-full bg-secondary-foreground/20 h-2.5 w-full overflow-hidden rounded-full bg-oceanfoam/30","elements":{"indicator":"h-full bg-gradient-to-r from-primary to-deepocean"},"description":"An ocean-themed progress bar with light background and gradient fill"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


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
