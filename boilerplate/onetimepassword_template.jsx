import * as React from 'react';
import classNames from 'classnames';
import { unstable_OneTimePasswordField as OneTimePasswordField } from 'radix-ui';

const OnetimepasswordComponent = ({
  length = 6,
  variant = 'default',
  className = '',
  ...props
}) => {
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <OneTimePasswordField.Root
      className={classNames(
        'flex gap-2 flex-nowrap',
        getStyle('root'),
        className
      )}
      {...props}
    >
      {Array.from({ length }).map((_, i) => (
        <OneTimePasswordField.Input
          key={i}
          className={classNames(
            'box-border inline-flex h-[35px] w-6 appearance-none items-center justify-center rounded p-0 text-[15px] leading-none outline-none selection:text-white',
            getStyle('input')
          )}
        />
      ))}
      <OneTimePasswordField.HiddenInput />
    </OneTimePasswordField.Root>
  );
};

export default OnetimepasswordComponent;
