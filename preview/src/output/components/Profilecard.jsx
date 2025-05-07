import React from 'react';
import classNames from 'classnames';
import Card from './Card';

const ProfileCard = ({
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
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"bg-white shadow-md rounded-lg overflow-hidden","elements":{"avatar":"border-gray-200","name":"text-gray-900","title":"text-gray-600","description":"text-gray-700 text-sm","statssection":"border-gray-200","statvalue":"text-gray-900","statlabel":"text-gray-500 uppercase","primarybutton":"bg-blue-600 text-white hover:bg-blue-700 transition-colors","secondarybutton":"bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"},"description":"Default ProfileCard variant."}}');
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
    <Card
      variant="elevated"
      className={classNames('max-w-sm', getStyle('root'), className)}
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
                  getStyle('avatar')
                )}
              />
            </div>
          )}
          <div>
            <h3 className={classNames('text-lg font-bold', getStyle('name'))}>
              {name}
            </h3>
            {title && (
              <p className={classNames('text-sm', getStyle('title'))}>
                {title}
              </p>
            )}
          </div>
        </div>

        {description && (
          <p className={classNames('mb-4', getStyle('description'))}>
            {description}
          </p>
        )}

        {stats.length > 0 && (
          <div
            className={classNames(
              'flex justify-between border-t border-b py-3 mb-4',
              getStyle('statsSection')
            )}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={classNames(
                    'text-lg font-bold',
                    getStyle('statValue')
                  )}
                >
                  {stat.value}
                </div>
                <div className={classNames('text-xs', getStyle('statLabel'))}>
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
                    ? getStyle('primaryButton')
                    : getStyle('secondaryButton')
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

export default ProfileCard;
