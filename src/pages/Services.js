import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Services = () => {
  const sectionStyle = {
    padding: "2rem",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "2rem",
    color: "#21bf73",
    marginBottom: "1.5rem",
  };

  const listStyle = {
    listStyleType: "none",
    paddingLeft: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1rem",
  };

  const itemStyle = {
    backgroundColor: "#f8f9fa",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
    fontSize: "1rem",
    lineHeight: "1.4",
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
  };

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Website Development for Startups",
        "School Management Systems",
        "Blogging Platforms",
        "Stock Management Systems",
        "Portfolio & Personal Branding Websites",
        "Fully Responsive & Mobile-Friendly Design",
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };
    const typed = new Typed(typedRef.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>
        Our{" "}
        <span style={{ color: "#007bff" }}>
          Services
        </span>
      </h2>
      <div
        style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          minHeight: "2.5rem",
          fontSize: "1.35rem",
          fontWeight: 600,
          letterSpacing: "0.5px",
        }}
      >
        <span ref={typedRef}></span>
      </div>
      <ul style={listStyle}>
        <li style={itemStyle}>✔️ Website Development for Startups</li>
        <li style={itemStyle}>✔️ School Management Systems</li>
        <li style={itemStyle}>✔️ Blogging Platforms</li>
        <li style={itemStyle}>✔️ Stock Management Systems</li>
        <li style={itemStyle}>✔️ Portfolio & Personal Branding Websites</li>
        <li style={itemStyle}>✔️ Fully Responsive & Mobile-Friendly Design</li>
      </ul>
    </section>
  );
};

export default Services;
