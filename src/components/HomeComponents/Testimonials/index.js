import React from "react";
import "./style.scss";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", feedback: "Great service! The team was professional and delivered on time." },
    { name: "Jane Smith", feedback: "They exceeded my expectations. Highly recommend them!" },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
