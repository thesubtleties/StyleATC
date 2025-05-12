import * as React from 'react';
import { ScrollArea } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"rounded-md border","elements":{"viewport":"h-[200px] w-[350px] rounded-[inherit]","scrollbar":"flex touch-none select-none transition-colors","thumb":"relative flex-1 rounded-full bg-border","corner":"bg-background","content":"p-4","item":"text-sm leading-none text-foreground","separator":"my-2 h-[1px] bg-border"},"description":"Default scroll area variant."}}');
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
