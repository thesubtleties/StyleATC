
// Import components - these will be dynamically imported based on what's generated
import React from 'react';
import { useState, useEffect } from 'react';
import { DefaultTrigger, DefaultCardContent } from './components/HovercardComponent';
import { PopoverFormFields } from './components/PopoverComponent';
import { NavigationMenu } from 'radix-ui';
import { FontItalicIcon, TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from '@radix-ui/react-icons';
import { default as AccordionComponent } from './components/AccordionComponent';
import { default as AlertdialogComponent } from './components/AlertdialogComponent';
import { default as ButtonComponent } from './components/ButtonComponent';
import { default as CardComponent } from './components/CardComponent';
import { default as CheckboxComponent } from './components/CheckboxComponent';
import { default as CollapsibleComponent } from './components/CollapsibleComponent';
import { default as ContentsectionComponent } from './components/ContentsectionComponent';
import { default as ContextmenuComponent } from './components/ContextmenuComponent';
import { default as DialogComponent } from './components/DialogComponent';
import { default as DropdownmenudemoComponent } from './components/DropdownmenudemoComponent';
import { default as FormComponent } from './components/FormComponent';
import { default as FormfieldComponent } from './components/FormfieldComponent';
import { default as HeaderComponent } from './components/HeaderComponent';
import { default as HovercardComponent } from './components/HovercardComponent';
import { default as LabelComponent } from './components/LabelComponent';
import { default as MenubarComponent } from './components/MenubarComponent';
import { default as ModalComponent } from './components/ModalComponent';
import { default as NavigationmenuComponent } from './components/NavigationmenuComponent';
import { default as OnetimepasswordComponent } from './components/OnetimepasswordComponent';
import { default as PopoverComponent } from './components/PopoverComponent';
import { default as ProfilecardComponent } from './components/ProfilecardComponent';
import { default as ProgressComponent } from './components/ProgressComponent';
import { default as RadiogroupComponent } from './components/RadiogroupComponent';
import { default as ScrollareaComponent } from './components/ScrollareaComponent';
import { default as SelectComponent } from './components/SelectComponent';
import { default as SeparatordemoComponent } from './components/SeparatordemoComponent';
import { default as SliderComponent } from './components/SliderComponent';
import { default as SwitchComponent } from './components/SwitchComponent';
import { default as TabsComponent } from './components/TabsComponent';
import { default as ToastComponent } from './components/ToastComponent';
import { default as ToggleComponent } from './components/ToggleComponent';
import { default as TogglegroupComponent } from './components/TogglegroupComponent';
import { default as ToolbarComponent } from './components/ToolbarComponent';
import { default as TooltipComponent } from './components/TooltipComponent';

export default function StyleGuide() {
  // Add state to track if we're in the browser
  const [isBrowser, setIsBrowser] = useState(false);
  
  // Style tokens from the theme system
  const colors = {
    primary: '#7c3aed',
    secondary: '#00f9ff',
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
    headerBg: '#7c3aed',
    headerText: '#ffffff',
    footerBg: '#7c3aed',
    footerText: '#ffffff',
    cardBg: '#ffffff',
    muted: '#9ca3af',
    sectionHeadingColor: '#7c3aed',
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
      <HeaderComponent
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

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2">
    <AccordionComponent
      variant="ocean"
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
  <p className="text-sm text-gray-500">Ocean-themed accordion with subtle gradients and smooth animations</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Modern</h4>
  <div className="mb-2">
    <AccordionComponent
      variant="modern"
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
  <p className="text-sm text-gray-500">A sleek, modern accordion with smooth transitions and contemporary styling</p>
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
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <AlertdialogComponent
      variant="default"
      triggerText="Open Default Dialog"
      title="Default Alert Dialog"
      description="This is an example of the default alert dialog variant. It demonstrates how this component would look with the applied theme."
      onAction={() => console.log('Action confirmed')}
    />
  </div>
  <p className="text-sm text-gray-500">Default AlertDialog variant.</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Wizardofoz</h4>
  <div className="mb-2">
    <AlertdialogComponent
      variant="wizardofoz"
      triggerText="Open Wizardofoz Dialog"
      title="Wizardofoz Alert Dialog"
      description="This is an example of the wizardofoz alert dialog variant. It demonstrates how this component would look with the applied theme."
      onAction={() => console.log('Action confirmed')}
    />
  </div>
  <p className="text-sm text-gray-500">A whimsical Wizard of Oz themed alert dialog with emerald city colors and yellow brick road accents</p>
</div>

</div>
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
    <div className="space-y-8">
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="default" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="default" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="default" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="default" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">Default button variant.</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Primary</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="primary" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="primary" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="primary" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="primary" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">Primary button with blue styling and white text</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Secondary</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="secondary" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="secondary" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="secondary" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="secondary" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">Secondary button with gray styling</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Outline</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="outline" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="outline" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="outline" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="outline" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A modern, elegant outline button with subtle hover effects and refined styling</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Danger</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="danger" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="danger" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="danger" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="danger" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">Danger button with red styling</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ghost</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="ghost" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="ghost" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="ghost" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="ghost" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">Ghost button with transparent background and primary text color</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Success</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="success" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="success" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="success" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="success" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">Success button with secondary color styling</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Bright</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="bright" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="bright" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="bright" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="bright" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A vibrant amber-to-orange gradient button with a slight lift effect on hover</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Subtle</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="subtle" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="subtle" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="subtle" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="subtle" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A refined subtle button with slate colors and active state for secondary actions</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Neon</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="neon" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="neon" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="neon" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="neon" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">Neon pink button with subtle shadow and hover effects</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Gradient</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="gradient" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="gradient" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="gradient" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="gradient" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">Gradient button with primary to secondary color transition</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Custom</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="custom" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="custom" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="custom" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="custom" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">Custom button with gradient and rounded corners</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Test</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="test" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="test" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="test" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="test" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A test button to verify if we can create components</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Vibrant</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="vibrant" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="vibrant" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="vibrant" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="vibrant" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A vibrant button with cyan-to-blue gradient and enhanced hover effects</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">3d</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="3d" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="3d" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="3d" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="3d" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A 3D button with depth effect that appears to press down when clicked</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Cool-blue</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="cool-blue" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="cool-blue" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="cool-blue" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="cool-blue" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A cool blue gradient button with cyan accents and enhanced hover effects</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Modern</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="modern" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="modern" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="modern" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="modern" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A modern button with gradient background, rounded corners, and subtle shadow effects</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Indigo-gradient</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="indigo-gradient" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="indigo-gradient" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="indigo-gradient" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="indigo-gradient" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">An indigo gradient button that uses our primary color with enhanced hover effects</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="ocean" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="ocean" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="ocean" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="ocean" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">An ocean-themed button with a gradient of blue shades reminiscent of ocean waves</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Sunrise</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="sunrise" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="sunrise" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="sunrise" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="sunrise" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A warm, energetic button styled with our coral secondary color</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean-sunrise-gradient</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="ocean-sunrise-gradient" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="ocean-sunrise-gradient" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="ocean-sunrise-gradient" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="ocean-sunrise-gradient" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A vibrant gradient button that transitions from our teal primary to our coral secondary</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean-wave</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="ocean-wave" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="ocean-wave" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="ocean-wave" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="ocean-wave" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A beautiful ocean-themed gradient button with a wave-like appearance</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Sunset</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="sunset" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="sunset" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="sunset" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="sunset" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A warm, sunset-colored button with orange tones and soft shadows</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Sunset-gradient</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="sunset-gradient" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="sunset-gradient" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="sunset-gradient" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="sunset-gradient" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A vibrant gradient button transitioning from orange to pink, like a beautiful sunset</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean-sunset-blend</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="ocean-sunset-blend" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="ocean-sunset-blend" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="ocean-sunset-blend" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="ocean-sunset-blend" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A harmonious blend of ocean blues and sunset oranges in a gradient button</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Modal-default</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="modal-default" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="modal-default" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="modal-default" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="modal-default" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A button styled to match the default modal theme</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Sun-faded</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="sun-faded" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="sun-faded" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="sun-faded" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="sun-faded" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">A sun-faded orange button to match the fancy modal</p>
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

    <CardComponent variant="default" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Standard card with subtle hover effect.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Elevated</h4>
  <div className="mb-2">

    <CardComponent variant="elevated" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Card with increased elevation and shadow.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Outlined</h4>
  <div className="mb-2">

    <CardComponent variant="outlined" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Card with a prominent primary color border.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Flat</h4>
  <div className="mb-2">

    <CardComponent variant="flat" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Minimal card with a truly flat appearance and subtle gray background.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ghost</h4>
  <div className="mb-2">

    <CardComponent variant="ghost" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Transparent card that blends with the background, subtle hover.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Dark</h4>
  <div className="mb-2">

    <CardComponent variant="dark" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Dark-themed card for interfaces with a dark mode.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Gradient-accent</h4>
  <div className="mb-2">

    <CardComponent variant="gradient-accent" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Card with a subtle gradient accent on the top border.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Interactive</h4>
  <div className="mb-2">

    <CardComponent variant="interactive" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Card designed for interaction, with hover transform and focus states.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Info</h4>
  <div className="mb-2">

    <CardComponent variant="info" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Card for displaying informational messages.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Success</h4>
  <div className="mb-2">

    <CardComponent variant="success" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Card for success messages or positive affirmations.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Warning</h4>
  <div className="mb-2">

    <CardComponent variant="warning" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Card for warnings or important notices.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Danger</h4>
  <div className="mb-2">

    <CardComponent variant="danger" className="max-w-sm" />
  </div>
  <p className="text-sm text-gray-500">Card for error messages or critical alerts.</p>
</div></div>
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

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Modern</h4>
  <div className="mb-2 flex flex-col gap-4">
    <CheckboxComponent
      variant="modern"
      label="Unchecked state"
      id="modern-unchecked"
      defaultChecked={false}
    />
    <CheckboxComponent
      variant="modern"
      label="Checked state"
      id="modern-checked"
      defaultChecked={true}
    />
  </div>
  <p className="text-sm text-gray-500">Modern checkbox with vibrant colors and smooth transitions.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Minimal</h4>
  <div className="mb-2 flex flex-col gap-4">
    <CheckboxComponent
      variant="minimal"
      label="Unchecked state"
      id="minimal-unchecked"
      defaultChecked={false}
    />
    <CheckboxComponent
      variant="minimal"
      label="Checked state"
      id="minimal-checked"
      defaultChecked={true}
    />
  </div>
  <p className="text-sm text-gray-500">Subtle, minimal checkbox with light styling.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Rounded</h4>
  <div className="mb-2 flex flex-col gap-4">
    <CheckboxComponent
      variant="rounded"
      label="Unchecked state"
      id="rounded-unchecked"
      defaultChecked={false}
    />
    <CheckboxComponent
      variant="rounded"
      label="Checked state"
      id="rounded-checked"
      defaultChecked={true}
    />
  </div>
  <p className="text-sm text-gray-500">Fully rounded checkbox with smooth edges.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2 flex flex-col gap-4">
    <CheckboxComponent
      variant="ocean"
      label="Unchecked state"
      id="ocean-unchecked"
      defaultChecked={false}
    />
    <CheckboxComponent
      variant="ocean"
      label="Checked state"
      id="ocean-checked"
      defaultChecked={true}
    />
  </div>
  <p className="text-sm text-gray-500">Ocean-themed checkbox with blue and teal colors.</p>
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
  <p className="text-sm text-gray-500">A clean, modern collapsible component with softer colors and subtle shadows.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Classy</h4>
  <div className="mb-2">
    <CollapsibleComponent
      variant="classy"
      title="@peduarte starred 3 repositories"
      items={[
        { content: '@radix-ui/primitives' },
        { content: '@radix-ui/colors' },
        { content: '@radix-ui/themes' },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">A classy, minimalist collapsible with subtle colors and elegant styling.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Fresh</h4>
  <div className="mb-2">
    <CollapsibleComponent
      variant="fresh"
      title="@peduarte starred 3 repositories"
      items={[
        { content: '@radix-ui/primitives' },
        { content: '@radix-ui/colors' },
        { content: '@radix-ui/themes' },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">A fresh, organic-inspired collapsible that feels welcoming and natural.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Macos</h4>
  <div className="mb-2">
    <CollapsibleComponent
      variant="macos"
      title="@peduarte starred 3 repositories"
      items={[
        { content: '@radix-ui/primitives' },
        { content: '@radix-ui/colors' },
        { content: '@radix-ui/themes' },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">A collapsible component styled after macOS interface elements, featuring a clean, minimal design with subtle gradients and shadows.</p>
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
    <div className="space-y-8">
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <ContentsectionComponent
      variant="default"
      title="Example Section Title"
      subtitle="This is a subtitle that provides additional context for the section"
      align="left"
      spacing="default"
    >
      <p>
        This is an example of content within the section. The ContentSection
        component is designed to present text content in a structured and
        consistent way.
      </p>
      <p>
        It supports <strong>rich text formatting</strong> through the prose
        classes, and can be aligned differently based on your needs.
      </p>
      <h3>Sub-sections are supported</h3>
      <p>You can include headings, lists, and other content elements:</p>
      <ul>
        <li>Feature one explanation</li>
        <li>Another important point</li>
        <li>Final consideration</li>
      </ul>
    </ContentsectionComponent>
  </div>
  <p className="text-sm text-gray-500">A modern, responsive content section with customizable alignment and spacing options.</p>
</div>
</div>
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
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <ContextmenuComponent
      variant="default"
      triggerText="Right-click here to open menu"
      items={[
        { label: 'Back', shortcut: '⌘+[' },
        { label: 'Forward', shortcut: '⌘+]', disabled: true },
        { label: 'Reload', shortcut: '⌘+R' },
      ]}
      subMenuItems={[
        { label: 'Save Page As…', shortcut: '⌘+S' },
        { label: 'Create Shortcut…' },
        { label: 'Name Window…' },
        { label: 'Developer Tools' },
      ]}
      checkboxItems={[
        {
          id: 'bookmarks',
          label: 'Show Bookmarks',
          shortcut: '⌘+B',
          defaultChecked: true,
        },
        { id: 'urls', label: 'Show Full URLs' },
      ]}
      radioItems={[
        {
          group: 'People',
          value: 'pedro',
          label: 'Pedro Duarte',
          defaultChecked: true,
        },
        { group: 'People', value: 'colm', label: 'Colm Tuite' },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">Default context menu variant.</p>
  <div className="mt-2 text-xs text-gray-400">
    <em>Note: Right-click on the trigger area to see the context menu</em>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Soda-pop</h4>
  <div className="mb-2">
    <ContextmenuComponent
      variant="soda-pop"
      triggerText="Right-click here to open menu"
      items={[
        { label: 'Back', shortcut: '⌘+[' },
        { label: 'Forward', shortcut: '⌘+]', disabled: true },
        { label: 'Reload', shortcut: '⌘+R' },
      ]}
      subMenuItems={[
        { label: 'Save Page As…', shortcut: '⌘+S' },
        { label: 'Create Shortcut…' },
        { label: 'Name Window…' },
        { label: 'Developer Tools' },
      ]}
      checkboxItems={[
        {
          id: 'bookmarks',
          label: 'Show Bookmarks',
          shortcut: '⌘+B',
          defaultChecked: true,
        },
        { id: 'urls', label: 'Show Full URLs' },
      ]}
      radioItems={[
        {
          group: 'People',
          value: 'pedro',
          label: 'Pedro Duarte',
          defaultChecked: true,
        },
        { group: 'People', value: 'colm', label: 'Colm Tuite' },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">A whimsical 50's ice cream parlor-themed context menu with pastel colors and retro styling.</p>
  <div className="mt-2 text-xs text-gray-400">
    <em>Note: Right-click on the trigger area to see the context menu</em>
  </div>
</div>
</div>
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
      triggerText="Open Default Dialog"
      title="Default Dialog"
      description="This is an example of the default dialog variant."
      fields={[
        { id: 'name', label: 'Name', defaultValue: 'John Doe' },
        { id: 'email', label: 'Email', defaultValue: 'john@example.com' },
      ]}
      saveButtonText="Save Changes"
    />
  </div>
  <p className="text-sm text-gray-500">Default dialog variant with solid background and normalized styling.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Midnight</h4>
  <div className="mb-2">
    <DialogComponent
      variant="midnight"
      triggerText="Open Midnight Dialog"
      title="Midnight Dialog"
      description="This is an example of the midnight dialog variant."
      fields={[
        { id: 'name', label: 'Name', defaultValue: 'John Doe' },
        { id: 'email', label: 'Email', defaultValue: 'john@example.com' },
      ]}
      saveButtonText="Save Changes"
    />
  </div>
  <p className="text-sm text-gray-500">An elegant midnight-themed dialog with deep blues and subtle purple accents.</p>
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
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2 flex items-start">
    <DropdownmenudemoComponent
      variant="default"
      items={[
        { label: 'New Tab', shortcut: '⌘+T' },
        { label: 'New Window', shortcut: '⌘+N' },
        { label: 'New Private Window', shortcut: '⇧+⌘+N', disabled: true },
      ]}
      subMenuItems={[
        { label: 'Save Page As…', shortcut: '⌘+S' },
        { label: 'Create Shortcut…' },
        { label: 'Name Window…' },
        { label: 'Developer Tools' },
      ]}
      checkboxItems={[
        { label: 'Show Bookmarks', shortcut: '⌘+B', defaultChecked: true },
        { label: 'Show Full URLs' },
      ]}
      radioItems={[
        {
          groupLabel: 'People',
          value: 'pedro',
          label: 'Pedro Duarte',
          defaultChecked: true,
        },
        { value: 'colm', label: 'Colm Tuite' },
      ]}
    />
    <div className="ml-8 flex-1">
      <p className="text-sm text-gray-500 mb-2">Default dropdown menu demo variant.</p>
      <p className="text-xs text-gray-400">
        Click the menu button to see the dropdown with the default{' '}
        styling.
      </p>
    </div>
  </div>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2 flex items-start">
    <DropdownmenudemoComponent
      variant="ocean"
      items={[
        { label: 'New Tab', shortcut: '⌘+T' },
        { label: 'New Window', shortcut: '⌘+N' },
        { label: 'New Private Window', shortcut: '⇧+⌘+N', disabled: true },
      ]}
      subMenuItems={[
        { label: 'Save Page As…', shortcut: '⌘+S' },
        { label: 'Create Shortcut…' },
        { label: 'Name Window…' },
        { label: 'Developer Tools' },
      ]}
      checkboxItems={[
        { label: 'Show Bookmarks', shortcut: '⌘+B', defaultChecked: true },
        { label: 'Show Full URLs' },
      ]}
      radioItems={[
        {
          groupLabel: 'People',
          value: 'pedro',
          label: 'Pedro Duarte',
          defaultChecked: true,
        },
        { value: 'colm', label: 'Colm Tuite' },
      ]}
    />
    <div className="ml-8 flex-1">
      <p className="text-sm text-gray-500 mb-2">Ocean-themed dropdown menu with beautiful aquatic colors and smooth transitions.</p>
      <p className="text-xs text-gray-400">
        Click the menu button to see the dropdown with the ocean{' '}
        styling.
      </p>
    </div>
  </div>
</div>
</div>
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

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Luxury</h4>
  <div className="mb-2">
    <FormComponent
      variant="luxury"
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
  <p className="text-sm text-gray-500">Elegant form styled for luxury jewelry websites with gold accents and refined typography.</p>
</div>
</div>
  </div>
</div>


{/*
  Style Guide Section for FormField



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
    <FormfieldComponent
      label="Your Name"
      id="example-name-default"
      variant="default"
      placeholder="e.g., Jane Doe"
    />

    {/* Example 2: Password Input */}
    <FormfieldComponent
      label="Password"
      id="example-password-default"
      variant="default"
      type="password"
      placeholder="Enter your password"
    />

     {/* Example 3: Input with Default Value */}
    <FormfieldComponent
      label="Email Address"
      id="example-email-default"
      variant="default"
      type="email"
      defaultValue="test@example.com"
    />

  </div>
  <p className="text-sm text-gray-500 italic mt-4">Default FormField variant.</p>
</div>

{/*
  Style Guide Variant for FormField Component

  Placeholders:
  - Cosmic: e.g., "Default"
  - cosmic: e.g., "default" (May not be used if FormField has no variants itself)
  - A cosmic, space-themed form field with starry accents and futuristic styling.: Description of the variant/example.

  Assumes `FormField` is available in the rendering scope.
*/}
<div className="mb-6 p-4 border rounded-lg bg-white shadow-sm"> {/* Added container */}
  <h4 className="text-md font-semibold mb-3 text-gray-800">Cosmic Example</h4>
  <div className="space-y-4"> {/* Add spacing between examples */}

    {/* Example 1: Basic Text Input */}
    <FormfieldComponent
      label="Your Name"
      id="example-name-cosmic"
      variant="cosmic"
      placeholder="e.g., Jane Doe"
    />

    {/* Example 2: Password Input */}
    <FormfieldComponent
      label="Password"
      id="example-password-cosmic"
      variant="cosmic"
      type="password"
      placeholder="Enter your password"
    />

     {/* Example 3: Input with Default Value */}
    <FormfieldComponent
      label="Email Address"
      id="example-email-cosmic"
      variant="cosmic"
      type="email"
      defaultValue="test@example.com"
    />

  </div>
  <p className="text-sm text-gray-500 italic mt-4">A cosmic, space-themed form field with starry accents and futuristic styling.</p>
</div>

{/*
  Style Guide Variant for FormField Component

  Placeholders:
  - Ocean: e.g., "Default"
  - ocean: e.g., "default" (May not be used if FormField has no variants itself)
  - An ocean-inspired form field with cool blue colors and a subtle wave-like appearance: Description of the variant/example.

  Assumes `FormField` is available in the rendering scope.
*/}
<div className="mb-6 p-4 border rounded-lg bg-white shadow-sm"> {/* Added container */}
  <h4 className="text-md font-semibold mb-3 text-gray-800">Ocean Example</h4>
  <div className="space-y-4"> {/* Add spacing between examples */}

    {/* Example 1: Basic Text Input */}
    <FormfieldComponent
      label="Your Name"
      id="example-name-ocean"
      variant="ocean"
      placeholder="e.g., Jane Doe"
    />

    {/* Example 2: Password Input */}
    <FormfieldComponent
      label="Password"
      id="example-password-ocean"
      variant="ocean"
      type="password"
      placeholder="Enter your password"
    />

     {/* Example 3: Input with Default Value */}
    <FormfieldComponent
      label="Email Address"
      id="example-email-ocean"
      variant="ocean"
      type="email"
      defaultValue="test@example.com"
    />

  </div>
  <p className="text-sm text-gray-500 italic mt-4">An ocean-inspired form field with cool blue colors and a subtle wave-like appearance</p>
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
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2 flex justify-center py-12">
    <HovercardComponent
      variant="default"
      triggerContent={
        <DefaultTrigger
          imageUrl="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          alt="Radix UI"
          href="https://twitter.com/radix_ui"
        />
      }
      cardContent={
        <DefaultCardContent
          imageUrl="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          title="Radix"
          handle="@radix_ui"
          description="Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source."
          followingCount="0"
          followersCount="2,900"
        />
      }
    />
  </div>
  <p className="text-sm text-gray-500">Default hovercard variant.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Graystone</h4>
  <div className="mb-2 flex justify-center py-12">
    <HovercardComponent
      variant="graystone"
      triggerContent={
        <DefaultTrigger
          imageUrl="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          alt="Radix UI"
          href="https://twitter.com/radix_ui"
        />
      }
      cardContent={
        <DefaultCardContent
          imageUrl="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          title="Radix"
          handle="@radix_ui"
          description="Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source."
          followingCount="0"
          followersCount="2,900"
        />
      }
    />
  </div>
  <p className="text-sm text-gray-500">Sophisticated graystone hovercard with slate tones and subtle depth effects.</p>
</div>
</div>
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

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2">
    <LabelComponent
      variant="ocean"
      htmlFor="ocean_input"
      inputProps={{
        defaultValue: 'Sample Text',
      }}
    >
      Ocean Label
    </LabelComponent>
  </div>
  <p className="text-sm text-gray-500">An ocean-themed label with wave-like aesthetics and sea colors.</p>
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

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Cosmic</h4>
  <div className="mb-2">
    <MenubarComponent
      variant="cosmic"
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
  <p className="text-sm text-gray-500">A cosmic-themed menubar with space-inspired colors and stellar accents.</p>
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
      // footer={
      //   <>
      //     <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //       Cancel
      //     </button>
      //     <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      //       Confirm
      //     </button>
      //   </>
      // }
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
      // footer={
      //   <>
      //     <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //       Cancel
      //     </button>
      //     <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      //       Confirm
      //     </button>
      //   </>
      // }
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
      // footer={
      //   <>
      //     <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //       Cancel
      //     </button>
      //     <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      //       Confirm
      //     </button>
      //   </>
      // }
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
      // footer={
      //   <>
      //     <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //       Cancel
      //     </button>
      //     <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      //       Confirm
      //     </button>
      //   </>
      // }
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
      // footer={
      //   <>
      //     <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
      //       Cancel
      //     </button>
      //     <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      //       Confirm
      //     </button>
      //   </>
      // }
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
    <div className="space-y-12"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-4 py-6 bg-gray-50 rounded-md flex justify-center">
    <NavigationmenuComponent
      variant="default" 
      items={[
        {
          type: 'dropdown',
          label: 'Features',
          content: (
            <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
                      Product Name
                    </div>
                    <p className="text-[14px] leading-[1.3] text-white/80">
                      Brief product description goes here.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <NavigationmenuComponent.ListItem variant="default" href="/" title="Documentation">
                Comprehensive guides and API references.
              </NavigationmenuComponent.ListItem>
              <NavigationmenuComponent.ListItem variant="default" href="/" title="Components">
                UI building blocks for your application.
              </NavigationmenuComponent.ListItem>
              <NavigationmenuComponent.ListItem variant="default" href="/" title="Templates">
                Pre-built layouts for common use cases.
              </NavigationmenuComponent.ListItem>
            </ul>
          ),
        },
        {
          type: 'dropdown',
          label: 'Resources',
          content: (
            <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-2">

              <NavigationmenuComponent.ListItem
                variant="default"
                title="Getting Started"
                href="/"
              >
                Quick start guide for new users.
              </NavigationmenuComponent.ListItem>

              <NavigationmenuComponent.ListItem variant="default" title="Tutorials" href="/">
                Step-by-step guides for common tasks.
              </NavigationmenuComponent.ListItem>

              <NavigationmenuComponent.ListItem variant="default" title="Blog" href="/">
                Latest news and updates from our team.
              </NavigationmenuComponent.ListItem>

              <NavigationmenuComponent.ListItem variant="default" title="Community" href="/">
                Join our community of developers.
              </NavigationmenuComponent.ListItem>
            </ul>
          ),
        },
        {
          type: 'link',
          label: 'Pricing',
          href: '/',
        },
        {
          type: 'link',
          label: 'Contact',
          href: '/',
        },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">Default navigation menu with configurable menu items.</p>
</div>
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-4 py-6 bg-gray-50 rounded-md flex justify-center">
    <NavigationmenuComponent
      variant="ocean" 
      items={[
        {
          type: 'dropdown',
          label: 'Features',
          content: (
            <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
                      Product Name
                    </div>
                    <p className="text-[14px] leading-[1.3] text-white/80">
                      Brief product description goes here.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <NavigationmenuComponent.ListItem variant="ocean" href="/" title="Documentation">
                Comprehensive guides and API references.
              </NavigationmenuComponent.ListItem>
              <NavigationmenuComponent.ListItem variant="ocean" href="/" title="Components">
                UI building blocks for your application.
              </NavigationmenuComponent.ListItem>
              <NavigationmenuComponent.ListItem variant="ocean" href="/" title="Templates">
                Pre-built layouts for common use cases.
              </NavigationmenuComponent.ListItem>
            </ul>
          ),
        },
        {
          type: 'dropdown',
          label: 'Resources',
          content: (
            <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-2">

              <NavigationmenuComponent.ListItem
                variant="ocean"
                title="Getting Started"
                href="/"
              >
                Quick start guide for new users.
              </NavigationmenuComponent.ListItem>

              <NavigationmenuComponent.ListItem variant="ocean" title="Tutorials" href="/">
                Step-by-step guides for common tasks.
              </NavigationmenuComponent.ListItem>

              <NavigationmenuComponent.ListItem variant="ocean" title="Blog" href="/">
                Latest news and updates from our team.
              </NavigationmenuComponent.ListItem>

              <NavigationmenuComponent.ListItem variant="ocean" title="Community" href="/">
                Join our community of developers.
              </NavigationmenuComponent.ListItem>
            </ul>
          ),
        },
        {
          type: 'link',
          label: 'Pricing',
          href: '/',
        },
        {
          type: 'link',
          label: 'Contact',
          href: '/',
        },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">Ocean-themed navigation menu with gradient accents and smooth animations</p>
</div></div>
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
    <div className="space-y-8">
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <OnetimepasswordComponent variant="default" length={6} />
  </div>
  <p className="text-sm text-gray-500">Default one-time password variant.</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Terminal</h4>
  <div className="mb-2">
    <OnetimepasswordComponent variant="terminal" length={6} />
  </div>
  <p className="text-sm text-gray-500">Linux terminal-style one-time password field with dark background and burnt orange monospace text.</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Rectangular</h4>
  <div className="mb-2">
    <OnetimepasswordComponent variant="rectangular" length={6} />
  </div>
  <p className="text-sm text-gray-500">Rectangular one-time password field with white background, silver borders, and bold medium gray text.</p>
</div>
</div>
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

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Royalblue</h4>
  <div className="mb-2 flex items-center justify-center p-8 bg-gray-100 rounded">
    <PopoverComponent variant="royalblue" title="Dimensions">
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
  <p className="text-sm text-gray-500">Elegant popover with rich dark blue background and gold accents.</p>
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
    <div className="space-y-8">
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <ProfilecardComponent
      variant="default"
      name="Alex Johnson"
      title="Product Designer"
      avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Demo"
      description="Passionate designer with 5+ years of experience creating user-centered digital experiences."
      stats={[
        { value: '52', label: 'Projects' },
        { value: '89', label: 'Reviews' },
        { value: '95%', label: 'Rating' },
      ]}
      actions={[
        { label: 'Connect', onClick: () => {} },
        { label: 'Message', onClick: () => {} },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">Default profile card style.</p>
</div>


<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2">
    <ProfilecardComponent
      variant="ocean"
      name="Alex Johnson"
      title="Product Designer"
      avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Demo"
      description="Passionate designer with 5+ years of experience creating user-centered digital experiences."
      stats={[
        { value: '52', label: 'Projects' },
        { value: '89', label: 'Reviews' },
        { value: '95%', label: 'Rating' },
      ]}
      actions={[
        { label: 'Connect', onClick: () => {} },
        { label: 'Message', onClick: () => {} },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">Ocean-themed profile card with subtle gradient background and smooth hover animations</p>
</div>
</div>
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

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2">
    <ProgressComponent variant="ocean" value={66} />
  </div>
  <div className="mt-4 mb-2">
    <ProgressComponent variant="ocean" value={33} />
  </div>
  <p className="text-sm text-gray-500">An ocean-themed progress bar with light background and gradient fill</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Modern</h4>
  <div className="mb-2">
    <ProgressComponent variant="modern" value={66} />
  </div>
  <div className="mt-4 mb-2">
    <ProgressComponent variant="modern" value={33} />
  </div>
  <p className="text-sm text-gray-500">A sleek, modern progress bar with soft glow effect</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Minimal</h4>
  <div className="mb-2">
    <ProgressComponent variant="minimal" value={66} />
  </div>
  <div className="mt-4 mb-2">
    <ProgressComponent variant="minimal" value={33} />
  </div>
  <p className="text-sm text-gray-500">A minimal, flat progress bar with subtle animation</p>
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
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <RadiogroupComponent
      variant="default"
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      defaultValue="option1"
      ariaLabel="Example options"
    />
  </div>
  <p className="text-sm text-gray-500">Default radio group variant.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Cards</h4>
  <div className="mb-2">
    <RadiogroupComponent
      variant="cards"
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      defaultValue="option1"
      ariaLabel="Example options"
    />
  </div>
  <p className="text-sm text-gray-500">A card-like radio group with options that visually highlight when selected</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Pills</h4>
  <div className="mb-2">
    <RadiogroupComponent
      variant="pills"
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      defaultValue="option1"
      ariaLabel="Example options"
    />
  </div>
  <p className="text-sm text-gray-500">A pill-style radio group with an interactive toggle feel</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Toggle</h4>
  <div className="mb-2">
    <RadiogroupComponent
      variant="toggle"
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      defaultValue="option1"
      ariaLabel="Example options"
    />
  </div>
  <p className="text-sm text-gray-500">A toggle-style radio group with button-like presentation</p>
</div>
</div>
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
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <ScrollareaComponent
      variant="default"
      items={[
        'v1.2.0-beta.50',
        'v1.2.0-beta.49',
        'v1.2.0-beta.48',
        'v1.2.0-beta.47',
        'v1.2.0-beta.46',
        'v1.2.0-beta.45',
        'v1.2.0-beta.44',
        'v1.2.0-beta.43',
        'v1.2.0-beta.42',
        'v1.2.0-beta.41',
        'v1.2.0-beta.40',
        'v1.2.0-beta.39',
        'v1.2.0-beta.38',
        'v1.2.0-beta.37',
        'v1.2.0-beta.36',
        'v1.2.0-beta.35',
      ]}
      title="Tags"
      height="225px"
      width="200px"
    />
  </div>
  <p className="text-sm text-gray-500">Default scroll area variant.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Professional</h4>
  <div className="mb-2">
    <ScrollareaComponent
      variant="professional"
      items={[
        'v1.2.0-beta.50',
        'v1.2.0-beta.49',
        'v1.2.0-beta.48',
        'v1.2.0-beta.47',
        'v1.2.0-beta.46',
        'v1.2.0-beta.45',
        'v1.2.0-beta.44',
        'v1.2.0-beta.43',
        'v1.2.0-beta.42',
        'v1.2.0-beta.41',
        'v1.2.0-beta.40',
        'v1.2.0-beta.39',
        'v1.2.0-beta.38',
        'v1.2.0-beta.37',
        'v1.2.0-beta.36',
        'v1.2.0-beta.35',
      ]}
      title="Tags"
      height="225px"
      width="200px"
    />
  </div>
  <p className="text-sm text-gray-500">A sleek, professional scroll area with modern minimal scrollbars</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Elevated</h4>
  <div className="mb-2">
    <ScrollareaComponent
      variant="elevated"
      items={[
        'v1.2.0-beta.50',
        'v1.2.0-beta.49',
        'v1.2.0-beta.48',
        'v1.2.0-beta.47',
        'v1.2.0-beta.46',
        'v1.2.0-beta.45',
        'v1.2.0-beta.44',
        'v1.2.0-beta.43',
        'v1.2.0-beta.42',
        'v1.2.0-beta.41',
        'v1.2.0-beta.40',
        'v1.2.0-beta.39',
        'v1.2.0-beta.38',
        'v1.2.0-beta.37',
        'v1.2.0-beta.36',
        'v1.2.0-beta.35',
      ]}
      title="Tags"
      height="225px"
      width="200px"
    />
  </div>
  <p className="text-sm text-gray-500">A stylish, elevated scroll area with modern aesthetics and subtle interactions</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Glass</h4>
  <div className="mb-2">
    <ScrollareaComponent
      variant="glass"
      items={[
        'v1.2.0-beta.50',
        'v1.2.0-beta.49',
        'v1.2.0-beta.48',
        'v1.2.0-beta.47',
        'v1.2.0-beta.46',
        'v1.2.0-beta.45',
        'v1.2.0-beta.44',
        'v1.2.0-beta.43',
        'v1.2.0-beta.42',
        'v1.2.0-beta.41',
        'v1.2.0-beta.40',
        'v1.2.0-beta.39',
        'v1.2.0-beta.38',
        'v1.2.0-beta.37',
        'v1.2.0-beta.36',
        'v1.2.0-beta.35',
      ]}
      title="Tags"
      height="225px"
      width="200px"
    />
  </div>
  <p className="text-sm text-gray-500">A glass-morphism inspired scroll area with elegant blur effects</p>
</div>
</div>
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

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Chill</h4>
  <div className="mb-2">
    <SelectComponent
      variant="chill"
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
  <p className="text-sm text-gray-500">A calm, relaxed select component with cool colors and subtle animations</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Macos</h4>
  <div className="mb-2">
    <SelectComponent
      variant="macos"
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
  <p className="text-sm text-gray-500">A sleek, modern macOS-inspired select component with frosted glass effect and subtle animations.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Osx-aqua</h4>
  <div className="mb-2">
    <SelectComponent
      variant="osx-aqua"
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
  <p className="text-sm text-gray-500">A nostalgic early 2000s iMac/Mac OS X inspired select component with the iconic smoke gray translucent plastic look.</p>
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
    <SeparatordemoComponent variant="default" />
  </div>
  <p className="text-sm text-gray-500">Default separator variant.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Gradient</h4>
  <div className="mb-2">
    <SeparatordemoComponent variant="gradient" />
  </div>
  <p className="text-sm text-gray-500">A gradient separator that transitions smoothly between colors</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Dotted</h4>
  <div className="mb-2">
    <SeparatordemoComponent variant="dotted" />
  </div>
  <p className="text-sm text-gray-500">A stylish dot pattern separator</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Elevated</h4>
  <div className="mb-2">
    <SeparatordemoComponent variant="elevated" />
  </div>
  <p className="text-sm text-gray-500">A thick, elevated separator with shadow effect</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Double</h4>
  <div className="mb-2">
    <SeparatordemoComponent variant="double" />
  </div>
  <p className="text-sm text-gray-500">A double-line separator for a more decorative look</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Rainbow</h4>
  <div className="mb-2">
    <SeparatordemoComponent variant="rainbow" />
  </div>
  <p className="text-sm text-gray-500">A colorful, rainbow gradient separator</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ornate</h4>
  <div className="mb-2">
    <SeparatordemoComponent variant="ornate" />
  </div>
  <p className="text-sm text-gray-500">A decorative ornate separator with a center accent</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Animated</h4>
  <div className="mb-2">
    <SeparatordemoComponent variant="animated" />
  </div>
  <p className="text-sm text-gray-500">A dashed separator with animated movement</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Crayon</h4>
  <div className="mb-2">
    <SeparatordemoComponent variant="crayon" />
  </div>
  <p className="text-sm text-gray-500">A playful separator that looks like it was drawn with a crayon</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Crayon-alt</h4>
  <div className="mb-2">
    <SeparatordemoComponent variant="crayon-alt" />
  </div>
  <p className="text-sm text-gray-500">A wavy, hand-drawn separator that looks like crayon</p>
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

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2 flex items-center justify-center py-4">
    <SliderComponent
      variant="ocean"
      defaultValue={[50]}
      max={100}
      step={1}
      ariaLabel="Example slider"
    />
  </div>
  <p className="text-sm text-gray-500">Ocean-themed slider with gradient track and smooth animations</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Audio</h4>
  <div className="mb-2 flex items-center justify-center py-4">
    <SliderComponent
      variant="audio"
      defaultValue={[50]}
      max={100}
      step={1}
      ariaLabel="Example slider"
    />
  </div>
  <p className="text-sm text-gray-500">A sleek, dark audio-style volume slider with a modern look</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Squared</h4>
  <div className="mb-2 flex items-center justify-center py-4">
    <SliderComponent
      variant="squared"
      defaultValue={[50]}
      max={100}
      step={1}
      ariaLabel="Example slider"
    />
  </div>
  <p className="text-sm text-gray-500">A sleek squared audio slider with black glowing thumb</p>
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

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2 flex flex-col space-y-4">
    <SwitchComponent
      variant="ocean"
      label="Airplane mode"
      id="ocean-airplane"
    />
    <SwitchComponent
      variant="ocean"
      label="Dark mode"
      id="ocean-dark"
      checked={true}
    />
  </div>
  <p className="text-sm text-gray-500">Ocean-themed switch with gradient when active and light background when inactive</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ios</h4>
  <div className="mb-2 flex flex-col space-y-4">
    <SwitchComponent
      variant="ios"
      label="Airplane mode"
      id="ios-airplane"
    />
    <SwitchComponent
      variant="ios"
      label="Dark mode"
      id="ios-dark"
      checked={true}
    />
  </div>
  <p className="text-sm text-gray-500">An iOS-inspired switch with rounded appearance and subtle animations</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Minimal</h4>
  <div className="mb-2 flex flex-col space-y-4">
    <SwitchComponent
      variant="minimal"
      label="Airplane mode"
      id="minimal-airplane"
    />
    <SwitchComponent
      variant="minimal"
      label="Dark mode"
      id="minimal-dark"
      checked={true}
    />
  </div>
  <p className="text-sm text-gray-500">A sleek, minimal switch with a dark theme and purple accent</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Flat</h4>
  <div className="mb-2 flex flex-col space-y-4">
    <SwitchComponent
      variant="flat"
      label="Airplane mode"
      id="flat-airplane"
    />
    <SwitchComponent
      variant="flat"
      label="Dark mode"
      id="flat-dark"
      checked={true}
    />
  </div>
  <p className="text-sm text-gray-500">A flat, modern toggle with a colorful gradient when active</p>
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
  - A polished tabs variant with subtle shadows and transitions for a modern UI experience.: Description of the variant from theme config.

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
              <p className="mb-5 text-[15px] leading-normal">
                Make changes to your account here. Click save when you're done.
              </p>
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Name"
                id="name-default" // Unique ID
                defaultValue="Ada Lovelace"
                className="mb-4" // Add spacing if needed
                variant="default"
              />
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Username"
                id="username-default" // Unique ID
                defaultValue="@ada"
                variant="default"
              />
              <div className="mt-6 flex justify-end border-t pt-4">
                {/* --- Use the actual Button component --- */}
                <ButtonComponent variant="default">Save changes</ButtonComponent> {/* Example: Use button variant */}
              </div>
            </>
          ),
        },
        {
          value: 'password-default', // Unique value using variant name
          label: 'Password',
          content: (
            <>
              <p className="mb-5 text-[15px] leading-normal">
                Change your password here. After saving, you'll be logged out.
              </p>
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Current password"
                id="current-password-default" // Unique ID
                type="password"
                className="mb-4"
                variant="default"
              />
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="New password"
                id="new-password-default" // Unique ID
                type="password"
                className="mb-4"
                variant="default"
              />
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Confirm password"
                id="confirm-password-default" // Unique ID
                type="password"
                variant="default"
              />
              <div className="mt-6 flex justify-end border-t pt-4">
                 {/* --- Use the actual Button component --- */}
                <ButtonComponent variant="default">Change password</ButtonComponent>
              </div>
            </>
          ),
        },
      ]}
    />
    {/* --- End TabsComponent rendering --- */}
  </div>
  <p className="text-sm text-gray-500 italic">A polished tabs variant with subtle shadows and transitions for a modern UI experience.</p>
</div>
{/*
  Style Guide Variant for Tabs Component

  Placeholders:
  - Ocean: e.g., "Default"
  - ocean: e.g., "default"
  - Ocean-themed tabs with smooth gradients, subtle animations, and a calming color palette inspired by the deep sea.: Description of the variant from theme config.

  Assumes `TabsComponent`, `FormField`, and `Button` are available in the
  rendering scope (imported into the main StyleGuide.jsx).
*/}
<div className="mb-8 p-4 border rounded-lg bg-white shadow-sm"> {/* Added container */}
  <h4 className="text-md font-semibold mb-3 text-gray-800">Ocean Variant</h4>
  <div className="mb-3">
    {/* --- Render the actual TabsComponent --- */}
    <TabsComponent
      variant="ocean" // Pass variant name (might be used by component or just for consistency)
      aria-label="Account Management Example" // Good practice for accessibility
      tabs={[
        {
          value: 'account-ocean', // Unique value using variant name
          label: 'Account',
          content: (
            // Use React Fragments or a div if needed
            <>
              <p className="mb-5 text-[15px] leading-normal">
                Make changes to your account here. Click save when you're done.
              </p>
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Name"
                id="name-ocean" // Unique ID
                defaultValue="Ada Lovelace"
                className="mb-4" // Add spacing if needed
                variant="ocean"
              />
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Username"
                id="username-ocean" // Unique ID
                defaultValue="@ada"
                variant="ocean"
              />
              <div className="mt-6 flex justify-end border-t pt-4">
                {/* --- Use the actual Button component --- */}
                <ButtonComponent variant="ocean">Save changes</ButtonComponent> {/* Example: Use button variant */}
              </div>
            </>
          ),
        },
        {
          value: 'password-ocean', // Unique value using variant name
          label: 'Password',
          content: (
            <>
              <p className="mb-5 text-[15px] leading-normal">
                Change your password here. After saving, you'll be logged out.
              </p>
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Current password"
                id="current-password-ocean" // Unique ID
                type="password"
                className="mb-4"
                variant="ocean"
              />
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="New password"
                id="new-password-ocean" // Unique ID
                type="password"
                className="mb-4"
                variant="ocean"
              />
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Confirm password"
                id="confirm-password-ocean" // Unique ID
                type="password"
                variant="ocean"
              />
              <div className="mt-6 flex justify-end border-t pt-4">
                 {/* --- Use the actual Button component --- */}
                <ButtonComponent variant="ocean">Change password</ButtonComponent>
              </div>
            </>
          ),
        },
      ]}
    />
    {/* --- End TabsComponent rendering --- */}
  </div>
  <p className="text-sm text-gray-500 italic">Ocean-themed tabs with smooth gradients, subtle animations, and a calming color palette inspired by the deep sea.</p>
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
      title="Notification: Default"
      description="This is a default toast notification example"
      triggerText="Show Default Toast"
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
      title="Notification: Destructive"
      description="This is a destructive toast notification example"
      triggerText="Show Destructive Toast"
      actionText="Dismiss"
      duration={5000}
    />
  </div>
  <p className="text-sm text-gray-500">Destructive toast variant.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2">
    <ToastComponent
      variant="ocean"
      title="Notification: Ocean"
      description="This is a ocean toast notification example"
      triggerText="Show Ocean Toast"
      actionText="Dismiss"
      duration={5000}
    />
  </div>
  <p className="text-sm text-gray-500">Ocean-themed toast notification with subtle border and animations</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Champagne</h4>
  <div className="mb-2">
    <ToastComponent
      variant="champagne"
      title="Notification: Champagne"
      description="This is a champagne toast notification example"
      triggerText="Show Champagne Toast"
      actionText="Dismiss"
      duration={5000}
    />
  </div>
  <p className="text-sm text-gray-500">Elegant celebratory toast with golden champagne theme</p>
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
  <p className="text-sm text-gray-500">Default toggle variant with indigo accent color.</p>
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
  <p className="text-sm text-gray-500">Outline toggle variant with subtle indigo accents.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2 flex items-center gap-4">
    <ToggleComponent
      variant="ocean"
      icon={<FontItalicIcon />}
      label="Toggle italic"
    />
    <ToggleComponent
      variant="ocean"
      icon={<FontItalicIcon />}
      label="Toggle italic (pressed)"
      defaultPressed={true}
    />
  </div>
  <p className="text-sm text-gray-500">Ocean-themed toggle with cyan accents and smooth transitions.</p>
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
    <div className="space-y-8"><div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2">
    <TogglegroupComponent
      variant="default"
      type="single"
      defaultValue="center"
      ariaLabel="Text alignment"
      items={[
        {
          value: 'left',
          ariaLabel: 'Left aligned',
          icon: <TextAlignLeftIcon />,
        },
        {
          value: 'center',
          ariaLabel: 'Center aligned',
          icon: <TextAlignCenterIcon />,
        },
        {
          value: 'right',
          ariaLabel: 'Right aligned',
          icon: <TextAlignRightIcon />,
        },
      ]}
      colors = {colors}
    />
  </div>
  <p className="text-sm text-gray-500">An improved toggle group with clean borders, subtle hover effects, and clear active states.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Outline</h4>
  <div className="mb-2">
    <TogglegroupComponent
      variant="outline"
      type="single"
      defaultValue="center"
      ariaLabel="Text alignment"
      items={[
        {
          value: 'left',
          ariaLabel: 'Left aligned',
          icon: <TextAlignLeftIcon />,
        },
        {
          value: 'center',
          ariaLabel: 'Center aligned',
          icon: <TextAlignCenterIcon />,
        },
        {
          value: 'right',
          ariaLabel: 'Right aligned',
          icon: <TextAlignRightIcon />,
        },
      ]}
      colors = {colors}
    />
  </div>
  <p className="text-sm text-gray-500">A nostalgic toggle group styled after classic Mac OS/Windows interfaces with beveled edges and tactile pressed states.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Modern-dark</h4>
  <div className="mb-2">
    <TogglegroupComponent
      variant="modern-dark"
      type="single"
      defaultValue="center"
      ariaLabel="Text alignment"
      items={[
        {
          value: 'left',
          ariaLabel: 'Left aligned',
          icon: <TextAlignLeftIcon />,
        },
        {
          value: 'center',
          ariaLabel: 'Center aligned',
          icon: <TextAlignCenterIcon />,
        },
        {
          value: 'right',
          ariaLabel: 'Right aligned',
          icon: <TextAlignRightIcon />,
        },
      ]}
      colors = {colors}
    />
  </div>
  <p className="text-sm text-gray-500">A sleek, modern dark toggle group with glowing accents and smooth transitions.</p>
</div>
</div>
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
  <p className="text-sm text-gray-500">Modern dark gray toolbar with light gray accents and clean, minimal styling.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2">
    <ToolbarComponent
      variant="ocean"
      textFormatting={true}
      textAlignment={true}
      showEditInfo={true}
      showShareButton={true}
      editInfoText="Edited 2 hours ago"
      shareButtonText="Share"
      defaultAlignment="center"
    />
  </div>
  <p className="text-sm text-gray-500">Ocean-themed toolbar with gradient background and fluid interactions.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Mac-modern</h4>
  <div className="mb-2">
    <ToolbarComponent
      variant="mac-modern"
      textFormatting={true}
      textAlignment={true}
      showEditInfo={true}
      showShareButton={true}
      editInfoText="Edited 2 hours ago"
      shareButtonText="Share"
      defaultAlignment="center"
    />
  </div>
  <p className="text-sm text-gray-500">A modern macOS-inspired toolbar with frosted glass effect, subtle animations, and elegant interactions.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">July-fourth</h4>
  <div className="mb-2">
    <ToolbarComponent
      variant="july-fourth"
      textFormatting={true}
      textAlignment={true}
      showEditInfo={true}
      showShareButton={true}
      editInfoText="Edited 2 hours ago"
      shareButtonText="Share"
      defaultAlignment="center"
    />
  </div>
  <p className="text-sm text-gray-500">Patriotic Fourth of July inspired toolbar with red, white, and blue color scheme.</p>
</div>
</div>
  </div>
</div>


{/* Tooltip */}
<div className="mb-12">
  <h3 className="text-xl font-bold mb-4" style={{ color: pageStyles.text }}>Tooltip</h3>
  <div className="p-6 rounded-md shadow-sm" style={{ backgroundColor: pageStyles.cardBg }}>
    <div className="space-y-8">
      <div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Default</h4>
  <div className="mb-2 flex items-center justify-center h-20">
    <TooltipComponent
      variant="default"
      tooltipContent="This is a default tooltip"
    />
  </div>
  <p className="text-sm text-gray-500">A modern, sleek tooltip with a dark backdrop, subtle animations, and clean typography.</p>
</div>

<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">Ocean</h4>
  <div className="mb-2 flex items-center justify-center h-20">
    <TooltipComponent
      variant="ocean"
      tooltipContent="This is a ocean tooltip"
    />
  </div>
  <p className="text-sm text-gray-500">Ocean-themed tooltip with gradient background and smooth animations.</p>
</div>

    </div>
  </div>
</div>

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