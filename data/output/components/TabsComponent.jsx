import * as React from 'react';
import classNames from 'classnames';
import { Tabs as TabsPrimitive } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-[400px]","elements":{"list":"flex shrink-0 border-b border-gray-200","trigger":"bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-500 select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-blue-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default","content":"grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"},"description":"Default tabs variant."},"ocean":{"root":"w-[400px]","elements":{"list":"inline-flex h-10 items-center justify-center rounded-md bg-oceanfoam/20 p-1","trigger":"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-deepocean data-[state=active]:text-white data-[state=active]:shadow-sm"},"description":"Ocean-themed tabs with subtle gradients and animations"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const TabsComponent = ({
  tabs = [], // Expects array: [{ value: string, label: string, content: React.ReactNode }]
  defaultValue,
  variant = 'default', // Used by generator for style lookup
  className = '',
  ...props
}) => {
  return (
    <TabsPrimitive.Root
      className={classNames(getStyle(variant, 'root'), className)}
      // Set default value intelligently if not provided
      defaultValue={
        defaultValue || (tabs.length > 0 ? tabs[0].value : undefined)
      }
      {...props}
    >
      <TabsPrimitive.List
        className={classNames(
          'shrink-0 flex border-b',
          getStyle(variant, 'list')
        )}
        aria-label={props['aria-label'] || 'Manage your options'} // Provide a sensible default aria-label
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            className={classNames(
              'flex h-[45px] flex-1 cursor-default select-none items-center justify-center px-5 text-[15px] leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current',
              getStyle(variant, 'trigger')
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
            getStyle(variant, 'content')
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
