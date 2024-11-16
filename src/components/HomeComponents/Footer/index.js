import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 WebShack. All rights reserved.</p>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="https://wa.me/962787002103" target="_blank" rel="noopener noreferrer">
          WhatsApp: 0787002103
        </a>
      </div>
    </footer>
  );
};

export default Footer;
