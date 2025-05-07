import * as React from 'react';
import classNames from 'classnames';
import { RadioGroup } from 'radix-ui';

const RadioGroupComponent = ({
  options = [],
  defaultValue = options[0]?.value || '',
  variant = 'default',
  className = '',
  ariaLabel = 'Options',
  ...props
}) => {
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <form>
      <RadioGroup.Root
        className={classNames(
          'flex flex-col gap-2.5',
          getStyle('root'),
          className
        )}
        defaultValue={defaultValue}
        aria-label={ariaLabel}
        {...props}
      >
        {options.map((option, index) => (
          <div
            key={option.value}
            className={classNames(
              'flex items-center',
              getStyle('itemContainer')
            )}
          >
            <RadioGroup.Item
              className={classNames(
                'size-[25px] cursor-default rounded-full outline-none',
                getStyle('radioItem')
              )}
              value={option.value}
              id={`radio-${option.value}`}
            >
              <RadioGroup.Indicator
                className={classNames(
                  'relative flex size-full items-center justify-center after:block after:rounded-full',
                  getStyle('indicator')
                )}
              />
            </RadioGroup.Item>
            <label
              className={classNames(
                'pl-[15px] text-[15px] leading-none',
                getStyle('label')
              )}
              htmlFor={`radio-${option.value}`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </form>
  );
};

export default RadioGroupComponent;
