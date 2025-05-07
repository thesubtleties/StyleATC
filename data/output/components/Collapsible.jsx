import * as React from 'react';
import classNames from 'classnames';
import { Collapsible } from 'radix-ui';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';

const CollapsibleComponent = ({
  variant = 'default',
  className = '',
  title = '@peduarte starred 3 repositories',
  items = [],
  defaultOpen = false,
  ...props
}) => {
  const [open, setOpen] = React.useState(defaultOpen);
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-full rounded-md border p-4","elements":{"header":"flex items-center justify-between py-2","title":"font-medium","trigger":"bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 focus:shadow-slate-200 dark:focus:shadow-slate-800","icon":"h-4 w-4 text-slate-500","item":"bg-slate-100 dark:bg-slate-800","itemText":"text-slate-700 dark:text-slate-300","content":"data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden transition-all"},"description":"Default collapsible variant."}}');
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
    <Collapsible.Root
      className={classNames('w-full', getStyle('root'), className)}
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <div
        className={classNames(
          'flex items-center justify-between',
          getStyle('header')
        )}
      >
        <span
          className={classNames(
            'text-[15px] leading-[25px]',
            getStyle('title')
          )}
        >
          {title}
        </span>
        <Collapsible.Trigger asChild>
          <button
            className={classNames(
              'inline-flex size-[25px] items-center justify-center rounded-full outline-none hover:bg-opacity-80 focus:shadow-[0_0_0_2px]',
              getStyle('trigger')
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

      <div className={classNames('my-2.5 rounded p-2.5', getStyle('item'))}>
        <span
          className={classNames(
            'text-[15px] leading-[25px]',
            getStyle('itemText')
          )}
        >
          {items[0]?.content || '@radix-ui/primitives'}
        </span>
      </div>

      <Collapsible.Content className={getStyle('content')}>
        {items.slice(1).map((item, index) => (
          <div
            key={index}
            className={classNames('my-2.5 rounded p-2.5', getStyle('item'))}
          >
            <span
              className={classNames(
                'text-[15px] leading-[25px]',
                getStyle('itemText')
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
