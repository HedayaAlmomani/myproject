import React from "react";
import "./style.scss";

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <h3>Follow Us</h3>
      <ul>
        <li><a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
