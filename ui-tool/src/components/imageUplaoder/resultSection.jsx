import React, { useState, useEffect } from "react";

const ResultSection = ({ imageDetails }) => {
  const [generatedText, setGeneratedText] = useState("");

  const handleTextGeneration = () => {
    const text = "Generated text from image: " + imageDetails.name;
    setGeneratedText(text);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedText);
    alert("Text copied to clipboard!");
  };

  const handleDownloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "generatedText.txt";
    document.body.appendChild(element);
    element.click();
  };

  useEffect(() => {
    if (!imageDetails) {
      setGeneratedText("");
    }
  }, [imageDetails]);

  return (
    <section className="bg-gray-100 py-5 px-4">
      {imageDetails && (
        <div className="w-[85%] mx-auto px-5 py-5 bg-white border-gray-300 rounded-[25px] text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Result</h2>
          <div className="flex justify-between items-center">
            <img
              src={imageDetails.url}
              alt="Uploaded"
              className="w-[40%] h-auto border border-gray-300 rounded-md"
            />
            <div className="text-left w-[50%]">
              <p className="text-lg font-medium mb-4">{generatedText || "Click convert to see the result."}</p>
              <button
                onClick={handleTextGeneration}
                className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
              >
                Convert
              </button>
              {generatedText && (
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={handleCopyToClipboard}
                    className="px-4 py-2 bg-green-500 text-white rounded-md"
                  >
                    Copy Text
                  </button>
                  <button
                    onClick={handleDownloadText}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                  >
                    Download Text
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultSection;