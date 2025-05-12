import * as React from 'react';
import { Select } from 'radix-ui';
import classnames from 'classnames';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

/* INJECT_VARIANT_STYLING_LOGIC */

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
