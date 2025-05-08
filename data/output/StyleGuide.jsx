
// Import components - these will be dynamically imported based on what's generated
import React from 'react';
import { useState, useEffect } from 'react';
import { default as Accordion } from './components/Accordion';
import { default as Alertdialog } from './components/Alertdialog';
import { default as Button } from './components/Button';
import { default as Card } from './components/Card';
import { default as Checkbox } from './components/Checkbox';
import { default as Collapsible } from './components/Collapsible';
import { default as Contentsection } from './components/Contentsection';
import { default as Contextmenu } from './components/Contextmenu';
import { default as Dialog } from './components/Dialog';
import { default as Dropdownmenudemo } from './components/Dropdownmenudemo';
import { default as Form } from './components/Form';
import { default as Formfield } from './components/Formfield';
import { default as Header } from './components/Header';
import { default as Hovercard } from './components/Hovercard';
import { default as Label } from './components/Label';
import { default as Menubar } from './components/Menubar';
import { default as Modal } from './components/Modal';
import { default as Navigationmenu } from './components/Navigationmenu';
import { default as Onetimepassword } from './components/Onetimepassword';
import { default as Popover } from './components/Popover';
import { default as Profilecard } from './components/Profilecard';
import { default as Progress } from './components/Progress';
import { default as Radiogroup } from './components/Radiogroup';
import { default as Scrollarea } from './components/Scrollarea';
import { default as Select } from './components/Select';
import { default as Separator } from './components/Separator';
import { default as Slider } from './components/Slider';
import { default as SwitchComponent } from './components/SwitchComponent';
import { default as Tabs } from './components/Tabs';
import { default as Toast } from './components/Toast';
import { default as Toggle } from './components/Toggle';
import { default as Togglegroup } from './components/Togglegroup';
import { default as Toolbar } from './components/Toolbar';
import { default as Tooltip } from './components/Tooltip';

export default function StyleGuide() {
  // Add state to track if we're in the browser
  const [isBrowser, setIsBrowser] = useState(false);
  
  // Style tokens from the theme system
  const colors = {
    primary: '#0891b2',
    secondary: '#0ea5e9',
    success: '#16a34a',
    warning: '#f59e0b',
    error: '#ef4444',
    neutral: '#f3f4f6',
    text: {
      primary: '#111827',
      secondary: '#4b5563',
      muted: '#9ca3af',
    },
    background: '#f9fafb',
    headerBg: '#0891b2',
    headerText: '#ffffff',
    footerBg: '#0891b2',
    footerText: '#ffffff',
    cardBg: '#ffffff',
    muted: '#9ca3af',
    sectionHeadingColor: '#0891b2',
  };
  
  const spacing = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.5rem',
    '2xl': '3rem',
  };
  
  const borderRadius = {
    none: '0',
    sm: '0.5rem',
    DEFAULT: '0.25rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '1rem',
    full: '9999px',
    xs: '0.125rem',
  };
  
  const shadows = {
    sm: `0 2px 10px ${colors.primary}25`,
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: `0 4px 16px ${colors.primary}33`,
    lg: `0 8px 24px ${colors.secondary}40`,
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  };

  // Create pageStyles object directly without using window
  const pageStyles = {
    background: colors.background || '#f9fafb',
    text: colors.text?.primary || '#111827',
    mutedText: colors.text?.muted || '#6b7280',
    headerBg: colors.primary || '#3b82f6',
    headerText: '#ffffff',
    footerBg: colors.primary || '#111827',
    footerText: '#ffffff',
    cardBg: '#ffffff',
    sectionHeadingColor: colors.primary || '#3b82f6',
  };

  // useEffect to set window.pageStyles only after component mounts (client-side)
  useEffect(() => {
    setIsBrowser(true);
    // Now it's safe to use window
    window.pageStyles = pageStyles;
  }, []);

  // function for window operations
  const openLink = (url) => {
    if (isBrowser) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: pageStyles.background, color: pageStyles.text }}>
      {/* Header Example */}
      <Header
        title="StyleATC"
        navItems={[
          { label: 'Colors', href: '#colors' },
          { label: 'Typography', href: '#typography' },
          { label: 'Components', href: '#components' },
        ]}
        actions={[
          { label: 'Get Started', onClick: () => {} },
          { label: 'GitHub', onClick: () => openLink('https://github.com/thesubtleties/') },
        ]}
        color={colors}
      />

      <div className="p-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: pageStyles.text }}>
            Tailwind + Radix UI Design System
          </h1>
          <p className="text-xl" style={{ color: pageStyles.mutedText }}>
            A comprehensive design system built with Tailwind CSS and Radix UI
            primitives.
          </p>
        </div>

        {/* Colors */}
        <section id="colors" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2" style={{ color: pageStyles.sectionHeadingColor, borderColor: `${pageStyles.sectionHeadingColor}20` }}>
            Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(colors).map(([name, color]) => {
              // Skip nested color objects and derived colors in the grid
              if (typeof color === 'object' || 
                  ['background', 'headerBg', 'headerText', 'footerBg', 'footerText', 'cardBg', 'muted', 'sectionHeadingColor'].includes(name)) {
                return null;
              }
              
              return (
                <div key={name} className="flex flex-col">
                  <div
                    className="h-24 rounded-md mb-2 shadow-md"
                    style={{ backgroundColor: color }}
                  />
                  <div className="text-sm font-medium" style={{ color: pageStyles.text }}>{name}</div>
                  <div className="text-xs" style={{ color: pageStyles.mutedText }}>{color}</div>
                </div>
              );
            })}
          </div>
          
          {/* Text colors section */}
          {colors.text && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>Text Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(colors.text).map(([name, value]) => (
                  <div key={name} className="flex flex-col">
                    <div 
                      className="h-16 rounded-md mb-2 flex items-center justify-center" 
                      style={{ backgroundColor: '#f9fafb' }}
                    >
                      <span style={{ color: value }}>Sample Text</span>
                    </div>
                    <div className="font-medium" style={{ color: pageStyles.text }}>text.{name}</div>
                    <div className="text-sm" style={{ color: pageStyles.mutedText }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Typography */}
        <section id="typography" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2" style={{ color: pageStyles.sectionHeadingColor, borderColor: `${pageStyles.sectionHeadingColor}20` }}>
            Typography
          </h2>
          <div className="space-y-6 p-6 rounded-md shadow-sm" style={{ backgroundColor: pageStyles.cardBg }}>
            <h1 className="text-5xl font-bold" style={{ color: pageStyles.text }}>Heading 1</h1>
            <h2 className="text-4xl font-bold" style={{ color: pageStyles.text }}>Heading 2</h2>
            <h3 className="text-3xl font-bold" style={{ color: pageStyles.text }}>Heading 3</h3>
            <h4 className="text-2xl font-bold" style={{ color: pageStyles.text }}>Heading 4</h4>
            <h5 className="text-xl font-bold" style={{ color: pageStyles.text }}>Heading 5</h5>
            <h6 className="text-lg font-bold" style={{ color: pageStyles.text }}>Heading 6</h6>
            <div className="border-t pt-6" style={{ borderColor: `${pageStyles.mutedText}20` }}>
              <p className="text-base mb-4" style={{ color: pageStyles.text }}>
                Body text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Donec at purus libero. Maecenas in orci id dui placerat
                euismod.
              </p>
              <p className="text-lg mb-4" style={{ color: pageStyles.text }}>
                Lead paragraph. Vivamus sagittis lacus vel augue laoreet rutrum
                faucibus dolor auctor.
              </p>
              <p className="text-sm" style={{ color: pageStyles.mutedText }}>
                Small text. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section id="components" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2" style={{ color: pageStyles.sectionHeadingColor, borderColor: `${pageStyles.sectionHeadingColor}20` }}>
            Components
          </h2>

          {
  /* Accordion */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Accordion
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <AccordionComponent
      variant="default"
      items={[
        {
          trigger: 'Is it accessible?',
          content: 'Yes. It adheres to the WAI-ARIA design pattern.',
        },
        {
          trigger: 'Is it unstyled?',
          content:
            "Yes. It's unstyled by default, giving you freedom over the look and feel.",
        },
        {
          trigger: 'Can it be animated?',
          content: 'Yes! You can animate the Accordion with CSS or JavaScript.',
        },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">Default accordion variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Alert Dialog */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Alert Dialog
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{{ ALERT_DIALOG_VARIANTS }}</div>
  </div>
</div>


{
  /* Buttons */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Buttons
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="default" size="sm">
      Small
    </Button>
    <Button variant="default" size="md">
      Medium
    </Button>
    <Button variant="default" size="lg">
      Large
    </Button>
    <Button variant="default" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Default button variant.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Primary</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="primary" size="sm">
      Small
    </Button>
    <Button variant="primary" size="md">
      Medium
    </Button>
    <Button variant="primary" size="lg">
      Large
    </Button>
    <Button variant="primary" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Primary button with blue styling and white text</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Secondary</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="secondary" size="sm">
      Small
    </Button>
    <Button variant="secondary" size="md">
      Medium
    </Button>
    <Button variant="secondary" size="lg">
      Large
    </Button>
    <Button variant="secondary" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Secondary button with gray styling</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Outline</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="outline" size="sm">
      Small
    </Button>
    <Button variant="outline" size="md">
      Medium
    </Button>
    <Button variant="outline" size="lg">
      Large
    </Button>
    <Button variant="outline" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Outline button with purple border</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Danger</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="danger" size="sm">
      Small
    </Button>
    <Button variant="danger" size="md">
      Medium
    </Button>
    <Button variant="danger" size="lg">
      Large
    </Button>
    <Button variant="danger" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Danger button with red styling</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ghost</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="ghost" size="sm">
      Small
    </Button>
    <Button variant="ghost" size="md">
      Medium
    </Button>
    <Button variant="ghost" size="lg">
      Large
    </Button>
    <Button variant="ghost" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Ghost button with transparent background and primary text color</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Success</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="success" size="sm">
      Small
    </Button>
    <Button variant="success" size="md">
      Medium
    </Button>
    <Button variant="success" size="lg">
      Large
    </Button>
    <Button variant="success" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Success button with secondary color styling</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Bright</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="bright" size="sm">
      Small
    </Button>
    <Button variant="bright" size="md">
      Medium
    </Button>
    <Button variant="bright" size="lg">
      Large
    </Button>
    <Button variant="bright" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Bright button with gradient effect and subtle shadow</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Subtle</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="subtle" size="sm">
      Small
    </Button>
    <Button variant="subtle" size="md">
      Medium
    </Button>
    <Button variant="subtle" size="lg">
      Large
    </Button>
    <Button variant="subtle" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Subtle button with minimal styling for secondary actions</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Neon</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="neon" size="sm">
      Small
    </Button>
    <Button variant="neon" size="md">
      Medium
    </Button>
    <Button variant="neon" size="lg">
      Large
    </Button>
    <Button variant="neon" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Neon pink button with subtle shadow and hover effects</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Gradient</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="gradient" size="sm">
      Small
    </Button>
    <Button variant="gradient" size="md">
      Medium
    </Button>
    <Button variant="gradient" size="lg">
      Large
    </Button>
    <Button variant="gradient" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Gradient button with primary to secondary color transition</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Custom</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="custom" size="sm">
      Small
    </Button>
    <Button variant="custom" size="md">
      Medium
    </Button>
    <Button variant="custom" size="lg">
      Large
    </Button>
    <Button variant="custom" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">Custom button with gradient and rounded corners</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Test</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="test" size="sm">
      Small
    </Button>
    <Button variant="test" size="md">
      Medium
    </Button>
    <Button variant="test" size="lg">
      Large
    </Button>
    <Button variant="test" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">A test button to verify if we can create components</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Vibrant</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="vibrant" size="sm">
      Small
    </Button>
    <Button variant="vibrant" size="md">
      Medium
    </Button>
    <Button variant="vibrant" size="lg">
      Large
    </Button>
    <Button variant="vibrant" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">A vibrant button with cyan-to-blue gradient and enhanced hover effects</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">3d</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="3d" size="sm">
      Small
    </Button>
    <Button variant="3d" size="md">
      Medium
    </Button>
    <Button variant="3d" size="lg">
      Large
    </Button>
    <Button variant="3d" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">A 3D button with depth effect that appears to press down when clicked</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Cool-blue</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="cool-blue" size="sm">
      Small
    </Button>
    <Button variant="cool-blue" size="md">
      Medium
    </Button>
    <Button variant="cool-blue" size="lg">
      Large
    </Button>
    <Button variant="cool-blue" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">A cool blue gradient button with cyan accents and enhanced hover effects</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Modern</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="modern" size="sm">
      Small
    </Button>
    <Button variant="modern" size="md">
      Medium
    </Button>
    <Button variant="modern" size="lg">
      Large
    </Button>
    <Button variant="modern" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">A modern button with gradient background, rounded corners, and subtle shadow effects</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Indigo-gradient</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="indigo-gradient" size="sm">
      Small
    </Button>
    <Button variant="indigo-gradient" size="md">
      Medium
    </Button>
    <Button variant="indigo-gradient" size="lg">
      Large
    </Button>
    <Button variant="indigo-gradient" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">An indigo gradient button that uses our primary color with enhanced hover effects</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="ocean" size="sm">
      Small
    </Button>
    <Button variant="ocean" size="md">
      Medium
    </Button>
    <Button variant="ocean" size="lg">
      Large
    </Button>
    <Button variant="ocean" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">A button styled with our primary teal color with a clean, modern appearance</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Sunrise</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="sunrise" size="sm">
      Small
    </Button>
    <Button variant="sunrise" size="md">
      Medium
    </Button>
    <Button variant="sunrise" size="lg">
      Large
    </Button>
    <Button variant="sunrise" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">A warm, energetic button styled with our coral secondary color</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean-sunrise-gradient</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="ocean-sunrise-gradient" size="sm">
      Small
    </Button>
    <Button variant="ocean-sunrise-gradient" size="md">
      Medium
    </Button>
    <Button variant="ocean-sunrise-gradient" size="lg">
      Large
    </Button>
    <Button variant="ocean-sunrise-gradient" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">A vibrant gradient button that transitions from our teal primary to our coral secondary</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean-wave</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <Button variant="ocean-wave" size="sm">
      Small
    </Button>
    <Button variant="ocean-wave" size="md">
      Medium
    </Button>
    <Button variant="ocean-wave" size="lg">
      Large
    </Button>
    <Button variant="ocean-wave" disabled>
      Disabled
    </Button>
  </div>
  <p className="text-sm text-gray-500">A beautiful ocean-themed gradient button with a wave-like appearance</p>
</div>
</div>
  </div>
</div>


{
  /* Card */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Card
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <Card variant="default" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a default card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">Modern card with hover effect and smooth transition</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Elevated</h4>
  <div className="mb-2">
    <Card variant="elevated" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a elevated card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">Elevated card with a stronger shadow</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Outlined</h4>
  <div className="mb-2">
    <Card variant="outlined" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a outlined card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">Outlined card with a colored border</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Flat</h4>
  <div className="mb-2">
    <Card variant="flat" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a flat card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">Flat card with no border or shadow</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Primary</h4>
  <div className="mb-2">
    <Card variant="primary" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a primary card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">Primary card with primary border and light background</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Gradient</h4>
  <div className="mb-2">
    <Card variant="gradient" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a gradient card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">Gradient card with subtle purple to blue background and hover effect</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Neon-accent</h4>
  <div className="mb-2">
    <Card variant="neon-accent" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a neon-accent card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">Card with a neon pink accent border on the left side</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Custom-dark</h4>
  <div className="mb-2">
    <Card variant="custom-dark" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a custom-dark card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">Custom dark-themed card with purple border and hover effects</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Vibrant</h4>
  <div className="mb-2">
    <Card variant="vibrant" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a vibrant card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">A vibrant card with subtle blue gradient and enhanced shadow effects</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Neumorphic</h4>
  <div className="mb-2">
    <Card variant="neumorphic" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a neumorphic card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">A neumorphic card with soft shadow effects that appears raised from the surface</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Indigo-glow</h4>
  <div className="mb-2">
    <Card variant="indigo-glow" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a indigo-glow card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">A card with an indigo gradient background and subtle primary color glow effect on hover</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean-card</h4>
  <div className="mb-2">
    <Card variant="ocean-card" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a ocean-card card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">A card with a subtle sky blue gradient and teal primary color accent</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean-wave</h4>
  <div className="mb-2">
    <Card variant="ocean-wave" className="p-6 max-w-sm">
      <h3 className="text-lg font-medium mb-2">Card Title</h3>
      <p className="text-gray-600">
        This is a ocean-wave card component that demonstrates the
        styling for this variant.
      </p>
    </Card>
  </div>
  <p className="text-sm text-gray-500">A card with subtle ocean-inspired gradient and cyan border that complements the ocean-wave button</p>
</div>
</div>
  </div>
</div>



{
  /* Checkbox */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Checkbox
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2 flex flex-col gap-4">
    <CheckboxComponent
      variant="default"
      label="Unchecked state"
      id="default-unchecked"
      defaultChecked={false}
    />
    <CheckboxComponent
      variant="default"
      label="Checked state"
      id="default-checked"
      defaultChecked={true}
    />
  </div>
  <p className="text-sm text-gray-500">Default checkbox variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Collapsible */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Collapsible
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <CollapsibleComponent
      variant="default"
      title="@peduarte starred 3 repositories"
      items={[
        { content: '@radix-ui/primitives' },
        { content: '@radix-ui/colors' },
        { content: '@radix-ui/themes' },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">Default collapsible variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Content Section */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Content Section
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{{ CONTENT_SECTION_VARIANTS }}</div>
  </div>
</div>


{
  /* Context Menu */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Context Menu
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{{ CONTEXT_MENU_VARIANTS }}</div>
  </div>
</div>


{
  /* Dialog */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Dialog
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <DialogComponent
      variant="default"
      triggerText="Open {{VARIANT_NAME_CAPITALIZED}} Dialog"
      title="{{VARIANT_NAME_CAPITALIZED}} Dialog"
      description="This is an example of the default dialog variant."
      fields={[
        { id: 'name', label: 'Name', defaultValue: 'John Doe' },
        { id: 'email', label: 'Email', defaultValue: 'john@example.com' },
      ]}
      saveButtonText="Save Changes"
    />
  </div>
  <p className="text-sm text-gray-500">Default dialog variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Dropdown Menu */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Dropdown Menu
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{{ DROPDOWN_MENU_VARIANTS }}</div>
  </div>
</div>


{
  /* Form */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Form
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <FormComponent
      variant="default"
      fields={[
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          messages: [
            { match: 'valueMissing', text: 'Please enter your email' },
            { match: 'typeMismatch', text: 'Please provide a valid email' },
          ],
        },
        {
          name: 'question',
          label: 'Question',
          type: 'textarea',
          required: true,
          messages: [
            { match: 'valueMissing', text: 'Please enter a question' },
          ],
        },
      ]}
      submitLabel="Post question"
      onSubmit={(e) => e.preventDefault()}
    />
  </div>
  <p className="text-sm text-gray-500">Default form variant.</p>
</div>
</div>
  </div>
</div>


{/*
  Style Guide Section for FormField

  Placeholders:
  - {/*
  Style Guide Variant for FormField Component

  Placeholders:
  - Default: e.g., "Default"
  - default: e.g., "default" (May not be used if FormField has no variants itself)
  - Default FormField variant.: Description of the variant/example.

  Assumes `FormField` is available in the rendering scope.
*/}
<div className="mb-6 p-4 border rounded-lg bg-white shadow-sm"> {/* Added container */}
  <h4 className="text-md font-semibold mb-3 text-gray-800">Default Example</h4>
  <div className="space-y-4"> {/* Add spacing between examples */}

    {/* Example 1: Basic Text Input */}
    <FormField
      label="Your Name"
      id="example-name-default"
      placeholder="e.g., Jane Doe"
    />

    {/* Example 2: Password Input */}
    <FormField
      label="Password"
      id="example-password-default"
      type="password"
      placeholder="Enter your password"
    />

     {/* Example 3: Input with Default Value */}
    <FormField
      label="Email Address"
      id="example-email-default"
      type="email"
      defaultValue="test@example.com"
    />

  </div>
  <p className="text-sm text-gray-500 italic mt-4">Default FormField variant.</p>
</div>: Replaced by the concatenated output of processed variant templates.

  Assumes `pageStyles` (or similar for colors) is available in scope.
*/}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4 border-b pb-2" style={{ color: pageStyles.sectionHeadingColor /* Example */ }}>
    Form Field
  </h3>
  {/* Use theme colors/styles for the container */}
  <div
    className="p-4 md:p-6 rounded-lg"
    style={{ backgroundColor: pageStyles.cardBg /* Example */ }}
  >
    {/* Variants/Examples will be injected here */}
    <div className="space-y-6"> {/* Add spacing between variants */}
      {/*
  Style Guide Variant for FormField Component

  Placeholders:
  - Default: e.g., "Default"
  - default: e.g., "default" (May not be used if FormField has no variants itself)
  - Default FormField variant.: Description of the variant/example.

  Assumes `FormField` is available in the rendering scope.
*/}
<div className="mb-6 p-4 border rounded-lg bg-white shadow-sm"> {/* Added container */}
  <h4 className="text-md font-semibold mb-3 text-gray-800">Default Example</h4>
  <div className="space-y-4"> {/* Add spacing between examples */}

    {/* Example 1: Basic Text Input */}
    <FormField
      label="Your Name"
      id="example-name-default"
      placeholder="e.g., Jane Doe"
    />

    {/* Example 2: Password Input */}
    <FormField
      label="Password"
      id="example-password-default"
      type="password"
      placeholder="Enter your password"
    />

     {/* Example 3: Input with Default Value */}
    <FormField
      label="Email Address"
      id="example-email-default"
      type="email"
      defaultValue="test@example.com"
    />

  </div>
  <p className="text-sm text-gray-500 italic mt-4">Default FormField variant.</p>
</div>
    </div>
  </div>
</div>

{
  /* Header */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Header
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-12"><div className="mb-10">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-4 border rounded-md overflow-hidden">
    <HeaderComponent
      variant="default"
      logo="/logo.svg"
      title="Company"
      navItems={[
        { label: 'Dashboard', href: '#' },
        { label: 'Team', href: '#' },
        { label: 'Projects', href: '#' },
        { label: 'Calendar', href: '#' },
      ]}
      actions={[
        { label: 'Sign up', onClick: () => {} },
        { label: 'Log in', onClick: () => {} },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">Default header variant.</p>
</div>

<div className="mb-10">
  <h4 className="text-sm font-medium mb-2">Ocean-header</h4>
  <div className="mb-4 border rounded-md overflow-hidden">
    <HeaderComponent
      variant="ocean-header"
      logo="/logo.svg"
      title="Company"
      navItems={[
        { label: 'Dashboard', href: '#' },
        { label: 'Team', href: '#' },
        { label: 'Projects', href: '#' },
        { label: 'Calendar', href: '#' },
      ]}
      actions={[
        { label: 'Sign up', onClick: () => {} },
        { label: 'Log in', onClick: () => {} },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">A header with a subtle gradient from our primary color to white</p>
</div>
</div>
  </div>
</div>


{
  /* Hover Card */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Hover Card
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{{ HOVER_CARD_VARIANTS }}</div>
  </div>
</div>


{
  /* Label */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Label
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <LabelComponent
      variant="default"
      htmlFor="default_input"
      inputProps={{
        defaultValue: 'Sample Text',
      }}
    >
      Default Label
    </LabelComponent>
  </div>
  <p className="text-sm text-gray-500">Default label variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Menubar */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Menubar
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <MenubarComponent
      variant="default"
      menus={[
        {
          name: 'File',
          items: [
            { label: 'New Tab', shortcut: '⌘ T' },
            { label: 'New Window', shortcut: '⌘ N' },
            { label: 'New Incognito Window', disabled: true },
            { type: 'separator' },
            {
              label: 'Share',
              type: 'submenu',
              items: [
                { label: 'Email Link' },
                { label: 'Messages' },
                { label: 'Notes' },
              ],
            },
            { type: 'separator' },
            { label: 'Print…', shortcut: '⌘ P' },
          ],
        },
        {
          name: 'Edit',
          items: [
            { label: 'Undo', shortcut: '⌘ Z' },
            { label: 'Redo', shortcut: '⇧ ⌘ Z' },
          ],
        },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">Default menubar variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Modal */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Modal
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <ModalComponent
      variant="default"
      trigger={
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Open Default Modal
        </button>
      }
      title="Modal Title"
      description="This is a description of the modal's purpose."
      footer={
        <>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Confirm
          </button>
        </>
      }
    >
      <div className="p-4 border border-gray-200 rounded">
        <p>This is the main content of the modal.</p>
        <p className="mt-2">You can put any components or content here.</p>
      </div>
    </ModalComponent>
  </div>
  <p className="text-sm text-gray-500">Default modal variant.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Rounded</h4>
  <div className="mb-2">
    <ModalComponent
      variant="rounded"
      trigger={
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Open Rounded Modal
        </button>
      }
      title="Modal Title"
      description="This is a description of the modal's purpose."
      footer={
        <>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Confirm
          </button>
        </>
      }
    >
      <div className="p-4 border border-gray-200 rounded">
        <p>This is the main content of the modal.</p>
        <p className="mt-2">You can put any components or content here.</p>
      </div>
    </ModalComponent>
  </div>
  <p className="text-sm text-gray-500">Modal with rounded corners</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Colorful</h4>
  <div className="mb-2">
    <ModalComponent
      variant="colorful"
      trigger={
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Open Colorful Modal
        </button>
      }
      title="Modal Title"
      description="This is a description of the modal's purpose."
      footer={
        <>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Confirm
          </button>
        </>
      }
    >
      <div className="p-4 border border-gray-200 rounded">
        <p>This is the main content of the modal.</p>
        <p className="mt-2">You can put any components or content here.</p>
      </div>
    </ModalComponent>
  </div>
  <p className="text-sm text-gray-500">Modal with a colorful header section</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Fancy</h4>
  <div className="mb-2">
    <ModalComponent
      variant="fancy"
      trigger={
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Open Fancy Modal
        </button>
      }
      title="Modal Title"
      description="This is a description of the modal's purpose."
      footer={
        <>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Confirm
          </button>
        </>
      }
    >
      <div className="p-4 border border-gray-200 rounded">
        <p>This is the main content of the modal.</p>
        <p className="mt-2">You can put any components or content here.</p>
      </div>
    </ModalComponent>
  </div>
  <p className="text-sm text-gray-500">Modal with a primary color accent at the top</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean-modal</h4>
  <div className="mb-2">
    <ModalComponent
      variant="ocean-modal"
      trigger={
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Open Ocean-modal Modal
        </button>
      }
      title="Modal Title"
      description="This is a description of the modal's purpose."
      footer={
        <>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Confirm
          </button>
        </>
      }
    >
      <div className="p-4 border border-gray-200 rounded">
        <p>This is the main content of the modal.</p>
        <p className="mt-2">You can put any components or content here.</p>
      </div>
    </ModalComponent>
  </div>
  <p className="text-sm text-gray-500">A clean modal with subtle primary color accents and rounded corners</p>
</div>
</div>
  </div>
</div>


{
  /* Navigation Menu */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Navigation Menu
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-12">{{ NAVIGATION_MENU_VARIANTS }}</div>
  </div>
</div>


{
  /* One-Time Password Field */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    One-Time Password Field
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{{ OTP_FIELD_VARIANTS }}</div>
  </div>
</div>


{
  /* Popover */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Popover
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2 flex items-center justify-center p-8 bg-gray-100 rounded">
    <PopoverComponent variant="default" title="Dimensions">
      <PopoverFormFields
        fields={[
          { id: 'width', label: 'Width', defaultValue: '100%' },
          { id: 'maxWidth', label: 'Max. width', defaultValue: '300px' },
          { id: 'height', label: 'Height', defaultValue: '25px' },
          { id: 'maxHeight', label: 'Max. height', defaultValue: 'none' },
        ]}
      />
    </PopoverComponent>
  </div>
  <p className="text-sm text-gray-500">Default popover variant. Can be adapted for context menus.</p>
</div>
</div>
  </div>
</div>


{
  /* Profile Card */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Profile Card
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{{ PROFILE_CARD_VARIANTS }}</div>
  </div>
</div>


{
  /* Progress */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Progress
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <ProgressComponent variant="default" value={66} />
  </div>
  <div className="mt-4 mb-2">
    <ProgressComponent variant="default" value={33} />
  </div>
  <p className="text-sm text-gray-500">Default progress variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Radio Group */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Radio Group
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{{ RADIO_GROUP_VARIANTS }}</div>
  </div>
</div>


{
  /* ScrollArea */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    ScrollArea
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{{ SCROLL_AREA_VARIANTS }}</div>
  </div>
</div>


{
  /* Select */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Select
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <SelectComponent
      variant="default"
      placeholder="Select a food…"
      groups={[
        {
          label: 'Fruits',
          items: [
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'blueberry', label: 'Blueberry' },
            { value: 'grapes', label: 'Grapes' },
            { value: 'pineapple', label: 'Pineapple' },
          ],
        },
        {
          label: 'Vegetables',
          items: [
            { value: 'aubergine', label: 'Aubergine' },
            { value: 'broccoli', label: 'Broccoli' },
            { value: 'carrot', label: 'Carrot', disabled: true },
            { value: 'courgette', label: 'Courgette' },
            { value: 'leek', label: 'Leek' },
          ],
        },
        {
          label: 'Meat',
          items: [
            { value: 'beef', label: 'Beef' },
            { value: 'chicken', label: 'Chicken' },
            { value: 'lamb', label: 'Lamb' },
            { value: 'pork', label: 'Pork' },
          ],
        },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">Default select variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Separator */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Separator
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <SeparatorDemo variant="default" />
  </div>
  <p className="text-sm text-gray-500">Default separator variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Slider */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Slider
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2 flex items-center justify-center py-4">
    <SliderComponent
      variant="default"
      defaultValue={[50]}
      max={100}
      step={1}
      ariaLabel="Example slider"
    />
  </div>
  <p className="text-sm text-gray-500">Default slider variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Switch */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Switch
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2 flex flex-col space-y-4">
    <SwitchComponent
      variant="default"
      label="Airplane mode"
      id="default-airplane"
    />
    <SwitchComponent
      variant="default"
      label="Dark mode"
      id="default-dark"
      checked={true}
    />
  </div>
  <p className="text-sm text-gray-500">Default switch variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Tabs */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Tabs
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{/*
  Style Guide Variant for Tabs Component

  Placeholders:
  - Default: e.g., "Default"
  - default: e.g., "default"
  - Default tabs variant.: Description of the variant from theme config.

  Assumes `TabsComponent`, `FormField`, and `Button` are available in the
  rendering scope (imported into the main StyleGuide.jsx).
*/}
<div className="mb-8 p-4 border rounded-lg bg-white shadow-sm"> {/* Added container */}
  <h4 className="text-md font-semibold mb-3 text-gray-800">Default Variant</h4>
  <div className="mb-3">
    {/* --- Render the actual TabsComponent --- */}
    <TabsComponent
      variant="default" // Pass variant name (might be used by component or just for consistency)
      aria-label="Account Management Example" // Good practice for accessibility
      tabs={[
        {
          value: 'account-default', // Unique value using variant name
          label: 'Account',
          content: (
            // Use React Fragments or a div if needed
            <>
              <p className="mb-5 text-[15px] leading-normal text-gray-700">
                Make changes to your account here. Click save when you're done.
              </p>
              {/* --- Use the actual FormField component --- */}
              <FormField
                label="Name"
                id="name-default" // Unique ID
                defaultValue="Ada Lovelace"
                className="mb-4" // Add spacing if needed
              />
              {/* --- Use the actual FormField component --- */}
              <FormField
                label="Username"
                id="username-default" // Unique ID
                defaultValue="@ada"
              />
              <div className="mt-6 flex justify-end border-t pt-4">
                {/* --- Use the actual Button component --- */}
                <Button variant="primary">Save changes</Button> {/* Example: Use button variant */}
              </div>
            </>
          ),
        },
        {
          value: 'password-default', // Unique value using variant name
          label: 'Password',
          content: (
            <>
              <p className="mb-5 text-[15px] leading-normal text-gray-700">
                Change your password here. After saving, you'll be logged out.
              </p>
              {/* --- Use the actual FormField component --- */}
              <FormField
                label="Current password"
                id="current-password-default" // Unique ID
                type="password"
                className="mb-4"
              />
              {/* --- Use the actual FormField component --- */}
              <FormField
                label="New password"
                id="new-password-default" // Unique ID
                type="password"
                className="mb-4"
              />
              {/* --- Use the actual FormField component --- */}
              <FormField
                label="Confirm password"
                id="confirm-password-default" // Unique ID
                type="password"
              />
              <div className="mt-6 flex justify-end border-t pt-4">
                 {/* --- Use the actual Button component --- */}
                <Button variant="primary">Change password</Button>
              </div>
            </>
          ),
        },
      ]}
    />
    {/* --- End TabsComponent rendering --- */}
  </div>
  <p className="text-sm text-gray-500 italic">Default tabs variant.</p>
</div></div>
  </div>
</div>


{
  /* Toast */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Toast
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <ToastComponent
      variant="default"
      title="Notification: {{VARIANT_NAME_CAPITALIZED}}"
      description="This is a default toast notification example"
      triggerText="Show {{VARIANT_NAME_CAPITALIZED}} Toast"
      actionText="Dismiss"
      duration={5000}
    />
  </div>
  <p className="text-sm text-gray-500">Default toast variant.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Destructive</h4>
  <div className="mb-2">
    <ToastComponent
      variant="destructive"
      title="Notification: {{VARIANT_NAME_CAPITALIZED}}"
      description="This is a destructive toast notification example"
      triggerText="Show {{VARIANT_NAME_CAPITALIZED}} Toast"
      actionText="Dismiss"
      duration={5000}
    />
  </div>
  <p className="text-sm text-gray-500">Destructive toast variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Toggle */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Toggle
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2 flex items-center gap-4">
    <ToggleComponent
      variant="default"
      icon={<FontItalicIcon />}
      label="Toggle italic"
    />
    <ToggleComponent
      variant="default"
      icon={<FontItalicIcon />}
      label="Toggle italic (pressed)"
      defaultPressed={true}
    />
  </div>
  <p className="text-sm text-gray-500">Default toggle variant.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Outline</h4>
  <div className="mb-2 flex items-center gap-4">
    <ToggleComponent
      variant="outline"
      icon={<FontItalicIcon />}
      label="Toggle italic"
    />
    <ToggleComponent
      variant="outline"
      icon={<FontItalicIcon />}
      label="Toggle italic (pressed)"
      defaultPressed={true}
    />
  </div>
  <p className="text-sm text-gray-500">Outline toggle variant.</p>
</div>
</div>
  </div>
</div>


{
  /* Toggle Group */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Toggle Group
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8">{{ TOGGLE_GROUP_VARIANTS }}</div>
  </div>
</div>


{
  /* Toolbar */
}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>
    Toolbar
  </h3>
  <div
    className="p-6 rounded-md shadow-sm"
    style={{ backgroundColor: pageStyles.cardBg }}
  >
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <ToolbarComponent
      variant="default"
      textFormatting={true}
      textAlignment={true}
      showEditInfo={true}
      showShareButton={true}
      editInfoText="Edited 2 hours ago"
      shareButtonText="Share"
      defaultAlignment="center"
    />
  </div>
  <p className="text-sm text-gray-500">Default toolbar variant.</p>
</div>
</div>
  </div>
</div>


{/* Tooltip */}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>Tooltip</h3>
  <div className="p-6 rounded-md shadow-sm" style={{ backgroundColor: pageStyles.cardBg }}>
    <div className="space-y-8">
      {{TOOLTIP_VARIANTS}}
    </div>
  </div>
</div>
```
        </section>
      </div>

      <footer className="py-12" style={{ backgroundColor: pageStyles.footerBg, color: pageStyles.footerText }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">StyleATC</h3>
              <p style={{ color: `${pageStyles.footerText}99` }}>
                A comprehensive design system built with Tailwind CSS and Radix
                UI primitives.
              </p>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white" style={{ color: `${pageStyles.footerText}99` }}>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/yourusername/your-repo" className="hover:text-white" style={{ color: `${pageStyles.footerText}99` }}>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com" className="hover:text-white" style={{ color: `${pageStyles.footerText}99` }}>
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a href="https://www.radix-ui.com" className="hover:text-white" style={{ color: `${pageStyles.footerText}99` }}>
                    Radix UI
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.linkedin.com/in/stevenglab/" target="_blank" className="hover:text-white" style={{ color: `${pageStyles.footerText}99` }}>
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="mailto:steven@sbtl.dev" target="_blank" className="hover:text-white" style={{ color: `${pageStyles.footerText}99` }}>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: `${pageStyles.footerText}33` }}>
            <p style={{ color: `${pageStyles.footerText}99` }}>© {new Date().getFullYear()} sbtl | 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}