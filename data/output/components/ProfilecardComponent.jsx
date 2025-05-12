import React from 'react';
import classNames from 'classnames';
import { BaseCard as Card } from './CardComponent';

/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"p-6 rounded-lg shadow-md bg-white text-white focus:ring-white","elements":{"avatar":"rounded-full w-16 h-16","name":"font-semibold text-lg text-global.colors.text.primary"},"description":"Default profile card style."},"ocean":{"root":"p-6 rounded-lg shadow-md rounded-xl overflow-hidden bg-gradient-to-b from-white to-oceanfoam/30 border border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300","elements":{"header":"h-32 w-full bg-gradient-to-r from-primary to-deepocean"},"description":"Ocean-themed profile card with subtle gradient background and smooth hover animations"}}');
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
