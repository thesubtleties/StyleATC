import * as React from 'react';
import classNames from 'classnames';
import { ContextMenu } from 'radix-ui';
import {
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';

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
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"bg-white text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700","content":"bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-md shadow-lg p-1 min-w-[12rem] z-50","item":"px-2 py-1.5 text-sm rounded-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500 cursor-pointer","shortcut":"text-gray-500 dark:text-gray-400","separator":"bg-gray-200 dark:bg-gray-700","subTrigger":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-700","chevron":"text-gray-500 dark:text-gray-400","subContent":"bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700","subItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","checkboxItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","indicator":"text-gray-900 dark:text-gray-100","label":"text-gray-500 dark:text-gray-400","radioItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","arrow":"fill-white dark:fill-gray-800"},"description":"Default context menu variant."}}');
const getStyle = (elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


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
          getStyle('trigger'),
          className
        )}
      >
        {triggerText}
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content
          className={classNames(
            'min-w-[220px] overflow-hidden rounded-md p-[5px] shadow-md',
            getStyle('content')
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
                getStyle('item')
              )}
              onClick={item.onClick}
            >
              {item.label}
              {item.shortcut && (
                <div
                  className={classNames('ml-auto pl-5', getStyle('shortcut'))}
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
                  className={classNames('m-[5px] h-px', getStyle('separator'))}
                />
              )}
              <ContextMenu.Sub>
                <ContextMenu.SubTrigger
                  className={classNames(
                    'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none',
                    getStyle('subTrigger')
                  )}
                >
                  More Tools
                  <div className={classNames('ml-auto pl-5', getStyle('icon'))}>
                    <ChevronRightIcon />
                  </div>
                </ContextMenu.SubTrigger>
                <ContextMenu.Portal>
                  <ContextMenu.SubContent
                    className={classNames(
                      'min-w-[220px] overflow-hidden rounded-md p-[5px] shadow-md',
                      getStyle('subContent')
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
                          getStyle('subItem')
                        )}
                        onClick={item.onClick}
                      >
                        {item.label}
                        {item.shortcut && (
                          <div
                            className={classNames(
                              'ml-auto pl-5',
                              getStyle('shortcut')
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
                className={classNames('m-[5px] h-px', getStyle('separator'))}
              />
              {checkboxItems.map((item, index) => (
                <ContextMenu.CheckboxItem
                  key={`checkbox-${index}`}
                  className={classNames(
                    'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none',
                    getStyle('checkboxItem')
                  )}
                  checked={checkboxStates[item.id]}
                  onCheckedChange={() => handleCheckboxChange(item.id)}
                >
                  <ContextMenu.ItemIndicator
                    className={classNames(
                      'absolute left-0 inline-flex w-[25px] items-center justify-center',
                      getStyle('indicator')
                    )}
                  >
                    <CheckIcon />
                  </ContextMenu.ItemIndicator>
                  {item.label}
                  {item.shortcut && (
                    <div
                      className={classNames(
                        'ml-auto pl-5',
                        getStyle('shortcut')
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
                className={classNames('m-[5px] h-px', getStyle('separator'))}
              />
              <ContextMenu.Label
                className={classNames(
                  'pl-[25px] text-xs leading-[25px]',
                  getStyle('label')
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
                      getStyle('radioItem')
                    )}
                    value={item.value}
                  >
                    <ContextMenu.ItemIndicator
                      className={classNames(
                        'absolute left-0 inline-flex w-[25px] items-center justify-center',
                        getStyle('indicator')
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
