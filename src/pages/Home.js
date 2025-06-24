// src/pages/Home.js
import React from "react";
import StaffSection from "../components/StaffSection";

const Home = () => {
  return (
    <>
      <div className="home-hero-bg">
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", width: "100%" }}>
          <h1 style={{ fontSize: "3rem", color: "#222", marginBottom: "1rem", fontWeight: 700, letterSpacing: "-1px" }}>
            Welcome to LinkToDigital
          </h1>
          <p style={{ fontSize: "1.35rem", color: "#555", maxWidth: 600, margin: "0 auto 2rem auto", lineHeight: 1.5 }}>
            We build modern, scalable, and beautiful digital solutions for startups, schools, and businesses. <br />
            <span style={{ color: "#21bf73", fontWeight: 600 }}>Transform your ideas into reality!</span>
          </p>
          <a
            href="/projects"
            className="hero-projects-btn"
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #21bf73 0%, #007bff 100%)",
              color: "#fff",
              padding: "0.9rem 2.2rem",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontWeight: 600,
              boxShadow: "0 4px 24px rgba(33,191,115,0.12)",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            See Our Projects
          </a>
        </div>
      </div>
      <StaffSection />
    </>
  );
};

export default Home;
