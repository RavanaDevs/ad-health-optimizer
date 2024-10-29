interface ImageUploadProps {
  onNext: () => void;
  onBack: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onNext, onBack }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="form-fields">
        <h2 className="text-2xl font-semibold mb-4">Image Upload</h2>
        <input type="file" className="w-full mb-4 p-2 border rounded" />
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

export default ImageUpload;
