import * as React from 'react';
import classNames from 'classnames';
import { RadioGroup } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"flex flex-col gap-2.5","elements":{"item":"flex items-center","button":"size-5 rounded-full shadow-[0_0_0_1px] shadow-gray-300 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black","indicator":"flex items-center justify-center size-full relative after:content-[\'\'] after:block after:size-[11px] after:rounded-full after:bg-blue-500","label":"text-[15px] leading-none pl-[15px] text-gray-800"},"description":"Default radio group variant."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const RadiogroupComponent = ({
  options = [],
  defaultValue = options[0]?.value || '',
  variant = 'default',
  className = '',
  ariaLabel = 'Options',
  ...props
}) => {
  return (
    <form>
      <RadioGroup.Root
        className={classNames(
          'flex flex-col gap-2.5',
          getStyle(variant, 'root'),
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
              getStyle(variant, 'itemContainer')
            )}
          >
            <RadioGroup.Item
              className={classNames(
                'size-[25px] cursor-default rounded-full outline-none',
                getStyle(variant, 'radioItem')
              )}
              value={option.value}
              id={`radio-${option.value}`}
            >
              <RadioGroup.Indicator
                className={classNames(
                  'relative flex size-full items-center justify-center after:block after:rounded-full',
                  getStyle(variant, 'indicator')
                )}
              />
            </RadioGroup.Item>
            <label
              className={classNames(
                'pl-[15px] text-[15px] leading-none',
                getStyle(variant, 'label')
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

export default RadiogroupComponent;
