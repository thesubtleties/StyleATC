import * as React from 'react';
import classNames from 'classnames';
import { RadioGroup } from 'radix-ui';

const RadioGroupComponent = ({
  options = [],
  defaultValue = options[0]?.value || '',
  variant = 'default',
  className = '',
  ariaLabel = 'Options',
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"flex flex-col gap-2.5","elements":{"itemContainer":"flex items-center","radioItem":"border border-gray-300 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2","indicator":"after:size-[11px] after:bg-primary-500","label":"text-gray-700 font-medium"},"description":"Default RadioGroup variant."}}');
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
    <form>
      <RadioGroup.Root
        className={classNames(
          'flex flex-col gap-2.5',
          getStyle('root'),
          className
        )}
        defaultValue={defaultValue}
        aria-label={ariaLabel}
        {...props}
      >
        {options.map((option, index) => (
          <div
            key={option.value}
            className={classNames(
              'flex items-center',
              getStyle('itemContainer')
            )}
          >
            <RadioGroup.Item
              className={classNames(
                'size-[25px] cursor-default rounded-full outline-none',
                getStyle('radioItem')
              )}
              value={option.value}
              id={`radio-${option.value}`}
            >
              <RadioGroup.Indicator
                className={classNames(
                  'relative flex size-full items-center justify-center after:block after:rounded-full',
                  getStyle('indicator')
                )}
              />
            </RadioGroup.Item>
            <label
              className={classNames(
                'pl-[15px] text-[15px] leading-none',
                getStyle('label')
              )}
              htmlFor={`radio-${option.value}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </form>
  );
};

export default RadioGroupComponent;
