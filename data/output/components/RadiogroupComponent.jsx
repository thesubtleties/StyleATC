import * as React from 'react';
import classNames from 'classnames';
import { RadioGroup } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"flex flex-col gap-3","elements":{"item":"flex items-center","button":"size-5 rounded-full shadow-[0_0_0_1px] shadow-gray-300 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black","indicator":"relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-blue-500 dark:after:bg-blue-400","label":"pl-3 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors","itemContainer":"flex items-center group transition-all duration-200","radioItem":"size-5 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-blue-500 hover:border-gray-400 dark:hover:border-gray-500"},"description":"Default radio group variant."},"cards":{"root":"flex flex-col gap-3","elements":{"itemContainer":"flex items-center w-full p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-all hover:shadow-md dark:hover:shadow-gray-900/30 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-900/20 has-[:checked]:border-blue-300 dark:has-[:checked]:border-blue-700 has-[:checked]:shadow-md cursor-pointer","radioItem":"size-5 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none transition-all has-[:checked]:border-blue-500 dark:has-[:checked]:border-blue-400 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:ring-offset-2","indicator":"relative flex size-full items-center justify-center after:block after:size-3 after:rounded-full after:bg-blue-500 dark:after:bg-blue-400 after:scale-0 after:transition-transform after:duration-200 after:[transform-origin:center] data-[state=checked]:after:scale-100","label":"pl-3 text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"},"description":"A card-like radio group with options that visually highlight when selected"},"pills":{"root":"flex flex-row gap-1 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full w-fit","elements":{"itemContainer":"relative flex items-center","radioItem":"h-full rounded-full focus:outline-none focus:ring-0 data-[state=checked]:bg-white dark:data-[state=checked]:bg-gray-700 data-[state=checked]:shadow-sm","indicator":"flex items-center justify-center size-full","label":"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 data-[state=checked]:text-gray-900 dark:data-[state=checked]:text-white rounded-full transition-all cursor-pointer"},"description":"A pill-style radio group with an interactive toggle feel"},"toggle":{"root":"flex flex-row bg-gray-100 dark:bg-gray-800 p-1 rounded-lg gap-1","elements":{"itemContainer":"flex items-center","radioItem":"px-4 py-2 rounded-md text-sm font-medium text-gray-500 data-[state=checked]:bg-white dark:data-[state=checked]:bg-gray-700 data-[state=checked]:text-gray-900 dark:data-[state=checked]:text-white data-[state=checked]:shadow-sm transition-all duration-200 cursor-pointer","indicator":"hidden","label":"hidden"},"description":"A toggle-style radio group with button-like presentation"}}');
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
