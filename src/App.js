// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"; // <-- required for styles to apply

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AdminMessages from "./pages/AdminMessages";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";

import "./App.css"; // <-- You will define light/dark mode classes here

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Read theme from localStorage if available
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme to body class
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/messages" element={<AdminMessages />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </Router>
  );
};

export default App;
