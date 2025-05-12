import * as React from 'react';
import { Toast } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-swipe-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[swipe=end]:slide-out-to-right-full data-[swipe=start]:slide-out-to-left-full data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-top-full","elements":{"title":"text-sm font-semibold","description":"text-sm opacity-90","action":"inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive","close":"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600","closeIcon":"size-4"},"description":"Default toast variant."},"destructive":{"root":"group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-swipe-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[swipe=end]:slide-out-to-right-full data-[swipe=start]:slide-out-to-left-full data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-top-full destructive border-destructive bg-destructive text-destructive-foreground","elements":{},"description":"Destructive toast variant."},"ocean":{"root":"group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-swipe-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[swipe=end]:slide-out-to-right-full data-[swipe=start]:slide-out-to-left-full data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-top-full group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-primary/20 bg-white p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full","elements":{},"description":"Ocean-themed toast notification with subtle border and animations"}}');
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
