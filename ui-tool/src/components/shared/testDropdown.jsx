import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const LanguageDropdown = () => {
  const { t, i18n } = useTranslation(); // Use translation hook
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const languages = ["English", "Spanish", "French"];

  const handleLanguageSelect = async (language) => {
    setSelectedLanguage(language);
    try {
      // Fetch translations from the backend
      const response = await axios.post("http://localhost:5000/get-translations", { language });
      // Add the translations to i18n and change the language
      i18n.addResourceBundle(language, "translation", response.data);
      i18n.changeLanguage(language);
    } catch (error) {
      console.error("Error changing language:", error);
    }
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-100 px-4 py-2 rounded-lg shadow-md flex justify-between items-center text-gray-700"
      >
        <span>{selectedLanguage}</span>
        <svg
          className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => handleLanguageSelect(language)}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
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
