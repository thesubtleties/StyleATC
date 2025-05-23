import * as React from 'react';
import classNames from 'classnames';

/**
 * FormField Component Template
 *
 * A simple label + input field combination.
 *
 * Placeholders to be replaced by the generator based on theme variant:
 * - : Tailwind classes for the wrapping fieldset/div element.
 * - : Tailwind classes for the label element.
 * - : Tailwind classes for the input element.
 *
 * The 'variant' prop is optional here unless you define specific FormField variants.
 * If variants exist, the generator would use it for style lookup.
 */


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-full flex-col justify-start space-y-2","elements":{"fieldset":"mb-4 flex flex-col gap-1.5","label":"block text-[13px] leading-none mb-2.5 text-gray-700 font-medium","input":"h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none outline-none shadow-sm border border-gray-300 bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"},"description":"Default FormField variant."},"cosmic":{"root":"","elements":{"fieldset":"space-y-4 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 max-w-md mx-auto border border-purple-500/30 shadow-2xl shadow-purple-500/20 backdrop-blur-xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-500/5 before:via-transparent before:to-purple-500/5 before:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)] after:pointer-events-none","label":"text-cyan-300 font-bold text-sm uppercase tracking-widest relative z-10 drop-shadow-sm before:content-[\'\\u25b8\'] before:text-purple-400 before:mr-2 before:font-mono before:animate-pulse","input":"h-12 w-full rounded-lg px-4 text-base leading-none outline-none border border-purple-400/50 bg-gradient-to-r from-slate-800/80 to-slate-900/80 text-cyan-100 placeholder:text-purple-300/70 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:shadow-lg focus:shadow-cyan-500/20 focus:bg-gradient-to-r focus:from-slate-800/90 focus:to-slate-900/90 disabled:cursor-not-allowed disabled:bg-slate-950/50 disabled:text-slate-500 disabled:border-slate-700 backdrop-blur-sm transition-all duration-300 ease-out relative z-10 hover:border-purple-300/70 hover:shadow-md hover:shadow-purple-500/10"},"description":"Enhanced cosmic form field with deep space gradients, animated elements, glowing effects, and futuristic sci-fi styling"},"ocean":{"root":"w-full flex-col justify-start space-y-2 w-full flex-col justify-start space-y-2 bg-[#0ea5e9] text-#0c4a6e focus:ring-[#0ea5e9]","elements":{"input":"h-[35px] shrink-0 grow rounded-md bg-blue-50 px-2.5 text-[15px] leading-none outline-none shadow-sm border-2 border-blue-300 placeholder:text-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500","label":"block text-[13px] leading-none mb-2.5 text-blue-700 font-medium","fieldset":"mb-4 flex flex-col gap-1.5 text-blue-800"},"description":"An ocean-inspired form field with cool blue colors and a subtle wave-like appearance"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const FormfieldComponent = ({
  label,
  id,
  type = 'text',
  defaultValue = '',
  variant = 'default',
  className = '', // Applied to the root fieldset/div
  labelClassName = '', // Extra classes for label
  inputClassName = '', // Extra classes for input
  ...props // Spread remaining props onto the input element
}) => {
  return (
    <div
      className={classNames(
        'w-full flex-col justify-start',
        getStyle(variant, 'fieldset'),
        className
      )}
    >
      <label
        className={classNames(
          'block text-[13px] leading-none mb-2.5',
          getStyle(variant, 'label'),
          labelClassName
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={classNames(
          'h-[35px] shrink-0 grow rounded px-2.5 text-[15px] leading-none outline-none shadow-sm border',
          getStyle(variant, 'input'),
          inputClassName
        )}
        id={id}
        type={type}
        defaultValue={defaultValue} // Use defaultValue for uncontrolled components
        {...props} // Pass other props like placeholder, required, etc.
      />
    </div>
  );
};

// Export as default
export default FormfieldComponent;
