// ModalComponent.js (Simplified for always-present footer buttons, using classNames directly)

import React from 'react';
import classNames from 'classnames';
import { Dialog } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700","elements":{"overlay":"bg-black/50 dark:bg-black/70","title":"text-gray-900 dark:text-white font-bold","description":"text-gray-600 dark:text-gray-300","content":"text-gray-700 dark:text-gray-200","footer":"border-t border-gray-200 dark:border-gray-700","close":"text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition-colors","root":"bg-white dark:bg-slate-800 shadow-xl border border-gray-200 dark:border-gray-700 rounded-lg","primaryButton":"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors","secondaryButton":"bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors"},"description":"Default modal variant."},"fancy":{"root":"bg-gradient-to-b from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/20 shadow-2xl border-t-4 border-orange-400 rounded-xl overflow-hidden","elements":{"overlay":"bg-orange-900/40 backdrop-blur-sm","title":"text-amber-900 dark:text-amber-200 font-bold text-2xl pb-2 border-b border-amber-200 dark:border-amber-800/50 mb-4","description":"text-amber-700 dark:text-amber-300/80 italic","content":"text-amber-800 dark:text-amber-100 leading-relaxed","footer":"border-t border-amber-200 dark:border-amber-800/30 bg-gradient-to-r from-amber-100/80 to-orange-100/80 dark:from-amber-900/20 dark:to-orange-900/30 py-3 px-4 -mx-6 -mb-6 mt-6 rounded-b-xl","close":"text-amber-600 hover:bg-amber-100 hover:text-amber-800 dark:text-amber-400 dark:hover:bg-amber-800/40 dark:hover:text-amber-200 rounded-full transition-all duration-200 p-1.5 bg-white/80 dark:bg-amber-950/50 backdrop-blur-sm","primaryButton":"bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium shadow-sm transition-colors","secondaryButton":"bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-md font-medium transition-colors"},"description":"Modal with a primary color accent at the top"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */
 // Assumes getStyle is available here

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
