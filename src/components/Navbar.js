import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Check login on mount
  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    setIsAdmin(adminStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    navigate("/admin");
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#282c34",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 10,
  };

  const logoStyle = {
    fontWeight: "bold",
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "#61dafb",
  };

  const navLinksContainer = {
    display: menuOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "20px",
    backgroundColor: "#282c34",
    borderRadius: "8px",
    padding: "1rem",
  };

  const navLinksContainerDesktop = {
    display: "flex",
    gap: "1.5rem",
  };

  const navLink = {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    padding: "0.5rem 0",
    fontSize: "1.25rem",
    letterSpacing: "0.5px",
    borderRadius: "6px",
    zIndex: 1,
  };

  const hamburgerStyle = {
    display: "block",
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "white",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>
        <span style={{ color: "#61dafb" }}>Link</span>
        <span style={{ color: "white" }}>To</span>
        <span style={{ color: "#21bf73" }}>Digital</span>
      </Link>

      {/* Desktop Links */}
      <div className="nav-links-desktop" style={navLinksContainerDesktop}>
        <Link to="/" style={navLink}>Home</Link>
        <Link to="/about" style={navLink}>About</Link>
        <Link to="/services" style={navLink}>Services</Link>
        <Link to="/projects" style={navLink}>Projects</Link>
        <Link to="/contact" style={navLink}>Contact</Link>
        {isAdmin && <Link to="/admin/messages" style={navLink}>Admin Messages</Link>}
        {isAdmin && (
          <button onClick={handleLogout} style={{ ...navLink, background: "none", border: "none", cursor: "pointer" }}>
            Logout
          </button>
        )}
      </div>

      {/* Hamburger icon */}
      <div className="hamburger-menu" style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>

      {/* Mobile Links */}
      <div className="nav-links-mobile" style={navLinksContainer}>
        <Link to="/" style={navLink} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" style={navLink} onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/services" style={navLink} onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/projects" style={navLink} onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/contact" style={navLink} onClick={() => setMenuOpen(false)}>Contact</Link>
        {isAdmin && <Link to="/admin/messages" style={navLink} onClick={() => setMenuOpen(false)}>Admin Messages</Link>}
        {isAdmin && (
          <button onClick={() => { handleLogout(); setMenuOpen(false); }} style={{ ...navLink, background: "none", border: "none", cursor: "pointer" }}>
            Logout
          </button>
        )}
      </div>

      {/* CSS */}
      <style>{`
        @media(min-width: 768px) {
          .nav-links-desktop {
            display: flex !important;
          }
          .hamburger-menu {
            display: none !important;
          }
          .nav-links-mobile {
            display: none !important;
          }
        }
        .nav-links-desktop a, .nav-links-mobile a {
          position: relative;
          transition: color 0.2s, background 0.2s, box-shadow 0.2s;
        }
        .nav-links-desktop a::after, .nav-links-mobile a::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) scaleX(0);
          width: 80%;
          height: 3px;
          background: linear-gradient(90deg, #21bf73 0%, #007bff 100%);
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(.4,2,.6,1);
        }
        .nav-links-desktop a:hover, .nav-links-mobile a:hover {
          color: #21bf73 !important;
          background: rgba(33,191,115,0.08);
          box-shadow: 0 2px 12px rgba(33,191,115,0.08);
        }
        .nav-links-desktop a:hover::after, .nav-links-mobile a:hover::after {
          transform: translateX(-50%) scaleX(1);
        }
        .nav-links-desktop a.active, .nav-links-mobile a.active {
          color: #007bff !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
