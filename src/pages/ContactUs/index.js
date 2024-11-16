import React from "react";

import "./style.scss";
import ContactForm from "../../components/ContactUsComponents/ContactForm";
import Map from "../../components/ContactUsComponents/Map";
import SocialMediaLinks from "../../components/ContactUsComponents/SocialMediaLinks";
import ThankYouMessage from "../../components/ContactUsComponents/ThankYouMessage";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <ContactForm />
      {/* <Map /> */}
      {/* <SocialMediaLinks /> */}
      {/* <ThankYouMessage /> */}
    </div>
  );
};

export default ContactUs;
