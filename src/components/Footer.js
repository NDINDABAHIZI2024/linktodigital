import React from "react";

const Footer = () => (
  <footer className="footer">
    <div>
      &copy; {new Date().getFullYear()} LinkToDigital. All rights reserved. |
      <a href="/about"> About</a> |
      <a href="/projects"> Projects</a> |
      <a href="/contact"> Contact</a>
    </div>
    <div style={{marginTop: '0.5rem', fontSize: '0.95rem', opacity: 0.7}}>
      NDINDABAHIZI Claude <span style={{color: '#21bf73', fontWeight: 'bold'}}>passion</span> &amp; <span style={{color: '#007bff', fontWeight: 'bold'}}>Ruhorimbere Dieuddonne</span>.
    </div>
  </footer>
);

export default Footer;
