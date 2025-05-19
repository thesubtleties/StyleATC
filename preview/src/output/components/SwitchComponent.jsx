import * as React from 'react';
import { Switch } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"thumb":"bg-white shadow-[0_2px_2px] shadow-blackA4","label":"text-gray-700","root":"inline-flex items-center bg-transparent","switch":"bg-gray-300 data-[state=checked]:bg-blue-500 shadow-[0_2px_10px] shadow-blackA4"},"description":"Default switch variant."},"ocean":{"root":"","elements":{"thumb":"bg-white shadow-[0_2px_2px] shadow-blackA4 data-[state=checked]:translate-x-[25px]","label":"text-blue-700","root":"inline-flex items-center bg-transparent","switch":"w-[48px] bg-blue-100 shadow-[0_2px_10px] shadow-blackA4 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-400 data-[state=checked]:to-cyan-500"},"description":"Ocean-themed switch with gradient when active and light background when inactive"},"ios":{"root":"","elements":{"thumb":"bg-white size-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.15)] translate-x-[2px] data-[state=checked]:translate-x-[25px] transition-transform duration-200","label":"text-gray-800 font-medium","root":"inline-flex items-center bg-transparent","switch":"w-[51px] h-[28px] bg-gray-300 rounded-full shadow-[inset_0_0_2px_rgba(0,0,0,0.15)] data-[state=checked]:bg-blue-500"},"description":"A macOS-inspired switch with Apple\'s classic blue accent color"},"minimal":{"root":"","elements":{"thumb":"size-[18px] rounded-xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] data-[state=checked]:bg-gray-200 data-[state=checked]:translate-x-[17px]","label":"text-gray-700","root":"inline-flex items-center bg-transparent","switch":"h-[22px] w-[38px] rounded-xl bg-gray-200 shadow-[inset_0_0_3px_rgba(0,0,0,0.1)] data-[state=checked]:bg-gray-700"},"description":"A sleek, minimal switch with a dark theme and purple accent"},"flat":{"root":"","elements":{"thumb":"rounded-sm bg-gray-600 shadow-[0_1px_2px_rgba(0,0,0,0.2)] data-[state=checked]:bg-gray-100 data-[state=checked]:translate-x-[19px]","label":"text-gray-700","root":"inline-flex items-center bg-transparent","switch":"rounded-md bg-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.1)] data-[state=checked]:bg-gray-600"},"description":"A flat, modern toggle with a colorful gradient when active"},"sunset":{"root":"","elements":{"label":"text-orange-700","switch":"w-[44px] bg-gradient-to-r from-orange-100 to-yellow-100 shadow-[0_2px_10px] shadow-blackA4 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-orange-500 data-[state=checked]:to-red-500","thumb":"bg-gradient-to-b from-orange-200 to-yellow-200 shadow-[0_2px_2px] shadow-blackA4 data-[state=checked]:bg-gradient-to-b data-[state=checked]:from-yellow-100 data-[state=checked]:to-orange-100 data-[state=checked]:translate-x-[19px]","root":"inline-flex items-center"},"description":"A vibrant sunset-themed switch with orange to red gradient"},"dark":{"root":"","elements":{"label":"text-gray-700","switch":"w-[44px] bg-gray-700 shadow-[0_2px_10px] shadow-blackA4 data-[state=checked]:bg-gray-900","thumb":"bg-teal-300 shadow-[0_2px_2px] shadow-blackA4 data-[state=checked]:translate-x-[19px]","root":"inline-flex items-center"},"description":"A sleek dark-themed switch with black background and teal accent"},"apple":{"root":"","elements":{"switch":"w-[51px] h-[28px] bg-gray-300 rounded-full shadow-[inset_0_0_2px_rgba(0,0,0,0.15)] data-[state=checked]:bg-blue-500","thumb":"bg-white size-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.15)] translate-x-[2px] data-[state=checked]:translate-x-[25px] transition-transform duration-200","label":"text-gray-800 font-medium","root":"inline-flex items-center bg-transparent"},"description":"A macOS-inspired switch with Apple\'s classic blue accent color"}}');
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
            getStyle(variant, 'switch')
          )}
          id={id}
          style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
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
