
<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <ContentsectionComponent
      variant="{{VARIANT_NAME}}"
      title="Example Section Title"
      subtitle="This is a subtitle that provides additional context for the section"
      align="left"
      spacing="default"
    >
      <p>
        This is an example of content within the section. The ContentSection
        component is designed to present text content in a structured and
        consistent way.
      </p>
      <p>
        It supports <strong>rich text formatting</strong> through the prose
        classes, and can be aligned differently based on your needs.
      </p>
      <h3>Sub-sections are supported</h3>
      <p>You can include headings, lists, and other content elements:</p>
      <ul>
        <li>Feature one explanation</li>
        <li>Another important point</li>
        <li>Final consideration</li>
      </ul>
    </ContentsectionComponent>
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
