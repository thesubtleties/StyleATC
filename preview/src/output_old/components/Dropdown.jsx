import React from 'react';
import { DropdownMenu } from 'radix-ui'

const Dropdown = ({ trigger, items, ...props }) => {
  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger asChild>
        {trigger}
      </DropdownMenu.Trigger>
      
      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="min-w-[220px] bg-white rounded-md p-1 shadow-lg will-change-transform data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === 'item' ? (
                <DropdownMenu.Item 
                  className="text-sm leading-none text-gray-700 rounded-[0.25rem] flex items-center h-8 px-2 relative pl-6 select-none outline-none data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:bg-[#4F46E5] data-[highlighted]:text-white"
                  {...item.props}
                >
                  {item.icon && (
                    <span className="absolute left-2 w-4 h-4 inline-flex items-center justify-center">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </DropdownMenu.Item>
              ) : item.type === 'separator' ? (
                <DropdownMenu.Separator className="h-px bg-gray-200 m-1" />
              ) : item.type === 'label' ? (
                <DropdownMenu.Label className="pl-6 text-xs leading-6 text-gray-500">
                  {item.label}
                </DropdownMenu.Label>
              ) : null}
            </React.Fragment>
          ))}
          
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;