import * as React from 'react';
import { Separator } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-gray-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px","elements":{},"description":"Default separator variant."},"gradient":{"root":"data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent dark:via-indigo-500 data-[orientation=vertical]:bg-gradient-to-b data-[orientation=vertical]:from-transparent data-[orientation=vertical]:via-indigo-400 data-[orientation=vertical]:to-transparent data-[orientation=vertical]:dark:via-indigo-500","elements":{"text":"text-indigo-700 dark:text-indigo-300"},"description":"A gradient separator that transitions smoothly between colors"},"dotted":{"root":"data-[orientation=horizontal]:h-[3px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[3px] bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#cbd5e1_2px,#cbd5e1_4px)] dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#475569_2px,#475569_4px)] data-[orientation=vertical]:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#cbd5e1_2px,#cbd5e1_4px)] dark:data-[orientation=vertical]:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#475569_2px,#475569_4px)]","elements":{"text":"text-slate-700 dark:text-slate-300"},"description":"A stylish dot pattern separator"},"rainbow":{"root":"data-[orientation=horizontal]:h-[2px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[2px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 data-[orientation=vertical]:bg-gradient-to-b data-[orientation=vertical]:from-red-500 data-[orientation=vertical]:via-purple-500 data-[orientation=vertical]:to-blue-500","elements":{"text":"text-violet-700 dark:text-violet-300 font-medium"},"description":"A colorful, rainbow gradient separator"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const SeparatorComponent = ({
  variant = 'default',
  orientation = 'horizontal',
  decorative = false,
  className = '',
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-gray-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px","elements":{},"description":"Default separator variant."},"gradient":{"root":"data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent dark:via-indigo-500 data-[orientation=vertical]:bg-gradient-to-b data-[orientation=vertical]:from-transparent data-[orientation=vertical]:via-indigo-400 data-[orientation=vertical]:to-transparent data-[orientation=vertical]:dark:via-indigo-500","elements":{"text":"text-indigo-700 dark:text-indigo-300"},"description":"A gradient separator that transitions smoothly between colors"},"dotted":{"root":"data-[orientation=horizontal]:h-[3px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[3px] bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#cbd5e1_2px,#cbd5e1_4px)] dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#475569_2px,#475569_4px)] data-[orientation=vertical]:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#cbd5e1_2px,#cbd5e1_4px)] dark:data-[orientation=vertical]:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#475569_2px,#475569_4px)]","elements":{"text":"text-slate-700 dark:text-slate-300"},"description":"A stylish dot pattern separator"},"rainbow":{"root":"data-[orientation=horizontal]:h-[2px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[2px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 data-[orientation=vertical]:bg-gradient-to-b data-[orientation=vertical]:from-red-500 data-[orientation=vertical]:via-purple-500 data-[orientation=vertical]:to-blue-500","elements":{"text":"text-violet-700 dark:text-violet-300 font-medium"},"description":"A colorful, rainbow gradient separator"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


  return (
    <Separator.Root
      className={classNames(
        'data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px',
        getStyle(variant, 'root'),
        className
      )}
      orientation={orientation}
      decorative={decorative}
      {...props}
    />
  );
};

// Demo wrapper component to show different use cases
const SeparatordemoComponent = ({
  variant = 'default',
  showVertical = true,
  className = '',
}) => {
  return (
    <div className={classNames('w-full max-w-[300px] mx-auto', className)}>
      {/* Horizontal separator example */}
      <div className={getStyle(variant, 'text')}>
        <div className="font-medium">Radix Primitives</div>
        <div>An open-source UI component library.</div>
      </div>

      <SeparatorComponent variant={variant} className="my-[15px]" />

      {/* Vertical separator example */}
      {showVertical && (
        <div className="flex h-5 items-center">
          <div className={getStyle(variant, 'text')}>Blog</div>
          <SeparatorComponent
            variant={variant}
            className="mx-[15px]"
            decorative
            orientation="vertical"
          />
          <div className={getStyle(variant, 'text')}>Docs</div>
          <SeparatorComponent
            variant={variant}
            className="mx-[15px]"
            decorative
            orientation="vertical"
          />
          <div className={getStyle(variant, 'text')}>Source</div>
        </div>
      )}
    </div>
  );
};

export default SeparatordemoComponent;
