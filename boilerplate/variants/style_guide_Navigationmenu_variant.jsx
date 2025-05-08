<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-4 py-6 bg-gray-50 rounded-md flex justify-center">
    <NavigationmenuComponent
      variant="{{VARIANT_NAME}}"
      items={[
        {
          type: 'dropdown',
          label: 'Features',
          content: (
            <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
                      Product Name
                    </div>
                    <p className="text-[14px] leading-[1.3] text-white/80">
                      Brief product description goes here.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <NavigationmenuComponent.ListItem href="/" title="Documentation">
                Comprehensive guides and API references.
              </NavigationmenuComponent.ListItem>
              <NavigationmenuComponent.ListItem href="/" title="Components">
                UI building blocks for your application.
              </NavigationmenuComponent.ListItem>
              <NavigationmenuComponent.ListItem href="/" title="Templates">
                Pre-built layouts for common use cases.
              </NavigationmenuComponent.ListItem>
            </ul>
          ),
        },
        {
          type: 'dropdown',
          label: 'Resources',
          content: (
            <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-2">
              <NavigationmenuComponent.ListItem
                title="Getting Started"
                href="/"
              >
                Quick start guide for new users.
              </NavigationmenuComponent.ListItem>
              <NavigationmenuComponent.ListItem title="Tutorials" href="/">
                Step-by-step guides for common tasks.
              </NavigationmenuComponent.ListItem>
              <NavigationmenuComponent.ListItem title="Blog" href="/">
                Latest news and updates from our team.
              </NavigationmenuComponent.ListItem>
              <NavigationmenuComponent.ListItem title="Community" href="/">
                Join our community of developers.
              </NavigationmenuComponent.ListItem>
            </ul>
          ),
        },
        {
          type: 'link',
          label: 'Pricing',
          href: '/',
        },
        {
          type: 'link',
          label: 'Contact',
          href: '/',
        },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
