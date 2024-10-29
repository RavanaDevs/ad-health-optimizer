interface PersonalInformationProps {
  onBack: () => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  onBack,
}) => {
  const handleSubmit = () => {
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="form-fields">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <input
          type="text"
          placeholder="Customer Name"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
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
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
