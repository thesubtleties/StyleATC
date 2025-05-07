import * as React from 'react';
import classNames from 'classnames';
import { ToggleGroup } from 'radix-ui';

const ToggleGroupComponent = ({
  items = [],
  type = 'single',
  defaultValue,
  ariaLabel = 'Toggle group',
  variant = 'default',
  className = '',
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"inline-flex rounded shadow-sm bg-white","elements":{"item":"flex items-center justify-center px-3 py-2 text-sm font-medium border border-gray-200 -ml-px first:ml-0 hover:bg-gray-50 data-[state=on]:bg-gray-100 data-[state=on]:text-gray-900 focus:relative focus:ring-2 focus:ring-primary-500 focus:z-10 disabled:opacity-50 disabled:cursor-not-allowed"},"description":"Default toggle group variant."}}');
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
    <ToggleGroup.Root
      className={classNames(
        'inline-flex rounded shadow-sm',
        getStyle('root'),
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
            getStyle('item'),
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

export default ToggleGroupComponent;
