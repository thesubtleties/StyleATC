import * as React from 'react';
import { Progress } from 'radix-ui';
import classNames from 'classnames';

const ProgressComponent = ({
  value = 0,
  variant = 'default',
  className = '',
  indicatorClassName = '',
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"relative h-[25px] w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700","elements":{"indicator":"size-full bg-blue-600 dark:bg-blue-500"},"description":"Default progress variant."}}');
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
    <Progress.Root
      className={classNames(
        'relative h-[25px] w-full overflow-hidden rounded-full',
        getStyle('root'),
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
          getStyle('indicator'),
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </Progress.Root>
  );
};

export default ProgressComponent;
