<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <SelectComponent
      variant="{{VARIANT_NAME}}"
      placeholder="Select a food…"
      groups={[
        {
          label: 'Fruits',
          items: [
            { value: 'apple', label: 'Apple' },
            { value: 'banana', label: 'Banana' },
            { value: 'blueberry', label: 'Blueberry' },
            { value: 'grapes', label: 'Grapes' },
            { value: 'pineapple', label: 'Pineapple' },
          ],
        },
        {
          label: 'Vegetables',
          items: [
            { value: 'aubergine', label: 'Aubergine' },
            { value: 'broccoli', label: 'Broccoli' },
            { value: 'carrot', label: 'Carrot', disabled: true },
            { value: 'courgette', label: 'Courgette' },
            { value: 'leek', label: 'Leek' },
          ],
        },
        {
          label: 'Meat',
          items: [
            { value: 'beef', label: 'Beef' },
            { value: 'chicken', label: 'Chicken' },
            { value: 'lamb', label: 'Lamb' },
            { value: 'pork', label: 'Pork' },
          ],
        },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
