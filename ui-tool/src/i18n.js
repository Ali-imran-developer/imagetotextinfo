import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";

const fetchTranslations = async (language) => {
  try {
    const response = await axios.post("http://localhost:5000/get-translations", { language });
    return response.data;
  } catch (error) {
    console.error("Error fetching translations:", error);
    return {}; // Return an empty object if there's an error
  }
};

const initI18n = async () => {
  const defaultLanguage = "English";
  const resources = {};

  // Fetch initial translations for the default language
  resources[defaultLanguage] = {
    translation: await fetchTranslations(defaultLanguage),
  };

  i18n.use(initReactI18next).init({
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false, // React already escapes content
    },
  });
};

// Initialize i18n
initI18n();

export default i18n;
