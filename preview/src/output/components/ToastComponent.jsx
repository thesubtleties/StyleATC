import * as React from 'react';
import { Toast } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]","elements":{"title":"mb-[5px] text-[15px] font-medium text-gray-800 dark:text-gray-100 [grid-area:_title]","description":"m-0 text-[13px] leading-[1.3] text-gray-600 dark:text-gray-300 [grid-area:_description]","action":"inline-flex h-[25px] items-center justify-center rounded px-2.5 text-xs font-medium leading-[25px] bg-blue-600 hover:bg-blue-700 text-white [grid-area:_action]","close":"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600","closeIcon":"size-4","trigger":"inline-flex items-center justify-center rounded px-[15px] text-[15px] font-medium leading-[35px] outline-none bg-blue-100 text-blue-700 hover:bg-blue-200","viewport":"fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]"},"description":"Default toast variant."},"ocean":{"root":"grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out] grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800/50 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]","elements":{"title":"mb-[5px] text-[15px] font-medium text-cyan-800 dark:text-cyan-200 [grid-area:_title]","description":"m-0 text-[13px] leading-[1.3] text-cyan-600 dark:text-cyan-300 [grid-area:_description]","action":"inline-flex h-[25px] items-center justify-center rounded px-2.5 text-xs font-medium leading-[25px] bg-cyan-600 hover:bg-cyan-700 text-white [grid-area:_action]","trigger":"inline-flex items-center justify-center rounded px-[15px] text-[15px] font-medium leading-[35px] outline-none bg-cyan-100 text-cyan-700 hover:bg-cyan-200"},"description":"Ocean-themed toast notification with subtle border and animations"},"champagne":{"root":"grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out] grid grid-cols-[auto_max-content] items-center gap-x-4 rounded-2xl p-6 shadow-2xl shadow-amber-900/20 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 border-2 border-amber-300/50 backdrop-blur-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-yellow-200/20 before:to-transparent before:animate-shimmer before:bg-[length:200%_100%] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-fadeOut data-[state=open]:animate-bounceIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]","elements":{"title":"mb-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 [grid-area:_title] relative z-10 tracking-wide","description":"m-0 text-sm leading-relaxed text-amber-700 [grid-area:_description] relative z-10 font-medium","action":"inline-flex h-8 items-center justify-center rounded-full px-4 text-sm font-bold leading-8 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 [grid-area:_action] relative z-10","trigger":"inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold leading-none outline-none bg-gradient-to-r from-amber-200 to-yellow-200 text-amber-800 hover:from-amber-300 hover:to-yellow-300 hover:text-amber-900 border-2 border-amber-300 shadow-lg hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer before:bg-[length:200%_100%]"},"description":"Luxurious champagne celebration toast with sparkling animations, golden gradients, premium shadows, and elegant champagne bubble effects"}}');
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
