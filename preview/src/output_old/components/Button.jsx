import React from 'react';

const Button = React.forwardRef(({ children, variant = 'primary', size = 'md', ...props }, forwardedRef) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";
  
  const variantClasses = {
    primary: "bg-[#4F46E5] text-white hover:bg-opacity-90 focus:ring-[#4F46E5]",
    secondary: "bg-[#EC4899] text-white hover:bg-opacity-90 focus:ring-[#EC4899]",
    outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-[#4F46E5]",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-[#4F46E5]"
  };
  
  const sizeClasses = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
  
  return (
    <button 
      className={classes} 
      {...props}
      ref={forwardedRef}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;