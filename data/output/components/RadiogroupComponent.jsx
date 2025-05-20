import * as React from 'react';
import classNames from 'classnames';
import { RadioGroup } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"flex flex-col gap-3 dark:bg-gray-900 p-4 rounded-lg","elements":{"item":"flex items-center","button":"size-5 rounded-full shadow-[0_0_0_1px] shadow-gray-300 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black","indicator":"relative flex size-full items-center justify-center after:block after:size-2.5 after:rounded-full after:bg-blue-500 dark:after:bg-blue-300 after:scale-0 after:transition-transform after:duration-300 data-[state=checked]:after:scale-100","label":"pl-3 text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 cursor-default","itemContainer":"flex items-center group transition-all duration-300 hover:translate-x-0.5","radioItem":"size-5 rounded-full border-2 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 hover:border-blue-400 dark:hover:border-blue-300 cursor-pointer"},"description":"Clean, simple radio group with a smooth transition effect"},"cards":{"root":"flex flex-col gap-3 dark:bg-gray-900 p-4 rounded-lg","elements":{"itemContainer":"flex items-center w-full p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 dark:hover:shadow-gray-900/40 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-gray-700 has-[:checked]:border-blue-300 dark:has-[:checked]:border-blue-500 has-[:checked]:shadow-md cursor-pointer","radioItem":"size-5 rounded-full border-2 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 outline-none transition-all duration-300 has-[:checked]:border-blue-500 dark:has-[:checked]:border-blue-400 focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800","indicator":"relative flex size-full items-center justify-center after:block after:size-3 after:rounded-full after:bg-blue-500 dark:after:bg-blue-300 after:scale-0 after:transition-transform after:duration-200 after:[transform-origin:center] data-[state=checked]:after:scale-100","label":"pl-3 text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors cursor-default"},"description":"A card-style radio group that highlights entire options when selected"},"pills":{"root":"flex flex-row flex-wrap gap-1 p-1.5 bg-gray-100 dark:bg-gray-900 rounded-full w-fit","elements":{"itemContainer":"relative flex items-center dark:bg-gray-800 hover:dark:bg-gray-700 transition-colors duration-300","radioItem":"h-full rounded-full focus:outline-none focus:ring-0 dark:bg-gray-800 data-[state=checked]:bg-white dark:data-[state=checked]:bg-gray-200 data-[state=checked]:text-gray-900 transition-all duration-300 cursor-pointer","indicator":"flex items-center justify-center size-full","label":"px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 data-[state=checked]:text-gray-900 dark:data-[state=checked]:text-gray-900 rounded-full transition-all duration-300 hover:text-gray-800 dark:hover:text-gray-200 cursor-default"},"description":"A pill-style radio group with a smooth segmented control appearance"},"toggle":{"root":"flex flex-row flex-wrap bg-gray-100 dark:bg-gray-900 p-2 rounded-lg gap-1","elements":{"itemContainer":"flex items-center","radioItem":"px-4 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-300 dark:bg-gray-800 data-[state=checked]:bg-white dark:data-[state=checked]:bg-gray-100 data-[state=checked]:text-gray-900 dark:data-[state=checked]:text-gray-900 data-[state=checked]:shadow-sm transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-700 cursor-pointer","indicator":"hidden","label":"hidden"},"description":"A toggle-style radio group that functions like segmented buttons"}}');
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
        {options.map((option, index) => {
          const uniqueId = `radio-${variant}-${option.value}`;
          return (
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
                id={uniqueId}
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
                htmlFor={uniqueId}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </RadioGroup.Root>
    </form>
  );
};

export default RadiogroupComponent;
