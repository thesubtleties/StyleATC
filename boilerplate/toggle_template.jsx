import * as React from 'react';
import classNames from 'classnames';
import { Toggle } from 'radix-ui';

/* INJECT_VARIANT_STYLING_LOGIC */

const ToggleComponent = ({
  variant = 'default',
  className = '',
  icon,
  label = 'Toggle',
  defaultPressed = false,
  onPressedChange,
  colors = {},
  ...props
}) => {
  return (
    <Toggle.Root
      aria-label={label}
      defaultPressed={defaultPressed}
      onPressedChange={onPressedChange}
      className={classNames(
        'flex items-center justify-center rounded leading-4',
        getStyle(variant, 'root'),
        className
      )}
      {...props}
    >
      <span className={getStyle(variant, 'icon')}>{icon}</span>
    </Toggle.Root>
  );
};

export default ToggleComponent;
