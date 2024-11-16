import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="logo">WebShack</div>
      <nav>
        <ul>
          <li>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/portfolio");
              }}
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                navigate("/contact/us");
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
