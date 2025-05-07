import React from 'react';
import Card from './Card';

const ProfileCard = ({ 
  name, 
  title, 
  avatarUrl, 
  description, 
  stats = [],
  actions = [],
  ...props 
}) => {
  return (
    <Card variant="elevated" className="max-w-sm" {...props}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {avatarUrl && (
            <div className="mr-4">
              <img 
                src={avatarUrl} 
                alt={`${name}'s avatar`} 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#ff41b4]" 
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            {title && <p className="text-sm text-gray-500">{title}</p>}
          </div>
        </div>
        
        {description && (
          <p className="text-gray-700 mb-4">{description}</p>
        )}
        
        {stats.length > 0 && (
          <div className="flex justify-between border-t border-b border-gray-100 py-3 mb-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-[#ff41b4]">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {actions.length > 0 && (
          <div className="flex space-x-2">
            {actions.map((action, index) => (
              <button 
                key={index}
                className={`px-3 py-1 text-sm rounded-[{{BORDER_RADIUS}}] ${
                  index === 0 
                    ? 'bg-[#ff41b4] text-white' 
                    : 'border border-gray-300 text-gray-700'
                }`}
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