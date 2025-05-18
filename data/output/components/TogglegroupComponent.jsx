import * as React from 'react';
import classNames from 'classnames';
import { ToggleGroup } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"flex items-center justify-center rounded-lg overflow-hidden shadow-md","elements":{"item":"inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 border-r last:border-r-0 border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-blue-50 data-[state=on]:text-blue-700 data-[state=on]:font-semibold"},"description":"An improved toggle group with clean borders, subtle hover effects, and clear active states."},"outline":{"root":"flex items-center justify-center border-2 border-gray-400 bg-gray-200 rounded-none p-[2px]","elements":{"item":"inline-flex items-center justify-center px-3 py-1 text-sm font-normal text-black bg-gray-200 border-r border-gray-400 last:border-r-0 shadow-[1px_1px_0_0_rgba(0,0,0,0.2)] data-[state=on]:bg-gray-300 data-[state=on]:shadow-[inset_1px_1px_2px_0_rgba(0,0,0,0.3)] data-[state=on]:translate-y-[1px] data-[state=on]:translate-x-[1px] data-[state=on]:font-semibold hover:bg-gray-100 focus:outline-1 focus:outline-black"},"description":"A nostalgic toggle group styled after classic Mac OS/Windows interfaces with beveled edges and tactile pressed states."},"modern-dark":{"root":"flex items-center justify-center rounded-lg overflow-hidden shadow-md flex items-center justify-center rounded-lg overflow-hidden shadow-lg bg-gray-900 p-1","elements":{"item":"inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-300 border-0 rounded-md bg-transparent text-gray-400 hover:text-gray-200 focus-visible:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-30 data-[state=on]:bg-gray-800 data-[state=on]:text-indigo-400 data-[state=on]:shadow-inner data-[state=on]:shadow-indigo-900/20"},"description":"A sleek, modern dark toggle group with glowing accents and smooth transitions."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const TogglegroupComponent = ({
  items = [],
  type = 'single',
  defaultValue,
  ariaLabel = 'Toggle group',
  variant = 'default',
  className = '',
  ...props
}) => {
  return (
    <ToggleGroup.Root
      className={classNames(
        'inline-flex rounded shadow-sm',
        getStyle(variant, 'root'),
        className
      )}
      type={type}
      defaultValue={
        defaultValue || (items.length > 0 ? items[0].value : undefined)
      }
      aria-label={ariaLabel}
      {...props}
    >
      {items.map((item, index) => (
        <ToggleGroup.Item
          key={item.value || index}
          className={classNames(
            'flex items-center justify-center first:rounded-l last:rounded-r focus:z-10 focus:outline-none',
            getStyle(variant, 'item'),
            item.className
          )}
          value={item.value}
          aria-label={item.ariaLabel}
          disabled={item.disabled}
        >
          {item.icon || item.content}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
};

export default TogglegroupComponent;
