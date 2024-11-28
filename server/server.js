const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Translation data
const translations = {
  English: {
    welcome: "Welcome to the website!",
    about: "About us",
    contact: "Contact us",
  },
  Spanish: {
    welcome: "¡Bienvenido al sitio web!",
    about: "Sobre nosotros",
    contact: "Contáctanos",
  },
  French: {
    welcome: "Bienvenue sur le site!",
    about: "À propos de nous",
    contact: "Contactez-nous",
  },
};

// API endpoint to get translations
app.post("/get-translations", (req, res) => {
  const { language } = req.body;
  if (translations[language]) {
    res.json(translations[language]);
  } else {
    res.status(404).json({ error: "Language not supported" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("seerver connected");
});