import * as React from 'react';
import classNames from 'classnames';

/**
 * FormField Component Template
 *
 * A simple label + input field combination.
 *
 * Placeholders to be replaced by the generator based on theme variant:
 * - {{fieldsetTailwind}}: Tailwind classes for the wrapping fieldset/div element.
 * - {{labelTailwind}}: Tailwind classes for the label element.
 * - {{inputTailwind}}: Tailwind classes for the input element.
 *
 * The 'variant' prop is optional here unless you define specific FormField variants.
 * If variants exist, the generator would use it for style lookup.
 */
const FormField = ({
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
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <div
      className={classNames(
        'w-full flex-col justify-start',
        getStyle('fieldset'),
        className
      )}
    >
      <label
        className={classNames(
          'block text-[13px] leading-none mb-2.5',
          getStyle('label'),
          labelClassName
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={classNames(
          'h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none outline-none shadow-sm border',
          getStyle('input'),
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
export default FormField;
