import * as React from 'react';
import classNames from 'classnames';
import { AlertDialog } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400","overlay":"bg-black/50 backdrop-blur-sm","content":"bg-white border border-gray-200","title":"text-gray-900","description":"text-gray-500","cancel":"bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400","action":"bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-600"},"description":"Default AlertDialog variant."},"wizardofoz":{"root":"font-serif","elements":{"trigger":"bg-gradient-to-r from-yellow-400 to-amber-500 text-emerald-900 hover:from-yellow-500 hover:to-amber-600 focus:ring-2 focus:ring-yellow-600 rounded-full px-8 py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-yellow-600","overlay":"bg-emerald-900/70 backdrop-blur-sm animate-in fade-in duration-300","content":"flex flex-col bg-gradient-to-br from-emerald-50 to-emerald-100 border-4 border-emerald-600 rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-auto animate-in zoom-in-95 slide-in-from-bottom-5 duration-400 space-y-4","title":"text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800 text-3xl font-black mb-4 text-center tracking-wide","description":"bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent text-center mb-6 font-semibold text-lg","cancel":"w-full bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 focus:ring-2 focus:ring-red-400 rounded-full px-6 py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-red-700 text-center order-2","action":"w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-emerald-900 hover:from-yellow-500 hover:to-amber-600 focus:ring-2 focus:ring-yellow-600 rounded-full px-6 py-3 font-black shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-yellow-600 text-center order-1","buttonContainer":"flex flex-col gap-3 mt-6"},"description":"A magical Wizard of Oz themed alert dialog with emerald city glamour, yellow brick road sparkle, animated elements, and theatrical flair"}}');
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
