import React, { useEffect, useState } from "react";
import "./style.scss";

const serviceList = [
  {
    icon: "🛠️",
    title: "Website Development",
    description:
      "Build responsive and dynamic websites tailored to your needs.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Design intuitive and user-friendly interfaces.",
  },
  {
    icon: "🚀",
    title: "SEO Optimization",
    description: "Improve your website's visibility on search engines.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity Solutions",
    description:
      "Protect your business with advanced security protocols and risk management strategies.",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("services");

    const handleScroll = () => {
      const rect = section?.getBoundingClientRect();
      if (rect?.top <= window.innerHeight * 0.8) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>

      <section
        id="services"
        className={`services ${isVisible ? "visible" : ""}`}
      >
        <div className="services-grid">
          {serviceList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <span className="service-icon">{icon}</span>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
  </div>
);

export default Services;
