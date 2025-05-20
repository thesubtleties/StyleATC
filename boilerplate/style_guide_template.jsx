
// Import components - these will be dynamically imported based on what's generated
{{COMPONENT_IMPORTS}}

export default function StyleGuide() {
  // Add state to track if we're in the browser
  const [isBrowser, setIsBrowser] = useState(false);
  
  // Style tokens from the theme system
  const colors = {{COLORS_OBJECT}};
  
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
          { label: 'Portfolio', onClick: () => openLink('https://sbtl.dev') },
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

          {{COMPONENT_EXAMPLES}}
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
                  <a href="https://github.com/thesubtleties/StyleATC" className="hover:text-white" style={{ color: `${pageStyles.footerText}99` }}>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://github.com/thesubtleties" className="hover:text-white" style={{ color: `${pageStyles.footerText}99` }}>
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
            <p style={{ color: `${pageStyles.footerText}99` }}>© {new Date().getFullYear()} | sbtl</p>
          </div>
        </div>
      </footer>
    </div>
  );
}