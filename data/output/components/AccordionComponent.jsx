import * as React from 'react';
import classNames from 'classnames';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { ChevronDownIcon } from '@radix-ui/react-icons';

// Main component that accepts variant prop


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5 bg-white","elements":{"item":"mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-black/10","trigger":"group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 text-[15px] leading-none shadow-[0_1px_0] shadow-black/10 outline-none hover:bg-opacity-80 bg-white","icon":"text-gray-500 h-4 w-4","content":"overflow-hidden text-[15px] data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown bg-white text-gray-700"},"description":"Default accordion variant."},"ocean":{"root":"w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5 bg-white w-full rounded-md bg-gradient-to-r from-blue-50 to-cyan-50 shadow-md","elements":{"item":"border-b border-blue-200/50 last:border-0 transition-all duration-300","trigger":"flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-cyan-600 [&[data-state=open]]:text-blue-600","content":"pt-0 pb-4 text-blue-800/80 animate-in slide-in-from-top-1 duration-300"},"description":"Ocean-themed accordion with subtle gradients and smooth animations"},"modern":{"root":"w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5 bg-white w-full max-w-md rounded-lg bg-white dark:bg-slate-900 shadow-lg","elements":{"item":"mb-2 overflow-hidden rounded-md border border-slate-200 dark:border-slate-700 last:mb-0 transition-all duration-200","trigger":"flex w-full items-center justify-between px-4 py-3 text-base font-medium text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1","icon":"h-5 w-5 text-blue-500 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180","content":"overflow-hidden px-4 pb-4 pt-0 text-sm text-slate-700 dark:text-slate-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"},"description":"A sleek, modern accordion with smooth transitions and contemporary styling"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */

const AccordionComponent = ({
  items = [],
  variant = 'default',
  className = '',
  ...props
}) => {
  return (
    <AccordionPrimitive.Root
      className={classNames(
        'w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5',
        getStyle(variant, 'root'),
        className
      )}
      type="single"
      defaultValue="item-1"
      collapsible
      {...props}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={`item-${index + 1}`}
          value={`item-${index + 1}`}
          variant={variant}
        >
          <AccordionTrigger variant={variant}>{item.trigger}</AccordionTrigger>
          <AccordionContent variant={variant}>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionPrimitive.Root>
  );
};

// Sub-components
const AccordionItem = React.forwardRef(
  ({ children, className, variant, ...props }, forwardedRef) => (
    <AccordionPrimitive.Item
      className={classNames(
        'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
        getStyle(variant, 'item'),
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </AccordionPrimitive.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, variant, ...props }, forwardedRef) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={classNames(
          'group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none hover:bg-opacity-80',
          getStyle(variant, 'trigger'),
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className={classNames(
            'transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180',
            getStyle(variant, 'icon')
          )}
          aria-hidden
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, variant, ...props }, forwardedRef) => (
    <AccordionPrimitive.Content
      className={classNames(
        'overflow-hidden text-[15px] data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
        getStyle(variant, 'content'),
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="px-5 py-[15px]">{children}</div>
    </AccordionPrimitive.Content>
  )
);

export default AccordionComponent;
