<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2 flex items-center justify-center py-4">
    <SliderComponent
      variant="{{VARIANT_NAME}}"
      defaultValue={[50]}
      max={100}
      step={1}
      ariaLabel="Example slider"
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
