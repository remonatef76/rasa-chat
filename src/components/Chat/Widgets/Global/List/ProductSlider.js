import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const settings = {
  className: "slider variable-width",
  dots: true,
  infinite: false,
  centerMode: false,
  slidesToShow: 1,
  // slidesToScroll: 1,
  variableWidth: true,
};
const ProductSlider = ({
  props,
  index,
  payloadData,
  TEMPLATE_TYPE,
  MESSAGE_ID,
}) => {
  return (
    <div className="products-slider" key={index}>
      <div>
        <h2>Variable width</h2>
        <Slider {...settings}>
          <div style={{ width: 100 }}>
            <p>100</p>
          </div>
          <div style={{ width: 200 }}>
            <p>200</p>
          </div>
          <div style={{ width: 75 }}>
            <p>75</p>
          </div>
          <div style={{ width: 300 }}>
            <p>300</p>
          </div>
          <div style={{ width: 225 }}>
            <p>225</p>
          </div>
          <div style={{ width: 175 }}>
            <p>175</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
