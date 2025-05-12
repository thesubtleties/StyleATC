import * as React from 'react';
import { Label } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"flex flex-wrap items-center gap-[15px]","elements":{"label":"text-[15px] font-medium leading-[35px] text-gray-800 dark:text-gray-200","input":"inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none outline-none border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"},"description":"Default label variant."}}');
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
