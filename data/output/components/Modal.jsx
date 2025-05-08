import React from 'react';
import classNames from 'classnames';
import { Dialog } from 'radix-ui';

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

  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700","elements":{"overlay":"bg-black/50 dark:bg-black/70","title":"text-gray-900 dark:text-gray-100","description":"text-gray-500 dark:text-gray-400","content":"text-gray-700 dark:text-gray-300","footer":"border-t border-gray-200 dark:border-gray-700","close":"text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-500 dark:hover:text-gray-400"},"description":"Default modal variant."},"rounded":{"root":"bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl","elements":{},"description":"Modal with rounded corners"},"colorful":{"root":"bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl border border-blue-200 dark:border-gray-700 rounded-lg overflow-hidden","elements":{"title":"text-white font-bold px-6 py-4 bg-gradient-to-r from-primary to-purple-700","content":"text-gray-700 dark:text-gray-300 p-6","close":"text-white hover:bg-purple-800/50 absolute top-3 right-3 rounded-full p-1"},"description":"Modal with a colorful header section"},"fancy":{"root":"bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl border-t-4 border-primary rounded-lg overflow-hidden","elements":{},"description":"Modal with a primary color accent at the top"},"ocean-modal":{"root":"bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl border border-primary/30 rounded-xl overflow-hidden","elements":{},"description":"A clean modal with subtle primary color accents and rounded corners"}}');
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
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={classNames(
            'fixed inset-0 backdrop-blur-sm data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
            getStyle('overlay')
          )}
        />
        <Dialog.Content
          className={classNames(
            `fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] ${sizeClasses[size]} translate-x-[-50%] translate-y-[-50%] rounded p-6 focus:outline-none data-[state=open]:animate-contentShow overflow-auto`,
            getStyle('root'),
            className
          )}
        >
          {title && (
            <Dialog.Title
              className={classNames(
                'text-xl font-semibold mb-2',
                getStyle('title')
              )}
            >
              {title}
            </Dialog.Title>
          )}

          {description && (
            <Dialog.Description
              className={classNames('text-sm mb-5', getStyle('description'))}
            >
              {description}
            </Dialog.Description>
          )}

          <div className={classNames('mb-6', getStyle('content'))}>
            {children}
          </div>

          {footer && (
            <div
              className={classNames(
                'flex justify-end space-x-2 pt-4',
                getStyle('footer')
              )}
            >
              {footer}
            </div>
          )}

          <Dialog.Close
            className={classNames(
              'absolute top-4 right-4 inline-flex items-center justify-center rounded-full p-1 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2',
              getStyle('close')
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
