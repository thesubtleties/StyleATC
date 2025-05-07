<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <AccordionComponent
      variant="{{VARIANT_NAME}}"
      items={[
        {
          trigger: 'Is it accessible?',
          content: 'Yes. It adheres to the WAI-ARIA design pattern.',
        },
        {
          trigger: 'Is it unstyled?',
          content:
            "Yes. It's unstyled by default, giving you freedom over the look and feel.",
        },
        {
          trigger: 'Can it be animated?',
          content: 'Yes! You can animate the Accordion with CSS or JavaScript.',
        },
      ]}
    />
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
