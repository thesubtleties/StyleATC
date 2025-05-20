import * as React from 'react';
import classNames from 'classnames';
import { RadioGroup } from 'radix-ui';

/* INJECT_VARIANT_STYLING_LOGIC */

const RadiogroupComponent = ({
  options = [],
  defaultValue = options[0]?.value || '',
  variant = 'default',
  className = '',
  ariaLabel = 'Options',
  ...props
}) => {
  return (
    <form>
      <RadioGroup.Root
        className={classNames(
          'flex flex-col gap-2.5',
          getStyle(variant, 'root'),
          className
        )}
        defaultValue={defaultValue}
        aria-label={ariaLabel}
        {...props}
      >
        {options.map((option, index) => {
          const uniqueId = `radio-${variant}-${option.value}`;
          return (
            <div
              key={option.value}
              className={classNames(
                'flex items-center',
                getStyle(variant, 'itemContainer')
              )}
            >
              <RadioGroup.Item
                className={classNames(
                  'size-[25px] cursor-default rounded-full outline-none',
                  getStyle(variant, 'radioItem')
                )}
                value={option.value}
                id={uniqueId}
              >
                <RadioGroup.Indicator
                  className={classNames(
                    'relative flex size-full items-center justify-center after:block after:rounded-full',
                    getStyle(variant, 'indicator')
                  )}
                />
              </RadioGroup.Item>
              <label
                className={classNames(
                  'pl-[15px] text-[15px] leading-none',
                  getStyle(variant, 'label')
                )}
                htmlFor={uniqueId}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </RadioGroup.Root>
    </form>
  );
};

export default RadiogroupComponent;
