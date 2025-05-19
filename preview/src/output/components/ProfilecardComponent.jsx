import React from 'react';
import classNames from 'classnames';
import { BaseCard as Card } from './CardComponent';

/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 bg-white text-white focus:ring-white","elements":{"avatar":"rounded-full w-20 h-20 border-2 border-gray-100 shadow-sm mb-4","name":"font-semibold text-lg text-gray-800 mb-1 text-global.colors.text.primary","root":"p-6 flex flex-col items-center","title":"text-sm text-gray-500 mb-3","description":"text-sm text-gray-600 mb-6 text-center","statsSection":"flex justify-around w-full py-4 mb-6 border-t border-b border-gray-100","statValue":"text-lg font-bold text-gray-800 text-center","statLabel":"text-xs font-medium text-gray-500 text-center","primaryButton":"px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors mr-3","secondaryButton":"px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg border border-gray-200 transition-colors","header":"hidden"},"description":"Clean, modern profile card with subtle shadows and minimal design."},"ocean":{"root":"rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden bg-gradient-to-b from-white to-oceanfoam/30 border border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300","elements":{"header":"h-32 w-full bg-gradient-to-r from-blue-500 to-teal-400 -mt-6 -mx-6 mb-4","root":"p-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-teal-100 border border-blue-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-300","avatar":"rounded-full w-16 h-16 border-4 border-white shadow-lg","name":"font-bold text-lg text-blue-800","title":"text-sm font-medium text-teal-600","description":"text-sm text-blue-700","statsSection":"flex justify-between border-t border-b border-blue-200/60 py-3 mb-4 bg-blue-50/40","statValue":"text-lg font-bold text-blue-800","statLabel":"text-xs font-medium text-teal-600","primaryButton":"px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200","secondaryButton":"px-4 py-2 bg-white border border-teal-400 hover:bg-blue-50 text-blue-700 font-medium rounded-lg transition-colors"},"description":"Ocean-themed profile card with subtle gradient background and smooth hover animations"}}');
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
      variant={variant}
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
