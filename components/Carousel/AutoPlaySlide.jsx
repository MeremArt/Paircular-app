import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.css";
const AutoPlaySlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    speed: 3000,
    draggable: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="general_slides">
      <Slider {...settings}>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1702584330/paircular1_gpwgka.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1702584378/paircular2_bpvzjo.png"
            alt="features"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1702584530/paircular3_k5ufh8.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1702584792/paircular4_ejxnpo.png"
            alt="features"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlaySlide;
