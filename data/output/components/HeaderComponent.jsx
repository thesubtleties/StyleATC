import React from 'react';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-white border-b border-gray-100 py-3","elements":{"logoContainer":"flex-1 flex items-center","logo":"font-semibold text-xl text-primary-600","nav":"flex items-center space-x-6 mx-6","navItem":"text-gray-600 font-medium hover:text-gray-900 px-1 py-2 transition-colors duration-200","actionsContainer":"flex items-center space-x-3","primaryAction":"px-4 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors","secondaryAction":"px-4 py-2 bg-white text-gray-600 font-medium border border-gray-200 rounded-md hover:bg-gray-50 hover:text-gray-800 transition-colors","companyName":"font-bold text-xl text-primary-600 tracking-tight"},"description":"Default header variant."},"ocean-header":{"root":"bg-white border-b border-gray-100 py-3 bg-gradient-to-r from-primary/10 to-white border-b border-primary/10 shadow-sm","elements":{},"description":"A header with a subtle gradient from our primary color to white"},"ocean":{"root":"bg-white border-b border-gray-100 py-3 bg-gradient-to-r from-blue-500 to-teal-400 py-4","elements":{"logo":"font-bold text-xl text-white","navItem":"text-white/80 font-medium hover:text-white px-2 py-1 transition-colors duration-200","primaryAction":"px-4 py-2 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 shadow-sm transition-colors","secondaryAction":"px-4 py-2 bg-transparent text-white font-medium border border-white/30 rounded-md hover:bg-white/10 transition-colors","companyName":"font-extrabold text-2xl text-white drop-shadow-md tracking-wide"},"description":"A vibrant ocean-themed header with a blue-to-teal gradient."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


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
  return (
    <header
      className={classNames(
        'w-full px-4 sm:px-6 lg:px-8',
        getStyle(variant, 'root'),
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
          className={classNames(
            'flex items-center',
            getStyle(variant, 'logoContainer')
          )}
        >
          {logo && (
            <div
              className={classNames('flex-shrink-0', getStyle(variant, 'logo'))}
            >
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
                `ml-${logo ? '4' : '0'}`,
                getStyle(variant, 'companyName')
              )}
            >
              {title}
            </div>
          )}
        </div>

        <nav
          className={classNames(
            'hidden md:flex space-x-8',
            getStyle(variant, 'nav')
          )}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={classNames(
                'inline-flex items-center px-1 pt-1 text-sm font-medium',
                getStyle(variant, 'navItem')
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div
          className={classNames(
            'flex items-center space-x-4',
            getStyle(variant, 'actionsContainer')
          )}
        >
          {actions.map((action, index) => (
            <button
              key={index}
              className={classNames(
                'px-3 py-1 text-sm rounded',
                index === 0
                  ? getStyle(variant, 'primaryAction')
                  : getStyle(variant, 'secondaryAction')
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
