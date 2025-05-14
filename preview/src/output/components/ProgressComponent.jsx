import * as React from 'react';
import { Progress } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"relative h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700","elements":{"indicator":"h-full w-full flex-1 bg-blue-500 dark:bg-blue-400 transition-all shadow-sm"},"description":"Default progress variant."},"ocean":{"root":"relative h-4 w-full overflow-hidden rounded-full bg-blue-100/50","elements":{"indicator":"h-full w-full bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 shadow-md"},"description":"An ocean-themed progress bar with light background and gradient fill"},"modern":{"root":"relative h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700/40","elements":{"indicator":"h-full w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_5px_rgba(139,92,246,0.5)]"},"description":"A sleek, modern progress bar with soft glow effect"},"minimal":{"root":"relative h-2 w-full overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-800","elements":{"indicator":"h-full w-full bg-green-500 dark:bg-green-400 transition-all duration-500"},"description":"A minimal, flat progress bar with subtle animation"}}');
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
