import React from "react";
import { Link } from "react-router-dom";
import startupImage from "../assets/startup-website.jpg";
import schoolImage from "../assets/school-management.jpg";
import stockImage from "../assets/stock-management.jpg";
import blogImage from "../assets/blogging-platform.jpg";

const projectLinks = [
  {
    to: "/projects/startup",
    image: startupImage,
    title: "Startup Business Website",
    desc: "A sleek and responsive website developed for a growing tech startup to showcase their services and attract investors.",
  },
  {
    to: "/projects/school",
    image: schoolImage,
    title: "School Management System",
    desc: "A complete web app that manages students, teachers, attendance, results, and online communication for educational institutions.",
  },
  {
    to: "/projects/stock",
    image: stockImage,
    title: "Stock Management System",
    desc: "A web-based system to monitor inventory, suppliers, and transactions for small businesses and retail stores.",
  },
  {
    to: "/projects/blog",
    image: blogImage,
    title: "Blogging Platform",
    desc: "A user-friendly blogging platform allowing authors to write, publish, and manage content, including comments and tags.",
  },
];

const Projects = () => {
  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "2rem",
    color: "#007bff",
    marginBottom: "2rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    alignItems: "stretch", // Ensure all cards align vertically
  };

  const cardStyle = {
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  };

  const imageStyle = {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
  };

  const headingStyle = {
    fontSize: "1.25rem",
    color: "#21bf73",
    marginBottom: "0.5rem",
  };

  const descriptionStyle = {
    fontSize: "0.95rem",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>
        My <span style={{ color: "#21bf73" }}>Projects</span>
      </h2>
      <div style={gridStyle}>
        {projectLinks.map((proj, idx) => (
          <Link
            to={proj.to}
            key={idx}
            style={{
              ...cardStyle,
              textDecoration: "none",
              color: "#222",
              boxShadow: "0 2px 12px rgba(33,191,115,0.07)",
              transition:
                "transform 0.22s cubic-bezier(.4,2,.6,1), box-shadow 0.22s",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: 340,
              height: "100%", // Make all cards the same height
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-7px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 8px 32px rgba(33,191,115,0.13)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(33,191,115,0.07)";
            }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              style={{ ...imageStyle, marginBottom: "1.2rem" }}
            />
            <h3
              style={{
                ...headingStyle,
                color: "#21bf73",
                fontWeight: 700,
                fontSize: "1.18rem",
              }}
            >
              {proj.title}
            </h3>
            <p
              style={{
                ...descriptionStyle,
                color: "#444",
                fontSize: "1.01rem",
              }}
            >
              {proj.desc}
            </p>
            <span
              style={{
                marginTop: "auto",
                color: "#007bff",
                fontWeight: 600,
                fontSize: "1.05rem",
                letterSpacing: "0.5px",
                display: "inline-block",
                marginBottom: 2,
                transition: "color 0.2s",
              }}
            >
              View Details &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
