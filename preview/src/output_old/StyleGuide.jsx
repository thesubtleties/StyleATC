import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import ProfileCard from './components/ProfileCard';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import Dialog from './components/Dialog';
import Modal from './components/Modal';
import Dropdown from './components/Dropdown';
import Tabs from './components/Tabs';
import Tooltip from './components/Tooltip';

export default function StyleGuide() {
  // Style tokens from your design system
  const colors = {
  "primary": "#3b82f6",
  "secondary": "#10b981",
  "accent": "#8b5cf6",
  "neutral": "#6b7280",
  "success": "#22c55e",
  "warning": "#f59e0b",
  "error": "#ef4444"
};
  const spacing = {
  "xs": "0.25rem",
  "sm": "0.5rem",
  "md": "1rem",
  "lg": "1.5rem",
  "xl": "2rem",
  "2xl": "4rem"
};
  const borderRadius = {
  "none": "0",
  "sm": "0.125rem",
  "DEFAULT": "0.25rem",
  "md": "0.375rem",
  "lg": "0.5rem",
  "xl": "0.75rem",
  "2xl": "1rem",
  "full": "9999px"
};
  const shadows = {
  "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "DEFAULT": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Example */}
      <Header 
        title="Design System" 
        navItems={[
          { label: 'Colors', href: '#colors' },
          { label: 'Typography', href: '#typography' },
          { label: 'Components', href: '#components' },
        ]}
        actions={[
          { label: 'Get Started', onClick: () => {} },
          { label: 'GitHub', onClick: () => {} }
        ]}
      />
      
      <div className="p-8 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Tailwind + Radix UI Design System</h1>
          <p className="text-xl text-gray-500">A comprehensive design system built with Tailwind CSS and Radix UI primitives.</p>
        </div>
        
        {/* Colors */}
        <section id="colors" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(colors).map(([name, color]) => (
              <div key={name} className="flex flex-col">
                <div 
                  className="h-24 rounded-md mb-2 shadow-md" 
                  style={{ backgroundColor: color }}
                />
                <div className="text-sm font-medium">{name}</div>
                <div className="text-xs text-gray-500">{color}</div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Typography */}
        <section id="typography" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Typography</h2>
          <div className="space-y-6 bg-white p-6 rounded-md shadow-sm">
            <h1 className="text-5xl font-bold">Heading 1</h1>
            <h2 className="text-4xl font-bold">Heading 2</h2>
            <h3 className="text-3xl font-bold">Heading 3</h3>
            <h4 className="text-2xl font-bold">Heading 4</h4>
            <h5 className="text-xl font-bold">Heading 5</h5>
            <h6 className="text-lg font-bold">Heading 6</h6>
            <div className="border-t border-gray-100 pt-6">
              <p className="text-base mb-4">Body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at purus libero. Maecenas in orci id dui placerat euismod.</p>
              <p className="text-lg mb-4">Lead paragraph. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              <p className="text-sm">Small text. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
          </div>
        </section>
        
        {/* Components */}
        <section id="components" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Components</h2>
          
          {/* Buttons */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Buttons</h3>
            <div className="bg-white p-6 rounded-md shadow-sm">
              <div className="flex flex-wrap gap-4 mb-6">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>
          </div>
          
          {/* Cards */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-bold mb-2">Default Card</h4>
                <p className="text-gray-500">This is a basic card with default styling.</p>
              </Card>
              
              <Card variant="elevated" className="p-6">
                <h4 className="text-lg font-bold mb-2">Elevated Card</h4>
                <p className="text-gray-500">This card has an elevated shadow that increases on hover.</p>
              </Card>
              
              <Card variant="bordered" className="p-6">
                <h4 className="text-lg font-bold mb-2">Bordered Card</h4>
                <p className="text-gray-500">This card has a border instead of a shadow.</p>
              </Card>
              
              <Card variant="flat" className="p-6">
                <h4 className="text-lg font-bold mb-2">Flat Card</h4>
                <p className="text-gray-500">This card has a flat background color.</p>
              </Card>
              
              <Card variant="interactive" className="p-6">
                <h4 className="text-lg font-bold mb-2">Interactive Card</h4>
                <p className="text-gray-500">This card has hover effects to indicate it's interactive.</p>
              </Card>
              
              <ProfileCard
                name="Jane Smith"
                title="Product Designer"
                avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                description="Product designer with 5+ years of experience in UI/UX design."
                stats={[
                  { label: 'Projects', value: '12' },
                  { label: 'Followers', value: '2.5k' },
                  { label: 'Rating', value: '4.9' }
                ]}
                actions={[
                  { label: 'Follow', onClick: () => {} },
                  { label: 'Message', onClick: () => {} }
                ]}
              />
            </div>
          </div>
          
          {/* Dialog & Modal */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Dialogs & Modals</h3>
            <div className="bg-white p-6 rounded-md shadow-sm flex flex-wrap gap-4">
              <Dialog 
                trigger={<Button>Open Dialog</Button>}
                title="Example Dialog"
                description="This is an example of a dialog component built with Radix UI and styled with Tailwind CSS."
              >
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    Dialog content goes here. You can put any content inside the dialog.
                  </p>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </div>
              </Dialog>
              
              <Modal
                trigger={<Button variant="secondary">Open Modal</Button>}
                title="Example Modal"
                description="This is a more complex modal with a footer."
                footer={
                  <>
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                  </>
                }
              >
                <div className="space-y-4">
                  <p>Modal content can include any components or content.</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm">This is an example of nested content in a modal.</p>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          
          {/* Dropdown */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Dropdown</h3>
            <div className="bg-white p-6 rounded-md shadow-sm">
              <Dropdown
                trigger={<Button>Open Dropdown</Button>}
                items={[
                  { type: 'label', label: 'Actions' },
                  { type: 'item', label: 'Edit', props: { onSelect: () => console.log('Edit') } },
                  { type: 'item', label: 'Duplicate', props: { onSelect: () => console.log('Duplicate') } },
                  { type: 'separator' },
                  { type: 'item', label: 'Delete', props: { onSelect: () => console.log('Delete') } },
                ]}
              />
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Tabs</h3>
            <div className="bg-white rounded-md shadow-sm">
              <Tabs
                defaultValue="tab1"
                tabs={[
                  {
                    value: 'tab1',
                    label: 'Account',
                    content: (
                      <div className="p-6">
                        <h4 className="text-lg font-medium mb-2">Account Settings</h4>
                        <p className="text-gray-500 mb-4">Manage your account settings and preferences.</p>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">Email notifications</div>
                              <div className="text-sm text-gray-500">Receive emails about your account activity</div>
                            </div>
                            <div>Toggle</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">Two-factor authentication</div>
                              <div className="text-sm text-gray-500">Add an extra layer of security to your account</div>
                            </div>
                            <Button size="sm">Enable</Button>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    value: 'tab2',
                    label: 'Privacy',
                    content: (
                      <div className="p-6">
                        <h4 className="text-lg font-medium mb-2">Privacy Settings</h4>
                        <p className="text-gray-500 mb-4">Manage your privacy settings and data.</p>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">Profile visibility</div>
                              <div className="text-sm text-gray-500">Control who can see your profile</div>
                            </div>
                            <div>Dropdown</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">Data sharing</div>
                              <div className="text-sm text-gray-500">Manage how your data is used</div>
                            </div>
                            <Button size="sm" variant="outline">Manage</Button>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    value: 'tab3',
                    label: 'Notifications',
                    content: (
                      <div className="p-6">
                        <h4 className="text-lg font-medium mb-2">Notification Preferences</h4>
                        <p className="text-gray-500 mb-4">Manage your notification settings.</p>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">Push notifications</div>
                              <div className="text-sm text-gray-500">Receive notifications on your device</div>
                            </div>
                            <div>Toggle</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">Marketing emails</div>
                              <div className="text-sm text-gray-500">Receive promotional emails</div>
                            </div>
                            <div>Toggle</div>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
          
          {/* Tooltip */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Tooltip</h3>
            <div className="bg-white p-6 rounded-md shadow-sm">
              <div className="flex space-x-4">
                <Tooltip content="This is a tooltip with information">
                  <Button variant="outline">Hover for info</Button>
                </Tooltip>
                
                <Tooltip content="Click to save your changes">
                  <Button>Save changes</Button>
                </Tooltip>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4">Content Section</h3>
            <ContentSection
              title="Content Section Example"
              subtitle="This component helps structure content on your pages"
            >
              <p>
                Content sections help organize your page content with consistent spacing and typography.
                You can use them for articles, documentation, or any text-heavy content.
              </p>
              <h4>Features</h4>
              <ul>
                <li>Consistent typography</li>
                <li>Proper spacing</li>
                <li>Alignment options</li>
                <li>Responsive design</li>
              </ul>
              <p>
                This component uses Tailwind's typography plugin for rich text formatting.
              </p>
            </ContentSection>
          </div>
        </section>
      </div>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Design System</h3>
              <p className="text-gray-400">
                A comprehensive design system built with Tailwind CSS and Radix UI primitives.
              </p>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">Tailwind CSS</a></li>
                <li><a href="#" className="hover:text-white">Radix UI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 Design System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}