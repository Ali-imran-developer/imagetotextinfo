import React from "react";
import Index from "./view/index";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
// import Home from "./view/home";

// import LanguageDropdown from "./components/shared/dropdown";
// import Home from "./view/home";

const App = () => {
  return (
    // <Home />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
