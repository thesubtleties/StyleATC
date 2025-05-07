import * as React from 'react';
import { Label } from 'radix-ui';
import classNames from 'classnames';

const LabelComponent = ({
  htmlFor,
  children,
  variant = 'default',
  className = '',
  inputProps = {},
  showInput = true,
  ...props
}) => {
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <div className="flex flex-wrap items-center gap-[15px]">
      <Label.Root
        className={classNames(
          'text-[15px] font-medium leading-[35px]',
          getStyle('label'),
          className
        )}
        htmlFor={htmlFor}
        {...props}
      >
        {children}
      </Label.Root>

      {showInput && (
        <input
          className={classNames(
            'inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded px-2.5 text-[15px] leading-none outline-none',
            getStyle('input')
          )}
          type="text"
          id={htmlFor}
          {...inputProps}
        />
      )}
    </div>
  );
};

export default LabelComponent;
