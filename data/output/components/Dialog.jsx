import * as React from 'react';
import classNames from 'classnames';
import { Dialog } from 'radix-ui';
import { Cross2Icon } from '@radix-ui/react-icons';

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
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary","overlay":"bg-black/50 backdrop-blur-sm","content":"bg-background border border-border","title":"text-foreground","description":"text-muted-foreground","label":"text-foreground","input":"border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary","saveButton":"bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary","closeButton":"hover:bg-muted focus:ring-2 focus:ring-primary","closeIcon":"h-4 w-4 text-foreground"},"description":"Default dialog variant."}}');
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
    <Dialog.Root {...props}>
      <Dialog.Trigger asChild>
        <button
          className={classNames(
            'inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none outline-none outline-offset-1 select-none',
            getStyle('trigger')
          )}
        >
          {triggerText}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={classNames(
            'fixed inset-0 data-[state=open]:animate-overlayShow',
            getStyle('overlay')
          )}
        />
        <Dialog.Content
          className={classNames(
            'fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-sm focus:outline-none data-[state=open]:animate-contentShow',
            getStyle('root'),
            className
          )}
        >
          <Dialog.Title
            className={classNames(
              'm-0 text-[17px] font-medium',
              getStyle('title')
            )}
          >
            {title}
          </Dialog.Title>
          <Dialog.Description
            className={classNames(
              'mb-5 mt-2.5 text-[15px] leading-normal',
              getStyle('description')
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
                  getStyle('label')
                )}
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                className={classNames(
                  'inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none outline-none',
                  getStyle('input')
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
                  getStyle('saveButton')
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
                getStyle('closeButton')
              )}
              aria-label="Close"
            >
              <Cross2Icon className={getStyle('closeIcon')} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogComponent;
