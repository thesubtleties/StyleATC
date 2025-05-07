import React from 'react';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '',
  ...props 
}) => {
  const baseClasses = "rounded-[0.25rem] overflow-hidden";
  
  const variantClasses = {
    default: "bg-white shadow-[0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)]",
    elevated: "bg-white shadow-[0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)] hover:shadow-[0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)] transition-shadow duration-300",
    bordered: "bg-white border border-gray-200",
    flat: "bg-gray-50",
    interactive: "bg-white shadow-[0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)] hover:shadow-[0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)] hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;

// Usage examples:
// <Card>Basic card content</Card>
// <Card variant="elevated">Elevated card with hover effect</Card>
// <Card variant="interactive">Interactive card</Card>