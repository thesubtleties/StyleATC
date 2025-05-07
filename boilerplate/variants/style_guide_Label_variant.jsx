<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <LabelComponent
      variant="{{VARIANT_NAME}}"
      htmlFor="{{VARIANT_NAME}}_input"
      inputProps={{
        defaultValue: 'Sample Text',
      }}
    >
      {{ VARIANT_NAME_CAPITALIZED }} Label
    </LabelComponent>
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
