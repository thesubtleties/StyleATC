// ModalComponent.js (Simplified for always-present footer buttons, using classNames directly)

import React from 'react';
import classNames from 'classnames';
import { Dialog } from 'radix-ui';

/* INJECT_VARIANT_STYLING_LOGIC */ // Assumes getStyle is available here

const ModalComponent = ({
  trigger,
  title,
  description,
  children,
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

  // Define the base button classes that apply to all buttons
  //   const baseButtonClasses = 'px-4 py-2 rounded';

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
          {/* Title */}
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

          {/* Description */}
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

          {/* Main Content */}
          <div className={classNames('mb-6', getStyle(variant, 'content'))}>
            {children}
          </div>

          {/* Footer with always-present buttons */}
          <div
            className={classNames(
              'flex justify-end space-x-2 pt-4',
              getStyle(variant, 'footer') // Style the footer div itself
            )}
          >
            {/* Cancel Button */}
            <Dialog.Close asChild>
              <button
                className={classNames(
                  getStyle(variant, 'secondaryButton') // Variant-specific secondary style
                )}
                // Add onClick={onCancel} if you re-introduce the prop
              >
                Cancel {/* Use cancelText if you re-introduce the prop */}
              </button>
            </Dialog.Close>

            {/* Confirm Button */}
            <Dialog.Close asChild>
              <button
                className={classNames(getStyle(variant, 'primaryButton'))}
              >
                Confirm {/* Use confirmText if you re-introduce the prop */}
              </button>
            </Dialog.Close>
          </div>

          {/* Close Button */}
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
