import * as React from 'react';
import classNames from 'classnames';
import { Popover } from 'radix-ui';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"h-10 w-10 bg-white shadow-md dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:shadow-[0_0_0_2px] focus:shadow-gray-400 dark:focus:shadow-gray-500","content":"bg-white dark:bg-gray-800 shadow-[0_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0_10px_20px_-15px_rgba(22,_23,_24,_0.2)] dark:shadow-[0_10px_38px_-10px_rgba(0,_0,_0,_0.7),_0_10px_20px_-15px_rgba(0,_0,_0,_0.6)] focus:shadow-[0_0_0_2px] focus:shadow-gray-400 dark:focus:shadow-gray-500 border-2 border-white dark:border-gray-700 outline outline-1 outline-gray-200 dark:outline-gray-600 transform-gpu data-[state=open]:animate-[contentShow_300ms_ease-out] data-[state=closed]:animate-[contentHide_200ms_ease-in]","contentInner":"max-w-[300px] text-gray-700 dark:text-gray-200","title":"text-gray-900 dark:text-white font-semibold","close":"h-[25px] w-[25px] hover:bg-gray-200 dark:hover:bg-gray-700 focus:shadow-[0_0_0_2px] focus:shadow-gray-400 dark:focus:shadow-gray-600","closeIcon":"h-4 w-4 text-gray-500 dark:text-gray-400","arrow":"fill-white dark:fill-gray-800 stroke-1 stroke-gray-200 dark:stroke-gray-600","label":"text-gray-800 dark:text-gray-300 font-medium","input":"bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"},"description":"Default popover variant. Can be adapted for context menus."},"royalblue":{"root":"","elements":{"trigger":"h-10 w-10 bg-blue-900 text-amber-300 shadow-md hover:bg-blue-800 focus:shadow-[0_0_0_2px] focus:shadow-amber-500/50","content":"bg-blue-900 border border-amber-500/20 shadow-[0_10px_38px_-10px_rgba(0,0,0,0.6),_0_10px_20px_-15px_rgba(0,0,0,0.5)] focus:shadow-[0_0_0_2px] focus:shadow-amber-500/40 transform-gpu data-[state=open]:animate-[contentShow_300ms_ease-out] data-[state=closed]:animate-[contentHide_200ms_ease-in]","contentInner":"max-w-[300px] text-blue-100","title":"text-amber-400 font-semibold","close":"h-[25px] w-[25px] hover:bg-blue-800 focus:shadow-[0_0_0_2px] focus:shadow-amber-500/40","closeIcon":"h-4 w-4 text-amber-300","arrow":"fill-blue-900 stroke-amber-500/20","label":"text-blue-100","input":"bg-blue-800 border border-blue-700 text-blue-100 shadow-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50"},"description":"Elegant popover with rich dark blue background and gold accents."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


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
