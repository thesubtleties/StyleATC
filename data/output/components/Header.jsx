import React from 'react';
import classNames from 'classnames';

const HeaderComponent = ({
  logo,
  title,
  navItems = [],
  actions = [],
  variant = 'default',
  className = '',
  colors,
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-white shadow","elements":{"logoContainer":"flex-1","logo":"flex items-center","nav":"items-center","navItem":"text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-primary transition-colors duration-200","actionsContainer":"ml-4","primaryAction":"bg-primary text-white hover:bg-primary/90 transition-colors shadow-md rounded-md","secondaryAction":"bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 transition-colors"},"description":"Default header variant."},"ocean-header":{"root":"bg-white shadow bg-gradient-to-r from-primary/10 to-white shadow-sm","elements":{},"description":"A header with a subtle gradient from our primary color to white"}}');
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
    <header
      className={classNames(
        'w-full px-4 sm:px-6 lg:px-8',
        getStyle('root'),
        className
      )}
      {...props}
      style={{
        '--primary': colors?.primary,
        '--secondary': colors?.secondary,
        '--accent': colors?.accent,
        '--background': colors?.background,
        '--text': colors?.text,
      }}
    >
      <div className="flex h-16 items-center justify-between">
        <div
          className={classNames('flex items-center', getStyle('logoContainer'))}
        >
          {logo && (
            <div className={classNames('flex-shrink-0', getStyle('logo'))}>
              {typeof logo === 'string' ? (
                <img className="h-8 w-auto" src={logo} alt={title || 'Logo'} />
              ) : (
                logo
              )}
            </div>
          )}
          {title && (
            <div
              className={classNames(
                `ml-${logo ? '4' : '0'} text-xl font-bold text-[var(--primary)]`
              )}
            >
              {title}
            </div>
          )}
        </div>

        <nav
          className={classNames('hidden md:flex space-x-8', getStyle('nav'))}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={classNames(
                'inline-flex items-center px-1 pt-1 text-sm font-medium',
                getStyle('navItem')
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div
          className={classNames(
            'flex items-center space-x-4',
            getStyle('actionsContainer')
          )}
        >
          {actions.map((action, index) => (
            <button
              key={index}
              className={classNames(
                'px-3 py-1 text-sm rounded',
                index === 0
                  ? getStyle('primaryAction')
                  : getStyle('secondaryAction')
              )}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
