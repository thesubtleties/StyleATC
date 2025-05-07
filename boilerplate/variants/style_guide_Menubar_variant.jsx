<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <MenubarComponent
      variant="{{VARIANT_NAME}}"
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
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
