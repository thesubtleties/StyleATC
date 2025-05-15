import * as React from 'react';
import classNames from 'classnames';
import { Tabs as TabsPrimitive } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-[400px]","elements":{"list":"flex shrink-0 border-b border-gray-200 bg-gray-50/50 rounded-t-lg px-2","trigger":"bg-white/80 px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-500 select-none first:rounded-tl-md last:rounded-tr-md hover:text-gray-700 transition-colors duration-200 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:font-medium data-[state=active]:shadow-[inset_0_-2px_0_0] data-[state=active]:shadow-blue-500 outline-none cursor-default","content":"grow p-5 bg-white rounded-b-md shadow-sm outline-none transition-all duration-200 ease-in-out"},"description":"A polished tabs variant with subtle shadows and transitions for a modern UI experience."},"ocean":{"root":"w-[400px] w-[400px] overflow-hidden rounded-lg shadow-md","elements":{"list":"flex h-12 items-center justify-center p-1 bg-gradient-to-r from-cyan-100 to-sky-200 border-b border-cyan-200/70","trigger":"inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-sky-800 transition-all duration-200 hover:text-sky-700 hover:bg-sky-100/50 data-[state=active]:bg-gradient-to-r data-[state=active]:from-sky-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md","content":"grow p-5 bg-gradient-to-b from-white to-sky-50 rounded-b-md outline-none animate-[fadeIn_0.3s_ease-in-out] !text-blue-800"},"description":"Ocean-themed tabs with smooth gradients, subtle animations, and a calming color palette inspired by the deep sea."}}');
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
