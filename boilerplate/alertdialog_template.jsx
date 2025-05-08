import * as React from 'react';
import classNames from 'classnames';
import { AlertDialog } from 'radix-ui';

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
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <AlertDialog.Root {...props}>
      <AlertDialog.Trigger asChild>
        <button
          className={classNames(
            'inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none outline-none outline-offset-1 select-none',
            getStyle('trigger'),
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
            getStyle('overlay')
          )}
        />
        <AlertDialog.Content
          className={classNames(
            'fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md p-[25px] shadow-sm focus:outline-none data-[state=open]:animate-contentShow',
            getStyle('content'),
            className
          )}
        >
          <AlertDialog.Title
            className={classNames(
              'm-0 text-[17px] font-medium',
              getStyle('title')
            )}
          >
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description
            className={classNames(
              'mb-5 mt-[15px] text-[15px] leading-normal',
              getStyle('description')
            )}
          >
            {description}
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Cancel asChild>
              <button
                className={classNames(
                  'inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none outline-none outline-offset-1 select-none',
                  getStyle('cancel')
                )}
              >
                {cancelText}
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className={classNames(
                  'inline-flex h-[35px] items-center justify-center rounded px-[15px] font-medium leading-none outline-none outline-offset-1 select-none',
                  getStyle('action')
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
