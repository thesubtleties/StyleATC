import * as React from 'react';
import classNames from 'classnames';
import { Tabs as TabsPrimitive } from 'radix-ui';

/* INJECT_VARIANT_STYLING_LOGIC */

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
