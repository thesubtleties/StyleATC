import * as React from 'react';
import { HoverCard } from 'radix-ui';
import classNames from 'classnames';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"","elements":{"triggerWrapper":"inline-flex items-center justify-center","trigger":"inline-block cursor-pointer rounded-full outline-none focus:shadow-[0_0_0_2px_white]","triggerImage":"block size-[45px] rounded-full object-cover","content":"w-80 bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]","arrow":"fill-white","cardContentWrapper":"flex flex-col gap-[7px]","cardImage":"block size-[60px] rounded-full object-cover","title":"m-0 text-[15px] font-medium text-gray-900","handle":"m-0 text-[15px] text-gray-500","description":"m-0 text-[15px] text-gray-700","statNumber":"m-0 text-[15px] font-medium text-gray-900","statLabel":"m-0 text-[15px] text-gray-500"},"description":"Default hovercard variant."},"graystone":{"root":"","elements":{"triggerWrapper":"inline-flex items-center justify-center","trigger":"inline-block cursor-pointer rounded-full outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-200","triggerImage":"block size-[45px] rounded-full object-cover border-2 border-slate-300 shadow-sm hover:border-slate-400 transition-all duration-200","content":"w-80 bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 rounded-lg shadow-lg p-6 will-change-[transform,opacity]","arrow":"fill-slate-100 stroke-slate-200","cardContentWrapper":"flex flex-col gap-[10px]","cardImage":"block size-[65px] rounded-full object-cover border-2 border-slate-300 shadow-md","title":"m-0 text-[16px] font-semibold text-slate-800","handle":"m-0 text-[14px] text-slate-500","description":"m-0 text-[15px] text-slate-600 leading-snug mt-1 mb-2","statNumber":"m-0 text-[15px] font-medium text-slate-700","statLabel":"m-0 text-[14px] text-slate-500"},"description":"Sophisticated graystone hovercard with slate tones and subtle depth effects."}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const HovercardComponent = ({
  variant = 'default',
  className = '',
  triggerContent,
  cardContent,
  triggerAsChild = true,
  triggerProps = {},
  contentProps = {},
  showArrow = true,
  ...props
}) => {
  return (
    <HoverCard.Root {...props}>
      <HoverCard.Trigger
        asChild={triggerAsChild}
        // Use getStyle with variant for the trigger wrapper if needed for theming
        className={classNames(getStyle(variant, 'triggerWrapper'))}
      >
        {triggerContent}
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className={classNames(
            'rounded-md p-5 data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all',
            getStyle(variant, 'content'), // Use getStyle with variant for the main content area
            className
          )}
          sideOffset={5}
          {...contentProps}
        >
          {cardContent}
          {showArrow && (
            <HoverCard.Arrow className={getStyle(variant, 'arrow')} />
          )}
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

// Default trigger component - using standard Tailwind classes
export const DefaultTrigger = ({ imageUrl, alt, href, ...props }) => (
  <a
    className={classNames(
      'inline-block cursor-pointer rounded-full outline-none focus:shadow-[0_0_0_2px_white]'
      // Removed getStyle('trigger')
    )}
    href={href || '#'}
    target="_blank"
    rel="noreferrer noopener"
    {...props}
  >
    <img
      className={classNames(
        'block size-[45px] rounded-full'
        // Removed getStyle(variant, 'triggerImage')
      )}
      src={
        imageUrl ||
        'https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
      }
      alt={alt || 'Profile'}
    />
  </a>
);

// Default card content component - using standard Tailwind classes
export const DefaultCardContent = ({
  imageUrl,
  title,
  handle,
  description,
  followingCount,
  followersCount,

  ...props
}) => (
  <div
    className={classNames(
      'flex flex-col gap-[7px]'
      // Removed getStyle(variant, 'cardContentWrapper')
    )}
    {...props}
  >
    <img
      className={classNames(
        'block size-[60px] rounded-full'
        // Removed getStyle(variant, 'cardImage')
      )}
      src={
        imageUrl ||
        'https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
      }
      alt={title || 'Profile'}
    />
    <div className="flex flex-col gap-[15px]">
      <div>
        <div
          className={classNames(
            'm-0 text-[15px] font-medium'
            // Removed getStyle(variant, 'title')
          )}
        >
          {title || 'Radix'}
        </div>
        <div
          className={classNames(
            'm-0 text-[15px]'
            // Removed getStyle(variant, 'handle')
          )}
        >
          {handle || '@radix_ui'}
        </div>
      </div>
      <div
        className={classNames(
          'm-0 text-[15px]'
          // Removed getStyle(variant, 'description')
        )}
      >
        {description ||
          'Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source.'}
      </div>
      <div className="flex gap-[15px]">
        <div className="flex gap-[5px]">
          <div
            className={classNames(
              'm-0 text-[15px] font-medium'
              // Removed getStyle(variant, 'statNumber')
            )}
          >
            {followingCount || '0'}
          </div>{' '}
          <div
            className={classNames(
              'm-0 text-[15px]'
              // Removed getStyle(variant, 'statLabel')
            )}
          >
            Following
          </div>
        </div>
        <div className="flex gap-[5px]">
          <div
            className={classNames(
              'm-0 text-[15px] font-medium'
              // Removed getStyle(variant, 'statNumber')
            )}
          >
            {followersCount || '2,900'}
          </div>{' '}
          <div
            className={classNames(
              'm-0 text-[15px]'
              // Removed getStyle(variant, 'statLabel') - variant is not in scope here
            )}
          >
            Followers
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HovercardComponent;
