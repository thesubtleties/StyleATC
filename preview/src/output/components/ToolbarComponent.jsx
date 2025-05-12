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


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"flex items-center justify-between rounded-md bg-white p-2 shadow-sm","elements":{"button":"flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500","separator":"mx-2 h-6 w-px bg-gray-300","toggleGroup":"flex","toggleItem":"flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700"},"description":"Default toolbar variant."},"ocean":{"root":"flex items-center justify-between rounded-md bg-white p-2 shadow-sm flex items-center justify-between rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 p-2.5 shadow-md border border-blue-100","elements":{"button":"flex items-center justify-center rounded-md p-2 text-blue-600 hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-teal-400/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200","separator":"mx-2 h-6 w-px bg-gradient-to-b from-blue-200 to-teal-200","toggleGroup":"flex gap-0.5 p-0.5 bg-blue-100/40 rounded-md","toggleItem":"flex items-center justify-center rounded-md p-2 text-blue-600 hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-teal-400/10 focus:outline-none focus:ring-2 focus:ring-blue-400 data-[state=on]:bg-gradient-to-r data-[state=on]:from-blue-500 data-[state=on]:to-teal-400 data-[state=on]:text-white transition-all duration-200"},"description":"Ocean-themed toolbar with gradient background and fluid interactions."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


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
  return (
    <Toolbar.Root
      className={classNames(
        'flex w-full min-w-max rounded-md p-2.5 shadow-sm',
        getStyle(variant, 'root'),
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
  ({ children, className, variant, ...props }, forwardedRef) => (
    <Toolbar.ToggleItem
      className={classNames(
        'ml-0.5 inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded px-[5px] text-[13px] leading-none outline-none first:ml-0 focus:relative',
        getStyle(variant, 'toggleItem'),
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
  ({ className, variant, ...props }, forwardedRef) => (
    <Toolbar.Separator
      className={classNames(
        'mx-2.5 w-px',
        getStyle(variant, 'separator'),
        className
      )}
      {...props}
      ref={forwardedRef}
    />
  )
);

const ToolbarLink = React.forwardRef(
  ({ children, className, variant, ...props }, forwardedRef) => (
    <Toolbar.Link
      className={classNames(
        'ml-0.5 hidden h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded px-[5px] text-[13px] leading-none outline-none first:ml-0 hover:cursor-pointer focus:relative sm:inline-flex',
        getStyle(variant, 'link'),
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
  ({ children, className, variant, ...props }, forwardedRef) => (
    <Toolbar.Button
      className={classNames(
        'inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded px-2.5 text-[13px] leading-none outline-none focus:relative',
        getStyle(variant, 'button'),
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
