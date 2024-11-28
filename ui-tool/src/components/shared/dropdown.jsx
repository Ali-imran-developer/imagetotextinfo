import React, { useState } from "react";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // Track if the dropdown is open
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language"); // Track selected language

  const languages = ["English", "Spanish", "French", "German", "Italian"];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language); // Update the selected language
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative w-25">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-100 px-4 py-2 rounded-lg shadow-md flex justify-between items-center text-gray-700 gap-2"
      >
        <span className="font-semibold">{selectedLanguage}</span>
        <svg
          className={`w-4 font-bold h-auto transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => handleLanguageSelect(language)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 font-semibold"
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;