<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2 flex items-center gap-4">
    <ToggleComponent
      variant="{{VARIANT_NAME}}"
      icon={<FontItalicIcon />}
      label="Toggle italic"
    />
    <ToggleComponent
      variant="{{VARIANT_NAME}}"
      icon={<FontItalicIcon />}
      label="Toggle italic (pressed)"
      defaultPressed={true}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
