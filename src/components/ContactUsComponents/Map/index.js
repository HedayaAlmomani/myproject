import React from "react";
import "./style.scss";

const Map = () => {
  return (
    <div className="map">
      <h3>Our Location</h3>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_CODE"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
