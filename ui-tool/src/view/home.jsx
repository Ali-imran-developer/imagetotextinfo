import React, { useState, useEffect } from "react";
import Tesseract from "tesseract.js";
import { saveAs } from "file-saver";

const Home = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        localStorage.setItem("uploadedImage", base64Image);
        setImageUrl(base64Image);
      };
      reader.readAsDataURL(imageFile);
    } else {
      const storedImage = localStorage.getItem("uploadedImage");
      if (storedImage) {
        setImageUrl(storedImage);
      }
    }
  }, [imageFile]);
  

  const clearAll = () => {
    setImageFile(null);
    setImageUrl("");
    setExtractedText("");
    localStorage.removeItem("uploadedImage");
  };

  const convertToText = () => {
    if (!imageUrl) return;
    setLoading(true);
    Tesseract.recognize(imageUrl, "eng", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        setExtractedText(text.trim());
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(extractedText);
    alert("Text copied to clipboard!");
  };

  const downloadText = () => {
    const blob = new Blob([extractedText], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "extracted-text.txt");
  };

  return (
    <section className="bg-gray-100 py-5 px-4">
      <h1 className="text-center text-4xl font-bold mt-2">
        Image to Text Converter
      </h1>
      <p className="font-medium text-lg text-gray-700 mt-2 text-center">
        An online image to text converter to extract text from images.
      </p>

      <div className="flex flex-col items-center justify-center mt-4">
        <div className="w-[85%] mx-auto px-5 py-5 bg-white border-gray-300 rounded-[25px] text-center shadow-lg hover:shadow-xl transition duration-300">
          <div className="border-dashed border-2 rounded-md">
            <div className="flex flex-col items-center justify-center mt-4">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Uploaded"
                  className="max-w-full h-auto border border-gray-300 rounded-md"
                />
              ) : (
                <p className="text-gray-600 text-lg">No image uploaded yet.</p>
              )}
            </div>

            <label
              htmlFor="imageUpload"
              className="block mt-4 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div>

          <div className="mt-4 flex space-x-4">
            <button
              onClick={convertToText}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              disabled={loading}
            >
              {loading ? "Converting..." : "Convert"}
            </button>
            <button
              onClick={clearAll}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>

      {extractedText && (
        <div className="w-[85%] mx-auto mt-6 bg-white px-5 py-4 rounded-md shadow-lg">
          <h2 className="text-xl font-bold mb-2">Extracted Text:</h2>
          <p className="text-gray-800">{extractedText}</p>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Copy Text
            </button>
            <button
              onClick={downloadText}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md"
            >
              Download as File
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;


// import React from "react";
// import { useTranslation } from "react-i18next";

// const Home = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">{t("welcome")}</h1>
//       <p className="mt-2">{t("about")}</p>
//       <p className="mt-2">{t("contact")}</p>
//     </div>
//   );
// };

// export default Home;