import * as React from 'react';
import classNames from 'classnames';
import { Tooltip } from 'radix-ui';
import { PlusIcon } from '@radix-ui/react-icons';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"trigger":"inline-flex items-center justify-center rounded-full bg-gray-200 size-[35px] text-gray-800 shadow-[0_2px_10px] shadow-black/10 hover:bg-gray-300 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default","content":"data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-800 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]","arrow":"fill-white"},"description":"Default tooltip variant."},"ocean":{"root":"","elements":{"content":"data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-white select-none rounded-[6px] bg-gradient-to-br from-blue-500 to-teal-400 px-[15px] py-[10px] text-[15px] leading-none shadow-[0px_8px_20px_rgba(0,0,0,0.3)] will-change-[transform,opacity] border border-blue-300/20","trigger":"inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-teal-300 size-[35px] text-white shadow-[0_2px_10px] shadow-blue-400/30 hover:from-blue-500 hover:to-teal-400 focus:shadow-[0_0_0_2px] focus:shadow-blue-600 outline-none cursor-default transition-all duration-200","arrow":"fill-blue-500"},"description":"Ocean-themed tooltip with gradient background and smooth animations."}}');
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
