import * as React from 'react';
import { NavigationMenu } from 'radix-ui';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"relative z-10 flex justify-center","elements":{"list":"center m-0 flex list-none rounded-md p-1 shadow-sm bg-white dark:bg-gray-800","indicator":"top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]","indicatorArrow":"relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white dark:bg-gray-800","viewport":"relative mt-2.5 bg-white dark:bg-gray-800 shadow-lg rounded-md border border-gray-200 dark:border-gray-700","link":"block select-none rounded px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700","trigger":"group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none outline-none hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700","caret":"relative top-px transition-transform duration-[250] ease-in text-gray-500 dark:text-gray-400","content":"absolute left-0 top-0 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg p-3 border border-gray-200 dark:border-gray-700","listItem":"block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-700","listItemTitle":"mb-[5px] font-medium leading-[1.2] text-gray-900 dark:text-white","listItemText":"leading-[1.4] text-gray-700 dark:text-gray-300 text-sm"},"description":"Default navigation menu variant."},"ocean":{"root":"relative z-10 flex justify-center relative z-10 flex max-w-max flex-1 items-center justify-center","elements":{"list":"group flex flex-1 list-none items-center justify-center space-x-1","link":"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-oceanfoam/30 focus:bg-oceanfoam/50","trigger":"group inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-oceanfoam/30 hover:text-primary focus:bg-oceanfoam/50 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gradient-to-r data-[active]:from-primary data-[active]:to-deepocean data-[active]:text-white data-[state=open]:bg-oceanfoam/50"},"description":"Ocean-themed navigation menu with gradient accents and smooth animations"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const NavigationmenuComponent = ({
  variant = 'default',
  className = '',
  items = [],
  ...props
}) => {
  return (
    <NavigationMenu.Root
      className={classNames(
        'relative z-10 flex justify-center',
        getStyle(variant, 'root'),
        className
      )}
      {...props}
    >
      <NavigationMenu.List
        className={classNames(
          'center m-0 flex list-none rounded-md p-1 shadow-sm',
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
  // Simple link item
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

  // Dropdown menu item
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

// Export both the main component and the ListItem for use in examples
NavigationmenuComponent.ListItem = ListItem;

export default NavigationmenuComponent;
