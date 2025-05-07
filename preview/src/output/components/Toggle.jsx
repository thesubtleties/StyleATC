import * as React from 'react';
import classNames from 'classnames';
import { Toggle } from 'radix-ui';

const ToggleComponent = ({
  variant = 'default',
  className = '',
  icon,
  label = 'Toggle',
  defaultPressed = false,
  onPressedChange,
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"flex items-center justify-center rounded leading-4 h-10 w-10 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground","elements":{"icon":"h-4 w-4"},"description":"Default toggle variant."}}');
const getStyle = (elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


  return (
    <Toggle.Root
      aria-label={label}
      defaultPressed={defaultPressed}
      onPressedChange={onPressedChange}
      className={classNames(
        'flex items-center justify-center rounded leading-4',
        getStyle('root'),
        className
      )}
      {...props}
    >
      <span className={getStyle('icon')}>{icon}</span>
    </Toggle.Root>
  );
};

export default ToggleComponent;
