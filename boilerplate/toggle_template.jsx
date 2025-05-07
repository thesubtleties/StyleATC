import * as React from 'react';
import classNames from 'classnames';
import { Toggle } from 'radix-ui';

const ToggleComponent = ({
  variant = 'default',
  className = '',
  icon,
  label = 'Toggle',
  defaultPressed = false,
  onPressedChange,
  ...props
}) => {
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <Toggle.Root
      aria-label={label}
      defaultPressed={defaultPressed}
      onPressedChange={onPressedChange}
      className={classNames(
        'flex items-center justify-center rounded leading-4',
        getStyle('root'),
        className
      )}
      {...props}
    >
      <span className={getStyle('icon')}>{icon}</span>
    </Toggle.Root>
  );
};

export default ToggleComponent;
