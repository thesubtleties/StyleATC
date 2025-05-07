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
  /* INJECT_VARIANT_STYLING_LOGIC */

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
