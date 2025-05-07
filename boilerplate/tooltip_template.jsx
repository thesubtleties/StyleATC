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
  /* INJECT_VARIANT_STYLING_LOGIC */

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
