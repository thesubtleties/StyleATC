<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2 flex items-start">
    <DropdownMenuComponent
      variant="{{VARIANT_NAME}}"
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
      <p className="text-sm text-gray-500 mb-2">{{ DESCRIPTION }}</p>
      <p className="text-xs text-gray-400">
        Click the menu button to see the dropdown with the {{ VARIANT_NAME }}{' '}
        styling.
      </p>
    </div>
  </div>
</div>
