import * as React from 'react';
import classNames from 'classnames';
import { Tabs as TabsPrimitive } from 'radix-ui';

const TabsComponent = ({
  tabs = [], // Expects array: [{ value: string, label: string, content: React.ReactNode }]
  defaultValue,
  variant = 'default', // Used by generator for style lookup
  className = '',
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-full max-w-md rounded-md","elements":{"list":"border-b border-gray-200 bg-gray-50 rounded-t-md","trigger":"text-gray-500 hover:text-gray-700 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary","content":"bg-white p-4"},"description":"Default tabs variant."},"modern":{"root":"w-full max-w-md rounded-md w-full max-w-md rounded-md shadow-sm","elements":{"list":"flex border-b border-gray-200 bg-white rounded-t-md","trigger":"px-4 py-2 text-gray-500 hover:text-primary transition-colors data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary font-medium","content":"bg-white p-6 rounded-b-md"},"description":"Modern tabs with primary color accents"}}');
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
    <TabsPrimitive.Root
      className={classNames(getStyle('root'), className)}
      // Set default value intelligently if not provided
      defaultValue={
        defaultValue || (tabs.length > 0 ? tabs[0].value : undefined)
      }
      {...props}
    >
      <TabsPrimitive.List
        className={classNames('shrink-0 flex border-b', getStyle('list'))}
        aria-label={props['aria-label'] || 'Manage your options'} // Provide a sensible default aria-label
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            className={classNames(
              'flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current',
              getStyle('trigger')
            )}
            value={tab.value}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.value}
          className={classNames(
            'grow rounded-b-md p-5 outline-none',
            getStyle('content')
          )}
          value={tab.value}
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

// Export ONLY the main component as default
export default TabsComponent;
