import * as React from 'react';
import classNames from 'classnames';
import { AlertDialog } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400","overlay":"bg-black/50 backdrop-blur-sm","content":"bg-white border border-gray-200","title":"text-gray-900","description":"text-gray-500","cancel":"bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400","action":"bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-600"},"description":"Default AlertDialog variant."},"wizardofoz":{"root":"font-serif","elements":{"trigger":"bg-yellow-400 text-emerald-800 hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-600 rounded-full px-6 py-2 font-semibold shadow-md","overlay":"bg-emerald-900/60 backdrop-blur-sm animate-in fade-in","content":"bg-gradient-to-br from-emerald-100 to-emerald-200 border-4 border-emerald-600 rounded-xl shadow-xl p-6 max-w-md w-full mx-auto animate-in zoom-in-95 slide-in-from-bottom-10","title":"text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800 text-2xl font-bold mb-2 text-center","description":"bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent text-center mb-6 font-medium","cancel":"bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 focus:ring-2 focus:ring-red-400 rounded-full px-5 py-2 font-medium shadow-md transition-all duration-300 border-2 border-white","action":"bg-yellow-400 text-emerald-800 hover:bg-yellow-500 focus:ring-2 focus:ring-yellow-600 rounded-full px-5 py-2 font-semibold shadow-md transition-colors"},"description":"A whimsical Wizard of Oz themed alert dialog with emerald city colors and yellow brick road accents"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const AlertdialogComponent = ({
  variant = 'default',
  className = '',
  triggerText = 'Delete account',
  title = 'Are you absolutely sure?',
  description = 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
  cancelText = 'Cancel',
  actionText = 'Yes, delete account',
  onAction,
  ...props
}) => {
  return (
    <AlertDialog.Root {...props}>
      <AlertDialog.Trigger asChild>
        <button
          className={classNames(
            'inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none outline-none outline-offset-1 select-none',
            getStyle(variant, 'trigger'),
            className
          )}
        >
          {triggerText}
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          className={classNames(
            'fixed inset-0 data-[state=open]:animate-overlayShow',
            getStyle(variant, 'overlay')
          )}
        />
        <AlertDialog.Content
          className={classNames(
            'fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-sm focus:outline-none data-[state=open]:animate-contentShow',
            getStyle(variant, 'content'),
            className
          )}
        >
          <AlertDialog.Title
            className={classNames(
              'm-0 text-[17px] font-medium',
              getStyle(variant, 'title')
            )}
          >
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description
            className={classNames(
              'mb-5 mt-[15px] text-[15px] leading-normal',
              getStyle(variant, 'description')
            )}
          >
            {description}
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Cancel asChild>
              <button
                className={classNames(
                  'inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none outline-none outline-offset-1 select-none',
                  getStyle(variant, 'cancel')
                )}
              >
                {cancelText}
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className={classNames(
                  'inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none outline-none outline-offset-1 select-none',
                  getStyle(variant, 'action')
                )}
                onClick={onAction}
              >
                {actionText}
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default AlertdialogComponent;
