import * as React from 'react';
import { Switch } from 'radix-ui';
import classNames from 'classnames';

/* INJECT_VARIANT_STYLING_LOGIC */

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
