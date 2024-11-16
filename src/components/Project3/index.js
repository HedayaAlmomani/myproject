import React from "react";
import "./style.scss";
const Section = ({ imgSrc, description }) => (
  <div className="section">
    <img src={imgSrc} alt="project screenshot" />
    <p>{description}</p>
  </div>
);

const Project3 = () => {
  const sections = [
    {
      imgSrc: "/image/event3.png",
      description:
        "The RegisterType component allows users to choose their role (Speaker, Attendee, Sponsor/Exhibitor, Group, or Other) for event registration, directing them to the relevant registration page.",
    },
    {
      imgSrc: "/image/event1.jpeg",
      description:
        "The Dashboard page serves as the central hub for users, providing an overview of key data and actions related to their account or activities. It displays relevant information and allows easy navigation to different sections for managing tasks or viewing detailed reports.",
    },
    {
      imgSrc: "/image/event2.jpeg",
      description:
        "The page displays a list of accepted flights and allows users to add extra trip details by opening a form when clicking Add Trip. The flight data is fetched from an API and displayed in a table.",
    },

    {
      imgSrc: "/image/event4.png",
      description:
        "The Page allows users to enter their personal information to register for a flight. It includes fields for details like name, contact, and other required information to complete the flight registration process",
    },
    {
      imgSrc: "/image/event5.png",
      description: "Packages Page",
    },
    {
      imgSrc: "/image/event6.png",
      description: "Packages Page",
    },
  ];

  return (
    <div className="project2-container">
      {sections.map((section, index) => (
        <Section
          key={index}
          imgSrc={section.imgSrc}
          description={section.description}
        />
      ))}
    </div>
  );
};

export default Project3;
