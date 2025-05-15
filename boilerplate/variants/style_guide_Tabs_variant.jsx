{/*
  Style Guide Variant for Tabs Component

  Placeholders:
  - {{ VARIANT_NAME_CAPITALIZED }}: e.g., "Default"
  - {{ VARIANT_NAME }}: e.g., "default"
  - {{ DESCRIPTION }}: Description of the variant from theme config.

  Assumes `TabsComponent`, `FormField`, and `Button` are available in the
  rendering scope (imported into the main StyleGuide.jsx).
*/}
<div className="mb-8 p-4 border rounded-lg bg-white shadow-sm"> {/* Added container */}
  <h4 className="text-md font-semibold mb-3 text-gray-800">{{ VARIANT_NAME_CAPITALIZED }} Variant</h4>
  <div className="mb-3">
    {/* --- Render the actual TabsComponent --- */}
    <TabsComponent
      variant="{{VARIANT_NAME}}" // Pass variant name (might be used by component or just for consistency)
      aria-label="Account Management Example" // Good practice for accessibility
      tabs={[
        {
          value: 'account-{{VARIANT_NAME}}', // Unique value using variant name
          label: 'Account',
          content: (
            // Use React Fragments or a div if needed
            <>
              <p className="mb-5 text-[15px] leading-normal">
                Make changes to your account here. Click save when you're done.
              </p>
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Name"
                id="name-{{VARIANT_NAME}}" // Unique ID
                defaultValue="Ada Lovelace"
                className="mb-4" // Add spacing if needed
                variant="{{VARIANT_NAME}}"
              />
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Username"
                id="username-{{VARIANT_NAME}}" // Unique ID
                defaultValue="@ada"
                variant="{{VARIANT_NAME}}"
              />
              <div className="mt-6 flex justify-end border-t pt-4">
                {/* --- Use the actual Button component --- */}
                <ButtonComponent variant="{{VARIANT_NAME}}">Save changes</ButtonComponent> {/* Example: Use button variant */}
              </div>
            </>
          ),
        },
        {
          value: 'password-{{VARIANT_NAME}}', // Unique value using variant name
          label: 'Password',
          content: (
            <>
              <p className="mb-5 text-[15px] leading-normal">
                Change your password here. After saving, you'll be logged out.
              </p>
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Current password"
                id="current-password-{{VARIANT_NAME}}" // Unique ID
                type="password"
                className="mb-4"
                variant="{{VARIANT_NAME}}"
              />
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="New password"
                id="new-password-{{VARIANT_NAME}}" // Unique ID
                type="password"
                className="mb-4"
                variant="{{VARIANT_NAME}}"
              />
              {/* --- Use the actual FormField component --- */}
              <FormfieldComponent
                label="Confirm password"
                id="confirm-password-{{VARIANT_NAME}}" // Unique ID
                type="password"
                variant="{{VARIANT_NAME}}"
              />
              <div className="mt-6 flex justify-end border-t pt-4">
                 {/* --- Use the actual Button component --- */}
                <ButtonComponent variant="{{VARIANT_NAME}}">Change password</ButtonComponent>
              </div>
            </>
          ),
        },
      ]}
    />
    {/* --- End TabsComponent rendering --- */}
  </div>
  <p className="text-sm text-gray-500 italic">{{ DESCRIPTION }}</p>
</div>