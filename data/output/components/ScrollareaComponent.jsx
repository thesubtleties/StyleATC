import * as React from 'react';
import { ScrollArea } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"h-[250px] w-[350px] overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-950/50","elements":{"viewport":"size-full rounded-[inherit]","scrollbar":"flex touch-none select-none bg-gray-100 dark:bg-gray-800 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-gray-200 dark:hover:bg-gray-700 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col","thumb":"relative flex-1 rounded-full bg-gray-400 dark:bg-gray-500 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2","corner":"bg-gray-200 dark:bg-gray-700","content":"px-5 py-4 text-gray-800 dark:text-gray-200","item":"text-sm leading-relaxed text-gray-800 dark:text-gray-200 mb-3 last:mb-0","separator":"my-2 h-[1px] bg-border"},"description":"Default scroll area variant."},"professional":{"root":"h-[250px] w-[350px] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm","elements":{"viewport":"size-full rounded-[inherit]","scrollbar":"flex touch-none select-none bg-gray-50 dark:bg-gray-800 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-gray-100 dark:hover:bg-gray-700 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col border-l border-t-0 border-gray-200 dark:border-gray-700","thumb":"relative flex-1 rounded-full bg-gray-300 dark:bg-gray-600 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2","corner":"bg-white dark:bg-gray-900 border-l border-t border-gray-200 dark:border-gray-800","content":"px-6 py-5 text-gray-800 dark:text-gray-200","item":"text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-3 last:mb-0","separator":"my-4 h-px bg-gray-200 dark:bg-gray-800"},"description":"A sleek, professional scroll area with modern minimal scrollbars"},"elevated":{"root":"h-[250px] w-[350px] overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg dark:shadow-gray-950/50","elements":{"viewport":"size-full rounded-[inherit]","scrollbar":"flex touch-none select-none bg-white/10 dark:bg-white/5 p-0.5 transition-all duration-[160ms] ease-out opacity-0 hover:opacity-100 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col rounded-full","thumb":"relative flex-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 shadow-[0_0_5px_rgba(99,102,241,0.5)] before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2","corner":"bg-white dark:bg-gray-900","content":"px-6 py-5 text-gray-800 dark:text-gray-200","item":"text-sm leading-relaxed text-gray-800 dark:text-gray-200 mb-4 last:mb-0","separator":"my-6 h-[2px] bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-900/40 to-transparent"},"description":"A stylish, elevated scroll area with modern aesthetics and subtle interactions"},"glass":{"root":"h-[250px] w-[350px] overflow-hidden rounded-lg shadow-lg","elements":{"viewport":"size-full rounded-[inherit] bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-white/20 dark:border-white/5","scrollbar":"flex touch-none select-none bg-white/10 dark:bg-black/10 p-0.5 transition-colors duration-[160ms] ease-out hover:bg-white/20 dark:hover:bg-white/10 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col","thumb":"relative flex-1 rounded-full bg-white/50 dark:bg-white/30 backdrop-blur-sm before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2","corner":"bg-transparent","content":"px-6 py-5 text-gray-800 dark:text-gray-200","item":"text-sm leading-relaxed text-gray-800 dark:text-gray-200 mb-3 last:mb-0","separator":"my-4 h-px bg-gray-200 dark:bg-gray-700"},"description":"A glass-morphism inspired scroll area with elegant blur effects"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const ScrollareaComponent = ({
  items = [],
  variant = 'default',
  className = '',
  height = '225px',
  width = '200px',
  title = 'Tags',
  ...props
}) => {
  return (
    <ScrollArea.Root
      className={classNames(
        'overflow-hidden rounded shadow-sm',
        getStyle(variant, 'root'),
        className
      )}
      style={{ height, width }}
      {...props}
    >
      <ScrollArea.Viewport
        className={classNames('size-full rounded', getStyle('viewport'))}
      >
        <div className="px-5 py-[15px]">
          <div
            className={classNames(
              'text-[15px] font-medium leading-[18px]',
              getStyle(variant, 'title')
            )}
          >
            {title}
          </div>
          {items.map((item, index) => (
            <div
              className={classNames(
                'mt-2.5 border-t pt-2.5 text-[13px] leading-[18px]',
                getStyle(variant, 'item')
              )}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className={classNames(
          'flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col',
          getStyle(variant, 'scrollbar')
        )}
        orientation="vertical"
      >
        <ScrollArea.Thumb
          className={classNames(
            'relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2',
            getStyle(variant, 'thumb')
          )}
        />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className={classNames(
          'flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col',
          getStyle(variant, 'scrollbar')
        )}
        orientation="horizontal"
      >
        <ScrollArea.Thumb
          className={classNames(
            'relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2',
            getStyle(variant, 'thumb')
          )}
        />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className={getStyle(variant, 'corner')} />
    </ScrollArea.Root>
  );
};

export default ScrollareaComponent;
