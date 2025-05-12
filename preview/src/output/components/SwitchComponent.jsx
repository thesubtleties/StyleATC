import * as React from 'react';
import { Switch } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input","elements":{"thumb":"pointer-events-none block size-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"},"description":"Default switch variant."},"ocean":{"root":"peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-deepocean data-[state=unchecked]:bg-oceanfoam/30","elements":{"thumb":"pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"},"description":"Ocean-themed switch with gradient when active and light background when inactive"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const SwitchComponent = ({
  label = 'Toggle',
  id = 'switch',
  variant = 'default',
  checked = false,
  onCheckedChange,
  className = '',
  ...props
}) => {
  return (
    <div className={classNames('flex items-center', getStyle(variant, 'root'))}>
      {label && (
        <label
          className={classNames(
            'pr-[15px] text-[15px] leading-none',
            getStyle(variant, 'label')
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
            getStyle(variant, 'thumb')
          )}
        />
      </Switch.Root>
    </div>
  );
};

export default SwitchComponent;
