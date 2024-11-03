"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./progressbar.css";

interface TitleDescriptionProps {
  onNext: () => void;
  onBack: () => void;
}

interface FormData {
  title: string;
  description: string;
  price: number;
  search_keywords: string;
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({
  onNext,
  onBack,
}) => {
  const [titles, setTitles] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [similarity, setSimilarity] = useState<string | null>(null);

  // const [formData, setFormData] = useState<FormData>({
  //   title: "Suzuki alto for sale",
  //   description:
  //     "Made year 2011 Maruti Suzuki alto indian for sale. First owner",
  //   price: 24000000,
  //   search_keywords: "suzuki-alto, 2011, budget, car",
  // });

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    price: 0,
    search_keywords: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateTitles = async () => {
    const res = await fetch("http://170.187.237.26:5000/generate_titles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setTitles(data.titles);
  };

  const checkSimilarity = async () => {
    const res = await fetch("http://170.187.237.26:5000/check-similarity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setSimilarity(data.similarity);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await generateTitles();
      await checkSimilarity();
    } catch (err) {
      console.log(err);
      setError("Unexpected Error Occured");
    }
  };
  return (
    <div className="flex flex-col justify-between h-full">
      <form onSubmit={onSubmit}>
        <div className="form-fields">
          {error && (
            <>
              <div className="error p-2 border border-red-500 bg-red-300 mb-4">
                <p>
                  <b>Error:</b> {error}
                </p>
              </div>
            </>
          )}
          <h2 className="text-2xl font-semibold mb-4">Step 2</h2>
          <input
            type="text"
            required
            placeholder="Title"
            className="w-full mb-4 p-2 border rounded"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {titles && (
            <div className="title-suggestions p-2 border border-cyan-100 mb-4">
              {titles!.map((title, index) => (
                <>
                  <input
                    key={index}
                    contentEditable={false}
                    type="text"
                    className="w-full p-2 border rounded bg-slate-200 text-xs mb-2 cursor-pointer"
                    value={title.replaceAll("**", "")}
                    onClick={() => {
                      console.log(title);
                      setFormData((prev) => ({
                        ...prev,
                        title: title.replaceAll("**", ""),
                      }));
                    }}
                  />
                </>
              ))}
            </div>
          )}

          <textarea
            placeholder="Description"
            required
            className="w-full mb-4 p-2 border rounded"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {similarity && (
            <>
              <div className="similarity p-2 border border-green-200 bg-green-200 mb-4">
                <div>Title and Description Similarity {similarity}%</div>
              </div>
            </>
          )}
          <input
            type="number"
            placeholder="Price"
            required
            className="w-full mb-4 p-2 border rounded"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Search Keywords"
            className="w-full mb-4 p-2 border rounded"
            name="search_keywords"
            value={formData.search_keywords}
            onChange={handleChange}
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
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700"
              >
                Check
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
      </form>
    </div>
  );
};

export default TitleDescription;
