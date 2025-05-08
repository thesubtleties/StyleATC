import React from 'react';
import classNames from 'classnames';

const CardComponent = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <div
      className={classNames('overflow-hidden', getStyle('root'), className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardComponent;
