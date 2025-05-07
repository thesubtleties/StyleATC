<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <FormComponent
      variant="{{VARIANT_NAME}}"
      fields={[
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true,
          messages: [
            { match: 'valueMissing', text: 'Please enter your email' },
            { match: 'typeMismatch', text: 'Please provide a valid email' },
          ],
        },
        {
          name: 'question',
          label: 'Question',
          type: 'textarea',
          required: true,
          messages: [
            { match: 'valueMissing', text: 'Please enter a question' },
          ],
        },
      ]}
      submitLabel="Post question"
      onSubmit={(e) => e.preventDefault()}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
