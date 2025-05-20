import * as React from 'react';
import classNames from 'classnames'; // Keep classNames if getStyle uses it
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
const allVariantStyles = JSON.parse('{"default":{"root":"flex flex-row items-center justify-start rounded-md bg-gray-800 p-2 shadow-lg border border-gray-700","elements":{"button":"ml-auto inline-flex h-9 items-center justify-center rounded-md px-3 py-1.5 text-gray-200 bg-gray-700 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 active:bg-gray-600 transition-all duration-200","separator":"inline-block mx-2 h-6 w-px bg-gray-600/70","toggleGroup":"inline-flex h-9 flex-row items-center justify-start bg-gray-700 rounded-md","toggleItem":"inline-flex h-9 items-center justify-center rounded-md px-3 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 data-[state=on]:bg-gray-600 data-[state=on]:text-white transition-all duration-200","link":"inline-flex h-9 items-center px-3 text-gray-300 hover:text-gray-100 transition-colors"},"description":"Modern dark gray toolbar with light gray accents and clean, minimal styling."},"ocean":{"root":"flex flex-row items-center justify-start rounded-lg bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 p-2 shadow-md border border-blue-100/70","elements":{"button":"ml-auto inline-flex h-9 items-center justify-center rounded-md px-3 py-1.5 text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-400/60 shadow-sm transition-all duration-300","separator":"mx-3 h-6 w-px bg-gradient-to-b from-blue-200/70 to-cyan-200/70","toggleGroup":"inline-flex h-9 flex-row items-center justify-start bg-blue-100/40 rounded-md","toggleItem":"inline-flex h-9 items-center justify-center rounded-md px-3 text-blue-600 hover:bg-blue-100/50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 data-[state=on]:bg-gradient-to-r data-[state=on]:from-blue-500 data-[state=on]:to-cyan-500 data-[state=on]:text-white data-[state=on]:shadow-sm transition-all duration-300","link":"inline-flex h-9 items-center px-3 text-blue-600 hover:text-cyan-600 transition-colors"},"description":"Ocean-themed toolbar with gradient background and fluid interactions."},"mac-modern":{"root":"flex flex-row items-center justify-start rounded-xl bg-white/90 backdrop-blur-xl p-2 shadow-sm border border-slate-200/70","elements":{"button":"ml-auto inline-flex h-9 items-center justify-center rounded-lg px-3 py-1.5 text-slate-800 bg-slate-100/80 hover:bg-slate-200/80 focus:outline-none focus:ring-2 focus:ring-slate-300/70 active:bg-slate-300/80 shadow-sm transition-all duration-200","separator":"mx-1.5 h-6 w-px bg-slate-200","toggleGroup":"inline-flex h-9 flex-row items-center justify-start gap-0.5 bg-slate-100/70 rounded-lg","toggleItem":"inline-flex h-8 items-center justify-center rounded-md px-3 text-slate-600 hover:bg-slate-100/80 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300/70 data-[state=on]:bg-white data-[state=on]:shadow-sm data-[state=on]:text-slate-800 transition-all duration-200","link":"inline-flex h-9 items-center px-3 text-slate-500 hover:text-slate-800 transition-colors"},"description":"A modern macOS-inspired toolbar with frosted glass effect, subtle animations, and elegant interactions."},"patriotic":{"root":"flex flex-row items-center justify-start rounded-md bg-white p-2 shadow-md border-2 border-blue-600","elements":{"toggleItem":"inline-flex h-9 items-center justify-center rounded-md px-3 text-blue-700 hover:bg-blue-50 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 data-[state=on]:bg-red-600/80 data-[state=on]:text-white transition-all duration-200","button":"ml-auto inline-flex h-9 items-center justify-center rounded-md px-3 py-1.5 text-white bg-red-600/80 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:bg-blue-600 shadow-sm transition-all duration-200","separator":"mx-3 h-6 w-px bg-blue-200","link":"inline-flex h-9 items-center px-3 text-blue-800 hover:text-red-600 transition-colors","toggleGroup":"inline-flex h-9 flex-row items-center justify-start gap-1"},"description":"A red, white, and blue themed toolbar for patriotic applications with bold selection states."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */

// Assume getStyle(variant, part) is defined here based on INJECT_VARIANT_STYLING_LOGIC

const ToolbarComponent = ({
  variant = 'default',
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
      className={getStyle(variant, 'root')}
      aria-label="Formatting options"
      {...props}
    >
      {textFormatting && (
        <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
          <Toolbar.ToggleItem
            className={getStyle(variant, 'toggleItem')}
            value="bold"
            aria-label="Bold"
          >
            <FontBoldIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            className={getStyle(variant, 'toggleItem')}
            value="italic"
            aria-label="Italic"
          >
            <FontItalicIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            className={getStyle(variant, 'toggleItem')}
            value="strikethrough"
            aria-label="Strike through"
          >
            <StrikethroughIcon />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      )}

      {/* Render separator only if needed */}
      {textFormatting && textAlignment && (
        <Toolbar.Separator className={getStyle(variant, 'separator')} />
      )}

      {textAlignment && (
        <Toolbar.ToggleGroup
          type="single"
          defaultValue={defaultAlignment}
          aria-label="Text alignment"
        >
          <Toolbar.ToggleItem
            className={getStyle(variant, 'toggleItem')}
            value="left"
            aria-label="Left aligned"
          >
            <TextAlignLeftIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            className={getStyle(variant, 'toggleItem')}
            value="center"
            aria-label="Center aligned"
          >
            <TextAlignCenterIcon />
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem
            className={getStyle(variant, 'toggleItem')}
            value="right"
            aria-label="Right aligned"
          >
            <TextAlignRightIcon />
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      )}

      {/* Render separator only if needed */}
      {(showEditInfo || showShareButton) &&
        (textFormatting || textAlignment) && (
          <Toolbar.Separator className={getStyle(variant, 'separator')} />
        )}

      {showEditInfo && (
        <Toolbar.Link
          className={classNames(
            getStyle(variant, 'link')
            // getStyle(variant, 'editInfoLink')
          )}
          href="#"
          target="_blank"
        >
          {editInfoText}
        </Toolbar.Link>
      )}

      {showShareButton && (
        <Toolbar.Button
          className={classNames(
            getStyle(variant, 'button')
            // getStyle(variant, 'shareButton')
          )}
        >
          {shareButtonText}
        </Toolbar.Button>
      )}
    </Toolbar.Root>
  );
};

export default ToolbarComponent;
