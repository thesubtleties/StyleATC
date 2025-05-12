import * as React from 'react';
import classNames from 'classnames';

/**
 * FormField Component Template
 *
 * A simple label + input field combination.
 *
 * Placeholders to be replaced by the generator based on theme variant:
 * - : Tailwind classes for the wrapping fieldset/div element.
 * - : Tailwind classes for the label element.
 * - : Tailwind classes for the input element.
 *
 * The 'variant' prop is optional here unless you define specific FormField variants.
 * If variants exist, the generator would use it for style lookup.
 */


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-full flex-col justify-start space-y-2","elements":{"fieldset":"mb-4 flex flex-col gap-1.5","label":"block text-[13px] leading-none mb-2.5 text-gray-700 font-medium","input":"h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none outline-none shadow-sm border border-gray-300 bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"},"description":"Default FormField variant."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const FormfieldComponent = ({
  label,
  id,
  type = 'text',
  defaultValue = '',
  variant = 'default',
  className = '', // Applied to the root fieldset/div
  labelClassName = '', // Extra classes for label
  inputClassName = '', // Extra classes for input
  ...props // Spread remaining props onto the input element
}) => {
  return (
    <div
      className={classNames(
        'w-full flex-col justify-start',
        getStyle(variant, 'fieldset'),
        className
      )}
    >
      <label
        className={classNames(
          'block text-[13px] leading-none mb-2.5',
          getStyle(variant, 'label'),
          labelClassName
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={classNames(
          'h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none outline-none shadow-sm border',
          getStyle(variant, 'input'),
          inputClassName
        )}
        id={id}
        type={type}
        defaultValue={defaultValue} // Use defaultValue for uncontrolled components
        {...props} // Pass other props like placeholder, required, etc.
      />
    </div>
  );
};

// Export as default
export default FormfieldComponent;
