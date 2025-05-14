import * as React from 'react';
import classNames from 'classnames';
import { Collapsible } from 'radix-ui';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-full rounded-md border p-4","elements":{"header":"flex items-center justify-between py-2","title":"font-medium","trigger":"bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 focus:shadow-slate-200 dark:focus:shadow-slate-800","icon":"h-4 w-4 text-slate-500","item":"bg-slate-100 dark:bg-slate-800","itemText":"text-slate-700 dark:text-slate-300","content":"data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden transition-all"},"description":"Default collapsible variant."},"classy":{"root":"w-full rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm","elements":{"header":"flex items-center justify-between py-2 border-b border-gray-200 mb-2","title":"font-medium text-gray-700 tracking-wide","trigger":"bg-gray-100 hover:bg-gray-200 focus:shadow-gray-300 transition-colors duration-200","icon":"h-4 w-4 text-gray-500","item":"bg-white border border-gray-100 shadow-sm","itemText":"text-gray-600","content":"data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden transition-all"},"description":"A classy, minimalist collapsible with subtle colors and elegant styling."},"fresh":{"root":"w-full rounded-lg border border-green-100 bg-green-50 p-4 shadow-sm","elements":{"header":"flex items-center justify-between py-2 border-b border-green-200 mb-2","title":"font-medium text-emerald-700 tracking-wide","trigger":"bg-emerald-100 hover:bg-emerald-200 focus:shadow-emerald-300 transition-colors duration-200","icon":"h-4 w-4 text-emerald-600","item":"bg-white border border-green-100 shadow-sm","itemText":"text-emerald-600","content":"data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden transition-all"},"description":"A fresh, organic-inspired collapsible that feels welcoming and natural."}}');
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
              <Cross2Icon className={getStyle('icon')} />
            ) : (
              <RowSpacingIcon className={getStyle('icon')} />
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
