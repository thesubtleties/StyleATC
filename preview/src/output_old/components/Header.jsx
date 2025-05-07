import React from 'react';

const Header = ({ 
  logo, 
  title, 
  navItems = [], 
  actions = [],
  variant = 'default',
  ...props 
}) => {
  const baseClasses = "w-full px-4 sm:px-6 lg:px-8";
  
  const variantClasses = {
    default: "bg-white border-b border-gray-200",
    transparent: "bg-transparent",
    colored: "bg-[#4F46E5] text-white",
    dark: "bg-gray-900 text-white"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]}`;
  
  return (
    <header className={classes} {...props}>
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          {logo && (
            <div className="flex-shrink-0">
              {typeof logo === 'string' ? (
                <img className="h-8 w-auto" src={logo} alt={title || "Logo"} />
              ) : (
                logo
              )}
            </div>
          )}
          {title && (
            <div className={`ml-${logo ? '4' : '0'} text-xl font-bold`}>
              {title}
            </div>
          )}
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                variant === 'default' || variant === 'transparent'
                  ? 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-[#4F46E5]'
                  : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`px-3 py-1 text-sm rounded-[0.25rem] ${
                variant === 'default' || variant === 'transparent'
                  ? index === 0 
                    ? 'bg-[#4F46E5] text-white' 
                    : 'border border-gray-300 text-gray-700'
                  : index === 0
                    ? 'bg-white text-[#4F46E5]'
                    : 'border border-white text-white'
              }`}
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

export default Header;