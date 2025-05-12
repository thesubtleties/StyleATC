<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <TogglegroupComponent
      variant="{{VARIANT_NAME}}"
      type="single"
      defaultValue="center"
      ariaLabel="Text alignment"
      items={[
        {
          value: 'left',
          ariaLabel: 'Left aligned',
          icon: <TextAlignLeftIcon />,
        },
        {
          value: 'center',
          ariaLabel: 'Center aligned',
          icon: <TextAlignCenterIcon />,
        },
        {
          value: 'right',
          ariaLabel: 'Right aligned',
          icon: <TextAlignRightIcon />,
        },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
