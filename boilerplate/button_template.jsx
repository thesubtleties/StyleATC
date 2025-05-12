import React from 'react';
import classNames from 'classnames';

/* INJECT_VARIANT_STYLING_LOGIC */

const ButtonComponent = React.forwardRef(
  (
    { children, variant = 'default', size = 'md', className = '', ...props },
    forwardedRef
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';

    const sizeClasses = {
      sm: 'py-1 px-2 text-sm',
      md: 'py-2 px-4 text-base',
      lg: 'py-3 px-6 text-lg',
    };

    return (
      <button
        className={classNames(
          baseClasses,
          sizeClasses[size],
          getStyle(variant, 'root'),
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <span className={getStyle(variant, 'text')}>{children}</span>
      </button>
    );
  }
);

ButtonComponent.displayName = 'Button';

export default ButtonComponent;
