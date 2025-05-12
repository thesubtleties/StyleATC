<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <ToastComponent
      variant="{{VARIANT_NAME}}"
      title="Notification: {{ VARIANT_NAME_CAPITALIZED }}"
      description="This is a {{VARIANT_NAME}} toast notification example"
      triggerText="Show {{ VARIANT_NAME_CAPITALIZED }} Toast"
      actionText="Dismiss"
      duration={5000}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
