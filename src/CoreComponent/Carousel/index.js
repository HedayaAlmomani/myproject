import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

const Carousel = ({ images, sliderSettings }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    ...sliderSettings, 
  };

  return (
    <div className="carousel">
      <Slider {...defaultSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt || `Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
