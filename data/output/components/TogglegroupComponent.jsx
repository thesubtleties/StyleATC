import * as React from 'react';
import classNames from 'classnames';
import { ToggleGroup } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"flex items-center justify-center","elements":{"item":"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"},"description":"Default toggle group variant."},"outline":{"root":"flex items-center justify-center border border-input bg-transparent hover:bg-accent hover:text-accent-foreground","elements":{"item":"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},"description":"Outline toggle group variant."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const TogglegroupComponent = ({
  items = [],
  type = 'single',
  defaultValue,
  ariaLabel = 'Toggle group',
  variant = 'default',
  className = '',
  ...props
}) => {
  return (
    <ToggleGroup.Root
      className={classNames(
        'inline-flex rounded shadow-sm',
        getStyle(variant, 'root'),
        className
      )}
      type={type}
      defaultValue={
        defaultValue || (items.length > 0 ? items[0].value : undefined)
      }
      aria-label={ariaLabel}
      {...props}
    >
      {items.map((item, index) => (
        <ToggleGroup.Item
          key={item.value || index}
          className={classNames(
            'flex items-center justify-center first:rounded-l last:rounded-r focus:z-10 focus:outline-none',
            getStyle(variant, 'item'),
            item.className
          )}
          value={item.value}
          aria-label={item.ariaLabel}
          disabled={item.disabled}
        >
          {item.icon || item.content}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
};

export default TogglegroupComponent;
