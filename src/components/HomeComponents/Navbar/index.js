import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".side-menu");
      if (
        menu &&
        !menu.contains(event.target) &&
        !event.target.closest(".menu-icon")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        WebShack
      </div>

      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="menu-list">
          <li>
            <a
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/portfolio");

                setIsMenuOpen(false);
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/contact/us");

                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
