import React from 'react';
import { Tabs as TabsPrimitive } from 'radix-ui';

const Tabs = ({ defaultValue, tabs, ...props }) => {
  return (
    <TabsPrimitive.Root defaultValue={defaultValue} {...props}>
      <TabsPrimitive.List className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 data-[state=active]:text-[#4F46E5] data-[state=active]:border-b-2 data-[state=active]:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      
      {tabs.map((tab) => (
        <TabsPrimitive.Content
          key={tab.value}
          value={tab.value}
          className="p-4"
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

export default Tabs;