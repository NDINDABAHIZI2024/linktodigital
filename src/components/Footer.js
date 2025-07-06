import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaPinterestP,
  FaTimes,
  FaArrowUp,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Footer = ({ darkMode, setDarkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerStyle = {
    backgroundColor: "#282c34",
    color: "white",
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "2rem",
  };

  const columnStyle = {
    flex: "1",
    minWidth: "220px",
  };

  const logoStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    lineHeight: "1.2",
    opacity: 0.9,
  };

  const iconStyle = {
    backgroundColor: "#21bf73",
    color: "white",
    borderRadius: "50%",
    padding: "0.5rem",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "0.3s",
  };

  const backToTopStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1000,
  };

  const buttonBoxStyle = {
    ...iconStyle,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <footer style={footerStyle}>
        <div style={containerStyle}>
          <div style={columnStyle}>
            <div style={logoStyle}>
              <div style={{ color: "#61dafb" }}>Link</div>
              <div style={{ color: "white" }}>To</div>
              <div style={{ color: "#21bf73" }}>Digital</div>
            </div>
          </div>

          <div style={columnStyle}>
            <div style={{ fontWeight: "600", marginBottom: "1rem", fontSize: "1.1rem" }}>Support</div>
            <a href="#" style={{ ...iconStyle, background: "none", padding: 0, color: "#61dafb" }}>Website Development</a>
            <a href="#" style={{ ...iconStyle, background: "none", padding: 0, color: "#61dafb" }}>Maintenance</a>
            <a href="#" style={{ ...iconStyle, background: "none", padding: 0, color: "#61dafb" }}>IT Support & Consulting</a>
          </div>

          <div style={columnStyle}>
            <div style={{ fontWeight: "600", marginBottom: "1rem", fontSize: "1.1rem" }}>Contact Us</div>
            <div style={{ color: "#61dafb", marginBottom: "0.5rem" }}>Email: linktodigital@gmail.com</div>
            <div style={{ color: "#61dafb" }}>Tel: +250784630147</div>
          </div>

          <div style={columnStyle}>
            <div style={{ fontWeight: "600", marginBottom: "1rem", fontSize: "1.1rem" }}>Follow Us</div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <FaTimes style={iconStyle} />
              <FaGoogle style={iconStyle} />
              <FaPinterestP style={iconStyle} />
              <FaFacebookF style={iconStyle} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center", color: "#aaa", fontSize: "0.9rem" }}>
          © 2025 - Powered by <span style={{ color: "#61dafb", fontWeight: "bold" }}>LinkToDigital</span>
        </div>
      </footer>

      {/* Buttons in Bottom Right */}
      <div style={backToTopStyle}>
        <div onClick={scrollToTop} style={buttonBoxStyle} title="Back to Top">
          <FaArrowUp />
        </div>
        <div
          onClick={() => setDarkMode(!darkMode)}
          style={buttonBoxStyle}
          title="Toggle Light/Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>
    </>
  );
};

export default Footer;
