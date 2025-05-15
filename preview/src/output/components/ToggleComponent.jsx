import * as React from 'react';
import classNames from 'classnames';
import { Toggle } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"inline-flex items-center justify-center rounded-md p-2 text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground","elements":{"icon":"flex items-center justify-center h-full w-full transition-colors data-[state=on]:text-primary-foreground"},"description":"Default toggle variant."},"outline":{"root":"inline-flex items-center justify-center rounded-md p-2 text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground border border-input bg-transparent p-2 hover:bg-accent/10 hover:text-accent-foreground data-[state=on]:bg-primary/20 data-[state=on]:border-primary data-[state=on]:text-primary","elements":{"icon":"flex items-center justify-center h-full w-full transition-colors data-[state=on]:text-primary"},"description":"Outline toggle variant."},"ocean":{"root":"inline-flex items-center justify-center rounded-md p-2 text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground border border-cyan-400 bg-transparent text-cyan-600 hover:bg-cyan-50 data-[state=on]:bg-cyan-500 data-[state=on]:text-white shadow-sm transition-all duration-200","elements":{"icon":"text-cyan-600 data-[state=on]:text-white flex items-center justify-center h-full w-full"},"description":"Ocean-themed toggle with cyan accents and smooth transitions."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const ToggleComponent = ({
  variant = 'default',
  className = '',
  icon,
  label = 'Toggle',
  defaultPressed = false,
  onPressedChange,
  ...props
}) => {
  return (
    <Toggle.Root
      aria-label={label}
      defaultPressed={defaultPressed}
      onPressedChange={onPressedChange}
      className={classNames(
        'flex items-center justify-center rounded leading-4',
        getStyle(variant, 'root'),
        className
      )}
      {...props}
    >
      <span className={getStyle(variant, 'icon')}>{icon}</span>
    </Toggle.Root>
  );
};

export default ToggleComponent;
