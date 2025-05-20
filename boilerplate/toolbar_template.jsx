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

/* INJECT_VARIANT_STYLING_LOGIC */
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
