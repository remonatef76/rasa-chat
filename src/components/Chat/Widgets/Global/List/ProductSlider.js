import React from "react";
import Slider from "react-slick";
import Buttons from "./Buttons";

const settings = {
  className: "slider variable-width",
  dots: true,
  infinite: false,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};
const ProductSlider = ({
  content,
  payloadData,
  index,
  props,
  options,
  optionsClass,
  TEMPLATE_TYPE,
  MESSAGE_ID,
}) => {
  return (
    <div className="products-slider" key={index}>
      <Slider {...settings}>
        {payloadData.map((item) => {
          return (
            <div className="product-data-container" key={item.id}>
              <div className="product-data">
                <img src={item.image} />
                <div className="content">
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.description}</div>

                  <div className="product-buttons-container">
                    {Buttons({
                      content: [],
                      payloadData: item.buttons,
                      index,
                      props,
                      options,
                      optionsClass,
                      TEMPLATE_TYPE,
                      MESSAGE_ID,
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
