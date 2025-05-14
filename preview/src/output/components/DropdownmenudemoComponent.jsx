import * as React from 'react';
import classNames from 'classnames';
import { DropdownMenu } from 'radix-ui';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"bg-white text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700","content":"bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100","item":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","shortcut":"text-gray-500 dark:text-gray-400","separator":"bg-gray-200 dark:bg-gray-700","subTrigger":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-700","chevron":"text-gray-500 dark:text-gray-400","subContent":"bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700","subItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","checkboxItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","indicator":"text-gray-900 dark:text-gray-100","label":"text-gray-500 dark:text-gray-400","radioItem":"text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 data-[disabled]:text-gray-400 data-[disabled]:dark:text-gray-500","arrow":"fill-white dark:fill-gray-800"},"description":"Default dropdown menu demo variant."},"ocean":{"root":"","elements":{"trigger":"inline-flex size-[35px] items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-md hover:shadow-lg hover:from-teal-500 hover:to-blue-600 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition-all duration-200","content":"min-w-[220px] rounded-lg border border-teal-100 bg-gradient-to-b from-white to-blue-50 p-[5px] shadow-lg shadow-blue-900/10 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade","item":"group relative flex h-[25px] select-none items-center rounded-md px-[5px] pl-[25px] pr-[5px] text-[13px] leading-none text-blue-800 outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-teal-100 data-[disabled]:text-blue-300 data-[highlighted]:text-blue-900","icon":"h-4 w-4 text-white","itemText":"ml-auto pl-5 text-teal-600 group-data-[disabled]:text-teal-300 group-data-[highlighted]:text-teal-800","separator":"m-[5px] h-px bg-gradient-to-r from-teal-100 via-blue-200 to-teal-100","subTrigger":"group relative flex h-[25px] select-none items-center rounded-md px-[5px] pl-[25px] pr-[5px] text-[13px] leading-none text-blue-800 outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-teal-100 data-[state=open]:bg-blue-50 data-[disabled]:text-blue-300 data-[highlighted]:text-blue-900","subTriggerIcon":"ml-auto pl-5 text-teal-500 group-data-[disabled]:text-teal-300 group-data-[highlighted]:text-teal-700","subContent":"min-w-[220px] rounded-lg border border-teal-100 bg-white p-[5px] shadow-lg shadow-blue-900/10 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade","checkboxItem":"group relative flex h-[25px] select-none items-center rounded-md px-[5px] pl-[25px] pr-[5px] text-[13px] leading-none text-blue-800 outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-teal-100 data-[disabled]:text-blue-300 data-[highlighted]:text-blue-900","indicator":"absolute left-0 inline-flex w-[25px] items-center justify-center text-teal-600","label":"pl-[25px] text-xs leading-[25px] text-blue-500 font-medium","radioItem":"group relative flex h-[25px] select-none items-center rounded-md px-[5px] pl-[25px] pr-[5px] text-[13px] leading-none text-blue-800 outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-teal-100 data-[disabled]:text-blue-300 data-[highlighted]:text-blue-900","arrow":"fill-white drop-shadow-sm"},"description":"Ocean-themed dropdown menu with beautiful aquatic colors and smooth transitions."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const DropdownmenudemoComponent = ({
  variant = 'default',
  className = '',
  ...props
}) => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger asChild>
        <button
          className={classNames(
            'inline-flex size-[35px] items-center justify-center rounded-full bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black',
            getStyle(variant, 'trigger')
          )}
          aria-label="Customise options"
        >
          <HamburgerMenuIcon className={getStyle(variant, 'icon')} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={classNames(
            'min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade',
            getStyle(variant, 'content')
          )}
          sideOffset={5}
        >
          <DropdownMenu.Item
            className={classNames(
              'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
              getStyle(variant, 'item')
            )}
          >
            New Tab{' '}
            <div
              className={classNames(
                'ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white',
                getStyle(variant, 'itemText')
              )}
            >
              ⌘+T
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={classNames(
              'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
              getStyle(variant, 'item')
            )}
          >
            New Window{' '}
            <div
              className={classNames(
                'ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white',
                getStyle(variant, 'itemText')
              )}
            >
              ⌘+N
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={classNames(
              'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
              getStyle(variant, 'item')
            )}
            disabled
          >
            New Private Window{' '}
            <div
              className={classNames(
                'ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white',
                getStyle(variant, 'itemText')
              )}
            >
              ⇧+⌘+N
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger
              className={classNames(
                'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:data-[state=open]:bg-violet9 data-[state=open]:bg-violet4 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11',
                getStyle(variant, 'subTrigger')
              )}
            >
              More Tools
              <div
                className={classNames(
                  'ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white',
                  getStyle(variant, 'subTriggerIcon')
                )}
              >
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className={classNames(
                  'min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade',
                  getStyle(variant, 'subContent')
                )}
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Item
                  className={classNames(
                    'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
                    getStyle(variant, 'item')
                  )}
                >
                  Save Page As…{' '}
                  <div
                    className={classNames(
                      'ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white',
                      getStyle(variant, 'itemText')
                    )}
                  >
                    ⌘+S
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className={classNames(
                    'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
                    getStyle(variant, 'item')
                  )}
                >
                  Create Shortcut…
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className={classNames(
                    'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
                    getStyle(variant, 'item')
                  )}
                >
                  Name Window…
                </DropdownMenu.Item>
                <DropdownMenu.Separator
                  className={classNames(
                    'm-[5px] h-px bg-violet6',
                    getStyle(variant, 'separator')
                  )}
                />
                <DropdownMenu.Item
                  className={classNames(
                    'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
                    getStyle(variant, 'item')
                  )}
                >
                  Developer Tools
                </DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator
            className={classNames(
              'm-[5px] h-px bg-violet6',
              getStyle(variant, 'separator')
            )}
          />

          <DropdownMenu.CheckboxItem
            className={classNames(
              'group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
              getStyle(variant, 'checkboxItem')
            )}
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator
              className={classNames(
                'absolute left-0 inline-flex w-[25px] items-center justify-center',
                getStyle(variant, 'indicator')
              )}
            >
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks{' '}
            <div
              className={classNames(
                'ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white',
                getStyle(variant, 'itemText')
              )}
            >
              ⌘+B
            </div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className={classNames(
              'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
              getStyle(variant, 'checkboxItem')
            )}
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator
              className={classNames(
                'absolute left-0 inline-flex w-[25px] items-center justify-center',
                getStyle(variant, 'indicator')
              )}
            >
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator
            className={classNames(
              'm-[5px] h-px bg-violet6',
              getStyle(variant, 'separator')
            )}
          />

          <DropdownMenu.Label
            className={classNames(
              'pl-[25px] text-xs leading-[25px] text-mauve11',
              getStyle(variant, 'label')
            )}
          >
            People
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem
              className={classNames(
                'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
                getStyle(variant, 'radioItem')
              )}
              value="pedro"
            >
              <DropdownMenu.ItemIndicator
                className={classNames(
                  'absolute left-0 inline-flex w-[25px] items-center justify-center',
                  getStyle(variant, 'indicator')
                )}
              >
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className={classNames(
                'relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1',
                getStyle(variant, 'radioItem')
              )}
              value="colm"
            >
              <DropdownMenu.ItemIndicator
                className={classNames(
                  'absolute left-0 inline-flex w-[25px] items-center justify-center',
                  getStyle(variant, 'indicator')
                )}
              >
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow
            className={classNames('fill-white', getStyle(variant, 'arrow'))}
          />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownmenudemoComponent;
