import * as React from 'react';
import { NavigationMenu } from 'radix-ui';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';

/* INJECT_VARIANT_STYLING_LOGIC */

const NavigationmenuComponent = ({
  variant = 'default',
  className = '',
  items = [],
  ...props
}) => {
  return (
    <NavigationMenu.Root
      className={classNames(
        'relative w-full flex justify-center z-10',
        getStyle(variant, 'root'),
        className
      )}
      {...props}
    >
      <NavigationMenu.List
        className={classNames(
          'center m-0 flex list-none rounded-md p-1 shadow-sm relative',
          getStyle(variant, 'list')
        )}
      >
        {items.map((item, index) => (
          <NavigationMenuItem key={index} item={item} variant={variant} />
        ))}

        <NavigationMenu.Indicator
          className={classNames(
            'top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn',
            getStyle(variant, 'indicator')
          )}
        >
          <div
            className={classNames(
              'relative top-[70%] size-2.5 rotate-45 rounded-tl-sm',
              getStyle(variant, 'indicatorArrow')
            )}
          />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport
          className={classNames(
            'relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]',
            getStyle(variant, 'viewport')
          )}
        />
      </div>
    </NavigationMenu.Root>
  );
};

const NavigationMenuItem = ({ item, variant }) => {
  if (item.type === 'link') {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link
          className={classNames(
            'block select-none rounded px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none',
            getStyle(variant, 'link')
          )}
          href={item.href}
        >
          {item.label}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger
        className={classNames(
          'group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none outline-none',
          getStyle(variant, 'trigger')
        )}
      >
        {item.label}{' '}
        <CaretDownIcon
          className={classNames(
            'relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180',
            getStyle(variant, 'caret')
          )}
          aria-hidden
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content
        className={classNames(
          'absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto',
          getStyle(variant, 'content'),
          item.contentClass
        )}
      >
        {item.content}
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, variant, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            'block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors',
            getStyle(variant, 'listItem'),
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div
            className={classNames(
              'mb-[5px] font-medium leading-[1.2]',
              getStyle(variant, 'listItemTitle')
            )}
          >
            {title}
          </div>
          <p
            className={classNames(
              'leading-[1.4]',
              getStyle(variant, 'listItemText')
            )}
          >
            {children}
          </p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

NavigationmenuComponent.ListItem = ListItem;

export default NavigationmenuComponent;
