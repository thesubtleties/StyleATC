import React from 'react';
import classNames from 'classnames';

const Button = React.forwardRef(
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

    /* INJECT_VARIANT_STYLING_LOGIC */

    return (
      <button
        className={classNames(
          baseClasses,
          sizeClasses[size],
          getStyle('root'),
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <span className={getStyle('text')}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
