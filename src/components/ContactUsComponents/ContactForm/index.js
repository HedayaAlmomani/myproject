import React, { useState } from "react";
import emailjs from "emailjs-com";
import Input from "../../../CoreComponent/Input";
import { toast } from "react-toastify";
import TextArea from "../../../CoreComponent/TextArea";
import "./style.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_asihqs4",
        "template_eto7obl",
        formData,
        "OoiAxK-MlkAPLOdEQ"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Your message has been sent!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Clear the form
        },
        (error) => {
          console.error("Error sending email:", error);
          toast.error("Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form__form">
        <div className="form-group">
          <Input
            label="Name"
            required={false}
            inputValue={formData.name}
            setInputValue={(value) => handleChange("name", value)}
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div className="form-group">
          <Input
            label="Email"
            required={false}
            inputValue={formData.email}
            setInputValue={(value) => handleChange("email", value)}
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div className="form-group">
          <Input
            label="Subject"
            required={false}
            inputValue={formData.subject}
            setInputValue={(value) => handleChange("subject", value)}
            placeholder="Enter subject"
            type="text"
          />
        </div>
        <div className="form-group">
          <TextArea
            label="Message"
            required={false}
            value={formData.message}
            setValue={(value) => handleChange("message", value)}
            placeholder="Enter your message"
            type="text"
          />
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
