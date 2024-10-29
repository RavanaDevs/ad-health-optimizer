interface TitleDescriptionProps {
  onNext: () => void;
  onBack: () => void;
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({
  onNext,
  onBack,
}) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="form-fields">
        <h2 className="text-2xl font-semibold mb-4">Title and Description</h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full mb-4 p-2 border rounded"
        />
        <textarea
          placeholder="Description"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Search Keywords"
          className="w-full mb-4 p-2 border rounded"
        />
      </div>
      <div className="btn-section">
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleDescription;
