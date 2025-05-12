import * as React from 'react';
import classNames from 'classnames';
import { Checkbox } from 'radix-ui';
import { CheckIcon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"border border-gray-300 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500","elements":{"indicator":"flex items-center justify-center text-white","icon":"size-4 text-primary-600","label":"text-gray-700 font-medium cursor-pointer"},"description":"Default checkbox variant."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const CheckboxComponent = ({
  label = 'Checkbox label',
  id = 'checkbox',
  defaultChecked = false,
  variant = 'default',
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-center">
      <Checkbox.Root
        className={classNames(
          'flex size-[25px] appearance-none items-center justify-center rounded outline-none',
          getStyle(variant, 'root'),
          className
        )}
        defaultChecked={defaultChecked}
        id={id}
        {...props}
      >
        <Checkbox.Indicator className={getStyle(variant, 'indicator')}>
          <CheckIcon className={getStyle(variant, 'icon')} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <label
          className={classNames(
            'pl-[15px] text-[15px] leading-none',
            getStyle(variant, 'label')
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckboxComponent;
