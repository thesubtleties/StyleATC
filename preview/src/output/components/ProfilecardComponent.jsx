import React from 'react';
import classNames from 'classnames';
import { BaseCard as Card } from './CardComponent';

/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"p-6 rounded-lg shadow-md bg-white text-white focus:ring-white","elements":{"avatar":"rounded-full w-16 h-16 border-2 border-gray-200 dark:border-gray-600 shadow-sm","name":"font-semibold text-lg text-gray-900 dark:text-white text-global.colors.text.primary","root":"p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700","title":"text-sm text-gray-600 dark:text-gray-300","description":"text-sm text-gray-700 dark:text-gray-200","statsSection":"flex justify-between border-t border-b border-gray-200 dark:border-gray-700 py-3 mb-4","statValue":"text-lg font-bold text-gray-900 dark:text-white","statLabel":"text-xs text-gray-600 dark:text-gray-400","primaryButton":"px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors","secondaryButton":"px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded transition-colors dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"},"description":"Default profile card style."},"ocean":{"root":"p-6 rounded-lg shadow-md rounded-xl overflow-hidden bg-gradient-to-b from-white to-oceanfoam/30 border border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300","elements":{"header":"h-32 w-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 -mt-6 -mx-6 mb-4","root":"p-6 rounded-xl overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-blue-900 dark:to-blue-950 border border-blue-200 dark:border-blue-800 shadow-md hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300","avatar":"rounded-full w-16 h-16 border-2 border-white dark:border-blue-200 shadow-md","name":"font-semibold text-lg text-blue-800 dark:text-blue-100","title":"text-sm text-blue-600 dark:text-blue-300","description":"text-sm text-blue-700 dark:text-blue-200","statsSection":"flex justify-between border-t border-b border-blue-200 dark:border-blue-800 py-3 mb-4","statValue":"text-lg font-bold text-blue-800 dark:text-blue-100","statLabel":"text-xs text-blue-600 dark:text-blue-400","primaryButton":"px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors","secondaryButton":"px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium rounded-md transition-colors dark:bg-blue-800 dark:hover:bg-blue-700 dark:text-blue-100"},"description":"Ocean-themed profile card with subtle gradient background and smooth hover animations"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const ProfilecardComponent = ({
  name,
  title,
  avatarUrl,
  description,
  stats = [],
  actions = [],
  variant = 'default',
  className = '',
  ...props
}) => {
  return (
    <Card
      variant="elevated"
      className={classNames('max-w-sm', getStyle(variant, 'root'), className)}
      {...props}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          {avatarUrl && (
            <div className="mr-4">
              <img
                src={avatarUrl}
                alt={`${name}'s avatar`}
                className={classNames(
                  'w-16 h-16 rounded-full object-cover border-2',
                  getStyle(variant, 'avatar')
                )}
              />
            </div>
          )}
          <div>
            <h3
              className={classNames(
                'text-lg font-bold',
                getStyle(variant, 'name')
              )}
            >
              {name}
            </h3>
            {title && (
              <p className={classNames('text-sm', getStyle(variant, 'title'))}>
                {title}
              </p>
            )}
          </div>
        </div>

        {description && (
          <p className={classNames('mb-4', getStyle(variant, 'description'))}>
            {description}
          </p>
        )}

        {stats.length > 0 && (
          <div
            className={classNames(
              'flex justify-between border-t border-b py-3 mb-4',
              getStyle(variant, 'statsSection')
            )}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={classNames(
                    'text-lg font-bold',
                    getStyle(variant, 'statValue')
                  )}
                >
                  {stat.value}
                </div>
                <div
                  className={classNames(
                    'text-xs',
                    getStyle(variant, 'statLabel')
                  )}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {actions.length > 0 && (
          <div className="flex space-x-2">
            {actions.map((action, index) => (
              <button
                key={index}
                className={classNames(
                  'px-3 py-1 text-sm rounded',
                  index === 0
                    ? getStyle(variant, 'primaryButton')
                    : getStyle(variant, 'secondaryButton')
                )}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProfilecardComponent;
