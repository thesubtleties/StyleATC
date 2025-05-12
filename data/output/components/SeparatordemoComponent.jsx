import * as React from 'react';
import { Separator } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-gray-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px","elements":{},"description":"Default separator variant."}}');
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
const allVariantStyles = JSON.parse('{"default":{"root":"bg-gray-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px","elements":{},"description":"Default separator variant."}}');
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
