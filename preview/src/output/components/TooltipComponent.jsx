import * as React from 'react';
import classNames from 'classnames';
import { Tooltip } from 'radix-ui';
import { PlusIcon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"inline-flex items-center justify-center rounded-full bg-gray-100 size-[35px] text-gray-700 shadow-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 cursor-default transition-all duration-200","content":"data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-50 select-none rounded-lg bg-gray-800 px-3.5 py-2 text-sm font-medium leading-tight shadow-lg will-change-[transform,opacity] border border-gray-700 backdrop-blur-sm bg-opacity-90","arrow":"fill-gray-800"},"description":"A modern, sleek tooltip with a dark backdrop, subtle animations, and clean typography."},"ocean":{"root":"","elements":{"content":"data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-white select-none rounded-[6px] bg-gradient-to-br from-blue-500 to-teal-400 px-[15px] py-[10px] text-[15px] leading-none shadow-[0px_8px_20px_rgba(0,0,0,0.3)] will-change-[transform,opacity] border border-blue-300/20","trigger":"inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-teal-300 size-[35px] text-white shadow-[0_2px_10px] shadow-blue-400/30 hover:from-blue-500 hover:to-teal-400 focus:shadow-[0_0_0_2px] focus:shadow-blue-600 outline-none cursor-default transition-all duration-200","arrow":"fill-blue-500"},"description":"Ocean-themed tooltip with gradient background and smooth animations."}}');
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
