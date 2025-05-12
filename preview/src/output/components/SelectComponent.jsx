import * as React from 'react';
import { Select } from 'radix-ui';
import classnames from 'classnames';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-gray-800 shadow-[0_2px_10px] shadow-black/10 hover:bg-gray-100 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-gray-500 outline-none","icon":"text-gray-500","content":"overflow-hidden bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] z-[100]","viewport":"p-[5px]","item":"text-[13px] leading-none text-gray-800 rounded flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-gray-400 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-blue-500 data-[highlighted]:text-white","itemIndicator":"absolute left-0 w-[25px] inline-flex items-center justify-center","separator":"h-[1px] bg-gray-200 m-[5px]","arrow":"fill-white"},"description":"Default select variant."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


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
  return (
    <Select.Root
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      {...props}
    >
      <Select.Trigger
        className={classnames(
          'inline-flex h-[35px] items-center justify-center gap-[5px] rounded px-[15px] text-[13px] leading-none outline-none',
          getStyle(variant, 'trigger'),
          className
        )}
        aria-label={label}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className={getStyle(variant, 'icon')}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={classnames(
            'overflow-hidden rounded-md',
            getStyle(variant, 'content')
          )}
        >
          <Select.ScrollUpButton
            className={classnames(
              'flex h-[25px] cursor-default items-center justify-center',
              getStyle(variant, 'scrollButton')
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
                      getStyle(variant, 'separator')
                    )}
                  />
                )}
                <Select.Group>
                  <Select.Label
                    className={classnames(
                      'px-[25px] text-xs leading-[25px]',
                      getStyle(variant, 'label')
                    )}
                  >
                    {group.label}
                  </Select.Label>
                  {group.items.map((item, itemIndex) => (
                    <SelectItem
                      key={`item-${groupIndex}-${itemIndex}`}
                      value={item.value}
                      disabled={item.disabled}
                      variant={variant}
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
              getStyle(variant, 'scrollButton')
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
  ({ children, className, variant, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none data-[disabled]:pointer-events-none',
          getStyle(variant, 'item'),
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator
          className={classnames(
            'absolute left-0 inline-flex w-[25px] items-center justify-center',
            getStyle(variant, 'itemIndicator')
          )}
        >
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectComponent;
