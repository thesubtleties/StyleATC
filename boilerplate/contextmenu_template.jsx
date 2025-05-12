import * as React from 'react';
import classNames from 'classnames';
import { ContextMenu } from 'radix-ui';
import {
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';

/* INJECT_VARIANT_STYLING_LOGIC */

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
