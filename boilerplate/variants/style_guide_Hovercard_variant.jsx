<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2 flex justify-center py-12">
    <HoverCardComponent
      variant="{{VARIANT_NAME}}"
      triggerContent={
        <DefaultTrigger
          imageUrl="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          alt="Radix UI"
          href="https://twitter.com/radix_ui"
        />
      }
      cardContent={
        <DefaultCardContent
          imageUrl="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
          title="Radix"
          handle="@radix_ui"
          description="Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source."
          followingCount="0"
          followersCount="2,900"
        />
      }
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
