import * as React from 'react';
import classNames from 'classnames';
import { Popover } from 'radix-ui';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';

/* INJECT_VARIANT_STYLING_LOGIC */

const PopoverComponent = ({
  variant = 'default',
  className = '',
  triggerIcon = <MixerHorizontalIcon />,
  triggerAriaLabel = 'Open popover',
  closeAriaLabel = 'Close',
  title = 'Popover Title',
  children,
  ...props
}) => {
  return (
    <Popover.Root {...props}>
      <Popover.Trigger asChild>
        <button
          className={classNames(
            'inline-flex items-center justify-center rounded-full outline-none',
            getStyle(variant, 'trigger'),
            className
          )}
          aria-label={triggerAriaLabel}
        >
          {triggerIcon}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={classNames(
            'rounded p-5 will-change-[transform,opacity]',
            getStyle(variant, 'content'),
            'data-[state=open]:data-[side=bottom]:animate-slideUpAndFade',
            'data-[state=open]:data-[side=left]:animate-slideRightAndFade',
            'data-[state=open]:data-[side=right]:animate-slideLeftAndFade',
            'data-[state=open]:data-[side=top]:animate-slideDownAndFade'
          )}
          sideOffset={5}
        >
          <div
            className={classNames(
              'flex flex-col gap-2.5',
              getStyle(variant, 'contentInner')
            )}
          >
            {title && (
              <p
                className={classNames(
                  'mb-2.5 text-[15px] font-medium leading-[19px]',
                  getStyle(variant, 'title')
                )}
              >
                {title}
              </p>
            )}
            {children}
          </div>
          <Popover.Close
            className={classNames(
              'absolute right-[5px] top-[5px] inline-flex items-center justify-center rounded-full outline-none',
              getStyle(variant, 'close')
            )}
            aria-label={closeAriaLabel}
          >
            <Cross2Icon className={getStyle(variant, 'closeIcon')} />
          </Popover.Close>
          <Popover.Arrow className={getStyle(variant, 'arrow')} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

// Example form fields component that can be used as children
export const PopoverFormFields = ({ fields = [] }) => (
  <>
    {fields.map((field, index) => (
      <fieldset key={index} className="flex items-center gap-5">
        <label
          className={classNames(
            'w-[75px] text-[13px]'
            // getStyle(variant, 'label')
          )}
          htmlFor={field.id}
        >
          {field.label}
        </label>
        <input
          className={classNames(
            'inline-flex h-[25px] w-full flex-1 items-center justify-center rounded px-2.5 text-[13px] leading-none outline-none'
            // getStyle('input')
          )}
          id={field.id}
          defaultValue={field.defaultValue}
        />
      </fieldset>
    ))}
  </>
);

export default PopoverComponent;
