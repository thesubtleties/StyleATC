
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="flex flex-wrap gap-4 mb-2">
    <ButtonComponent variant="{{VARIANT_NAME}}" size="sm">
      Small
    </ButtonComponent>
    <ButtonComponent variant="{{VARIANT_NAME}}" size="md">
      Medium
    </ButtonComponent>
    <ButtonComponent variant="{{VARIANT_NAME}}" size="lg">
      Large
    </ButtonComponent>
    <ButtonComponent variant="{{VARIANT_NAME}}" disabled>
      Disabled
    </ButtonComponent>
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
