import * as React from 'react';
import classNames from 'classnames';
import { Dialog } from 'radix-ui';
import { Cross2Icon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-full max-w-md","elements":{"trigger":"bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-4 py-2 font-medium","overlay":"bg-black/50 backdrop-blur-sm","content":"bg-white border border-gray-200 rounded-lg shadow-lg p-6","title":"text-gray-900 text-lg font-semibold mb-2","description":"text-gray-500 text-sm mb-4","label":"text-gray-700 text-sm font-medium mb-1","input":"border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white","saveButton":"bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-4 py-2 font-medium","closeButton":"hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 rounded-full p-1","closeIcon":"h-4 w-4 text-gray-500"},"description":"Default dialog variant with solid background and normalized styling."},"midnight":{"root":"w-full max-w-md","elements":{"trigger":"bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-4 py-2 font-medium transition-colors duration-200","overlay":"bg-black/70 backdrop-blur-sm","content":"bg-opacity-100 bg-gray-900 border border-indigo-800 rounded-lg shadow-lg p-6 text-gray-100","title":"text-indigo-300 text-lg font-semibold mb-2","description":"text-gray-400 text-sm mb-4","label":"text-gray-300 text-sm font-medium mb-1","input":"border border-gray-700 rounded-md px-3 py-2 w-full focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-gray-800 text-gray-200","saveButton":"bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md px-4 py-2 font-medium transition-colors duration-200","closeButton":"hover:bg-gray-800 focus:ring-2 focus:ring-indigo-500 rounded-full p-1 transition-colors duration-200","closeIcon":"h-4 w-4 text-gray-400 hover:text-gray-200"},"description":"An elegant midnight-themed dialog with deep blues and subtle purple accents."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const DialogComponent = ({
  variant = 'default',
  className = '',
  triggerText = 'Edit profile',
  title = 'Edit profile',
  description = "Make changes to your profile here. Click save when you're done.",
  saveButtonText = 'Save changes',
  fields = [
    { id: 'name', label: 'Name', defaultValue: 'Pedro Duarte' },
    { id: 'username', label: 'Username', defaultValue: '@peduarte' },
  ],
  children,
  ...props
}) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger asChild>
        <button
          className={classNames(
            'inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none outline-none outline-offset-1 select-none',
            getStyle(variant, 'trigger')
          )}
        >
          {triggerText}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={classNames(
            'fixed inset-0 data-[state=open]:animate-overlayShow',
            getStyle(variant, 'overlay')
          )}
        />
        <Dialog.Content
          className={classNames(
            'fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-sm focus:outline-none data-[state=open]:animate-contentShow',
            getStyle(variant, 'content'),
            className
          )}
        >
          <Dialog.Title
            className={classNames(
              'm-0 text-[17px] font-medium',
              getStyle(variant, 'title')
            )}
          >
            {title}
          </Dialog.Title>
          <Dialog.Description
            className={classNames(
              'mb-5 mt-2.5 text-[15px] leading-normal',
              getStyle(variant, 'description')
            )}
          >
            {description}
          </Dialog.Description>

          {fields.map((field) => (
            <fieldset
              key={field.id}
              className="mb-[15px] flex items-center gap-5"
            >
              <label
                className={classNames(
                  'w-[90px] text-right text-[15px]',
                  getStyle(variant, 'label')
                )}
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                className={classNames(
                  'inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none outline-none',
                  getStyle(variant, 'input')
                )}
                id={field.id}
                defaultValue={field.defaultValue}
              />
            </fieldset>
          ))}

          {children}

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                className={classNames(
                  'inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none outline-none outline-offset-1 select-none',
                  getStyle(variant, 'saveButton')
                )}
              >
                {saveButtonText}
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className={classNames(
                'absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full',
                getStyle(variant, 'closeButton')
              )}
              aria-label="Close"
            >
              <Cross2Icon className={getStyle(variant, 'closeIcon')} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogComponent;
