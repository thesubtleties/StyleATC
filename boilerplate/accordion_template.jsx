import * as React from 'react';
import classNames from 'classnames';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { ChevronDownIcon } from '@radix-ui/react-icons';

// Main component that accepts variant prop

/* INJECT_VARIANT_STYLING_LOGIC */
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
