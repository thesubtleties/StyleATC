<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <AlertdialogComponent
      variant="{{VARIANT_NAME}}"
      triggerText="Open {{ VARIANT_NAME_CAPITALIZED }} Dialog"
      title="{{ VARIANT_NAME_CAPITALIZED }} Alert Dialog"
      description="This is an example of the {{VARIANT_NAME}} alert dialog variant. It demonstrates how this component would look with the applied theme."
      onAction={() => console.log('Action confirmed')}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>

