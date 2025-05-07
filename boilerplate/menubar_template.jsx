import * as React from 'react';
import { Menubar } from 'radix-ui';
import classNames from 'classnames';
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons';

// Default menu items
const DEFAULT_MENUS = [
  {
    name: 'File',
    items: [
      { label: 'New Tab', shortcut: '⌘ T' },
      { label: 'New Window', shortcut: '⌘ N' },
      { label: 'New Incognito Window', disabled: true },
      { type: 'separator' },
      {
        label: 'Share',
        type: 'submenu',
        items: [
          { label: 'Email Link' },
          { label: 'Messages' },
          { label: 'Notes' },
        ],
      },
      { type: 'separator' },
      { label: 'Print…', shortcut: '⌘ P' },
    ],
  },
  {
    name: 'Edit',
    items: [
      { label: 'Undo', shortcut: '⌘ Z' },
      { label: 'Redo', shortcut: '⇧ ⌘ Z' },
      { type: 'separator' },
      {
        label: 'Find',
        type: 'submenu',
        items: [
          { label: 'Search the web…' },
          { type: 'separator' },
          { label: 'Find…' },
          { label: 'Find Next' },
          { label: 'Find Previous' },
        ],
      },
      { type: 'separator' },
      { label: 'Cut' },
      { label: 'Copy' },
      { label: 'Paste' },
    ],
  },
];

const DEFAULT_CHECKBOX_ITEMS = [
  'Always Show Bookmarks Bar',
  'Always Show Full URLs',
];
const DEFAULT_RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];

const MenubarComponent = ({
  variant = 'default',
  className = '',
  menus = DEFAULT_MENUS,
  checkboxItems = DEFAULT_CHECKBOX_ITEMS,
  radioItems = DEFAULT_RADIO_ITEMS,
  ...props
}) => {
  const [checkedSelection, setCheckedSelection] = React.useState([
    checkboxItems[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(radioItems[2]);

  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <Menubar.Root
      className={classNames(
        'flex rounded-md p-[3px] shadow-sm',
        getStyle('root'),
        className
      )}
      {...props}
    >
      {menus.map((menu, index) => (
        <MenubarMenu
          key={`menu-${index}`}
          name={menu.name}
          items={menu.items}
        />
      ))}

      {/* View Menu with Checkboxes */}
      <Menubar.Menu>
        <Menubar.Trigger
          className={classNames(
            'flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[13px] font-medium leading-none outline-none',
            getStyle('trigger')
          )}
        >
          View
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className={classNames(
              'min-w-[220px] rounded-md p-[5px] shadow-md will-change-[transform,opacity]',
              getStyle('content')
            )}
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            {checkboxItems.map((item) => (
              <Menubar.CheckboxItem
                className={classNames(
                  'relative flex h-[25px] select-none items-center rounded px-2.5 pl-5 text-[13px] leading-none outline-none',
                  getStyle('checkboxItem')
                )}
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item)
                  )
                }
              >
                <Menubar.ItemIndicator
                  className={classNames(
                    'absolute left-0 inline-flex w-5 items-center justify-center',
                    getStyle('indicator')
                  )}
                >
                  <CheckIcon />
                </Menubar.ItemIndicator>
                {item}
              </Menubar.CheckboxItem>
            ))}
            <Menubar.Separator
              className={classNames('m-[5px] h-px', getStyle('separator'))}
            />
            <Menubar.Item
              className={classNames(
                'group relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none outline-none',
                getStyle('item')
              )}
            >
              Reload{' '}
              <div className={classNames('ml-auto pl-5', getStyle('shortcut'))}>
                ⌘ R
              </div>
            </Menubar.Item>
            <Menubar.Item
              className={classNames(
                'group relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none outline-none',
                getStyle('item'),
                getStyle('disabledItem')
              )}
              disabled
            >
              Force Reload{' '}
              <div className={classNames('ml-auto pl-5', getStyle('shortcut'))}>
                ⇧ ⌘ R
              </div>
            </Menubar.Item>
            <Menubar.Separator
              className={classNames('m-[5px] h-px', getStyle('separator'))}
            />
            <Menubar.Item
              className={classNames(
                'relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none outline-none',
                getStyle('item')
              )}
            >
              Toggle Fullscreen
            </Menubar.Item>
            <Menubar.Separator
              className={classNames('m-[5px] h-px', getStyle('separator'))}
            />
            <Menubar.Item
              className={classNames(
                'relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none outline-none',
                getStyle('item')
              )}
            >
              Hide Sidebar
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      {/* Profiles Menu with Radio Items */}
      <Menubar.Menu>
        <Menubar.Trigger
          className={classNames(
            'flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[13px] font-medium leading-none outline-none',
            getStyle('trigger')
          )}
        >
          Profiles
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className={classNames(
              'min-w-[220px] rounded-md p-[5px] shadow-md will-change-[transform,opacity]',
              getStyle('content')
            )}
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            <Menubar.RadioGroup
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {radioItems.map((item) => (
                <Menubar.RadioItem
                  className={classNames(
                    'relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none outline-none',
                    getStyle('radioItem')
                  )}
                  key={item}
                  value={item}
                >
                  <Menubar.ItemIndicator
                    className={classNames(
                      'absolute left-0 inline-flex w-5 items-center justify-center',
                      getStyle('indicator')
                    )}
                  >
                    <DotFilledIcon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.RadioItem>
              ))}
              <Menubar.Separator
                className={classNames('m-[5px] h-px', getStyle('separator'))}
              />
              <Menubar.Item
                className={classNames(
                  'relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none outline-none',
                  getStyle('item')
                )}
              >
                Edit…
              </Menubar.Item>
              <Menubar.Separator
                className={classNames('m-[5px] h-px', getStyle('separator'))}
              />
              <Menubar.Item
                className={classNames(
                  'relative flex h-[25px] select-none items-center rounded pl-5 pr-2.5 text-[13px] leading-none outline-none',
                  getStyle('item')
                )}
              >
                Add Profile…
              </Menubar.Item>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

// Helper component for rendering menu items
const MenubarMenu = ({ name, items }) => (
  <Menubar.Menu>
    <Menubar.Trigger
      className={classNames(
        'flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[13px] font-medium leading-none outline-none',
        getStyle('trigger')
      )}
    >
      {name}
    </Menubar.Trigger>
    <Menubar.Portal>
      <Menubar.Content
        className={classNames(
          'min-w-[220px] rounded-md p-[5px] shadow-md will-change-[transform,opacity]',
          getStyle('content')
        )}
        align="start"
        sideOffset={5}
        alignOffset={-3}
      >
        {items.map((item, index) => {
          if (item.type === 'separator') {
            return (
              <Menubar.Separator
                key={`sep-${index}`}
                className={classNames('m-[5px] h-px', getStyle('separator'))}
              />
            );
          } else if (item.type === 'submenu') {
            return (
              <Menubar.Sub key={`sub-${index}`}>
                <Menubar.SubTrigger
                  className={classNames(
                    'group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none outline-none',
                    getStyle('subTrigger')
                  )}
                >
                  {item.label}
                  <div className={classNames('ml-auto pl-5', getStyle('icon'))}>
                    <ChevronRightIcon />
                  </div>
                </Menubar.SubTrigger>
                <Menubar.Portal>
                  <Menubar.SubContent
                    className={classNames(
                      'min-w-[220px] rounded-md p-[5px] shadow-md will-change-[transform,opacity]',
                      getStyle('subContent')
                    )}
                    alignOffset={-5}
                  >
                    {item.items.map((subItem, subIndex) => {
                      if (subItem.type === 'separator') {
                        return (
                          <Menubar.Separator
                            key={`subsep-${subIndex}`}
                            className={classNames(
                              'm-[5px] h-px',
                              getStyle('separator')
                            )}
                          />
                        );
                      }
                      return (
                        <Menubar.Item
                          key={`subitem-${subIndex}`}
                          className={classNames(
                            'relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none outline-none',
                            getStyle('item')
                          )}
                          disabled={subItem.disabled}
                        >
                          {subItem.label}
                        </Menubar.Item>
                      );
                    })}
                  </Menubar.SubContent>
                </Menubar.Portal>
              </Menubar.Sub>
            );
          } else {
            return (
              <Menubar.Item
                key={`item-${index}`}
                className={classNames(
                  'group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none outline-none',
                  getStyle('item')
                )}
                disabled={item.disabled}
              >
                {item.label}
                {item.shortcut && (
                  <div
                    className={classNames('ml-auto pl-5', getStyle('shortcut'))}
                  >
                    {item.shortcut}
                  </div>
                )}
              </Menubar.Item>
            );
          }
        })}
      </Menubar.Content>
    </Menubar.Portal>
  </Menubar.Menu>
);

export default MenubarComponent;
