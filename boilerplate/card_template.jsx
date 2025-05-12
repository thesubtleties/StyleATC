import React from 'react';
import classNames from 'classnames';

/* INJECT_VARIANT_STYLING_LOGIC */

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
