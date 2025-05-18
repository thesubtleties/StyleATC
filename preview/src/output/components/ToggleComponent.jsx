import * as React from 'react';
import classNames from 'classnames';
import { Toggle } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-indigo-600 data-[state=on]:text-white","elements":{"icon":"flex items-center justify-center h-full w-full transition-colors data-[state=on]:text-white"},"description":"Default toggle variant with indigo accent color."},"outline":{"root":"inline-flex items-center justify-center rounded-md border border-slate-200 bg-transparent p-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-indigo-50 data-[state=on]:border-indigo-300 data-[state=on]:text-indigo-700","elements":{"icon":"flex items-center justify-center h-full w-full transition-colors text-slate-600 data-[state=on]:text-indigo-700"},"description":"Outline toggle variant with subtle indigo accents."},"ocean":{"root":"inline-flex items-center justify-center rounded-md p-2 text-sm font-medium border border-cyan-400 bg-transparent text-cyan-600 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-cyan-500 data-[state=on]:text-white shadow-sm transition-all duration-200","elements":{"icon":"flex items-center justify-center h-full w-full transition-colors text-cyan-600 data-[state=on]:text-white"},"description":"Ocean-themed toggle with cyan accents and smooth transitions."}}');
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
  colors = {},
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
