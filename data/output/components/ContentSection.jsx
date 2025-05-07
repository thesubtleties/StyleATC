import React from 'react';

const ContentSection = ({
  title,
  subtitle,
  children,
  align = 'left',
  spacing = 'default',
  ...props
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  
  const spacingClasses = {
    compact: 'mb-6',
    default: 'mb-12',
    large: 'mb-20'
  };
  
  return (
    <section className={`${spacingClasses[spacing]}`} {...props}>
      <div className={`max-w-4xl ${alignClasses[align]}`}>
        {title && (
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
        )}
        {subtitle && (
          <p className="text-xl text-gray-500 mb-6">{subtitle}</p>
        )}
        <div className="prose prose-lg prose-[#ff41b4]:prose-a:text-[#ff41b4] prose-headings:font-bold">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;