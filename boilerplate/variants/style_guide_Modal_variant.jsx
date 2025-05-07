<div className="mb-6">
  <h4 className="text-sm font-medium mb-2">{{ VARIANT_NAME_CAPITALIZED }}</h4>
  <div className="mb-2">
    <ModalComponent
      variant="{{VARIANT_NAME}}"
      trigger={
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Open {{ VARIANT_NAME_CAPITALIZED }} Modal
        </button>
      }
      title="Modal Title"
      description="This is a description of the modal's purpose."
      footer={
        <>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Confirm
          </button>
        </>
      }
    >
      <div className="p-4 border border-gray-200 rounded">
        <p>This is the main content of the modal.</p>
        <p className="mt-2">You can put any components or content here.</p>
      </div>
    </ModalComponent>
  </div>
  <p className="text-sm text-gray-500">{{ DESCRIPTION }}</p>
</div>
