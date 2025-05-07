{/*
  Style Guide Variant for FormField Component

  Placeholders:
  - {{ VARIANT_NAME_CAPITALIZED }}: e.g., "Default"
  - {{ VARIANT_NAME }}: e.g., "default" (May not be used if FormField has no variants itself)
  - {{ DESCRIPTION }}: Description of the variant/example.

  Assumes `FormField` is available in the rendering scope.
*/}
<div className="mb-6 p-4 border rounded-lg bg-white shadow-sm"> {/* Added container */}
  <h4 className="text-md font-semibold mb-3 text-gray-800">{{ VARIANT_NAME_CAPITALIZED }} Example</h4>
  <div className="space-y-4"> {/* Add spacing between examples */}

    {/* Example 1: Basic Text Input */}
    <FormField
      label="Your Name"
      id="example-name-{{VARIANT_NAME}}"
      placeholder="e.g., Jane Doe"
    />

    {/* Example 2: Password Input */}
    <FormField
      label="Password"
      id="example-password-{{VARIANT_NAME}}"
      type="password"
      placeholder="Enter your password"
    />

     {/* Example 3: Input with Default Value */}
    <FormField
      label="Email Address"
      id="example-email-{{VARIANT_NAME}}"
      type="email"
      defaultValue="test@example.com"
    />

  </div>
  <p className="text-sm text-gray-500 italic mt-4">{{ DESCRIPTION }}</p>
</div>