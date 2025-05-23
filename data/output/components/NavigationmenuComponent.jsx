import * as React from 'react';
import { NavigationMenu } from 'radix-ui';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"relative w-full flex justify-center","elements":{"list":"m-0 flex list-none rounded-md bg-white dark:bg-gray-800 p-1 shadow-md relative","indicator":"top-full flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn","indicatorArrow":"relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white","viewport":"mt-3 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-lightSpeedInRight sm:w-[var(--radix-navigation-menu-viewport-width)]","link":"block select-none rounded-md px-3 py-2 text-[15px] font-medium leading-none text-gray-700 dark:text-gray-200 no-underline outline-none hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300 focus:bg-blue-50 dark:focus:bg-blue-900/30 focus:text-blue-600 dark:focus:text-blue-300","trigger":"group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-gray-700 dark:text-gray-200 outline-none hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300 focus:shadow-[0_0_0_2px] focus:shadow-blue-400","caret":"relative top-px text-gray-500 dark:text-gray-400 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 group-hover:text-blue-600 dark:group-hover:text-blue-300","content":"absolute left-0 top-0 w-full z-50 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto","listItem":"block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/30","listItemTitle":"mb-[5px] font-medium leading-[1.2] text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-300","listItemText":"leading-[1.4] text-gray-600 dark:text-gray-300 text-sm"},"description":"Default navigation menu with configurable menu items."},"ocean":{"root":"relative w-full flex justify-center","elements":{"list":"m-0 flex list-none rounded-md bg-blue-100 dark:bg-blue-800 p-1 shadow-md","link":"block select-none rounded-md px-3 py-2 text-[15px] font-medium leading-none text-blue-700 dark:text-blue-300 no-underline outline-none hover:bg-blue-200 dark:hover:bg-blue-700 hover:text-blue-800 dark:hover:text-blue-200","trigger":"group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-blue-700 dark:text-blue-300 outline-none hover:bg-blue-200 dark:hover:bg-blue-700 hover:text-blue-800 dark:hover:text-blue-200 focus:shadow-[0_0_0_2px] focus:shadow-blue-400","indicator":"top-full flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn","indicatorArrow":"relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-blue-100 dark:bg-blue-800","viewport":"absolute left-0 right-0 top-full mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-blue-100 dark:bg-blue-800 border border-blue-200 dark:border-blue-800 shadow-lg transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]","caret":"relative top-px text-blue-500 dark:text-blue-400 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180","content":"absolute left-0 top-0 w-full z-50 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto","listItem":"block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-blue-200 dark:hover:bg-blue-700","listItemTitle":"mb-[5px] font-medium leading-[1.2] text-blue-800 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100","listItemText":"leading-[1.4] text-blue-600 dark:text-blue-400 text-sm"},"description":"Ocean-themed navigation menu with gradient accents and smooth animations"},"macos-modern":{"root":"relative w-full flex justify-center","elements":{"list":"m-0 flex list-none rounded-xl bg-white/80 backdrop-blur-lg p-1 shadow-sm border border-gray-200/40","link":"block select-none rounded-lg px-3 py-2 text-[15px] font-medium leading-none text-gray-800/90 no-underline outline-none hover:bg-gray-100/50 hover:text-black/90 transition-colors duration-150","trigger":"group flex select-none items-center justify-between gap-1 rounded-lg px-3 py-2 text-[15px] font-medium leading-none text-gray-800/90 outline-none hover:bg-gray-100/50 hover:text-black/90 transition-colors duration-150 focus:ring-2 focus:ring-gray-300/50","indicator":"top-full z-50 flex h-2 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn","indicatorArrow":"relative top-[70%] size-2 rotate-45 rounded-tl-sm bg-white/75 border-l border-t border-gray-200/40 shadow-sm","viewport":"absolute left-0 right-0 top-full z-50 mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-xl backdrop-blur-lg bg-white/65 border border-gray-200/40 shadow-lg transition-all duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]","caret":"relative top-px text-gray-400/80 transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180 group-hover:text-gray-600/80","content":"absolute left-0 top-0 w-full z-50 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto","listItem":"block select-none rounded-lg p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-gray-100/50","listItemTitle":"mb-[5px] font-medium leading-[1.2] text-gray-900/90 hover:text-black/90","listItemText":"leading-[1.4] text-gray-600/85 text-sm"},"description":"A macOS-inspired modern navigation menu with subtle transparency effects and rounded corners."},"studio":{"root":"relative w-full flex justify-center","elements":{"list":"m-0 flex list-none rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 p-2 shadow-2xl shadow-black/20 border border-slate-700/50 backdrop-blur-xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:pointer-events-none","trigger":"group flex select-none items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-semibold leading-none text-slate-200 outline-none hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 hover:text-white hover:shadow-lg hover:shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-blue-400/50 transition-all duration-300 ease-out relative z-10 border border-transparent hover:border-slate-600/50","link":"block select-none rounded-xl px-4 py-3 text-sm font-semibold leading-none text-slate-200 no-underline outline-none hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 hover:text-white hover:shadow-lg hover:shadow-black/10 focus:bg-gradient-to-r focus:from-slate-700 focus:to-slate-600 focus:text-white transition-all duration-300 ease-out relative z-10 border border-transparent hover:border-slate-600/50","caret":"relative top-px text-slate-400 transition-all duration-300 ease-out group-data-[state=open]:-rotate-180 group-data-[state=open]:text-blue-400 group-hover:text-slate-100 transform","indicator":"top-full flex h-3 items-end justify-center overflow-hidden transition-[width,transform_300ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn","indicatorArrow":"relative top-[70%] size-3 rotate-45 rounded-tl-sm bg-gradient-to-br from-slate-800 to-slate-900 border-l border-t border-slate-700/50","viewport":"mt-3 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-2xl shadow-black/25 transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)] backdrop-blur-xl","content":"absolute left-0 top-0 w-full z-50 data-[motion=from-end]:animate-slideInRight data-[motion=from-start]:animate-slideInLeft data-[motion=to-end]:animate-slideOutRight data-[motion=to-start]:animate-slideOutLeft sm:w-auto p-4","listItem":"block select-none rounded-xl p-4 text-sm leading-none no-underline outline-none transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 hover:shadow-lg hover:shadow-black/10 border border-transparent hover:border-slate-600/30","listItemTitle":"mb-2 font-bold leading-[1.2] text-slate-100 hover:text-blue-300 transition-colors duration-300 text-base","listItemText":"leading-[1.5] text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300"},"description":"Premium studio-grade navigation with dark theme, subtle gradients, and sophisticated micro-interactions"}}');
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
