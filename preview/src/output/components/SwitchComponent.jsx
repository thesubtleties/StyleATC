import * as React from 'react';
import { Switch } from 'radix-ui';
import classNames from 'classnames';

const SwitchComponent = ({
  label = 'Toggle',
  id = 'switch',
  variant = 'default',
  checked = false,
  onCheckedChange,
  className = '',
  ...props
}) => {
  
/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"space-x-2","elements":{"label":"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70","switch":"bg-neutral-200 data-[state=checked]:bg-primary focus:shadow-[0_0_0_2px_rgba(0,0,0,0.3)]","thumb":"bg-white"},"description":"Default switch variant."}}');
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
    <div className={classNames('flex items-center', getStyle('root'))}>
      {label && (
        <label
          className={classNames(
            'pr-[15px] text-[15px] leading-none',
            getStyle('label')
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <Switch.Root
        className={classNames(
          'relative h-[25px] w-[42px] cursor-default rounded-full shadow-sm outline-none focus:shadow-[0_0_0_2px]',
          getStyle('switch'),
          className
        )}
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
        {...props}
      >
        <Switch.Thumb
          className={classNames(
            'block size-[21px] translate-x-0.5 rounded-full shadow-sm transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]',
            getStyle('thumb')
          )}
        />
      </Switch.Root>
    </div>
  );
};

export default SwitchComponent;
