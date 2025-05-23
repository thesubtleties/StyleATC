import React from 'react';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-white border-b border-gray-100 py-3","elements":{"logoContainer":"flex-1 flex items-center","logo":"font-semibold text-xl text-primary-600","nav":"flex items-center space-x-6 mx-6","navItem":"text-gray-600 font-medium hover:text-gray-900 px-1 py-2 transition-colors duration-200","actionsContainer":"flex items-center space-x-3","primaryAction":"px-4 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors","secondaryAction":"px-4 py-2 bg-white text-gray-600 font-medium border border-gray-200 rounded-md hover:bg-gray-50 hover:text-gray-800 transition-colors","companyName":"font-bold text-xl text-primary-600 tracking-tight"},"description":"Default header variant."},"ocean":{"root":"bg-white border-b border-gray-100 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 py-6 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/20 before:via-transparent before:to-cyan-400/20 before:animate-pulse before:duration-[3000ms] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.3),transparent_50%)] shadow-lg shadow-blue-500/20","elements":{"logo":"font-black text-2xl text-white drop-shadow-lg relative z-10 bg-gradient-to-br from-white to-cyan-100 bg-clip-text text-transparent animate-swing hover:animate-wiggle cursor-pointer","navItem":"text-white/90 font-semibold hover:text-white px-4 py-2 transition-all duration-300 ease-out relative z-10 hover:bg-white/10 rounded-lg backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg hover:shadow-white/10 transform hover:scale-105 animate-fadeInUp hover:animate-wiggle","primaryAction":"px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 hover:text-blue-700 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 ease-out relative z-10 transform hover:scale-105 active:scale-95 border border-blue-100 animate-bounceIn hover:animate-pulse","secondaryAction":"px-6 py-3 bg-transparent text-white font-semibold border-2 border-white/40 rounded-xl hover:bg-white/15 hover:border-white/60 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 ease-out relative z-10 backdrop-blur-sm transform hover:scale-105 active:scale-95 animate-fadeInUp hover:animate-wiggle","companyName":"font-black text-3xl text-white drop-shadow-xl tracking-wide relative z-10 bg-gradient-to-br from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent hover:animate-swing transition-transform duration-300 cursor-pointer animate-fadeInUp"},"description":"Immersive ocean header with flowing gradients, animated waves, glowing effects, and depth layering that captures the beauty of tropical waters"}}');
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
