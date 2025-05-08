import React from 'react';
import classNames from 'classnames';

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

  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <section
      className={classNames(
        spacingClasses[spacing],
        getStyle('root'),
        className
      )}
      {...props}
    >
      <div
        className={classNames(
          `max-w-4xl ${alignClasses[align]}`,
          getStyle('container')
        )}
      >
        {title && (
          <h2
            className={classNames('text-3xl font-bold mb-3', getStyle('title'))}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={classNames('text-xl mb-6', getStyle('subtitle'))}>
            {subtitle}
          </p>
        )}
        <div
          className={classNames(
            'prose prose-lg prose-headings:font-bold',
            getStyle('content')
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSectionComponent;
