import * as React from 'react';
import { ScrollArea } from 'radix-ui';
import classNames from 'classnames';

const ScrollAreaComponent = ({
  items = [],
  variant = 'default',
  className = '',
  height = '225px',
  width = '200px',
  title = 'Tags',
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-white border border-gray-200","elements":{"viewport":"bg-white","title":"text-gray-900","item":"text-gray-700 border-gray-200","scrollbar":"bg-gray-100 hover:bg-gray-200","thumb":"bg-gray-400 hover:bg-gray-500","corner":"bg-gray-200"},"description":"Default ScrollArea variant."}}');
const getStyle = (elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


  return (
    <ScrollArea.Root
      className={classNames(
        'overflow-hidden rounded shadow-sm',
        getStyle('root'),
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
              getStyle('title')
            )}
          >
            {title}
          </div>
          {items.map((item, index) => (
            <div
              className={classNames(
                'mt-2.5 border-t pt-2.5 text-[13px] leading-[18px]',
                getStyle('item')
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
          getStyle('scrollbar')
        )}
        orientation="vertical"
      >
        <ScrollArea.Thumb
          className={classNames(
            'relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2',
            getStyle('thumb')
          )}
        />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className={classNames(
          'flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col',
          getStyle('scrollbar')
        )}
        orientation="horizontal"
      >
        <ScrollArea.Thumb
          className={classNames(
            'relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2',
            getStyle('thumb')
          )}
        />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className={getStyle('corner')} />
    </ScrollArea.Root>
  );
};

export default ScrollAreaComponent;
