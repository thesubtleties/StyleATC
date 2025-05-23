import * as React from 'react';
import classNames from 'classnames';
import { Slider } from 'radix-ui';


/* --- Injected Variant Styling Logic --- */
const allVariantStyles = JSON.parse('{"default":{"root":"relative flex h-10 w-full min-w-[300px] max-w-[350px] mx-auto touch-none select-none items-center","elements":{"track":"relative h-[6px] w-full grow rounded-full bg-gray-200 dark:bg-gray-700","range":"absolute h-full rounded-full bg-blue-500 dark:bg-blue-400","thumb":"block size-5 rounded-[10px] bg-white dark:bg-gray-100 shadow-[0_2px_10px] shadow-black/10 dark:shadow-black/30 hover:bg-gray-50 dark:hover:bg-white focus:shadow-[0_0_0_3px] focus:shadow-blue-500/30 dark:focus:shadow-blue-400/40 focus:outline-none transition-all duration-150"},"description":"Default slider variant."},"ocean":{"root":"relative flex h-14 w-full min-w-[300px] max-w-[350px] mx-auto touch-none select-none items-center","elements":{"track":"relative h-[8px] w-full grow rounded-full bg-gradient-to-r from-cyan-100/40 to-blue-100/40 dark:from-cyan-900/20 dark:to-blue-900/20 backdrop-blur-sm shadow-inner","range":"absolute h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-600 animate-shimmer bg-[length:200%_100%]","thumb":"block size-6 rounded-full bg-white dark:bg-gray-100 shadow-[0_0_10px] shadow-cyan-500/50 dark:shadow-cyan-400/50 hover:shadow-[0_0_14px] hover:shadow-blue-500/60 dark:hover:shadow-blue-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 dark:focus:ring-cyan-400/60 focus:ring-offset-2 transition-all duration-200"},"description":"Ocean-themed slider with gradient track and smooth animations"},"audio":{"root":"relative flex h-14 w-full min-w-[300px] max-w-[350px] mx-auto touch-none select-none items-center","elements":{"track":"relative h-[6px] w-full grow rounded-full bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-inner border border-gray-700/20 dark:border-white/5","range":"absolute h-full rounded-full bg-emerald-400/80 dark:bg-emerald-500/80 backdrop-blur-sm transition-all duration-100 ease-out glow-sm glow-emerald-400/20 dark:glow-emerald-500/30","thumb":"block size-4 bg-black dark:bg-gray-900 rounded-full border border-emerald-400/30 dark:border-emerald-500/30 shadow-[0_0_5px_rgba(52,211,153,0.5)] dark:shadow-[0_0_5px_rgba(16,185,129,0.5)] hover:shadow-[0_0_8px_rgba(52,211,153,0.7)] dark:hover:shadow-[0_0_8px_rgba(16,185,129,0.7)] focus:outline-none focus:shadow-[0_0_10px_rgba(52,211,153,0.8)] dark:focus:shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-shadow duration-200 ease-in-out"},"description":"A sleek, dark audio-style volume slider with a modern look"},"squared":{"root":"relative flex h-14 w-full min-w-[300px] max-w-[350px] mx-auto touch-none select-none items-center","elements":{"track":"relative h-[6px] w-full grow rounded-none bg-gray-800/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-inner","range":"absolute h-full rounded-none bg-purple-500/80 dark:bg-purple-600/80 backdrop-blur-sm transition-all duration-100 ease-out","thumb":"block h-5 w-3 bg-black dark:bg-gray-900 rounded-none border border-purple-400/30 dark:border-purple-500/30 shadow-[0_0_5px_rgba(168,85,247,0.5)] dark:shadow-[0_0_5px_rgba(147,51,234,0.5)] hover:shadow-[0_0_8px_rgba(168,85,247,0.7)] dark:hover:shadow-[0_0_8px_rgba(147,51,234,0.7)] focus:outline-none focus:shadow-[0_0_10px_rgba(168,85,247,0.8)] dark:focus:shadow-[0_0_10px_rgba(147,51,234,0.8)] transition-shadow duration-200 ease-in-out"},"description":"A sleek squared audio slider with black glowing thumb"},"neon":{"root":"relative flex h-16 w-full min-w-[320px] max-w-[400px] mx-auto touch-none select-none items-center","elements":{"track":"relative h-[8px] w-full grow rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-inner shadow-black/50 border border-slate-700/50 backdrop-blur-sm overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:via-cyan-500/20 before:to-purple-500/10 before:animate-pulse before:duration-[2000ms]","range":"absolute h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-lg shadow-cyan-500/50 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shimmer before:bg-[length:200%_100%] animate-pulse duration-[1500ms]","thumb":"block size-7 rounded-full bg-gradient-to-br from-white via-cyan-100 to-purple-100 shadow-[0_0_20px] shadow-cyan-400/60 hover:shadow-[0_0_30px] hover:shadow-purple-500/80 focus:outline-none focus:shadow-[0_0_40px] focus:shadow-pink-500/90 transition-all duration-300 ease-out border-2 border-white/50 backdrop-blur-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-300/30 before:to-purple-300/30 before:rounded-full before:animate-spin before:duration-[3000ms] transform hover:scale-110 active:scale-95"},"description":"Cyberpunk neon slider with RGB lighting effects, electric glow, and gaming-inspired aesthetics"}}');
const getStyle = (variant, elementName) => {
  const variantStyles = allVariantStyles[variant] || allVariantStyles['default'] || { root: '', elements: {} };
  if (elementName === 'root') {
    return variantStyles.root || '';
  }
  const elementStyles = variantStyles.elements || {};
  return elementStyles[elementName] || '';
};
/* --- End Injected Logic --- */


const SliderComponent = ({
  defaultValue = [50],
  max = 100,
  step = 1,
  variant = 'default',
  className = '',
  ariaLabel = 'Slider',
  ...props
}) => {
  return (
    <form>
      <Slider.Root
        className={classNames(
          'relative flex h-5 touch-none select-none items-center',
          getStyle(variant, 'root'),
          className
        )}
        defaultValue={defaultValue}
        max={max}
        step={step}
        {...props}
      >
        <Slider.Track
          className={classNames(
            'relative h-[3px] grow rounded-full',
            getStyle(variant, 'track')
          )}
        >
          <Slider.Range
            className={classNames(
              'absolute h-full rounded-full',
              getStyle(variant, 'range')
            )}
          />
        </Slider.Track>
        <Slider.Thumb
          className={classNames(
            'block size-5 rounded-[10px] shadow-[0_2px_10px] focus:outline-none',
            getStyle(variant, 'thumb')
          )}
          aria-label={ariaLabel}
        />
      </Slider.Root>
    </form>
  );
};

export default SliderComponent;
