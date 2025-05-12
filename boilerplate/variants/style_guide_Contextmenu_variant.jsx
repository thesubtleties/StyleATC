<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <ContextmenuComponent
      variant="{{VARIANT_NAME}}"
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
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
  <div className="mt-2 text-xs text-gray-400">
    <em>Note: Right-click on the trigger area to see the context menu</em>
  </div>
</div>
