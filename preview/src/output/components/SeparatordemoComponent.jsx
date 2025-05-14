import * as React from 'react';
import { Separator } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-gray-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px","elements":{},"description":"Default separator variant."},"gradient":{"root":"data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent dark:via-indigo-500 data-[orientation=vertical]:bg-gradient-to-b data-[orientation=vertical]:from-transparent data-[orientation=vertical]:via-indigo-400 data-[orientation=vertical]:to-transparent data-[orientation=vertical]:dark:via-indigo-500","elements":{"text":"text-indigo-700 dark:text-indigo-300"},"description":"A gradient separator that transitions smoothly between colors"},"dotted":{"root":"data-[orientation=horizontal]:h-[3px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[3px] bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#cbd5e1_2px,#cbd5e1_4px)] dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#475569_2px,#475569_4px)] data-[orientation=vertical]:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#cbd5e1_2px,#cbd5e1_4px)] dark:data-[orientation=vertical]:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#475569_2px,#475569_4px)]","elements":{"text":"text-slate-700 dark:text-slate-300"},"description":"A stylish dot pattern separator"},"elevated":{"root":"data-[orientation=horizontal]:h-[10px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[10px] bg-gradient-to-b from-transparent via-gray-200 to-transparent dark:via-gray-700 shadow-[0_3px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_3px_5px_rgba(0,0,0,0.3)] rounded-full","elements":{"text":"text-gray-800 dark:text-gray-200 font-medium"},"description":"A thick, elevated separator with shadow effect"},"double":{"root":"data-[orientation=horizontal]:h-[12px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[12px] relative after:absolute after:bg-slate-300 after:dark:bg-slate-600 after:data-[orientation=horizontal]:h-[1px] after:data-[orientation=horizontal]:w-full after:data-[orientation=vertical]:h-full after:data-[orientation=vertical]:w-[1px] after:top-[3px] after:left-0 before:absolute before:bg-slate-300 before:dark:bg-slate-600 before:data-[orientation=horizontal]:h-[1px] before:data-[orientation=horizontal]:w-full before:data-[orientation=vertical]:h-full before:data-[orientation=vertical]:w-[1px] before:bottom-[3px] before:left-0 before:data-[orientation=vertical]:left-[3px] before:data-[orientation=vertical]:top-0 before:data-[orientation=vertical]:bottom-auto before:data-[orientation=vertical]:right-auto after:data-[orientation=vertical]:left-[9px] after:data-[orientation=vertical]:top-0 after:data-[orientation=vertical]:bottom-auto after:data-[orientation=vertical]:right-auto","elements":{"text":"text-slate-700 dark:text-slate-300"},"description":"A double-line separator for a more decorative look"},"rainbow":{"root":"data-[orientation=horizontal]:h-[2px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[2px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 data-[orientation=vertical]:bg-gradient-to-b data-[orientation=vertical]:from-red-500 data-[orientation=vertical]:via-purple-500 data-[orientation=vertical]:to-blue-500","elements":{"text":"text-violet-700 dark:text-violet-300 font-medium"},"description":"A colorful, rainbow gradient separator"},"ornate":{"root":"data-[orientation=horizontal]:h-[20px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[20px] flex items-center justify-center after:content-[\'\'] after:h-px after:flex-grow after:bg-gray-300 dark:after:bg-gray-600 before:content-[\'\'] before:h-px before:flex-grow before:bg-gray-300 dark:before:bg-gray-600 data-[orientation=vertical]:flex-col data-[orientation=vertical]:after:h-full data-[orientation=vertical]:after:w-px data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:w-px","elements":{"text":"text-gray-800 dark:text-gray-200"},"description":"A decorative ornate separator with a center accent"},"animated":{"root":"data-[orientation=horizontal]:h-[3px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[3px] bg-[linear-gradient(45deg,transparent_25%,#3b82f6_25%,#3b82f6_50%,transparent_50%,transparent_75%,#3b82f6_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,#60a5fa_25%,#60a5fa_50%,transparent_50%,transparent_75%,#60a5fa_75%)] bg-[length:20px_20px] animate-[animatedBackground_2s_linear_infinite] data-[orientation=vertical]:bg-[linear-gradient(45deg,transparent_25%,#3b82f6_25%,#3b82f6_50%,transparent_50%,transparent_75%,#3b82f6_75%)] dark:data-[orientation=vertical]:bg-[linear-gradient(45deg,transparent_25%,#60a5fa_25%,#60a5fa_50%,transparent_50%,transparent_75%,#60a5fa_75%)]","elements":{"text":"text-blue-700 dark:text-blue-300 font-medium"},"description":"A dashed separator with animated movement"},"crayon":{"root":"data-[orientation=horizontal]:h-[5px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[5px] relative overflow-visible after:absolute after:bg-[url(\\"data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 20\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0 Q40,5 80,0 Q120,5 160,0 Q200,5 240,0 Q280,5 320,0 Q360,5 400,0 Q440,5 480,0 Q520,5 560,0 Q600,5 640,0 Q680,5 720,0 Q760,5 800,0 L800,20 L0,20 Z\' fill=\'%23ec4899\'/%3E%3C/svg%3E\\")] after:dark:bg-[url(\\"data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 20\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0 Q40,5 80,0 Q120,5 160,0 Q200,5 240,0 Q280,5 320,0 Q360,5 400,0 Q440,5 480,0 Q520,5 560,0 Q600,5 640,0 Q680,5 720,0 Q760,5 800,0 L800,20 L0,20 Z\' fill=\'%23db2777\'/%3E%3C/svg%3E\\")] after:bg-repeat-x after:w-full after:h-full after:left-0 after:top-0 after:opacity-80 after:data-[orientation=vertical]:rotate-90 after:data-[orientation=vertical]:origin-top-left after:data-[orientation=vertical]:h-[200%] after:data-[orientation=vertical]:w-[500%]","elements":{"text":"text-pink-600 dark:text-pink-400 font-bold"},"description":"A playful separator that looks like it was drawn with a crayon"},"crayon-alt":{"root":"data-[orientation=horizontal]:h-[8px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[8px] bg-[repeating-linear-gradient(45deg,#f472b6,#f472b6_10px,#f9a8d4_10px,#f9a8d4_20px)] dark:bg-[repeating-linear-gradient(45deg,#db2777,#db2777_10px,#ec4899_10px,#ec4899_20px)] rounded-full shadow-sm opacity-90 data-[orientation=vertical]:bg-[repeating-linear-gradient(45deg,#f472b6,#f472b6_10px,#f9a8d4_10px,#f9a8d4_20px)] dark:data-[orientation=vertical]:bg-[repeating-linear-gradient(45deg,#db2777,#db2777_10px,#ec4899_10px,#ec4899_20px)]","elements":{"text":"text-pink-600 dark:text-pink-400 font-bold"},"description":"A wavy, hand-drawn separator that looks like crayon"}}');
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
const allVariantStyles = JSON.parse('{"default":{"root":"bg-gray-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px","elements":{},"description":"Default separator variant."},"gradient":{"root":"data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent dark:via-indigo-500 data-[orientation=vertical]:bg-gradient-to-b data-[orientation=vertical]:from-transparent data-[orientation=vertical]:via-indigo-400 data-[orientation=vertical]:to-transparent data-[orientation=vertical]:dark:via-indigo-500","elements":{"text":"text-indigo-700 dark:text-indigo-300"},"description":"A gradient separator that transitions smoothly between colors"},"dotted":{"root":"data-[orientation=horizontal]:h-[3px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[3px] bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#cbd5e1_2px,#cbd5e1_4px)] dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#475569_2px,#475569_4px)] data-[orientation=vertical]:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#cbd5e1_2px,#cbd5e1_4px)] dark:data-[orientation=vertical]:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#475569_2px,#475569_4px)]","elements":{"text":"text-slate-700 dark:text-slate-300"},"description":"A stylish dot pattern separator"},"elevated":{"root":"data-[orientation=horizontal]:h-[10px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[10px] bg-gradient-to-b from-transparent via-gray-200 to-transparent dark:via-gray-700 shadow-[0_3px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_3px_5px_rgba(0,0,0,0.3)] rounded-full","elements":{"text":"text-gray-800 dark:text-gray-200 font-medium"},"description":"A thick, elevated separator with shadow effect"},"double":{"root":"data-[orientation=horizontal]:h-[12px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[12px] relative after:absolute after:bg-slate-300 after:dark:bg-slate-600 after:data-[orientation=horizontal]:h-[1px] after:data-[orientation=horizontal]:w-full after:data-[orientation=vertical]:h-full after:data-[orientation=vertical]:w-[1px] after:top-[3px] after:left-0 before:absolute before:bg-slate-300 before:dark:bg-slate-600 before:data-[orientation=horizontal]:h-[1px] before:data-[orientation=horizontal]:w-full before:data-[orientation=vertical]:h-full before:data-[orientation=vertical]:w-[1px] before:bottom-[3px] before:left-0 before:data-[orientation=vertical]:left-[3px] before:data-[orientation=vertical]:top-0 before:data-[orientation=vertical]:bottom-auto before:data-[orientation=vertical]:right-auto after:data-[orientation=vertical]:left-[9px] after:data-[orientation=vertical]:top-0 after:data-[orientation=vertical]:bottom-auto after:data-[orientation=vertical]:right-auto","elements":{"text":"text-slate-700 dark:text-slate-300"},"description":"A double-line separator for a more decorative look"},"rainbow":{"root":"data-[orientation=horizontal]:h-[2px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[2px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 data-[orientation=vertical]:bg-gradient-to-b data-[orientation=vertical]:from-red-500 data-[orientation=vertical]:via-purple-500 data-[orientation=vertical]:to-blue-500","elements":{"text":"text-violet-700 dark:text-violet-300 font-medium"},"description":"A colorful, rainbow gradient separator"},"ornate":{"root":"data-[orientation=horizontal]:h-[20px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[20px] flex items-center justify-center after:content-[\'\'] after:h-px after:flex-grow after:bg-gray-300 dark:after:bg-gray-600 before:content-[\'\'] before:h-px before:flex-grow before:bg-gray-300 dark:before:bg-gray-600 data-[orientation=vertical]:flex-col data-[orientation=vertical]:after:h-full data-[orientation=vertical]:after:w-px data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:w-px","elements":{"text":"text-gray-800 dark:text-gray-200"},"description":"A decorative ornate separator with a center accent"},"animated":{"root":"data-[orientation=horizontal]:h-[3px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[3px] bg-[linear-gradient(45deg,transparent_25%,#3b82f6_25%,#3b82f6_50%,transparent_50%,transparent_75%,#3b82f6_75%)] dark:bg-[linear-gradient(45deg,transparent_25%,#60a5fa_25%,#60a5fa_50%,transparent_50%,transparent_75%,#60a5fa_75%)] bg-[length:20px_20px] animate-[animatedBackground_2s_linear_infinite] data-[orientation=vertical]:bg-[linear-gradient(45deg,transparent_25%,#3b82f6_25%,#3b82f6_50%,transparent_50%,transparent_75%,#3b82f6_75%)] dark:data-[orientation=vertical]:bg-[linear-gradient(45deg,transparent_25%,#60a5fa_25%,#60a5fa_50%,transparent_50%,transparent_75%,#60a5fa_75%)]","elements":{"text":"text-blue-700 dark:text-blue-300 font-medium"},"description":"A dashed separator with animated movement"},"crayon":{"root":"data-[orientation=horizontal]:h-[5px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[5px] relative overflow-visible after:absolute after:bg-[url(\\"data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 20\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0 Q40,5 80,0 Q120,5 160,0 Q200,5 240,0 Q280,5 320,0 Q360,5 400,0 Q440,5 480,0 Q520,5 560,0 Q600,5 640,0 Q680,5 720,0 Q760,5 800,0 L800,20 L0,20 Z\' fill=\'%23ec4899\'/%3E%3C/svg%3E\\")] after:dark:bg-[url(\\"data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 800 20\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0 Q40,5 80,0 Q120,5 160,0 Q200,5 240,0 Q280,5 320,0 Q360,5 400,0 Q440,5 480,0 Q520,5 560,0 Q600,5 640,0 Q680,5 720,0 Q760,5 800,0 L800,20 L0,20 Z\' fill=\'%23db2777\'/%3E%3C/svg%3E\\")] after:bg-repeat-x after:w-full after:h-full after:left-0 after:top-0 after:opacity-80 after:data-[orientation=vertical]:rotate-90 after:data-[orientation=vertical]:origin-top-left after:data-[orientation=vertical]:h-[200%] after:data-[orientation=vertical]:w-[500%]","elements":{"text":"text-pink-600 dark:text-pink-400 font-bold"},"description":"A playful separator that looks like it was drawn with a crayon"},"crayon-alt":{"root":"data-[orientation=horizontal]:h-[8px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[8px] bg-[repeating-linear-gradient(45deg,#f472b6,#f472b6_10px,#f9a8d4_10px,#f9a8d4_20px)] dark:bg-[repeating-linear-gradient(45deg,#db2777,#db2777_10px,#ec4899_10px,#ec4899_20px)] rounded-full shadow-sm opacity-90 data-[orientation=vertical]:bg-[repeating-linear-gradient(45deg,#f472b6,#f472b6_10px,#f9a8d4_10px,#f9a8d4_20px)] dark:data-[orientation=vertical]:bg-[repeating-linear-gradient(45deg,#db2777,#db2777_10px,#ec4899_10px,#ec4899_20px)]","elements":{"text":"text-pink-600 dark:text-pink-400 font-bold"},"description":"A wavy, hand-drawn separator that looks like crayon"}}');
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
