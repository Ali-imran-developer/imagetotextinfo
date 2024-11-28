import React, { useState } from "react";

const UploadSection = ({ setImageDetails }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);

  const handleImageUpload = (file) => {
    const imageObject = {
      url: URL.createObjectURL(file),
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
    };
    setImageUrl(imageObject.url);
    localStorage.setItem("uploadedImage", JSON.stringify(imageObject));
    setImageDetails(imageObject);
  };

  const handleClearAll = () => {
    setImageUrl("");
    localStorage.removeItem("uploadedImage");
    setImageDetails(null);
  };

  return (
    <section className="bg-gray-100 py-5 px-4">
      <h1 className="text-center text-4xl font-bold mt-2">Image to Text Converter</h1>
      <p className="font-medium text-lg text-gray-700 mt-2 text-center">
        An online image to text converter to extract text from images.
      </p>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="w-[85%] mx-auto px-5 py-5 bg-white border-gray-300 rounded-[25px] text-center shadow-lg hover:shadow-xl transition duration-300">
          <div className="border-dashed border-2 rounded-md">
            <div className="flex flex-col items-center mt-4">
              <label
                htmlFor="imageUpload"
                className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer border border-gray-300 rounded-md text-gray-600 text-sm font-medium"
              >
                Upload Image
                <input
                  type="file"
                  id="imageUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => e.target.files.length && handleImageUpload(e.target.files[0])}
                />
              </label>
              {imageUrl && (
                <div className="mt-6">
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="max-w-full h-auto border border-gray-300 rounded-md"
                  />
                  <p className="mt-2 text-gray-500 text-sm">
                    {JSON.parse(localStorage.getItem("uploadedImage")).size}
                  </p>
                  <button
                    onClick={handleClearAll}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Clear All
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;