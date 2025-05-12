import * as React from 'react';
import classNames from 'classnames';
import { Checkbox } from 'radix-ui';
import { CheckIcon } from '@radix-ui/react-icons';

/* INJECT_VARIANT_STYLING_LOGIC */

const CheckboxComponent = ({
  label = 'Checkbox label',
  id = 'checkbox',
  defaultChecked = false,
  variant = 'default',
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-center">
      <Checkbox.Root
        className={classNames(
          'flex size-[25px] appearance-none items-center justify-center rounded outline-none',
          getStyle(variant, 'root'),
          className
        )}
        defaultChecked={defaultChecked}
        id={id}
        {...props}
      >
        <Checkbox.Indicator className={getStyle(variant, 'indicator')}>
          <CheckIcon className={getStyle(variant, 'icon')} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <label
          className={classNames(
            'pl-[15px] text-[15px] leading-none',
            getStyle(variant, 'label')
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckboxComponent;
