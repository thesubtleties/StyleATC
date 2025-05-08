import * as React from 'react';
import classNames from 'classnames';
import { unstable_OneTimePasswordField as OneTimePasswordField } from 'radix-ui';

const OTPFieldComponent = ({
  length = 6,
  variant = 'default',
  className = '',
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"fieldset":"flex gap-2","input":"size-10 text-center text-[15px] leading-none outline-none shadow-[0_0_0_1px] shadow-gray-300 focus:shadow-[0_0_0_2px] focus:shadow-blue-500"},"description":"Default one-time password variant."}}');
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
    <OneTimePasswordField.Root
      className={classNames(
        'flex gap-2 flex-nowrap',
        getStyle('root'),
        className
      )}
      {...props}
    >
      {Array.from({ length }).map((_, i) => (
        <OneTimePasswordField.Input
          key={i}
          className={classNames(
            'box-border inline-flex h-[35px] w-6 appearance-none items-center justify-center rounded p-0 text-[15px] leading-none outline-none selection:text-white',
            getStyle('input')
          )}
        />
      ))}
      <OneTimePasswordField.HiddenInput />
    </OneTimePasswordField.Root>
  );
};

export default OTPFieldComponent;
