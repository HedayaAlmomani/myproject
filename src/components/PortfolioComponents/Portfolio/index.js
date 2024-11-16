import React, { useState } from "react";
import "./style.scss";
import CategoryFilter from "../CategoryFilter";
import PortfolioItem from "../PortfolioItem";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 2,
      title: "E-commerce Store",
      description: "A fully functional online store with payment integration.",
      category: "E-commerce",
      image:
        "https://res.cloudinary.com/hudhud/image/upload/v1656877394/Screenshot_18_svin2k.png",
      link: "/project2",
      techStack: ["Node.js", "MongoDB", "React"],
    },
    {
      id: 3,
      title: "Personal Blog",
      description: "A modern blog website with a content management system.",
      category: "Personal Blog",
      image:
        "https://res.cloudinary.com/hudhud/image/upload/v1657449121/%D8%AC%D8%AF%D9%8A%D8%AF_kxhwdu.png",
      link: "/project1",
      techStack: ["Node.js", "MySQL", "React"],
    },
    {
      id: 1,
      title: "Event Management Website",
      description: "A platform for managing events, attendees, and schedules.",
      category: "Event Management",
      image: "/image/event1.jpeg",
      link: "/project3",
      techStack: ["PHP", "MySQL", "React"],
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="portfolio">
      {/* <h2>Our Portfolio</h2>
      <CategoryFilter
        categories={["All", "Event Management", "E-commerce", "Personal Blog"]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      /> */}
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <PortfolioItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
