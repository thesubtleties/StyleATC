import * as React from 'react';
import { Toast } from 'radix-ui';
import classNames from 'classnames';

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
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-white border border-gray-200 rounded-lg shadow-md","elements":{"trigger":"bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50","title":"text-gray-900 dark:text-gray-100","description":"text-gray-500 dark:text-gray-400","action":"bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100","viewport":"sm:max-w-[420px]"},"description":"Default toast variant."}}');
const getStyle = (elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


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
          getStyle('trigger'),
          className
        )}
        onClick={handleTriggerClick}
      >
        {triggerText}
      </button>

      <Toast.Root
        className={classNames(
          "grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
          getStyle('root'),
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
            getStyle('title')
          )}
        >
          {title}
        </Toast.Title>
        <Toast.Description
          className={classNames(
            'm-0 text-[13px] leading-[1.3] [grid-area:_description]',
            getStyle('description')
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
              getStyle('action')
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
          getStyle('viewport')
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
