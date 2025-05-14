import * as React from 'react';
import { Toast } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]","elements":{"title":"mb-[5px] text-[15px] font-medium text-gray-800 dark:text-gray-100 [grid-area:_title]","description":"m-0 text-[13px] leading-[1.3] text-gray-600 dark:text-gray-300 [grid-area:_description]","action":"inline-flex h-[25px] items-center justify-center rounded px-2.5 text-xs font-medium leading-[25px] bg-blue-600 hover:bg-blue-700 text-white [grid-area:_action]","close":"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600","closeIcon":"size-4","trigger":"inline-flex items-center justify-center rounded px-[15px] text-[15px] font-medium leading-[35px] outline-none bg-blue-100 text-blue-700 hover:bg-blue-200","viewport":"fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]"},"description":"Default toast variant."},"destructive":{"root":"grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out] destructive border-destructive bg-destructive text-destructive-foreground","elements":{},"description":"Destructive toast variant."},"ocean":{"root":"grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out] grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800/50 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]","elements":{"title":"mb-[5px] text-[15px] font-medium text-cyan-800 dark:text-cyan-200 [grid-area:_title]","description":"m-0 text-[13px] leading-[1.3] text-cyan-600 dark:text-cyan-300 [grid-area:_description]","action":"inline-flex h-[25px] items-center justify-center rounded px-2.5 text-xs font-medium leading-[25px] bg-cyan-600 hover:bg-cyan-700 text-white [grid-area:_action]","trigger":"inline-flex items-center justify-center rounded px-[15px] text-[15px] font-medium leading-[35px] outline-none bg-cyan-100 text-cyan-700 hover:bg-cyan-200"},"description":"Ocean-themed toast notification with subtle border and animations"},"champagne":{"root":"grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out] grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-lg bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/40 dark:to-yellow-900/30 border border-amber-200 dark:border-amber-800/60 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]","elements":{"title":"mb-[5px] text-[15px] font-medium text-amber-800 dark:text-amber-200 [grid-area:_title]","description":"m-0 text-[13px] leading-[1.3] text-amber-600 dark:text-amber-300 [grid-area:_description]","action":"inline-flex h-[25px] items-center justify-center rounded px-2.5 text-xs font-medium leading-[25px] bg-amber-600 hover:bg-amber-700 text-white [grid-area:_action]","trigger":"inline-flex items-center justify-center rounded px-[15px] text-[15px] font-medium leading-[35px] outline-none bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 hover:from-amber-200 hover:to-yellow-200 border border-amber-200"},"description":"Elegant celebratory toast with golden champagne theme"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const ToastComponent = ({
  variant = 'default',
  className = '',
  title = 'Notification',
  description = '',
  actionText = 'Dismiss',
  actionAltText = 'Dismiss notification',
  triggerText = 'Show Toast',
  onAction,
  swipeDirection = 'right',
  duration = 5000,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleTriggerClick = () => {
    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      eventDateRef.current = new Date();
      setOpen(true);
    }, 100);
  };

  return (
    <Toast.Provider swipeDirection={swipeDirection}>
      <button
        className={classNames(
          'inline-flex items-center justify-center rounded px-[15px] text-[15px] font-medium leading-[35px] outline-none',
          getStyle(variant, 'trigger'),
          className
        )}
        onClick={handleTriggerClick}
      >
        {triggerText}
      </button>

      <Toast.Root
        className={classNames(
          "grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
          getStyle(variant, 'root'),
          className
        )}
        open={open}
        onOpenChange={setOpen}
        duration={duration}
        {...props}
      >
        <Toast.Title
          className={classNames(
            'mb-[5px] text-[15px] font-medium [grid-area:_title]',
            getStyle(variant, 'title')
          )}
        >
          {title}
        </Toast.Title>
        <Toast.Description
          className={classNames(
            'm-0 text-[13px] leading-[1.3] [grid-area:_description]',
            getStyle(variant, 'description')
          )}
        >
          {description || prettyDate(eventDateRef.current)}
        </Toast.Description>
        <Toast.Action
          className="[grid-area:_action]"
          asChild
          altText={actionAltText}
        >
          <button
            className={classNames(
              'inline-flex h-[25px] items-center justify-center rounded px-2.5 text-xs font-medium leading-[25px]',
              getStyle(variant, 'action')
            )}
            onClick={onAction}
          >
            {actionText}
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport
        className={classNames(
          'fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]',
          getStyle(variant, 'viewport')
        )}
      />
    </Toast.Provider>
  );
};

function prettyDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date);
}

export default ToastComponent;
