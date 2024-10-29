interface BasicDataProps {
  onNext: () => void;
}

const BasicData: React.FC<BasicDataProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="form-fields">
        <h2 className="text-2xl font-semibold mb-4">Basic Data</h2>
        <input
          type="text"
          placeholder="Location"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full mb-4 p-2 border rounded"
        />
      </div>
      <div className="btn-section">
        <button
          onClick={onNext}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BasicData;
