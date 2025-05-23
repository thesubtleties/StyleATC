import * as React from 'react';
import classNames from 'classnames';
import { ContextMenu } from 'radix-ui';
import {
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-2 focus:ring-slate-400 border border-slate-300 rounded-lg px-4 py-3 font-medium cursor-pointer transition-all duration-200 select-none","content":"bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-md shadow-lg p-1 min-w-[12rem] z-50","item":"px-2 py-1.5 text-sm rounded-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500 cursor-pointer","shortcut":"text-gray-500 dark:text-gray-400","separator":"bg-gray-200 dark:bg-gray-700","subTrigger":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-700","chevron":"text-gray-500 dark:text-gray-400","subContent":"bg-white border border-slate-300 rounded-md shadow-lg p-1 min-w-[12rem] z-50 animate-in slide-in-from-left-2 duration-200","subItem":"px-2 py-1.5 text-sm rounded-sm text-slate-700 hover:bg-slate-100 cursor-pointer transition-colors duration-200","checkboxItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","indicator":"text-gray-900 dark:text-gray-100","label":"text-gray-500 dark:text-gray-400","radioItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","arrow":"fill-white dark:fill-gray-800"},"description":"Default context menu variant."},"soda-pop":{"root":"","elements":{"trigger":"bg-gradient-to-br from-pink-100 to-rose-200 text-pink-800 hover:from-pink-200 hover:to-rose-300 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 border-2 border-pink-300 rounded-2xl px-5 py-3 font-bold text-center cursor-pointer transition-all duration-300 ease-out select-none shadow-lg hover:shadow-xl hover:shadow-pink-300/50 transform hover:scale-105 active:scale-95","content":"bg-gradient-to-br from-pink-50 via-white to-rose-50 border-2 border-pink-300 rounded-2xl shadow-2xl p-3 min-w-[14rem] z-50 font-medium backdrop-blur-sm animate-in slide-in-from-top-2 duration-300 ease-out before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-pink-100/20 before:to-transparent before:pointer-events-none","item":"px-4 py-2.5 text-sm rounded-xl text-pink-800 hover:bg-gradient-to-r hover:from-pink-200 hover:to-rose-300 hover:text-pink-900 hover:shadow-md hover:shadow-pink-200/50 cursor-pointer font-semibold tracking-wide transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] border border-transparent hover:border-pink-300/50","shortcut":"text-blue-600 font-mono text-xs bg-blue-100/80 px-2 py-1 rounded-lg border border-blue-200 group-hover:bg-blue-200 group-hover:text-blue-800 transition-all duration-300","separator":"h-[2px] my-3 mx-2 bg-gradient-to-r from-pink-300 via-rose-400 to-pink-300 rounded-full opacity-60","subTrigger":"text-pink-700 hover:bg-pink-100 data-[state=open]:bg-pink-100 font-medium","chevron":"text-blue-400","subContent":"bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-2 border-blue-300 rounded-2xl shadow-2xl p-3 min-w-[14rem] z-50 font-medium backdrop-blur-sm animate-in slide-in-from-left-2 duration-300 ease-out","subItem":"px-4 py-2.5 text-sm rounded-xl text-blue-800 hover:bg-gradient-to-r hover:from-blue-200 hover:to-cyan-300 hover:text-blue-900 hover:shadow-md hover:shadow-blue-200/50 cursor-pointer font-semibold tracking-wide transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] border border-transparent hover:border-blue-300/50","checkboxItem":"px-4 py-2.5 text-sm rounded-xl text-pink-800 hover:bg-gradient-to-r hover:from-emerald-200 hover:to-green-300 hover:text-emerald-900 hover:shadow-md hover:shadow-emerald-200/50 cursor-pointer font-semibold tracking-wide transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] border border-transparent hover:border-emerald-300/50","indicator":"text-red-500","label":"text-blue-600 font-bold text-xs uppercase tracking-widest px-4 py-2 opacity-80","radioItem":"px-4 py-2.5 text-sm rounded-xl text-pink-800 hover:bg-gradient-to-r hover:from-orange-200 hover:to-amber-300 hover:text-orange-900 hover:shadow-md hover:shadow-orange-200/50 cursor-pointer font-semibold tracking-wide transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-[0.98] border border-transparent hover:border-orange-300/50","arrow":"fill-white drop-shadow-md"},"description":"Enhanced retro soda fountain context menu with vibrant pastels, smooth gradients, and playful micro-interactions"},"neon":{"root":"backdrop-blur-xl bg-gradient-to-br from-indigo-50/90 to-purple-50/90 border border-white/20 rounded-xl shadow-2xl p-2 min-w-[14rem] z-50 animate-in slide-in-from-top-2 duration-200","elements":{"content":"backdrop-blur-xl bg-gradient-to-br from-indigo-50/90 to-purple-50/90 border border-white/20 rounded-xl shadow-2xl p-2 min-w-[14rem] z-50 animate-in slide-in-from-top-2 duration-200","item":"px-3 py-2.5 text-sm rounded-lg text-slate-700 font-medium hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 ease-out cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]","shortcut":"text-slate-500 text-xs font-mono bg-slate-100/80 px-1.5 py-0.5 rounded border border-slate-200/50 group-hover:bg-white/20 group-hover:text-white/90 group-hover:border-white/30 transition-all duration-300","separator":"bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent h-px my-2 mx-2","subTrigger":"px-3 py-2.5 text-sm rounded-lg text-slate-700 font-medium hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 ease-out cursor-pointer transform hover:scale-[1.02] data-[state=open]:bg-gradient-to-r data-[state=open]:from-indigo-500 data-[state=open]:to-purple-600 data-[state=open]:text-white","chevron":"text-slate-400 group-hover:text-white/90 transition-colors duration-300","label":"text-indigo-600 font-semibold text-xs uppercase tracking-wider px-3 py-2 opacity-80","checkboxItem":"px-3 py-2.5 text-sm rounded-lg text-slate-700 font-medium hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 hover:text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 ease-out cursor-pointer transform hover:scale-[1.02]","radioItem":"px-3 py-2.5 text-sm rounded-lg text-slate-700 font-medium hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 ease-out cursor-pointer transform hover:scale-[1.02]","indicator":"text-white group-hover:drop-shadow-sm transition-all duration-300","trigger":"bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 rounded-xl px-6 py-4 font-semibold cursor-pointer transition-all duration-300 ease-out select-none shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transform hover:scale-105 active:scale-95","subContent":"backdrop-blur-xl bg-gradient-to-br from-indigo-50/90 to-purple-50/90 border border-white/20 rounded-xl shadow-2xl p-2 min-w-[14rem] z-50 animate-in slide-in-from-left-2 duration-200","subItem":"px-3 py-2.5 text-sm rounded-lg text-slate-700 font-medium hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 ease-out cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"},"description":"Fun modern context menu with vibrant colors, glass morphism, and smooth animations"}}');
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
