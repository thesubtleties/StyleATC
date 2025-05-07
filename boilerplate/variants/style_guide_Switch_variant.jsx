<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2 flex flex-col space-y-4">
    <SwitchComponent
      variant="{{VARIANT_NAME}}"
      label="Airplane mode"
      id="{{VARIANT_NAME}}-airplane"
    />
    <SwitchComponent
      variant="{{VARIANT_NAME}}"
      label="Dark mode"
      id="{{VARIANT_NAME}}-dark"
      checked={true}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
