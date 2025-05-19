
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <ProfilecardComponent
      variant="{{VARIANT_NAME}}"
      name="Alex Johnson"
      title="Product Designer"
      avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Demo"
      description="Make a card with the same variant name to apply non default card styles."
      stats={[
        { value: '52', label: 'Projects' },
        { value: '89', label: 'Reviews' },
        { value: '95%', label: 'Rating' },
      ]}
      actions={[
        { label: 'Connect', onClick: () => {} },
        { label: 'Message', onClick: () => {} },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
