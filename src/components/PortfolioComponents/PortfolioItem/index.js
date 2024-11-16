import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const PortfolioItem = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="portfolio-item">
      <img src={project.image} alt={project.title} />
      <div className="portfolio-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech">
              {tech}
            </span>
          ))}
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            navigate(project.link);
          }}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
