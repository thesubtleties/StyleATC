import * as React from 'react';
import classNames from 'classnames';
import { Tooltip } from 'radix-ui';
import { PlusIcon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"inline-flex items-center justify-center rounded-full bg-gray-100 size-[35px] text-gray-700 shadow-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 cursor-default transition-all duration-200","content":"data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-50 select-none rounded-lg bg-gray-800 px-3.5 py-2 text-sm font-medium leading-tight shadow-lg will-change-[transform,opacity] border border-gray-700 backdrop-blur-sm bg-opacity-90","arrow":"fill-gray-800"},"description":"A modern, sleek tooltip with a dark backdrop, subtle animations, and clean typography."},"ocean":{"root":"","elements":{"content":"data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-white select-none rounded-md bg-teal-500/90 backdrop-blur-sm px-4 py-2.5 text-sm leading-none shadow-lg will-change-[transform,opacity] border border-teal-400/30","trigger":"inline-flex items-center justify-center rounded-md bg-teal-50 px-3 py-1.5 text-teal-700 shadow-sm border border-teal-200 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500/40 transition-all duration-200","arrow":"fill-teal-500"},"description":"A modern, elegant tooltip with a clean teal/aqua color scheme, subtle transparency and border for a refined ocean-inspired look."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const TooltipComponent = ({
  variant = 'default',
  className = '',
  triggerContent = <PlusIcon />,
  tooltipContent = 'Add to library',
  side = 'top',
  sideOffset = 5,
  ...props
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            className={classNames(
              'inline-flex items-center justify-center outline-none',
              getStyle(variant, 'trigger'),
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
              getStyle(variant, 'content')
            )}
            sideOffset={sideOffset}
            side={side}
            {...props}
          >
            {tooltipContent}
            <Tooltip.Arrow className={getStyle(variant, 'arrow')} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipComponent;
