<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2 flex flex-col gap-4">
    <CheckboxComponent
      variant="{{VARIANT_NAME}}"
      label="Unchecked state"
      id="{{VARIANT_NAME}}-unchecked"
      defaultChecked={false}
    />
    <CheckboxComponent
      variant="{{VARIANT_NAME}}"
      label="Checked state"
      id="{{VARIANT_NAME}}-checked"
      defaultChecked={true}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
