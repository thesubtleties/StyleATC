import * as React from 'react';
import { Switch } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"relative h-[25px] w-[42px] cursor-default rounded-full bg-gray-300 dark:bg-gray-600 shadow-[0_2px_10px] shadow-black/10 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black/50 data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600 transition-colors","elements":{"thumb":"block size-[21px] translate-x-0.5 rounded-full bg-white dark:bg-white shadow-[0_2px_2px] shadow-black/20 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]","label":"pr-[15px] text-[15px] leading-none text-gray-700 dark:text-gray-300","root":"flex items-center"},"description":"Default switch variant."},"ocean":{"root":"relative h-[25px] w-[42px] cursor-default rounded-full bg-blue-100/30 dark:bg-blue-900/20 shadow-sm outline-none focus:shadow-[0_0_0_2px] focus:shadow-blue-500/50 dark:focus:shadow-blue-400/50 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-400 data-[state=checked]:to-cyan-500 dark:data-[state=checked]:from-blue-500 dark:data-[state=checked]:to-cyan-600 transition-colors duration-200","elements":{"thumb":"block size-[21px] translate-x-0.5 rounded-full bg-white dark:bg-gray-100 shadow-sm transition-transform duration-200 will-change-transform data-[state=checked]:translate-x-[19px]","label":"pr-[15px] text-[15px] leading-none text-gray-700 dark:text-gray-300","root":"flex items-center"},"description":"Ocean-themed switch with gradient when active and light background when inactive"},"ios":{"root":"relative h-[31px] w-[51px] cursor-default rounded-full bg-gray-200 dark:bg-gray-700 shadow-inner outline-none focus:outline-none data-[state=checked]:bg-green-400 dark:data-[state=checked]:bg-green-500 transition-colors duration-200","elements":{"thumb":"block size-[27px] translate-x-[2px] rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-[22px]","label":"pr-[15px] text-[15px] font-medium leading-none text-gray-700 dark:text-gray-300","root":"flex items-center"},"description":"An iOS-inspired switch with rounded appearance and subtle animations"},"minimal":{"root":"relative h-[22px] w-[40px] cursor-default rounded-full bg-gray-800 dark:bg-gray-900 outline-none focus:ring-2 focus:ring-purple-500/30 dark:focus:ring-purple-400/30 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 data-[state=checked]:bg-purple-600 dark:data-[state=checked]:bg-purple-700 transition-colors duration-200","elements":{"thumb":"block size-[18px] translate-x-[2px] rounded-full bg-gray-200 dark:bg-gray-300 shadow-sm transition-all duration-200 ease-in-out data-[state=checked]:translate-x-[20px] data-[state=checked]:bg-white","label":"pr-[15px] text-[14px] font-medium leading-none text-gray-700 dark:text-gray-300","root":"flex items-center"},"description":"A sleek, minimal switch with a dark theme and purple accent"},"flat":{"root":"relative h-[26px] w-[50px] cursor-default rounded-md bg-gray-200 dark:bg-gray-800 outline-none focus:outline-none focus:ring-2 focus:ring-cyan-500/30 dark:focus:ring-cyan-400/30 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-cyan-500 data-[state=checked]:to-blue-500 dark:data-[state=checked]:from-cyan-600 dark:data-[state=checked]:to-blue-600 transition-all duration-300","elements":{"thumb":"block h-[22px] w-[22px] translate-x-[2px] translate-y-[2px] rounded-sm bg-white shadow-sm transition-all duration-300 ease-in-out data-[state=checked]:translate-x-[26px] data-[state=checked]:bg-white","label":"pr-[15px] text-[15px] font-medium leading-none text-gray-700 dark:text-gray-300","root":"flex items-center"},"description":"A flat, modern toggle with a colorful gradient when active"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const SwitchComponent = ({
  label = 'Toggle',
  id = 'switch',
  variant = 'default',
  checked = false,
  onCheckedChange,
  className = '',
  ...props
}) => {
  return (
    <form>
      <div
        className={classNames('flex items-center', getStyle(variant, 'root'))}
      >
        {label && (
          <label
            className={classNames(
              'pr-[15px] text-[15px] leading-none',
              getStyle(variant, 'label')
            )}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <Switch.Root
          className={classNames(
            'relative h-[25px] w-[42px] cursor-default rounded-full shadow-sm outline-none focus:shadow-[0_0_0_2px]',
            getStyle(variant, 'switch'),
            className
          )}
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
          {...props}
        >
          <Switch.Thumb
            className={classNames(
              'block size-[21px] translate-x-0.5 rounded-full shadow-sm transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]',
              getStyle(variant, 'thumb')
            )}
          />
        </Switch.Root>
      </div>
    </form>
  );
};

export default SwitchComponent;
