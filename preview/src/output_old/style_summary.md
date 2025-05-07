# Style System Summary

## Colors
primary: #4F46E5
secondary: #EC4899
accent: #8b5cf6
neutral: #6b7280
success: #22c55e
warning: #f59e0b
error: #ef4444

## Spacing
xs: 0.25rem
sm: 0.5rem
md: 1rem
lg: 1.5rem
xl: 2rem
2xl: 4rem

## Border Radius
none: 0
sm: 0.125rem
DEFAULT: 0.25rem
md: 0.375rem
lg: 0.75rem
xl: 0.75rem
2xl: 1rem
full: 9999px

## Shadows
sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
DEFAULT: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)

## Component Patterns

### Buttons
- Primary: bg-[PRIMARY_COLOR] text-white
- Secondary: bg-[SECONDARY_COLOR] text-white
- Outline: border border-gray-300 text-gray-700 bg-white
- Ghost: text-gray-700 hover:bg-gray-100
- Sizes: sm (py-1 px-2), md (py-2 px-4), lg (py-3 px-6)

### Cards
- Default: bg-white shadow-[DEFAULT_SHADOW]
- Elevated: bg-white shadow-[MD_SHADOW] hover:shadow-[LG_SHADOW]
- Bordered: bg-white border border-gray-200
- Flat: bg-gray-50
- Interactive: hover:shadow-[MD_SHADOW] hover:translate-y-[-2px]

### Typography
- Headings: font-bold text-gray-900
- Body: text-base text-gray-700
- Small: text-sm text-gray-500
