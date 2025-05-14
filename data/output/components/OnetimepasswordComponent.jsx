import * as React from 'react';
import classNames from 'classnames';
import { unstable_OneTimePasswordField as OneTimePasswordField } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"fieldset":"flex gap-2","input":"size-10 text-center font-mono text-xl text-black dark:text-white leading-none bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-500 rounded-md focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-400/30 focus:outline-none","root":"flex gap-2 justify-center"},"description":"Default one-time password variant."},"terminal":{"root":"","elements":{"root":"flex gap-2 justify-center","input":"size-10 text-center font-mono text-xl text-orange-400 leading-none bg-gray-900 border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 focus:outline-none"},"description":"Linux terminal-style one-time password field with dark background and burnt orange monospace text."},"rectangular":{"root":"","elements":{"root":"flex gap-2 justify-center","input":"size-10 text-center font-mono text-xl font-bold text-gray-500 leading-none bg-white border border-silver rounded-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400/30 focus:outline-none"},"description":"Rectangular one-time password field with white background, silver borders, and bold medium gray text."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const OnetimepasswordComponent = ({
  length = 6,
  variant = 'default',
  className = '',
  ...props
}) => {
  return (
    <OneTimePasswordField.Root
      className={classNames(
        'flex gap-2 flex-nowrap',
        getStyle(variant, 'root'),
        className
      )}
      {...props}
    >
      {Array.from({ length }).map((_, i) => (
        <OneTimePasswordField.Input
          key={i}
          className={classNames(
            'box-border inline-flex h-[35px] w-6 appearance-none items-center justify-center rounded p-0 text-[15px] leading-none outline-none selection:text-white',
            getStyle(variant, 'input')
          )}
        />
      ))}
      <OneTimePasswordField.HiddenInput />
    </OneTimePasswordField.Root>
  );
};

export default OnetimepasswordComponent;
