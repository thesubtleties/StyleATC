import React from 'react';
import classNames from 'classnames';

const Card = ({ children, variant = 'default', className = '', ...props }) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200","elements":{},"description":"Modern card with hover effect and smooth transition"},"elevated":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white border border-gray-200 rounded-lg shadow-lg p-6","elements":{},"description":"Elevated card with a stronger shadow"},"outlined":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white border-2 border-purple-500 rounded-lg p-6","elements":{},"description":"Outlined card with a colored border"},"flat":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-50 rounded-lg p-6","elements":{},"description":"Flat card with no border or shadow"},"primary":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-primary/10 border-2 border-primary rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200","elements":{},"description":"Primary card with primary border and light background"},"gradient":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-gradient-to-br from-purple-100 to-blue-100 border border-purple-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200","elements":{},"description":"Gradient card with subtle purple to blue background and hover effect"},"neon-accent":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white border-l-4 border-primary rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-200","elements":{},"description":"Card with a neon pink accent border on the left side"},"custom-dark":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-800 text-white rounded-xl border-2 border-purple-500 p-6 shadow-xl hover:shadow-2xl transition-all duration-300","elements":{},"description":"Custom dark-themed card with purple border and hover effects"},"vibrant":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300","elements":{},"description":"A vibrant card with subtle blue gradient and enhanced shadow effects"},"neumorphic":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-100 rounded-xl p-6 shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_20px_#d1d1d1,-12px_-12px_20px_#ffffff] transition-all duration-300","elements":{},"description":"A neumorphic card with soft shadow effects that appears raised from the surface"}}');
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
    <div
      className={classNames('overflow-hidden', getStyle('root'), className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
