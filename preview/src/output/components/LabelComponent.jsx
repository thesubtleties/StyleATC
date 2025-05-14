import * as React from 'react';
import { Label } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"flex flex-wrap items-center gap-[15px]","elements":{"label":"text-[15px] font-medium leading-[35px] text-gray-800 dark:text-gray-200","input":"inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none outline-none border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"},"description":"Default label variant."},"ocean":{"root":"flex flex-wrap items-center gap-[15px]","elements":{"label":"text-[15px] font-medium leading-[35px] text-teal-700 dark:text-teal-300 tracking-wide","input":"inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-lg px-2.5 text-[15px] leading-none outline-none border border-cyan-400 dark:border-cyan-600 bg-cyan-50 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 shadow-sm transition-all duration-200"},"description":"An ocean-themed label with wave-like aesthetics and sea colors."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const LabelComponent = ({
  htmlFor,
  children,
  variant = 'default',
  className = '',
  inputProps = {},
  showInput = true,
  ...props
}) => {
  return (
    <div className="flex flex-wrap items-center gap-[15px]">
      <Label.Root
        className={classNames(
          'text-[15px] font-medium leading-[35px]',
          getStyle(variant, 'label'),
          className
        )}
        htmlFor={htmlFor}
        {...props}
      >
        {children}
      </Label.Root>

      {showInput && (
        <input
          className={classNames(
            'inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none outline-none',
            getStyle(variant, 'input')
          )}
          type="text"
          id={htmlFor}
          {...inputProps}
        />
      )}
    </div>
  );
};

export default LabelComponent;
