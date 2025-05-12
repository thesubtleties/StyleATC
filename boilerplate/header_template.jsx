import React from 'react';
import classNames from 'classnames';

/* INJECT_VARIANT_STYLING_LOGIC */

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
                `ml-${logo ? '4' : '0'} text-xl font-bold text-[var(--primary)]`
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
