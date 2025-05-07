import * as React from 'react';
import classNames from 'classnames';
import { Popover } from 'radix-ui';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';

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
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"h-10 w-10 bg-white shadow-md hover:bg-gray-100 focus:shadow-[0_0_0_2px] focus:shadow-black","content":"bg-white shadow-[0_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0_10px_20px_-15px_rgba(22,_23,_24,_0.2)] focus:shadow-[0_0_0_2px] focus:shadow-black","contentInner":"max-w-[300px]","title":"text-gray-900","close":"h-[25px] w-[25px] hover:bg-gray-200 focus:shadow-[0_0_0_2px] focus:shadow-black","closeIcon":"h-4 w-4 text-gray-500","arrow":"fill-white","label":"text-gray-700","input":"border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"},"description":"Default popover variant. Can be adapted for context menus."}}');
const getStyle = (elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


  return (
    <Popover.Root {...props}>
      <Popover.Trigger asChild>
        <button
          className={classNames(
            'inline-flex items-center justify-center rounded-full outline-none',
            getStyle('trigger'),
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
            getStyle('content'),
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
              getStyle('contentInner')
            )}
          >
            {title && (
              <p
                className={classNames(
                  'mb-2.5 text-[15px] font-medium leading-[19px]',
                  getStyle('title')
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
              getStyle('close')
            )}
            aria-label={closeAriaLabel}
          >
            <Cross2Icon className={getStyle('closeIcon')} />
          </Popover.Close>
          <Popover.Arrow className={getStyle('arrow')} />
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
          className={classNames('w-[75px] text-[13px]', getStyle('label'))}
          htmlFor={field.id}
        >
          {field.label}
        </label>
        <input
          className={classNames(
            'inline-flex h-[25px] w-full flex-1 items-center justify-center rounded px-2.5 text-[13px] leading-none outline-none',
            getStyle('input')
          )}
          id={field.id}
          defaultValue={field.defaultValue}
        />
      </fieldset>
    ))}
  </>
);

export default PopoverComponent;
