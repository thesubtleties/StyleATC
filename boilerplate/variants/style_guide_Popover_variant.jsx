<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2 flex items-center justify-center p-8 bg-gray-100 rounded">
    <PopoverComponent variant="{{VARIANT_NAME}}" title="Dimensions">
      <PopoverFormFields
        fields={[
          { id: 'width', label: 'Width', defaultValue: '100%' },
          { id: 'maxWidth', label: 'Max. width', defaultValue: '300px' },
          { id: 'height', label: 'Height', defaultValue: '25px' },
          { id: 'maxHeight', label: 'Max. height', defaultValue: 'none' },
        ]}
      />
    </PopoverComponent>
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
