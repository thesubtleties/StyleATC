import * as React from 'react';
import classNames from 'classnames';
import { Tooltip } from 'radix-ui';
import { PlusIcon } from '@radix-ui/react-icons';

const TooltipComponent = ({
  variant = 'default',
  className = '',
  triggerContent = <PlusIcon />,
  tooltipContent = 'Add to library',
  side = 'top',
  sideOffset = 5,
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"rounded-full w-8 h-8 flex items-center justify-center bg-white shadow-md hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-primary","content":"z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md","arrow":"fill-current text-popover"},"description":"Default tooltip variant."}}');
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
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            className={classNames(
              'inline-flex items-center justify-center outline-none',
              getStyle('trigger'),
              className
            )}
          >
            {triggerContent}
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={classNames(
              'select-none will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
              getStyle('content')
            )}
            sideOffset={sideOffset}
            side={side}
            {...props}
          >
            {tooltipContent}
            <Tooltip.Arrow className={getStyle('arrow')} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipComponent;
