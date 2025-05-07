import * as React from 'react';
import classNames from 'classnames';
import { Checkbox } from 'radix-ui';
import { CheckIcon } from '@radix-ui/react-icons';

const CheckboxComponent = ({
  label = 'Checkbox label',
  id = 'checkbox',
  defaultChecked = false,
  variant = 'default',
  className = '',
  ...props
}) => {
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <div className="flex items-center">
      <Checkbox.Root
        className={classNames(
          'flex size-[25px] appearance-none items-center justify-center rounded outline-none',
          getStyle('root'),
          className
        )}
        defaultChecked={defaultChecked}
        id={id}
        {...props}
      >
        <Checkbox.Indicator className={getStyle('indicator')}>
          <CheckIcon className={getStyle('icon')} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {label && (
        <label
          className={classNames(
            'pl-[15px] text-[15px] leading-none',
            getStyle('label')
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
