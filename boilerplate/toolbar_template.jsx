import * as React from 'react';
import classNames from 'classnames';
import { Toolbar } from 'radix-ui';
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from '@radix-ui/react-icons';

const ToolbarComponent = ({
  variant = 'default',
  className = '',
  textFormatting = true,
  textAlignment = true,
  showEditInfo = true,
  showShareButton = true,
  editInfoText = 'Edited 2 hours ago',
  shareButtonText = 'Share',
  defaultAlignment = 'center',
  ...props
}) => {
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <Toolbar.Root
      className={classNames(
        'flex w-full min-w-max rounded-md p-2.5 shadow-sm',
        getStyle('root'),
        className
      )}
      aria-label="Formatting options"
      {...props}
    >
      {textFormatting && (
        <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
          <ToolbarToggleItem value="bold" aria-label="Bold">
            <FontBoldIcon />
          </ToolbarToggleItem>
          <ToolbarToggleItem value="italic" aria-label="Italic">
            <FontItalicIcon />
          </ToolbarToggleItem>
          <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
            <StrikethroughIcon />
          </ToolbarToggleItem>
        </Toolbar.ToggleGroup>
      )}

      {textFormatting && textAlignment && <ToolbarSeparator />}

      {textAlignment && (
        <Toolbar.ToggleGroup
          type="single"
          defaultValue={defaultAlignment}
          aria-label="Text alignment"
        >
          <ToolbarToggleItem value="left" aria-label="Left aligned">
            <TextAlignLeftIcon />
          </ToolbarToggleItem>
          <ToolbarToggleItem value="center" aria-label="Center aligned">
            <TextAlignCenterIcon />
          </ToolbarToggleItem>
          <ToolbarToggleItem value="right" aria-label="Right aligned">
            <TextAlignRightIcon />
          </ToolbarToggleItem>
        </Toolbar.ToggleGroup>
      )}

      {(showEditInfo || showShareButton) &&
        (textFormatting || textAlignment) && <ToolbarSeparator />}

      {showEditInfo && (
        <ToolbarLink href="#" target="_blank" style={{ marginRight: 10 }}>
          {editInfoText}
        </ToolbarLink>
      )}

      {showShareButton && (
        <ToolbarButton style={{ marginLeft: 'auto' }}>
          {shareButtonText}
        </ToolbarButton>
      )}
    </Toolbar.Root>
  );
};

const ToolbarToggleItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Toolbar.ToggleItem
      className={classNames(
        'ml-0.5 inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded px-[5px] text-[13px] leading-none outline-none first:ml-0 focus:relative',
        getStyle('toggleItem'),
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Toolbar.ToggleItem>
  )
);

const ToolbarSeparator = React.forwardRef(
  ({ className, ...props }, forwardedRef) => (
    <Toolbar.Separator
      className={classNames('mx-2.5 w-px', getStyle('separator'), className)}
      {...props}
      ref={forwardedRef}
    />
  )
);

const ToolbarLink = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Toolbar.Link
      className={classNames(
        'ml-0.5 hidden h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded px-[5px] text-[13px] leading-none outline-none first:ml-0 hover:cursor-pointer focus:relative sm:inline-flex',
        getStyle('link'),
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Toolbar.Link>
  )
);

const ToolbarButton = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Toolbar.Button
      className={classNames(
        'inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded px-2.5 text-[13px] leading-none outline-none focus:relative',
        getStyle('button'),
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Toolbar.Button>
  )
);

export default ToolbarComponent;
