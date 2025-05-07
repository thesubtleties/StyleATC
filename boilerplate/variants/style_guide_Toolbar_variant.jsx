<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <ToolbarComponent
      variant="{{VARIANT_NAME}}"
      textFormatting={true}
      textAlignment={true}
      showEditInfo={true}
      showShareButton={true}
      editInfoText="Edited 2 hours ago"
      shareButtonText="Share"
      defaultAlignment="center"
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
