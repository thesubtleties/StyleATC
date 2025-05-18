import * as React from 'react';
import classNames from 'classnames';
import { Collapsible } from 'radix-ui';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-full rounded-md border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-850 shadow-sm","elements":{"header":"flex items-center justify-between py-2 px-3","title":"font-medium text-gray-900 dark:text-gray-800","trigger":"rounded p-1 hover:bg-gray-200/30 dark:hover:bg-gray-700/30 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus:ring-0 !outline-none !ring-0 transition-colors","icon":"h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-200","item":"bg-white dark:bg-gray-800 rounded-md my-1.5 p-3 shadow-sm border border-gray-100 dark:border-gray-700","itemText":"text-gray-600 dark:text-gray-300","content":"data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden transition-all ease-in-out duration-200"},"description":"A clean, modern collapsible component with softer colors and subtle shadows."},"classy":{"root":"w-full rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm","elements":{"header":"flex items-center justify-between py-2 border-b border-gray-200 mb-2","title":"font-medium text-gray-700 tracking-wide","trigger":"bg-gray-100 hover:bg-gray-200 focus:shadow-gray-300 transition-colors duration-200","icon":"h-4 w-4 text-gray-500","item":"bg-white border border-gray-100 shadow-sm","itemText":"text-gray-600","content":"data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden transition-all"},"description":"A classy, minimalist collapsible with subtle colors and elegant styling."},"fresh":{"root":"w-full rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm","elements":{"header":"flex items-center justify-between py-2 border-b border-green-200 mb-2","title":"font-medium text-emerald-700 tracking-wide","trigger":"bg-emerald-100 hover:bg-emerald-200 focus:shadow-emerald-300 transition-colors duration-200","icon":"h-4 w-4 text-emerald-600","item":"bg-white border border-green-100 shadow-sm","itemText":"text-emerald-600","content":"data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden transition-all"},"description":"A fresh, organic-inspired collapsible that feels welcoming and natural."},"macos":{"root":"w-full rounded-lg bg-gradient-to-b from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-sm p-3","elements":{"header":"flex items-center justify-between py-2 px-1","title":"font-medium text-gray-800 dark:text-gray-200","trigger":"rounded-full p-1 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 transition-colors","icon":"h-4 w-4 text-gray-300 dark:text-gray-300 transition-transform duration-200","item":"bg-white dark:bg-zinc-800 rounded-md my-1.5 p-3 shadow-sm border border-gray-100 dark:border-zinc-700","itemText":"text-gray-700 dark:text-gray-300 text-sm","content":"data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden transition-all ease-in-out duration-200"},"description":"A collapsible component styled after macOS interface elements, featuring a clean, minimal design with subtle gradients and shadows."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const CollapsibleComponent = ({
  variant = 'default',
  className = '',
  title = '@peduarte starred 3 repositories',
  items = [],
  defaultOpen = false,
  ...props
}) => {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <Collapsible.Root
      className={classNames('w-full', getStyle(variant, 'root'), className)}
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <div
        className={classNames(
          'flex items-center justify-between',
          getStyle(variant, 'header')
        )}
      >
        <span
          className={classNames(
            'text-[15px] leading-[25px]',
            getStyle(variant, 'title')
          )}
        >
          {title}
        </span>
        <Collapsible.Trigger asChild>
          <button
            className={classNames(
              'inline-flex size-[25px] items-center justify-center rounded-full outline-none hover:bg-opacity-80 focus:shadow-[0_0_0_2px]',
              getStyle(variant, 'trigger')
            )}
          >
            {open ? (
              <Cross2Icon className={getStyle(variant, 'icon')} />
            ) : (
              <RowSpacingIcon className={getStyle(variant, 'icon')} />
            )}
          </button>
        </Collapsible.Trigger>
      </div>

      <div
        className={classNames(
          'my-2.5 rounded p-2.5',
          getStyle(variant, 'item')
        )}
      >
        <span
          className={classNames(
            'text-[15px] leading-[25px]',
            getStyle(variant, 'itemText')
          )}
        >
          {items[0]?.content || '@radix-ui/primitives'}
        </span>
      </div>

      <Collapsible.Content className={getStyle(variant, 'content')}>
        {items.slice(1).map((item, index) => (
          <div
            key={index}
            className={classNames(
              'my-2.5 rounded p-2.5',
              getStyle(variant, 'item')
            )}
          >
            <span
              className={classNames(
                'text-[15px] leading-[25px]',
                getStyle(variant, 'itemText')
              )}
            >
              {item.content}
            </span>
          </div>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default CollapsibleComponent;
