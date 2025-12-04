import React from "react";
import LazyLoad from "react-lazy-load";
import "./SliderCard.css";

function SliderCard({ src }) {
  return (
    <div className="slider__card">
      <LazyLoad offset={300} className="lazy-load-container">
        <div>
          <img src={src} alt={`на фото зображення нашої клініки Філада`} className="welcome__image" />
        </div>
      </LazyLoad>
    </div>
  );
}

export default SliderCard;

