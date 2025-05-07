import React from 'react';
import classNames from 'classnames';

const Button = React.forwardRef(
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

    
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500","elements":{"text":"flex items-center"},"description":"Default button variant."},"primary":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400","elements":{},"description":"Primary button with blue styling and white text"},"secondary":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500","elements":{},"description":"Secondary button with gray styling"},"outline":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-transparent hover:bg-gray-50 text-purple-600 border border-purple-600 px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500","elements":{},"description":"Outline button with purple border"},"danger":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500","elements":{},"description":"Danger button with red styling"},"ghost":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-transparent hover:bg-primary/10 text-primary px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50","elements":{},"description":"Ghost button with transparent background and primary text color"},"success":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary/50","elements":{},"description":"Success button with secondary color styling"},"bright":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500","elements":{},"description":"Bright button with gradient effect and subtle shadow"},"subtle":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium border border-gray-200 shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gray-400","elements":{},"description":"Subtle button with minimal styling for secondary actions"},"neon":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 shadow-md hover:shadow-lg transition-all duration-200","elements":{},"description":"Neon pink button with subtle shadow and hover effects"},"gradient":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-4 py-2 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50","elements":{},"description":"Gradient button with primary to secondary color transition"},"custom":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-5 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2","elements":{},"description":"Custom button with gradient and rounded corners"},"test":{"root":"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded","elements":{},"description":"A test button to verify if we can create components"},"vibrant":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400","elements":{},"description":"A vibrant button with cyan-to-blue gradient and enhanced hover effects"},"3d":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-secondary text-white px-5 py-3 rounded-lg font-bold transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md border-b-4 border-secondary-700 active:border-b-0","elements":{},"description":"A 3D button with depth effect that appears to press down when clicked"},"cool-blue":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400","elements":{},"description":"A cool blue gradient button with cyan accents and enhanced hover effects"},"modern":{"root":"bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-5 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50","elements":{},"description":"A modern button with gradient background, rounded corners, and subtle shadow effects"}}');
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
      <button
        className={classNames(
          baseClasses,
          sizeClasses[size],
          getStyle('root'),
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <span className={getStyle('text')}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
