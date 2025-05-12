import * as React from 'react';
import classNames from 'classnames';
import { Collapsible } from 'radix-ui';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';

/* INJECT_VARIANT_STYLING_LOGIC */

const CollapsibleComponent = ({
  variant = 'default',
  className = '',
  title = '@peduarte starred 3 repositories',
  items = [],
  defaultOpen = false,
  ...props
}) => {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <Collapsible.Root
      className={classNames('w-full', getStyle(variant, 'root'), className)}
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <div
        className={classNames(
          'flex items-center justify-between',
          getStyle(variant, 'header')
        )}
      >
        <span
          className={classNames(
            'text-[15px] leading-[25px]',
            getStyle(variant, 'title')
          )}
        >
          {title}
        </span>
        <Collapsible.Trigger asChild>
          <button
            className={classNames(
              'inline-flex size-[25px] items-center justify-center rounded-full outline-none hover:bg-opacity-80 focus:shadow-[0_0_0_2px]',
              getStyle(variant, 'trigger')
            )}
          >
            {open ? (
              <Cross2Icon className={getStyle('icon')} />
            ) : (
              <RowSpacingIcon className={getStyle('icon')} />
            )}
          </button>
        </Collapsible.Trigger>
      </div>

      <div
        className={classNames(
          'my-2.5 rounded p-2.5',
          getStyle(variant, 'item')
        )}
      >
        <span
          className={classNames(
            'text-[15px] leading-[25px]',
            getStyle(variant, 'itemText')
          )}
        >
          {items[0]?.content || '@radix-ui/primitives'}
        </span>
      </div>

      <Collapsible.Content className={getStyle(variant, 'content')}>
        {items.slice(1).map((item, index) => (
          <div
            key={index}
            className={classNames(
              'my-2.5 rounded p-2.5',
              getStyle(variant, 'item')
            )}
          >
            <span
              className={classNames(
                'text-[15px] leading-[25px]',
                getStyle(variant, 'itemText')
              )}
            >
              {item.content}
            </span>
          </div>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default CollapsibleComponent;
