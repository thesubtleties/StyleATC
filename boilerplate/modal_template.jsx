import React from 'react';
import classNames from 'classnames';
import { Dialog } from 'radix-ui';

/* INJECT_VARIANT_STYLING_LOGIC */

const ModalComponent = ({
  trigger,
  title,
  description,
  children,
  footer,
  size = 'default',
  variant = 'default',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    small: 'max-w-sm',
    default: 'max-w-md',
    large: 'max-w-2xl',
    fullWidth: 'max-w-4xl',
  };

  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={classNames(
            'fixed inset-0 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
            getStyle(variant, 'overlay')
          )}
        />
        <Dialog.Content
          className={classNames(
            `fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] ${sizeClasses[size]} translate-x-[-50%] translate-y-[-50%] rounded p-6 focus:outline-none data-[state=open]:animate-contentShow overflow-auto`,
            getStyle(variant, 'root'),
            className
          )}
        >
          {title && (
            <Dialog.Title
              className={classNames(
                'text-xl font-semibold mb-2',
                getStyle(variant, 'title')
              )}
            >
              {title}
            </Dialog.Title>
          )}

          {description && (
            <Dialog.Description
              className={classNames(
                'text-sm mb-5',
                getStyle(variant, 'description')
              )}
            >
              {description}
            </Dialog.Description>
          )}

          <div className={classNames('mb-6', getStyle(variant, 'content'))}>
            {children}
          </div>

          {footer && (
            <div
              className={classNames(
                'flex justify-end space-x-2 pt-4',
                getStyle(variant, 'footer')
              )}
            >
              {footer}
            </div>
          )}

          <Dialog.Close
            className={classNames(
              'absolute top-4 right-4 inline-flex items-center justify-center rounded-full p-1 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2',
              getStyle(variant, 'close')
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalComponent;
