<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <DialogComponent
      variant="{{VARIANT_NAME}}"
      triggerText="Open {{ VARIANT_NAME_CAPITALIZED }} Dialog"
      title="{{ VARIANT_NAME_CAPITALIZED }} Dialog"
      description="This is an example of the {{VARIANT_NAME}} dialog variant."
      fields={[
        { id: 'name', label: 'Name', defaultValue: 'John Doe' },
        { id: 'email', label: 'Email', defaultValue: 'john@example.com' },
      ]}
      saveButtonText="Save Changes"
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
