<div className="mb-10">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-4 border rounded-md overflow-hidden">
    <HeaderComponent
      variant="{{VARIANT_NAME}}"
      title="{{VARIANT_NAME}} Header"
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
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
