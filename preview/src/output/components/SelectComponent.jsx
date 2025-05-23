import * as React from 'react';
import { Select } from 'radix-ui';
import classnames from 'classnames';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-gray-800 shadow-[0_2px_10px] shadow-black/10 hover:bg-gray-100 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-gray-500 outline-none","icon":"text-gray-500","content":"overflow-hidden bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] z-[100]","viewport":"p-[5px]","item":"text-[13px] leading-none text-gray-800 rounded flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-gray-400 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-blue-500 data-[highlighted]:text-white","itemIndicator":"absolute left-0 w-[25px] inline-flex items-center justify-center","separator":"h-[1px] bg-gray-200 m-[5px]","arrow":"fill-white"},"description":"Default select variant."},"chill":{"root":"","elements":{"trigger":"inline-flex items-center justify-center rounded-lg px-4 py-2 h-10 text-sm font-medium bg-gradient-to-r from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-900 shadow-sm hover:shadow-md hover:border-teal-300 dark:hover:border-teal-800 transition-all duration-200 ease-in-out data-[placeholder]:text-teal-500/70 dark:data-[placeholder]:text-teal-400/70 focus:outline-none focus:ring-2 focus:ring-teal-300/50 dark:focus:ring-teal-700/50","icon":"text-teal-500 dark:text-teal-400 ml-1 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180","content":"overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow-lg border border-teal-100 dark:border-teal-900 will-change-[transform,opacity] z-[100] data-[side=bottom]:animate-slideUpAndFade data-[side=top]:animate-slideDownAndFade","viewport":"p-2","item":"text-sm leading-none text-slate-700 dark:text-slate-300 rounded-md flex items-center h-8 pr-8 pl-8 relative select-none data-[disabled]:text-slate-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-r data-[highlighted]:from-teal-100 data-[highlighted]:to-blue-100 dark:data-[highlighted]:from-teal-900/40 dark:data-[highlighted]:to-blue-900/40 data-[highlighted]:text-teal-900 dark:data-[highlighted]:text-teal-100 data-[highlighted]:outline-none transition-colors duration-150 ease-in-out","itemIndicator":"absolute left-0 w-8 inline-flex items-center justify-center text-teal-500 dark:text-teal-400 animate-scaleIn","separator":"h-px bg-gradient-to-r from-transparent via-teal-100 dark:via-teal-900/30 to-transparent my-1","label":"px-6 text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 font-medium py-1.5","scrollButton":"flex items-center justify-center h-6 bg-gradient-to-b from-white to-transparent dark:from-slate-900 dark:to-transparent text-teal-500 dark:text-teal-400 cursor-default","arrow":"fill-white dark:fill-slate-900"},"description":"A calm, relaxed select component with cool colors and subtle animations"},"macos":{"root":"","elements":{"trigger":"inline-flex items-center justify-center rounded-md px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white/90 backdrop-blur-sm text-slate-800 border border-slate-200/60 shadow-sm hover:bg-white/95 transition-all duration-200 ease-out data-[placeholder]:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 group","icon":"text-slate-500 dark:text-slate-400 ml-2 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180","content":"overflow-hidden backdrop-blur-sm bg-white/60 rounded-md shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.05)] border border-white/40 will-change-[transform,opacity] z-[100]","viewport":"p-[5px]","item":"text-[13px] leading-none text-slate-800 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-slate-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-500/20 data-[highlighted]:text-slate-900 data-[highlighted]:backdrop-blur-sm data-[highlighted]:outline-none transition-colors duration-150 ease-out","itemIndicator":"absolute left-0 w-8 inline-flex items-center justify-center text-blue-500 dark:text-blue-400 animate-scaleIn","separator":"h-[1px] bg-slate-300/30 m-[5px]","label":"px-3 text-[11px] font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400 py-1.5","scrollButton":"flex items-center justify-center h-6 bg-gradient-to-b from-white/90 to-transparent dark:from-slate-800/90 dark:to-transparent text-slate-500 dark:text-slate-400 cursor-default","arrow":"fill-white/80 dark:fill-slate-800/80"},"description":"A sleek, modern macOS-inspired select component with frosted glass effect and subtle animations."},"osx-aqua":{"root":"","elements":{"trigger":"inline-flex items-center justify-center rounded-md px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-slate-500/80 backdrop-blur-sm text-white border border-slate-600/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-slate-400/80 transition-all duration-150 ease-out data-[placeholder]:text-slate-200 focus:outline-none group","icon":"text-slate-200 ml-1 transition-transform duration-150 ease-out group-data-[state=open]:rotate-180","content":"overflow-hidden bg-slate-500/80 backdrop-blur-sm rounded-md border border-slate-600/80 shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.15)] will-change-[transform,opacity] z-[100]","viewport":"p-[5px]","item":"text-[13px] leading-none text-white rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-slate-400 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-500 data-[highlighted]:text-white data-[highlighted]:outline-none transition-colors duration-150 ease-out","itemIndicator":"absolute left-0 w-[25px] inline-flex items-center justify-center text-blue-300","separator":"h-[1px] bg-slate-400/30 m-[5px]","label":"px-[25px] text-xs font-medium leading-[25px] text-slate-300","scrollButton":"flex items-center justify-center h-[25px] cursor-default bg-gradient-to-b from-slate-400/30 to-transparent text-slate-300","arrow":"fill-slate-600"},"description":"A nostalgic early 2000s iMac/Mac OS X inspired select component with the iconic smoke gray translucent plastic look."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


// Main component that accepts variant prop and options data
const SelectComponent = ({
  variant = 'default',
  placeholder = 'Select an option…',
  label = 'Options',
  groups = [],
  defaultValue,
  onValueChange,
  className = '',
  ...props
}) => {
  return (
    <Select.Root
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      {...props}
    >
      <Select.Trigger
        className={classnames(
          'inline-flex h-[35px] items-center justify-center gap-[5px] rounded px-[15px] text-[13px] leading-none outline-none',
          getStyle(variant, 'trigger'),
          className
        )}
        aria-label={label}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className={getStyle(variant, 'icon')}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={classnames(
            'overflow-hidden rounded-md',
            getStyle(variant, 'content')
          )}
        >
          <Select.ScrollUpButton
            className={classnames(
              'flex h-[25px] cursor-default items-center justify-center',
              getStyle(variant, 'scrollButton')
            )}
          >
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            {groups.map((group, groupIndex) => (
              <React.Fragment key={`group-${groupIndex}`}>
                {groupIndex > 0 && (
                  <Select.Separator
                    className={classnames(
                      'm-[5px] h-px',
                      getStyle(variant, 'separator')
                    )}
                  />
                )}
                <Select.Group>
                  <Select.Label
                    className={classnames(
                      'px-[25px] text-xs leading-[25px]',
                      getStyle(variant, 'label')
                    )}
                  >
                    {group.label}
                  </Select.Label>
                  {group.items.map((item, itemIndex) => (
                    <SelectItem
                      key={`item-${groupIndex}-${itemIndex}`}
                      value={item.value}
                      disabled={item.disabled}
                      variant={variant}
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </Select.Group>
              </React.Fragment>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton
            className={classnames(
              'flex h-[25px] cursor-default items-center justify-center',
              getStyle(variant, 'scrollButton')
            )}
          >
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef(
  ({ children, className, variant, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none data-[disabled]:pointer-events-none',
          getStyle(variant, 'item'),
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator
          className={classnames(
            'absolute left-0 inline-flex w-[25px] items-center justify-center',
            getStyle(variant, 'itemIndicator')
          )}
        >
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default SelectComponent;
