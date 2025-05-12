import * as React from 'react';
import classNames from 'classnames';
import { ToggleGroup } from 'radix-ui';

/* INJECT_VARIANT_STYLING_LOGIC */

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
