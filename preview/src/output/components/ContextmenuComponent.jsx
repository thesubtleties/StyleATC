import * as React from 'react';
import classNames from 'classnames';
import { ContextMenu } from 'radix-ui';
import {
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"bg-white text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700","content":"bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-md shadow-lg p-1 min-w-[12rem] z-50","item":"px-2 py-1.5 text-sm rounded-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500 cursor-pointer","shortcut":"text-gray-500 dark:text-gray-400","separator":"bg-gray-200 dark:bg-gray-700","subTrigger":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-700","chevron":"text-gray-500 dark:text-gray-400","subContent":"bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700","subItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","checkboxItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","indicator":"text-gray-900 dark:text-gray-100","label":"text-gray-500 dark:text-gray-400","radioItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","arrow":"fill-white dark:fill-gray-800"},"description":"Default context menu variant."},"soda-pop":{"root":"","elements":{"trigger":"bg-pink-50 text-pink-700 hover:bg-pink-100 focus:ring-2 focus:ring-pink-300","content":"bg-white border-2 border-pink-200 rounded-xl shadow-lg p-2 min-w-[12rem] z-50 font-medium bg-[radial-gradient(#ffffff,#fef2f6)] [background-size:25px_25px]","item":"px-3 py-1.5 text-sm rounded-lg text-pink-700 hover:bg-pink-100 data-[disabled]:text-pink-300 cursor-pointer font-medium tracking-wide","shortcut":"text-blue-400 font-mono","separator":"bg-pink-200 h-[2px] my-1 [background-image:repeating-linear-gradient(to_right,#f9a8d4_0,#f9a8d4_5px,transparent_5px,transparent_7px)]","subTrigger":"text-pink-700 hover:bg-pink-100 data-[state=open]:bg-pink-100 font-medium","chevron":"text-blue-400","subContent":"bg-white border-2 border-blue-200 rounded-xl shadow-lg p-2 bg-[radial-gradient(#ffffff,#ebf3ff)] [background-size:25px_25px]","subItem":"text-blue-600 hover:bg-blue-100 data-[disabled]:text-blue-300 font-medium tracking-wide","checkboxItem":"text-pink-700 hover:bg-pink-100 data-[disabled]:text-pink-300 font-medium","indicator":"text-red-500","label":"text-blue-400 font-medium italic","radioItem":"text-pink-700 hover:bg-pink-100 data-[disabled]:text-pink-300 font-medium","arrow":"fill-white drop-shadow-md"},"description":"A whimsical 50\'s ice cream parlor-themed context menu with pastel colors and retro styling."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const ContextMenuComponent = ({
  variant = 'default',
  className = '',
  triggerText = 'Right-click here.',
  items = [],
  checkboxItems = [],
  radioItems = [],
  subMenuItems = [],
  ...props
}) => {
  // State for checkbox and radio items
  const [checkboxStates, setCheckboxStates] = React.useState(
    checkboxItems.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.defaultChecked || false }),
      {}
    )
  );
  const [radioValue, setRadioValue] = React.useState(
    radioItems.length > 0
      ? radioItems.find((item) => item.defaultChecked)?.value ||
          radioItems[0].value
      : ''
  );

  const handleCheckboxChange = (id) => {
    setCheckboxStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger
        className={classNames(
          'block select-none rounded border-2 border-dashed py-[45px] text-center text-[15px]',
          getStyle(variant, 'trigger'),
          className
        )}
      >
        {triggerText}
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content
          className={classNames(
            'min-w-[220px] overflow-hidden rounded-md p-[5px] shadow-md',
            getStyle(variant, 'content')
          )}
          sideOffset={5}
          align="end"
          {...props}
        >
          {/* Regular menu items */}
          {items.map((item, index) => (
            <ContextMenu.Item
              key={`item-${index}`}
              disabled={item.disabled}
              className={classNames(
                'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none',
                getStyle(variant, 'item')
              )}
              onClick={item.onClick}
            >
              {item.label}
              {item.shortcut && (
                <div
                  className={classNames(
                    'ml-auto pl-5',
                    getStyle(variant, 'shortcut')
                  )}
                >
                  {item.shortcut}
                </div>
              )}
            </ContextMenu.Item>
          ))}

          {/* Submenu if provided */}
          {subMenuItems.length > 0 && (
            <>
              {items.length > 0 && (
                <ContextMenu.Separator
                  className={classNames(
                    'm-[5px] h-px',
                    getStyle(variant, 'separator')
                  )}
                />
              )}
              <ContextMenu.Sub>
                <ContextMenu.SubTrigger
                  className={classNames(
                    'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none',
                    getStyle(variant, 'subTrigger')
                  )}
                >
                  More Tools
                  <div
                    className={classNames(
                      'ml-auto pl-5',
                      getStyle(variant, 'icon')
                    )}
                  >
                    <ChevronRightIcon />
                  </div>
                </ContextMenu.SubTrigger>
                <ContextMenu.Portal>
                  <ContextMenu.SubContent
                    className={classNames(
                      'min-w-[220px] overflow-hidden rounded-md p-[5px] shadow-md',
                      getStyle(variant, 'subContent')
                    )}
                    sideOffset={2}
                    alignOffset={-5}
                  >
                    {subMenuItems.map((item, index) => (
                      <ContextMenu.Item
                        key={`subitem-${index}`}
                        disabled={item.disabled}
                        className={classNames(
                          'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none',
                          getStyle(variant, 'subItem')
                        )}
                        onClick={item.onClick}
                      >
                        {item.label}
                        {item.shortcut && (
                          <div
                            className={classNames(
                              'ml-auto pl-5',
                              getStyle(variant, 'shortcut')
                            )}
                          >
                            {item.shortcut}
                          </div>
                        )}
                      </ContextMenu.Item>
                    ))}
                  </ContextMenu.SubContent>
                </ContextMenu.Portal>
              </ContextMenu.Sub>
            </>
          )}

          {/* Checkbox items */}
          {checkboxItems.length > 0 && (
            <>
              <ContextMenu.Separator
                className={classNames(
                  'm-[5px] h-px',
                  getStyle(variant, 'separator')
                )}
              />
              {checkboxItems.map((item, index) => (
                <ContextMenu.CheckboxItem
                  key={`checkbox-${index}`}
                  className={classNames(
                    'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none',
                    getStyle(variant, 'checkboxItem')
                  )}
                  checked={checkboxStates[item.id]}
                  onCheckedChange={() => handleCheckboxChange(item.id)}
                >
                  <ContextMenu.ItemIndicator
                    className={classNames(
                      'absolute left-0 inline-flex w-[25px] items-center justify-center',
                      getStyle(variant, 'indicator')
                    )}
                  >
                    <CheckIcon />
                  </ContextMenu.ItemIndicator>
                  {item.label}
                  {item.shortcut && (
                    <div
                      className={classNames(
                        'ml-auto pl-5',
                        getStyle(variant, 'shortcut')
                      )}
                    >
                      {item.shortcut}
                    </div>
                  )}
                </ContextMenu.CheckboxItem>
              ))}
            </>
          )}

          {/* Radio items */}
          {radioItems.length > 0 && (
            <>
              <ContextMenu.Separator
                className={classNames(
                  'm-[5px] h-px',
                  getStyle(variant, 'separator')
                )}
              />
              <ContextMenu.Label
                className={classNames(
                  'pl-[25px] text-xs leading-[25px]',
                  getStyle(variant, 'label')
                )}
              >
                {radioItems[0].group || 'Options'}
              </ContextMenu.Label>
              <ContextMenu.RadioGroup
                value={radioValue}
                onValueChange={setRadioValue}
              >
                {radioItems.map((item, index) => (
                  <ContextMenu.RadioItem
                    key={`radio-${index}`}
                    className={classNames(
                      'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none',
                      getStyle(variant, 'radioItem')
                    )}
                    value={item.value}
                  >
                    <ContextMenu.ItemIndicator
                      className={classNames(
                        'absolute left-0 inline-flex w-[25px] items-center justify-center',
                        getStyle(variant, 'indicator')
                      )}
                    >
                      <DotFilledIcon />
                    </ContextMenu.ItemIndicator>
                    {item.label}
                  </ContextMenu.RadioItem>
                ))}
              </ContextMenu.RadioGroup>
            </>
          )}
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

export default ContextMenuComponent;
