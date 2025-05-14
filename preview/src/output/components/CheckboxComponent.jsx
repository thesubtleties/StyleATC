import * as React from 'react';
import classNames from 'classnames';
import { Checkbox } from 'radix-ui';
import { CheckIcon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"border border-gray-300 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500","elements":{"indicator":"flex items-center justify-center text-white","icon":"size-4 text-primary-600","label":"text-gray-700 font-medium cursor-pointer"},"description":"Default checkbox variant."},"modern":{"root":"border-2 border-blue-400 bg-white rounded-md hover:bg-blue-50 focus:ring-2 focus:ring-offset-1 focus:ring-blue-400 transition-all duration-200","elements":{"indicator":"flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-sm w-full h-full","icon":"size-4 text-white","label":"text-gray-800 font-semibold cursor-pointer"},"description":"Modern checkbox with vibrant colors and smooth transitions."},"minimal":{"root":"border border-gray-200 bg-gray-50 rounded hover:bg-gray-100 focus:ring-1 focus:ring-offset-1 focus:ring-gray-300","elements":{"indicator":"flex items-center justify-center bg-gray-500","icon":"size-4 text-white","label":"text-gray-600 font-normal cursor-pointer"},"description":"Subtle, minimal checkbox with light styling."},"rounded":{"root":"border-2 border-purple-400 bg-white rounded-full hover:bg-purple-50 focus:ring-2 focus:ring-offset-2 focus:ring-purple-300 transition-all duration-200","elements":{"indicator":"flex items-center justify-center bg-purple-500 rounded-full w-full h-full","icon":"size-4 text-white","label":"text-gray-700 font-medium cursor-pointer"},"description":"Fully rounded checkbox with smooth edges."},"ocean":{"root":"border-2 border-teal-400 bg-white rounded-md hover:bg-blue-50 focus:ring-2 focus:ring-offset-2 focus:ring-teal-300 transition-all duration-200","elements":{"indicator":"flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 w-full h-full","icon":"size-4 text-white","label":"text-teal-800 font-medium cursor-pointer"},"description":"Ocean-themed checkbox with blue and teal colors."}}');
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
