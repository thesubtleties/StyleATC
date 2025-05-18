import React from 'react';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"w-full py-8","elements":{"container":"w-full px-4","title":"text-3xl font-bold tracking-tight","subtitle":"text-xl text-muted-foreground","content":"prose prose-lg max-w-none prose-headings:font-bold prose-p:text-muted-foreground prose-a:text-primary"},"description":"A modern, responsive content section with customizable alignment and spacing options."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const ContentSectionComponent = ({
  title,
  subtitle,
  children,
  align = 'left',
  spacing = 'default',
  variant = 'default',
  className = '',
  ...props
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const spacingClasses = {
    compact: 'mb-6',
    default: 'mb-12',
    large: 'mb-20',
  };

  return (
    <section
      className={classNames(
        spacingClasses[spacing],
        getStyle(variant, 'root'),
        className
      )}
      {...props}
    >
      <div
        className={classNames(
          `max-w-4xl ${alignClasses[align]}`,
          getStyle(variant, 'container')
        )}
      >
        {title && (
          <h2
            className={classNames(
              'text-3xl font-bold mb-3',
              getStyle(variant, 'title')
            )}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p
            className={classNames(
              'text-xl mb-6',
              getStyle(variant, 'subtitle')
            )}
          >
            {subtitle}
          </p>
        )}
        <div
          className={classNames(
            'prose prose-lg prose-headings:font-bold',
            getStyle(variant, 'content')
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSectionComponent;
