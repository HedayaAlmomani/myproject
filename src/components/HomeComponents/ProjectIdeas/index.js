import React, { useEffect, useState, useCallback } from "react";
import "./style.scss";

// Component to render individual project idea card
const IdeaCard = ({ title, description, features }) => (
  <div className="ideaCard">
    <h3 className="ideaTitle">{title}</h3>
    <p className="ideaDescription">{description}</p>
    <ul className="ideaFeatures">
      {features.map((feature, idx) => (
        <li key={idx} className="ideaFeature">
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectIdeas = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll visibility logic
  const handleScroll = useCallback(() => {
    const section = document.querySelector(".projectIdeas");
    const rect = section?.getBoundingClientRect();
    if (rect && rect.top <= window.innerHeight * 0.8) {
      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const animationClass = isVisible ? "visible" : "hidden";

  const projectIdeas = [
    {
      title: "Small E-Commerce Website",
      description: "An online store for small businesses to sell products.",
      features: [
        "Product catalog",
        "Shopping cart",
        "User accounts",
        "Product reviews",
      ],
    },
    {
      title: "Event Management Website",
      description: "A platform to manage events like conferences, seminars, or workshops.",
      features: [
        "Event calendar",
        "Ticketing system",
        "Speaker details",
        "Event statistics",
      ],
    },
    {
      title: "Personal Website or Blog",
      description: "A personal website to share projects, ideas, and articles.",
      features: [
        "Blog posts",
        "Portfolio",
        "Contact form",
        "Newsletter subscription",
      ],
    },
    {
      title: "Corporate Website",
      description: "A corporate site to showcase the company's services and team.",
      features: [
        "Company mission",
        "Services pages",
        "Client testimonials",
        "Contact form",
      ],
    },
  ];

  return (
    <div className={`projectIdeas ${animationClass}`}>
      <h2 className="sectionTitle">Project Ideas</h2>
      <div className="ideasGrid-container">
      <div className="ideasGrid">
        {projectIdeas.map((idea, index) => (
          <IdeaCard key={index} {...idea} />
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default ProjectIdeas;
