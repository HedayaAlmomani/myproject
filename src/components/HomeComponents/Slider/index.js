import React from "react";
import "./style.scss";
import Carousel from "../../../CoreComponent/Carousel";

const Slider = () => {
  const images = [
    {
      src: "/image/teamCollaboration1.avif",
      alt: "Slide 1",
      caption: "Welcome to Our Company",
    },
    {
      src: "/image/businessTeam.jpeg",
      alt: "Slide 2",
      caption: "We Build Amazing Websites",
    },
    {
      src: "/image/technologyCompanyOffice.jpg",
      alt: "Slide 3",
      caption: "Your Success is Our Goal",
    },
    {
      src: "/image/webDevelopmentConcept.avif",
      alt: "Slide 4",
      caption: "Let's Create Together",
    },
  ];

  return (
    <div className="slider">
      <Carousel images={images} />
    </div>
  );
};

export default Slider;
