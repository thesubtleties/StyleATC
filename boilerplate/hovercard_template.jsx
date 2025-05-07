import * as React from 'react';
import { HoverCard } from 'radix-ui';
import classNames from 'classnames';

const HoverCardComponent = ({
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
  /* INJECT_VARIANT_STYLING_LOGIC */

  return (
    <HoverCard.Root {...props}>
      <HoverCard.Trigger
        asChild={triggerAsChild}
        className={getStyle('triggerWrapper')}
      >
        {triggerContent}
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className={classNames(
            'rounded-md p-5 data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all',
            getStyle('content'),
            className
          )}
          sideOffset={5}
          {...contentProps}
        >
          {cardContent}
          {showArrow && <HoverCard.Arrow className={getStyle('arrow')} />}
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

// Default trigger component if none provided
export const DefaultTrigger = ({ imageUrl, alt, href, ...props }) => (
  <a
    className={classNames(
      'inline-block cursor-pointer rounded-full outline-none focus:shadow-[0_0_0_2px_white]',
      getStyle('trigger')
    )}
    href={href || '#'}
    target="_blank"
    rel="noreferrer noopener"
    {...props}
  >
    <img
      className={classNames(
        'block size-[45px] rounded-full',
        getStyle('triggerImage')
      )}
      src={
        imageUrl ||
        'https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
      }
      alt={alt || 'Profile'}
    />
  </a>
);

// Default card content component if none provided
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
      'flex flex-col gap-[7px]',
      getStyle('cardContentWrapper')
    )}
    {...props}
  >
    <img
      className={classNames(
        'block size-[60px] rounded-full',
        getStyle('cardImage')
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
            'm-0 text-[15px] font-medium',
            getStyle('title')
          )}
        >
          {title || 'Radix'}
        </div>
        <div className={classNames('m-0 text-[15px]', getStyle('handle'))}>
          {handle || '@radix_ui'}
        </div>
      </div>
      <div className={classNames('m-0 text-[15px]', getStyle('description'))}>
        {description ||
          'Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source.'}
      </div>
      <div className="flex gap-[15px]">
        <div className="flex gap-[5px]">
          <div
            className={classNames(
              'm-0 text-[15px] font-medium',
              getStyle('statNumber')
            )}
          >
            {followingCount || '0'}
          </div>{' '}
          <div className={classNames('m-0 text-[15px]', getStyle('statLabel'))}>
            Following
          </div>
        </div>
        <div className="flex gap-[5px]">
          <div
            className={classNames(
              'm-0 text-[15px] font-medium',
              getStyle('statNumber')
            )}
          >
            {followersCount || '2,900'}
          </div>{' '}
          <div className={classNames('m-0 text-[15px]', getStyle('statLabel'))}>
            Followers
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HoverCardComponent;
