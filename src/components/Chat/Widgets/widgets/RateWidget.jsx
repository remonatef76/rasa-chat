import React, { useState } from "react";
import StarRatings from "./../../star-rating";

const RateWidget = (props) => {
  const { data, submit, addGetLocalstorage } = props;
  const storageKey = `RASA_WIDGET_${data.attachment.payload.template_type}_${data.id}`;
  const defaultValue = JSON.parse(addGetLocalstorage(storageKey, null, "GET"));

  const [rate, setRate] = useState(defaultValue ? defaultValue : {});
  const elements = data.attachment.payload.elements;

  const confirm = () => {
    let payload = {
      value: rate,
      payload: data.attachment.payload.elements.payload,
    };
    addGetLocalstorage(storageKey, rate, "ADD");
    submit(
      `/${data.attachment.payload.template_type}${JSON.stringify(payload)}`,
      rate
    );
  };

  const updateRating = (rating) => {
    setRate(rating);
  };

  return (
    <div className="rasa-rate-widget rasa-green rasa-custom-chat-box">
      <div className="title">{elements.title}</div>
      <div className="rate">
        <StarRatings
          rating={rate}
          starRatedColor="#FFDF00"
          starHoverColor="#FFDF00"
          starEmptyColor="#FFF"
          changeRating={updateRating}
          numberOfStars={5}
        />
      </div>
      <div className="submit">
        <button className="submit-button" onClick={confirm}>
          {elements.submit.title}
        </button>
      </div>
    </div>
  );
};

export default RateWidget;
