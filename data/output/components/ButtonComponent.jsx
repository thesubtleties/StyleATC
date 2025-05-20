import React from 'react';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-blue-800 text-white hover:bg-blue-900 px-5 py-2.5 rounded-md font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 active:translate-y-0.5 animate-fadeIn","elements":{"text":"flex items-center justify-center gap-2 tracking-wide"},"description":"Elegant, classy button with dark blue styling and subtle interactions"},"secondary":{"root":"bg-blue-800 text-white hover:bg-blue-900 px-5 py-2.5 rounded-md font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 active:translate-y-0.5 animate-fadeIn bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:animate-pulse","elements":{},"description":"Secondary button with gray styling"},"outline":{"root":"bg-transparent border border-slate-300 hover:border-slate-400 font-medium px-5 py-2 rounded-md transition-all duration-200 ease-in-out hover:shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-400 focus:animate-focusPulse","elements":{"text":"flex items-center justify-center gap-1.5 text-slate-600 tracking-wide"},"description":"A modern, elegant outline button with subtle hover effects and refined styling"},"ghost":{"root":"bg-transparent relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-blue-50 px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 border border-transparent hover:border-blue-100 before:absolute before:inset-0 before:bg-blue-100/0 hover:before:bg-blue-100/30 before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 hover:before:scale-x-100 before:origin-left","elements":{"text":"flex items-center justify-center gap-1 text-blue-600 relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-105"},"description":"Ghost button with transparent background and primary text color"},"bright":{"root":"bg-blue-800 text-white hover:bg-blue-900 px-5 py-2.5 rounded-md font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 active:translate-y-0.5 animate-fadeIn bg-gradient-to-br from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2","elements":{"text":"flex items-center justify-center gap-2 tracking-wide"},"description":"A vibrant amber-to-orange gradient button with a slight lift effect on hover"},"subtle":{"root":"bg-slate-100 hover:bg-slate-200 font-medium px-5 py-2 rounded-md border border-slate-200 hover:border-slate-300 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-slate-400 active:bg-slate-300","elements":{"text":"flex items-center justify-center gap-1 text-sm text-slate-700"},"description":"A refined subtle button with slate colors and active state for secondary actions"},"modal-default":{"root":"bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-slate-400 transition-colors","elements":{},"description":"A button styled to match the default modal theme"},"sun-faded":{"root":"bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white px-4 py-2 rounded-md font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200","elements":{"text":"flex items-center justify-center gap-1.5 text-white font-medium tracking-wide"},"description":"A sun-faded orange button to match the fancy modal"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const ButtonComponent = React.forwardRef(
  (
    { children, variant = 'default', size = 'md', className = '', ...props },
    forwardedRef
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';

    const sizeClasses = {
      sm: 'py-1 px-2 text-sm',
      md: 'py-2 px-4 text-base',
      lg: 'py-3 px-6 text-lg',
    };

    return (
      <button
        className={classNames(
          baseClasses,
          sizeClasses[size],
          getStyle(variant, 'root'),
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <span className={getStyle(variant, 'text')}>{children}</span>
      </button>
    );
  }
);

ButtonComponent.displayName = 'Button';

export default ButtonComponent;
