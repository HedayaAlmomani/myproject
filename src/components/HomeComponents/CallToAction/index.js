import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section id="cta" className="cta">
      <h2>Ready to Start Your Project?</h2>
      <button
        className="cta-button"
        onClick={() => {
          navigate("/contact/us");
        }}
      >
        Contact Us
      </button>
    </section>
  );
};

export default CallToAction;
