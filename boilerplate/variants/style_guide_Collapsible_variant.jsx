<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <CollapsibleComponent
      variant="{{VARIANT_NAME}}"
      title="@peduarte starred 3 repositories"
      items={[
        { content: '@radix-ui/primitives' },
        { content: '@radix-ui/colors' },
        { content: '@radix-ui/themes' },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
