import React from 'react';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200","elements":{"title":"text-lg font-medium mb-2 text-gray-900","content":"text-sm text-gray-600"},"description":"Standard card with subtle hover effect."},"elevated":{"root":"rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100","elements":{"title":"text-xl font-semibold mb-2 text-gray-800","content":"text-base text-gray-600"},"description":"Card with increased elevation and shadow."},"flat":{"root":"rounded-xl bg-gray-50 p-6 border-0 shadow-none hover:bg-gray-100 transition-colors duration-200","elements":{"title":"text-lg font-medium mb-2 text-gray-700","content":"text-sm text-gray-500"},"description":"Minimal card with a truly flat appearance and subtle gray background."},"dark":{"root":"rounded-xl bg-gray-800 p-6 shadow-lg hover:shadow-xl hover:shadow-gray-700/50 transition-shadow duration-200 border border-gray-700","elements":{"title":"text-xl font-semibold mb-2 text-white","content":"text-base text-gray-300"},"description":"Dark-themed card for interfaces with a dark mode."},"gradient-accent":{"root":"rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 border-t-4 border-t-transparent bg-clip-border [border-image:linear-gradient(to_right,#3b82f6,#8b5cf6)_1_0_0_0]","elements":{"title":"text-lg font-semibold mb-2 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600","content":"text-base text-gray-600"},"description":"Card with a subtle gradient accent on the top border."},"interactive":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:scale-[1.02] hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 transition-all duration-200 cursor-pointer","elements":{"title":"text-lg font-medium mb-2 text-blue-700","content":"text-sm text-gray-600"},"description":"Card designed for interaction, with hover transform and focus states."},"success":{"root":"rounded-xl bg-green-50 border border-green-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200","elements":{"title":"text-lg font-medium mb-2 text-green-700","content":"text-sm text-green-600"},"description":"Card for success messages or positive affirmations."},"ocean":{"root":"rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 via-blue-100 to-teal-100 p-6 shadow-md hover:shadow-lg transition-all duration-300","elements":{"title":"text-lg font-medium mb-2 text-blue-800","content":"text-sm text-blue-600"},"description":"An ocean-themed card with a gentle blue-teal gradient and subtle wave-like shadows."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


// --- Internal Primitives for the Composable Card ---
const CardRootPrimitive = React.forwardRef(
  ({ children, variant = 'default', className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          'overflow-hidden',
          getStyle(variant, 'root'),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardRootPrimitive.displayName = 'CardRootPrimitive';

const CardTitlePrimitive = ({
  children,
  variant = 'default',
  className = '',
  as: Component = 'h3',
  ...props
}) => {
  return (
    <Component
      className={classNames(getStyle(variant, 'title'), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
CardTitlePrimitive.displayName = 'CardTitlePrimitive';

const CardContentPrimitive = ({
  children,
  variant = 'default',
  className = '',
  as: Component = 'p',
  ...props
}) => {
  return (
    <Component
      className={classNames(getStyle(variant, 'content'), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
CardContentPrimitive.displayName = 'CardContentPrimitive';

// ProfileCard will import this.
export const BaseCard = ({
  variant = 'default',
  children,
  className,
  ...props
}) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (
      React.isValidElement(child) &&
      (child.type === CardTitlePrimitive || child.type === CardContentPrimitive)
    ) {
      return React.cloneElement(child, { ...child.props, variant });
    }
    return child;
  });
  return (
    <CardRootPrimitive variant={variant} className={className} {...props}>
      {childrenWithProps}
    </CardRootPrimitive>
  );
};
BaseCard.displayName = 'BaseCard';
BaseCard.Title = CardTitlePrimitive;
BaseCard.Content = CardContentPrimitive;

const CardComponent = ({ variant = 'default', className = '', ...props }) => {
  const currentVariantInfo =
    allVariantStyles[variant] || allVariantStyles['default'];
  // Ensure variantNameCapitalized and description are derived correctly for the demo content
  const variantNameForDisplay =
    variant.charAt(0).toUpperCase() + variant.slice(1);

  const titleText = `${variantNameForDisplay} Card Title`;
  const contentText = `This is a ${variant} card component that demonstrates the styling for this variant.`;

  return (
    // Internally uses BaseCard to construct its view
    <BaseCard
      variant={variant}
      className={classNames('max-w-sm', className)}
      {...props}
    >
      <BaseCard.Title>{titleText}</BaseCard.Title>
      <BaseCard.Content>{contentText}</BaseCard.Content>
    </BaseCard>
  );
};
CardComponent.displayName = 'CardComponent'; // Important for React DevTools

export default CardComponent; // This is the default export, and the component is named CardComponent
