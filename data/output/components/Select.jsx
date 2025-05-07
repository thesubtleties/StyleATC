import * as React from 'react';
import { Select } from 'radix-ui';
import classnames from 'classnames';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

// Main component that accepts variant prop and options data
const SelectComponent = ({
  variant = 'default',
  placeholder = 'Select an option…',
  label = 'Options',
  groups = [],
  defaultValue,
  onValueChange,
  className = '',
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"bg-white border border-gray-300 hover:bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500","icon":"text-gray-500","content":"bg-white border border-gray-200 shadow-lg","scrollButton":"bg-white text-gray-700 hover:bg-gray-100","separator":"bg-gray-200","label":"text-gray-500 font-semibold","item":"text-gray-700 data-[highlighted]:bg-blue-500 data-[highlighted]:text-white data-[disabled]:text-gray-300","itemIndicator":"text-blue-500 data-[highlighted]:text-white"},"description":"Default select variant."}}');
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
    <Select.Root
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      {...props}
    >
      <Select.Trigger
        className={classnames(
          'inline-flex h-[35px] items-center justify-center gap-[5px] rounded px-[15px] text-[13px] leading-none outline-none',
          getStyle('trigger'),
          className
        )}
        aria-label={label}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className={getStyle('icon')}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={classnames(
            'overflow-hidden rounded-md',
            getStyle('content')
          )}
        >
          <Select.ScrollUpButton
            className={classnames(
              'flex h-[25px] cursor-default items-center justify-center',
              getStyle('scrollButton')
            )}
          >
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            {groups.map((group, groupIndex) => (
              <React.Fragment key={`group-${groupIndex}`}>
                {groupIndex > 0 && (
                  <Select.Separator
                    className={classnames(
                      'm-[5px] h-px',
                      getStyle('separator')
                    )}
                  />
                )}
                <Select.Group>
                  <Select.Label
                    className={classnames(
                      'px-[25px] text-xs leading-[25px]',
                      getStyle('label')
                    )}
                  >
                    {group.label}
                  </Select.Label>
                  {group.items.map((item, itemIndex) => (
                    <SelectItem
                      key={`item-${groupIndex}-${itemIndex}`}
                      value={item.value}
                      disabled={item.disabled}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </Select.Group>
              </React.Fragment>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton
            className={classnames(
              'flex h-[25px] cursor-default items-center justify-center',
              getStyle('scrollButton')
            )}
          >
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none data-[disabled]:pointer-events-none',
          getStyle('item'),
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator
          className={classnames(
            'absolute left-0 inline-flex w-[25px] items-center justify-center',
            getStyle('itemIndicator')
          )}
        >
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectComponent;
